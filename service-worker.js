/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "03c43affc022f548db29ce173a7eeecf"
  },
  {
    "url": "assets/css/0.styles.9725bf65.css",
    "revision": "c4f6e5bc0c1c32bf80cbe4312f9f9c1a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.4b44695e.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/3.d1b8a1cc.js",
    "revision": "8849ba71f800c63dd52a8b219b688efc"
  },
  {
    "url": "assets/js/4.9d845f74.js",
    "revision": "3153c0ca50dd62e01967329b24aa05e6"
  },
  {
    "url": "assets/js/5.13da7e5c.js",
    "revision": "d878d28d74f4508d867624898cda9942"
  },
  {
    "url": "assets/js/6.b69fd2c5.js",
    "revision": "117c48caa6694eaac876eced8c0c3781"
  },
  {
    "url": "assets/js/7.710af664.js",
    "revision": "417556367ca7ff0a4bdc71dfd0711a1d"
  },
  {
    "url": "assets/js/8.8a60fe1d.js",
    "revision": "b151d3e78073fc09472865c4680803bf"
  },
  {
    "url": "assets/js/9.feb358ac.js",
    "revision": "e87540a881baff343231a0f72b347cb6"
  },
  {
    "url": "assets/js/app.df941beb.js",
    "revision": "16833cfc9ec80f3944dc5628dd1ddb2d"
  },
  {
    "url": "assets/js/vendors~docsearch.2dfcabe0.js",
    "revision": "08dd924da0433948352a965f7c6eaf66"
  },
  {
    "url": "hero.png",
    "revision": "30a141be53661e5e0d0efb8de3c931e4"
  },
  {
    "url": "index.html",
    "revision": "d3bed64777440a6ae05cce645e2bd0c9"
  },
  {
    "url": "Product/index.html",
    "revision": "788988ae33cdf0c7c77831b5b46e9c6b"
  },
  {
    "url": "Product/one.html",
    "revision": "6b1c2d0e4f8ea36d02522bb029e74031"
  },
  {
    "url": "zh/index.html",
    "revision": "21f3a47468bd6c01e4a8ed0e34772d89"
  },
  {
    "url": "zh/Product/index.html",
    "revision": "8ef713054ba5e1039a21ed4f28c9c1f4"
  },
  {
    "url": "zh/Product/one.html",
    "revision": "165dfe1e9c8b141384c769246a47eedd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
