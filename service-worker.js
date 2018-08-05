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
    "revision": "58550f969d68cf7fe2159094a637cd83"
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
    "url": "assets/js/7.ed33a8c4.js",
    "revision": "48375a62bd397760c44dbe065b5b0b4d"
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
    "url": "assets/js/app.d52dfcdb.js",
    "revision": "14ce6c52728ce6afe89a69e4dca00c01"
  },
  {
    "url": "assets/js/vendors~docsearch.81719de9.js",
    "revision": "80d2a4ed0f1ad47082eeeeeef74238f5"
  },
  {
    "url": "Demo/A.html",
    "revision": "785e4c9d1677b8f721f77d1098acf400"
  },
  {
    "url": "Demo/B.html",
    "revision": "f9e4677c004bb3add2c78f053751d0ed"
  },
  {
    "url": "Demo/REDME.html",
    "revision": "97589ccfdda8861954d49ae9b737060b"
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
    "revision": "c752765957bf848fc7b07ab100189a6e"
  },
  {
    "url": "Product/greens.html",
    "revision": "2142d2ba3591359712c556f90614dd6e"
  },
  {
    "url": "Product/index.html",
    "revision": "10a279ce49fe3e597ec6e1d2fc90f741"
  },
  {
    "url": "Product/one.html",
    "revision": "4acefc18207d93abeeece7151082e5a1"
  },
  {
    "url": "zh/index.html",
    "revision": "a7255bbf8bd5a21499ffff3c17af3582"
  },
  {
    "url": "zh/Product/index.html",
    "revision": "bac7feae2f327a5489ef262c33ed51e6"
  },
  {
    "url": "zh/Product/one.html",
    "revision": "0f8b31402edd91e48f915f5081d6b2ff"
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
