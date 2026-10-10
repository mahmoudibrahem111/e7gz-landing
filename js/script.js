// Mobile nav
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", open);
});

navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  })
);

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-link");

const setActive = () => {
  const scrollPos = window.scrollY + 120;
  let current = "home";
  sections.forEach((section) => {
    if (section.offsetTop <= scrollPos) current = section.id;
  });
  links.forEach((link) =>
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`)
  );
};

window.addEventListener("scroll", setActive, { passive: true });
setActive();

// Segmented tabs (Players / Owners)
function activateTab(group, targetId) {
  const tabs = document.querySelector(`.seg-tabs[data-group="${group}"]`);
  if (!tabs) return;
  tabs.querySelectorAll(".seg-tab").forEach((b) => b.classList.toggle("active", b.dataset.target === targetId));
  document.querySelectorAll(`.tab-panel[data-group="${group}"]`).forEach((panel) => {
    const show = panel.id === targetId;
    panel.classList.toggle("active", show);
    if (show) panel.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
  });
}

document.querySelectorAll(".seg-tabs").forEach((tabs) => {
  const group = tabs.dataset.group;
  tabs.querySelectorAll(".seg-tab").forEach((btn) => {
    btn.addEventListener("click", () => activateTab(group, btn.dataset.target));
  });
});

// Deep link: #owners opens the owner tab in all groups
if (window.location.hash === "#owners") {
  activateTab("features", "feat-owners");
  activateTab("shots", "shots-owners");
  activateTab("how", "how-owners");
  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
}

// Reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Download countdown (APK links only — web app buttons open instantly)
document.querySelectorAll(".dl-item .btn-primary, .dl-item .btn-dark").forEach((btn) => {
  const url = btn.getAttribute("href");
  if (!url || url === "#" || !url.includes("download/apk")) return;
  const note = btn.closest(".dl-item")?.querySelector(".dl-note");
  let timer = null;

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (btn.classList.contains("dl-counting")) return;

    // capture current (possibly translated) content at click time
    const originalHTML = btn.innerHTML;
    const originalNote = note?.textContent || "";

    btn.classList.add("dl-counting");
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.5";
    let remaining = 3;

    const isAr = document.documentElement.lang === "ar";
    const noteCount = (n) =>
      isAr ? `سيبدأ التنزيل خلال ${n} ث` : `Download will start in ${n} sec`;
    const noteRetry = isAr ? "لم يبدأ التنزيل؟ اضغط لإعادة المحاولة" : "Download didn't start? Tap to retry";

    if (note) note.textContent = noteCount(remaining);

    timer = setInterval(() => {
      remaining--;
      if (remaining > 0) {
        if (note) note.textContent = noteCount(remaining);
      } else {
        clearInterval(timer);
        window.location.href = url;

        // Fallback: if download didn't trigger in 2s, show retry
        setTimeout(() => {
          btn.classList.remove("dl-counting");
          btn.style.pointerEvents = "";
          btn.style.opacity = "";
          btn.innerHTML = originalHTML;
          if (note) note.textContent = noteRetry;
        }, 2000);
      }
    }, 1000);
  });
});
