const SITE_CONFIG = {
  // Googleフォーム / Tally / Formspree のURLに置き換え
  contactFormUrl: "https://forms.gle/fhvTxKGk5k6yuoyJ9"
};

(function init() {
  const links = document.querySelectorAll("#contactLink");
  links.forEach((a) => {
    a.href = SITE_CONFIG.contactFormUrl;
  });
})();

/* =========================================================
   スクロールでヘッダを縮める
   ========================================================= */
(function headerScrollEffect(){
  const header = document.querySelector(".topbar");
  if(!header) return;

  const THRESHOLD = 60; // 何pxスクロールしたら縮めるか

  window.addEventListener("scroll", () => {
    if(window.scrollY > THRESHOLD){
      header.classList.add("is-compact");
    }else{
      header.classList.remove("is-compact");
    }
  });
})();
