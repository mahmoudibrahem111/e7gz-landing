// E7GZ landing — court suggestion / listing forms
(function () {
  var API = "https://api.e7gz.app/suggestions";
  var PHONE_RE = /^(\+?20|0)?1[0125][0-9]{8}$/;
  var SPORTS = ["FOOTBALL", "PADEL", "TENNIS", "BASKETBALL"];

  function isAr() {
    return document.documentElement.lang === "ar";
  }

  function msg(en, ar) {
    return isAr() ? ar : en;
  }

  function setErr(field, text) {
    if (!field) return;
    field.classList.add("invalid");
    var e = field.querySelector(".field-err");
    if (e && text) e.textContent = text;
  }

  function clearErrs(form) {
    form.querySelectorAll(".field.invalid, .chip-group.invalid").forEach(function (el) {
      el.classList.remove("invalid");
    });
  }

  function val(form, name) {
    var el = form.querySelector('[name="' + name + '"]');
    return el ? el.value.trim() : "";
  }

  function checkedVal(form, name) {
    var el = form.querySelector('[name="' + name + '"]:checked');
    return el ? el.value : "";
  }

  document.querySelectorAll("form[data-form]").forEach(function (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      clearErrs(form);
      var banner = form.querySelector(".form-banner");
      if (banner) banner.classList.remove("show");

      var ok = true;
      var reqMsg = msg("This field is required", "الحقل ده مطلوب");

      form.querySelectorAll("[required]").forEach(function (el) {
        if (!el.value.trim()) {
          setErr(el.closest(".field"), reqMsg);
          ok = false;
        }
      });

      var phone = val(form, "phone").replace(/[\s\-()]/g, "");
      if (phone && !PHONE_RE.test(phone)) {
        setErr(
          form.querySelector('[name="phone"]').closest(".field"),
          msg("Enter a valid Egyptian number (01X XXXX XXXX)", "اكتب رقم مصري صحيح (01X XXXX XXXX)")
        );
        ok = false;
      }

      var maps = val(form, "mapsLink");
      if (maps && !/^https?:\/\/\S+$/i.test(maps)) {
        setErr(
          form.querySelector('[name="mapsLink"]').closest(".field"),
          msg("Enter a valid Google Maps link (https://…)", "رابط جوجل ماب صحيح (https://…)")
        );
        ok = false;
      }

      var group = form.querySelector("[data-req-group]");
      if (group) {
        var checked = group.querySelectorAll("input:checked").length;
        if (!checked) {
          group.classList.add("invalid");
          var hint = group.parentElement.querySelector(".chip-group-hint");
          if (hint) hint.textContent = msg("Pick at least one sport", "اختر رياضة واحدة على الأقل");
          ok = false;
        }
      }

      if (!ok) return;

      var btn = form.querySelector('button[type="submit"]');
      var btnText = btn ? btn.innerHTML : "";
      if (btn) {
        btn.classList.add("loading");
        btn.innerHTML = msg("Sending&hellip;", "جاري الإرسال&hellip;");
      }

      var sports = [];
      form.querySelectorAll('[data-sport]:checked').forEach(function (c) {
        sports.push(c.value);
      });

      var payload = {
        type: form.dataset.type,
        name: val(form, "name"),
        phone: phone,
        email: val(form, "email"),
        courtName: val(form, "courtName"),
        city: val(form, "city"),
        landmark: val(form, "landmark"),
        sports: sports,
        otherSports: val(form, "otherSports"),
        fields: checkedVal(form, "fields"),
        hours: val(form, "hours"),
        price: val(form, "price"),
        notes: val(form, "notes"),
        mapsLink: val(form, "mapsLink"),
        website: val(form, "website")
      };

      fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (r) {
          if (!r.ok) throw new Error("http " + r.status);
          return r.json().catch(function () { return {}; });
        })
        .then(function (data) {
          if (data && data.success === false) throw new Error(data.message || "failed");
          var wrap = form.closest(".form-main") || form.parentElement;
          form.style.display = "none";
          var thanks = wrap.querySelector(".thanks-box") || document.querySelector(".thanks-box");
          if (thanks) thanks.classList.add("show");
          window.scrollTo({ top: thanks ? thanks.getBoundingClientRect().top + window.scrollY - 120 : 0, behavior: "smooth" });
        })
        .catch(function () {
          if (btn) {
            btn.classList.remove("loading");
            btn.innerHTML = btnText;
          }
          if (banner) {
            banner.textContent = msg(
              "Something went wrong — please check your connection and try again.",
              "حصلت مشكلة — جرّب تاني بعد شوية."
            );
            banner.classList.add("show");
          }
        });
    });
  });
})();
