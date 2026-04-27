const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

year.textContent = new Date().getFullYear();

const closeMenu = () => {
  menuToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
};

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  },
  { passive: true },
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const data = new FormData(form);
  const subject = `Poptávka CVENG - ${data.get("location") || "nový projekt"}`;
  const body = [
    `Jméno: ${data.get("name")}`,
    `Kontakt: ${data.get("contact")}`,
    `Lokalita: ${data.get("location") || "-"}`,
    "",
    "Popis:",
    data.get("message") || "-",
  ].join("\n");

  const href = `mailto:hello@cveng.cz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
  formNote.textContent = "E-mail je připravený v poštovní aplikaci.";
});
