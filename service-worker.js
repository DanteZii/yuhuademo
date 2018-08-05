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
    "revision": "3b1bb6618b000e6627511f7b3385053d"
  },
  {
    "url": "assets/css/0.styles.f69707d8.css",
    "revision": "e7204fba4b3ce4a1132b8b4f5f07ce34"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eae92f3d.js",
    "revision": "daa105a1483af2afbc2628d1247b3c30"
  },
  {
    "url": "assets/js/11.22bd35bb.js",
    "revision": "319e457d4c41467a9da40a7a316dba71"
  },
  {
    "url": "assets/js/12.60ab5bcf.js",
    "revision": "24d0c949a4e72e16cc2e993cb6599bab"
  },
  {
    "url": "assets/js/13.ab327aec.js",
    "revision": "c08e360f78bf5136475646b7ac0ffb94"
  },
  {
    "url": "assets/js/2.4b44695e.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/3.3c9ef4b6.js",
    "revision": "dc749fc9755ce1282df3cbb53959910d"
  },
  {
    "url": "assets/js/4.8b54012f.js",
    "revision": "e6d8b71d1dbb3dc6319a0bb27a0b6df6"
  },
  {
    "url": "assets/js/5.31363827.js",
    "revision": "f93cd2cef3ff89d8c920977ad217c57a"
  },
  {
    "url": "assets/js/6.c65756fd.js",
    "revision": "98d09cde1a80697a3e7d95d4bcf4e84f"
  },
  {
    "url": "assets/js/7.828ba695.js",
    "revision": "e9e57235b9d3dd8546970c8aeab41c89"
  },
  {
    "url": "assets/js/8.4c87020b.js",
    "revision": "68558ecf9458eabfeece0134300547f0"
  },
  {
    "url": "assets/js/9.e6317380.js",
    "revision": "82a54bc452591331f9da7a335830d3d4"
  },
  {
    "url": "assets/js/app.91057796.js",
    "revision": "e248e6f0018461eaf04bde1e79fcb8df"
  },
  {
    "url": "assets/js/vendors~docsearch.81719de9.js",
    "revision": "80d2a4ed0f1ad47082eeeeeef74238f5"
  },
  {
    "url": "Demo/A.html",
    "revision": "ea11029eacec71c54cfffb4f0cda8598"
  },
  {
    "url": "Demo/B.html",
    "revision": "6b37f4d8ac6dca8d40faa4089837ae27"
  },
  {
    "url": "Demo/REDME.html",
    "revision": "ebd148f66a661e0453478deb3aed0706"
  },
  {
    "url": "hero.png",
    "revision": "30a141be53661e5e0d0efb8de3c931e4"
  },
  {
    "url": "icons/earth.svg",
    "revision": "7dd2fae11aec601da47fe9b21afc4b2a"
  },
  {
    "url": "icons/rocket.svg",
    "revision": "f7dcfd4161367f005db7bf00024bbfcf"
  },
  {
    "url": "icons/safety certificate.svg",
    "revision": "3e1477d8ca17fe6925afdf27ef355a6d"
  },
  {
    "url": "index.html",
    "revision": "6b96647d19ffdfe3604d9ffe8488151f"
  },
  {
    "url": "Product/greens.html",
    "revision": "fa879f16f05ae69d45231d3fe6d3770f"
  },
  {
    "url": "Product/index.html",
    "revision": "d33756e46c11f3157d4438625abbae81"
  },
  {
    "url": "Product/one.html",
    "revision": "d30a9c205f60f212e68a35b2673d2e29"
  },
  {
    "url": "zh/index.html",
    "revision": "95219bc65a21675528130178b83aa711"
  },
  {
    "url": "zh/Product/index.html",
    "revision": "62399a93c7a2e4d57729a3b893985778"
  },
  {
    "url": "zh/Product/one.html",
    "revision": "259dfe324c521a5d5e3c3a3021a6f3df"
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
