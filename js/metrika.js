// Счётчик блога. trackLinks учитывает переходы по внешним ссылкам.
(function () {
  "use strict";

  const counterId = 113590816;
  const source = "https://mc.yandex.ru/metrika/tag.js?id=" + counterId;
  if (document.querySelector('script[src="' + source + '"]')) return;

  window.ym = window.ym || function () {
    (window.ym.a = window.ym.a || []).push(arguments);
  };
  window.ym.l = Date.now();

  const tag = document.createElement("script");
  tag.async = true;
  tag.src = source;
  document.head.appendChild(tag);

  window.ym(counterId, "init", {
    ssr: true,
    webvisor: true,
    clickmap: true,
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce: true,
    trackLinks: true,
  });
})();
