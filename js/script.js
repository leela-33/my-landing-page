// ============== MOBILE MENU TOGGLE ==============
const menuBtn = document.querySelector(".menu-btn");
const navDesktop = document.querySelector(".nav--desktop");

// Create or select mobile nav
let navMobile = document.querySelector(".nav--mobile");

if (!navMobile && navDesktop) {
  navMobile = navDesktop.cloneNode(true);
  navMobile.classList.remove("nav--desktop");
  navMobile.classList.add("nav--mobile");
  navDesktop.parentElement.insertAdjacentElement("afterend", navMobile);
}

if (menuBtn && navMobile) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navMobile.classList.toggle("show");
  });
}

// Close mobile nav when clicking a link
if (navMobile) {
  navMobile.addEventListener("click", (event) => {
    const link = event.target.closest("a.nav__link");
    if (!link) return;

    navMobile.classList.remove("show");
    menuBtn.classList.remove("open");
  });
}

// ============== SMOOTH SCROLL FOR ANCHORS ==============
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
