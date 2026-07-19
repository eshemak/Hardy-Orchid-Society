(function () {
  const root = "/Hardy-Orchid-Society/";
  const current = window.location.pathname;

  const isActive = (path) =>
    current === root + path ||
    (path === "index.html" && (current === root || current === root + "index.html"));

  const headerHtml = `
    <header class="site-header">
      <nav class="navbar" aria-label="Primary">
        <a class="site-brand" href="${root}">
          <img src="${root}assets/branding/hardy-orchid-logo.png" alt="Hardy Orchid Society logo" class="site-logo">
          <span class="site-title">Hardy Orchid Society</span>
        </a>

        <button class="nav-toggle" aria-expanded="false" aria-controls="primary-menu" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>

        <ul id="primary-menu" class="nav-links">
          <li><a href="${root}index.html" class="${isActive("index.html") ? "active" : ""}">Home</a></li>
          <li><a href="${root}cultivation/cultivation.html" class="${isActive("cultivation/cultivation.html") ? "active" : ""}">Cultivation</a></li>
          <li><a href="${root}fieldtrips/fieldtrips.html" class="${isActive("fieldtrips/fieldtrips.html") ? "active" : ""}">Field Trips</a></li>
          <li><a href="${root}membership/membership.html" class="${isActive("membership/membership.html") ? "active" : ""}">Membership</a></li>
          <li><a href="${root}conservation/conservation.html" class="${isActive("conservation/conservation.html") ? "active" : ""}">Conservation</a></li>
          <li><a href="${root}discussionforum/discussionforum.html" class="${isActive("discussionforum/discussionforum.html") ? "active" : ""}">Discussion Forum</a></li>
        </ul>
      </nav>
    </header>
  `;

  const mount = document.getElementById("site-header");
  if (mount) mount.innerHTML = headerHtml;

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("primary-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      menu.classList.toggle("open");
    });
  }
})();
