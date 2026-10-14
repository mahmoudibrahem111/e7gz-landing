// E7GZ landing — set-password page: claim a new account or reset a password.
// Reuses the same public OTP endpoints the app's forgot-password flow uses.
(function () {
  var API = "https://api.e7gz.app/auth";
  var MIN_LEN = 8;

  var params = new URLSearchParams(window.location.search);
  var email = (params.get("email") || "").trim();

  var form = document.getElementById("sp-form");
  if (!form) return;

  var banner = document.getElementById("sp-banner");
  var codeWrap = document.getElementById("sp-code-wrap");
  var passWrap = document.getElementById("sp-pass-wrap");
  var submit = document.getElementById("sp-submit");
  var resendBtn = document.getElementById("sp-resend");
  var resendBox = document.getElementById("sp-resend-box");
  var successBox = document.getElementById("sp-success");
  var codeInput = document.getElementById("sp-code");
  var passInput = document.getElementById("sp-password");
  var confirmInput = document.getElementById("sp-confirm");

  // "code" = ask for the OTP; "pass" = verify it and set the password.
  var stage = "code";

  function isAr() {
    return document.documentElement.lang === "ar";
  }

  function msg(en, ar) {
    return isAr() ? ar : en;
  }

  function buttonLabel() {
    return stage === "code"
      ? msg("Send code", "إرسال الكود")
      : msg("Set password", "تعيين كلمة المرور");
  }

  function showBanner(text, kind) {
    if (!banner) return;
    banner.textContent = text;
    banner.className = "form-banner show" + (kind === "ok" ? " ok" : "");
  }

  function hideBanner() {
    if (banner) banner.className = "form-banner";
  }

  function setErr(field, text) {
    if (!field) return;
    field.classList.add("invalid");
    var e = field.querySelector(".field-err");
    if (e && text) e.textContent = text;
  }

  function clearErrs() {
    form.querySelectorAll(".field.invalid").forEach(function (el) {
      el.classList.remove("invalid");
    });
  }

  function loading(on) {
    if (!submit) return;
    submit.disabled = !!on;
    submit.classList.toggle("loading", !!on);
    submit.innerHTML = on ? msg("Working&hellip;", "جاري التنفيذ&hellip;") : buttonLabel();
  }

  function showPass() {
    stage = "pass";
    if (codeWrap) codeWrap.style.display = "none";
    if (passWrap) passWrap.style.display = "";
    if (resendBox) resendBox.style.display = "";
    if (submit) submit.innerHTML = buttonLabel();
  }

  function api(name, body) {
    return fetch(API + "/" + name, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(function (r) {
      return r.json().then(function (data) {
        return { ok: r.ok, data: data };
      });
    });
  }

  // Step 1 — email the code (same endpoint as the app's "Send code").
  function requestCode() {
    return api("forgotPassword", { email: email }).then(function (res) {
      loading(false);
      if (!res.ok) {
        showBanner(msg(
          "Couldn't send the code. Check the email and try again.",
          "مقدرناش نبعت الكود. تأكد من الإيميل وجرّب تاني."
        ));
        return false;
      }
      showPass();
      showBanner(msg(
        "We sent a 6-digit code to " + email + ". Enter it below.",
        "ابعتنا كود من 6 أرقام على " + email + ". اكتبه بالأسفل."
      ), "ok");
      if (codeInput) codeInput.focus();
      return true;
    }).catch(function () {
      loading(false);
      showBanner(msg(
        "Something went wrong — please check your connection and try again.",
        "حصلت مشكلة — جرّب تاني بعد شوية."
      ));
      return false;
    });
  }

  // Step 2 — verify the code, then set the password.
  function setPassword() {
    var code = (codeInput ? codeInput.value : "").replace(/\s/g, "");
    var pass = passInput ? passInput.value : "";
    var confirm = confirmInput ? confirmInput.value : "";

    clearErrs();
    var ok = true;

    if (code.length !== 6) {
      setErr(codeInput && codeInput.closest(".field"), msg("Enter the 6-digit code", "اكتب الكود المكوّن من 6 أرقام"));
      ok = false;
    }
    if (pass.length < MIN_LEN) {
      setErr(passInput && passInput.closest(".field"), msg("Use at least 8 characters", "اكتب 8 حروف على الأقل"));
      ok = false;
    }
    if (pass !== confirm) {
      setErr(confirmInput && confirmInput.closest(".field"), msg("Passwords don't match", "كلمتا المرور غير متطابقتين"));
      ok = false;
    }
    if (!ok) return;

    api("verifyOtp", { email: email, otp: code })
      .then(function (res) {
        if (!res.ok) {
          loading(false);
          showBanner(msg("That code isn't valid or has expired.", "الكود مش صحيح أو انتهت صلاحيته."));
          return null;
        }
        return api("resetPassword", {
          email: email,
          password: pass,
          repeatedPassword: confirm
        }).then(function (res2) {
          loading(false);
          if (!res2.ok) {
            showBanner(msg("Couldn't set the password — try again.", "مقدرناش نعدّل كلمة المرور — جرّب تاني."));
            return;
          }
          form.style.display = "none";
          if (resendBox) resendBox.style.display = "none";
          if (successBox) successBox.classList.add("show");
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      })
      .catch(function () {
        loading(false);
        showBanner(msg(
          "Something went wrong — please check your connection and try again.",
          "حصلت مشكلة — جرّب تاني بعد شوية."
        ));
      });
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    hideBanner();
    clearErrs();

    if (!email) {
      showBanner(msg(
        "This link is missing the email. Ask for a new link.",
        "الرابط ناقصه الإيميل. اطلب رابط جديد."
      ));
      return;
    }

    loading(true);
    if (stage === "code") requestCode();
    else setPassword();
  });

  if (resendBtn) {
    resendBtn.addEventListener("click", function () {
      hideBanner();
      loading(true);
      requestCode();
    });
  }

  if (email) {
    if (submit) submit.innerHTML = buttonLabel();
    showBanner(msg(
      "Tap \"Send code\" and we'll email a 6-digit code to " + email + ".",
      "اضغط «إرسال الكود» وهنبعتلك كود من 6 أرقام على " + email + "."
    ), "ok");
  } else {
    showBanner(msg(
      "This link is missing the email. Ask for a new one.",
      "الرابط ناقصه الإيميل. اطلب رابط جديد."
    ));
    if (submit) submit.disabled = true;
  }
})();
