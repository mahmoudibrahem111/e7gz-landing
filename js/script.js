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

// Deep link: #owners opens the owner tab in both groups
if (window.location.hash === "#owners") {
  activateTab("features", "feat-owners");
  activateTab("shots", "shots-owners");
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

// PWA install prompt
let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

// Web App install buttons
const webAppBtns = document.querySelectorAll(".dl-item .btn-dark");
webAppBtns.forEach((btn) => {
  btn.removeAttribute("href");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choice) => {
        deferredPrompt = null;
      });
    } else {
      // Fallback: show manual instructions
      const note = btn.closest(".dl-item")?.querySelector(".dl-note");
      if (note) {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        note.textContent = isIOS
          ? "Tap the Share button, then 'Add to Home Screen'"
          : "Tap the browser menu (⋮), then 'Install app' or 'Add to Home Screen'";
      }
    }
  });
});

// Download countdown (APK buttons only)
document.querySelectorAll(".dl-item .btn-primary").forEach((btn) => {
  if (!btn.getAttribute("href") || btn.getAttribute("href") === "#") return;

  const url = btn.getAttribute("href");
  const note = btn.closest(".dl-item")?.querySelector(".dl-note");
  const originalHTML = btn.innerHTML;
  const originalNote = note?.textContent || "";
  let timer = null;

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (btn.classList.contains("dl-counting")) return;

    btn.classList.add("dl-counting");
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.5";
    let remaining = 3;

    if (note) note.textContent = `Download will start in ${remaining} sec`;

    timer = setInterval(() => {
      remaining--;
      if (remaining > 0) {
        if (note) note.textContent = `Download will start in ${remaining} sec`;
      } else {
        clearInterval(timer);
        window.location.href = url;

        // Fallback: if download didn't trigger in 2s, show retry
        setTimeout(() => {
          btn.classList.remove("dl-counting");
          btn.style.pointerEvents = "";
          btn.style.opacity = "";
          btn.innerHTML = originalHTML;
          if (note) note.textContent = "Download didn't start? Tap to retry";
        }, 2000);
      }
    }, 1000);
  });
});
