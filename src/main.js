const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const year = document.querySelector("[data-year]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

year.textContent = new Date().getFullYear();

const closeMenu = () => {
  navToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
};

navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("is-open", !open);
});

navLinks.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  },
  { passive: true },
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const data = new FormData(form);
  const subject = `Poptávka VOLTA — ${data.get("name") || "nový projekt"}`;
  const body = [
    `Jméno: ${data.get("name")}`,
    `Kontakt: ${data.get("contact")}`,
    "",
    "Popis:",
    data.get("message") || "-",
  ].join("\n");

  window.location.href = `mailto:ahoj@volta.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formNote.textContent = "E-mail je připravený v poštovní aplikaci.";
});
