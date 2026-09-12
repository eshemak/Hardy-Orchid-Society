(function () {
  const mount = document.getElementById("site-footer");
  if (!mount) return;

  const root = "/Hardy-Orchid-Society/";
  mount.innerHTML = `
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>Main sections</h3>
          <ul>
            <li><a href="${root}about/index.html">About the Society</a></li>
            <li><a href="${root}membership/index.html">Membership</a></li>
            <li><a href="${root}events/index.html">Events &amp; Meetings</a></li>
            <li><a href="${root}conservation/index.html">Conservation &amp; Research</a></li>
            <li><a href="${root}cultivation/index.html">Growing Hardy Orchids</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Useful links</h3>
          <ul>
            <li><a href="${root}about/committee.html">Committee</a></li>
            <li><a href="${root}about/constitution.html">Constitution</a></li>
            <li><a href="${root}about/contact.html">Contact</a></li>
            <li><a href="${root}sitemap.html">Sitemap</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Policies</h3>
          <ul>
            <li><a href="${root}privacy.html">Privacy</a></li>
            <li><a href="${root}terms.html">Terms &amp; Conditions</a></li>
            <li><a href="${root}cookies.html">Cookies</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Get involved</h3>
          <p>Connect with the Society through membership, meetings, conservation support, and practical growing advice.</p>
          <a class="button-link button-link--accent" href="${root}membership/join.html">Join or Renew</a>
        </div>
      </div>
      <div class="footer-bottom">© Hardy Orchid Society 2026. Dedicated to the study, conservation, and cultivation of hardy orchids.</div>
    </footer>
  `;
})();
