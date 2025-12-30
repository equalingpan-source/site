const SITE_CONFIG = {
  // Googleフォーム / Tally / Formspree のURLに置き換え
  contactFormUrl: "https://example.com"
};

(function init() {
  const links = document.querySelectorAll("#contactLink");
  links.forEach((a) => {
    a.href = SITE_CONFIG.contactFormUrl;
  });
})();
