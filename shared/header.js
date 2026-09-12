(function () {
  const root = "/Hardy-Orchid-Society/";
  const current = window.location.pathname;
  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#39;");
  const getSafeInternalHref = (value) => {
    if (!value) return "";
    try {
      const url = new URL(value, window.location.origin + root);
      if (url.origin !== window.location.origin || !url.pathname.startsWith(root)) {
        return "";
      }
      return escapeHtml(`${url.pathname}${url.search}${url.hash}`);
    } catch {
      return "";
    }
  };

  const navItems = [
    { label: "About", href: "about/index.html", matches: ["about/"] },
    { label: "Membership", href: "membership/index.html", matches: ["membership/", "discussionforum/"] },
    { label: "Events", href: "events/index.html", matches: ["events/", "fieldtrips/"] },
    { label: "Conservation", href: "conservation/index.html", matches: ["conservation/"] },
    { label: "Growing Orchids", href: "cultivation/index.html", matches: ["cultivation/"] }
  ];

  const isActive = (item) => current === root + item.href || item.matches.some((prefix) => current.startsWith(root + prefix));

  const headerHtml = `
    <header class="site-header">
      <nav class="navbar" aria-label="Primary">
        <a class="site-brand" href="${root}" aria-label="Hardy Orchid Society home">
          <img src="${root}assets/branding/hardy-orchid-logo.png" alt="Hardy Orchid Society logo" class="site-logo">
          <span class="site-title">Hardy Orchid Society</span>
        </a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="primary-menu" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <ul id="primary-menu" class="nav-links">
          ${navItems
            .map(
              (item) => `<li><a href="${root + item.href}" class="${isActive(item) ? "active" : ""}">${item.label}</a></li>`
            )
            .join("")}
        </ul>
      </nav>
    </header>
  `;

  const mount = document.getElementById("site-header");
  if (mount) {
    mount.innerHTML = headerHtml;
  }

  const breadcrumbMount = document.getElementById("site-breadcrumbs");
  if (breadcrumbMount) {
    const pageTitle = breadcrumbMount.dataset.pageTitle ? escapeHtml(breadcrumbMount.dataset.pageTitle) : "";
    const parentTitle = breadcrumbMount.dataset.parentTitle ? escapeHtml(breadcrumbMount.dataset.parentTitle) : "";
    const parentPath = breadcrumbMount.dataset.parentPath;
    const safeParentHref = getSafeInternalHref(parentPath);
    const parts = [`<li><a href="${root}index.html">Home</a></li>`];

    if (parentTitle && safeParentHref) {
      parts.push(`<li><a href="${safeParentHref}">${parentTitle}</a></li>`);
    }

    if (pageTitle) {
      parts.push(`<li><span aria-current="page">${pageTitle}</span></li>`);
    }

    breadcrumbMount.innerHTML = `<nav class="breadcrumb" aria-label="Breadcrumb"><ol>${parts.join("")}</ol></nav>`;
  }

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
