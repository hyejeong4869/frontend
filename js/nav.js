function renderNav() {
  const links = [
    { name: "지도", href: "/map" },
    { name: "시간표", href: "/timetable" },
    { name: "게시판", href: "/board" },
    { name: "중고장터", href: "/marketplace" }
  ];

  const nav = document.getElementById("navLinks");
  const mobileNav = document.getElementById("mobileNavLinks");

  const currentPath = window.location.pathname;

  links.forEach(link => {
    const isActive =
      currentPath === link.href ||
      currentPath.startsWith(link.href + "/");

    // PC
    const a1 = document.createElement("a");
    a1.href = link.href;
    a1.textContent = link.name;
    a1.className =
      "px-3 py-2 text-sm font-medium rounded-lg " +
      (isActive
        ? "bg-neutral-900 text-white"
        : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100");

    nav.appendChild(a1);

    // Mobile
    const a2 = document.createElement("a");
    a2.href = link.href;
    a2.textContent = link.name;
    a2.className =
      "px-4 py-3 text-lg font-semibold rounded-xl " +
      (isActive
        ? "bg-neutral-900 text-white"
        : "text-neutral-800 hover:bg-neutral-100");

    mobileNav.appendChild(a2);
  });
}

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

renderNav();
initMenu();