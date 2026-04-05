function initMenu() {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  const spans = btn.querySelectorAll("span");

  btn.addEventListener("click", () => {
  menu.classList.toggle("opacity-0");
  menu.classList.toggle("pointer-events-none");
  menu.classList.toggle("translate-y-6");

  spans[0].classList.toggle("translate-y-[7px]");
  spans[0].classList.toggle("rotate-45");
  spans[1].classList.toggle("opacity-0");
  spans[2].classList.toggle("-translate-y-[7px]");
  spans[2].classList.toggle("-rotate-45");

  const expanded = btn.getAttribute("aria-expanded") === "true";

  btn.setAttribute("aria-expanded", !expanded);
  btn.setAttribute("aria-label", expanded ? "메뉴 열기" : "메뉴 닫기");

  });
}

initMenu();