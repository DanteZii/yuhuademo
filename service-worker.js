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
    "revision": "06d644c97665393996f3ec78f9242b9f"
  },
  {
    "url": "About/REDME.html",
    "revision": "8a2aa376429e60cdfef26c4d2a1c90e3"
  },
  {
    "url": "About1.html",
    "revision": "88da35c7851e89abb748b152cd8bbbe5"
  },
  {
    "url": "assets/css/0.styles.ee06f386.css",
    "revision": "d99aac892a30117a1c51f47567ee2a41"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4dacaa5d.js",
    "revision": "3a5b668eb9635debccb81c02215ede2d"
  },
  {
    "url": "assets/js/11.785a4dde.js",
    "revision": "97a2532ac439e60269f7cd061395ebf4"
  },
  {
    "url": "assets/js/12.05ac31ce.js",
    "revision": "150ccbd1e18244fa9455d371f423993a"
  },
  {
    "url": "assets/js/13.deb8ad2d.js",
    "revision": "8ba5f2866cb0aa6d17cfd02ed6352bf2"
  },
  {
    "url": "assets/js/14.6ff211e8.js",
    "revision": "0a4296bf62c66e77d12549e3c61eca02"
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
    "url": "assets/js/4.e85f1b32.js",
    "revision": "4b84d948b2cd47f80277109d804beea3"
  },
  {
    "url": "assets/js/5.c71ddde9.js",
    "revision": "fd8b116ef0855dd5e178578d23fcbd77"
  },
  {
    "url": "assets/js/6.0c6e7fd2.js",
    "revision": "a4d74d1fbf57abf7ccef0c0ea79c9d6f"
  },
  {
    "url": "assets/js/7.062ac395.js",
    "revision": "652360cc482a17bf39d1590aef862e86"
  },
  {
    "url": "assets/js/8.e59a2b25.js",
    "revision": "24369aa482af1f19e1211ed1a7904c29"
  },
  {
    "url": "assets/js/9.632b9346.js",
    "revision": "c1a562e32b7fcbc71b75823922d1dcc0"
  },
  {
    "url": "assets/js/app.1f00e220.js",
    "revision": "62136d45d4ff7711f16f6601a768351b"
  },
  {
    "url": "assets/js/vendors~docsearch.630b6bce.js",
    "revision": "e857a3e59c26f1fda1aa5cc126a364f1"
  },
  {
    "url": "hero.png",
    "revision": "30a141be53661e5e0d0efb8de3c931e4"
  },
  {
    "url": "icons/earth.svg",
    "revision": "3e619d08438aeb3ab2ee741d40b3ce8b"
  },
  {
    "url": "icons/rocket.svg",
    "revision": "ecf69f52e93694b8ca97fd96a7d2cca7"
  },
  {
    "url": "icons/safety certificate.svg",
    "revision": "012eb96f6ce1a1b585bd1f7d1753c5b8"
  },
  {
    "url": "index.html",
    "revision": "b777ad3edefddf44707fcd08e1276a26"
  },
  {
    "url": "Product/fish.html",
    "revision": "d30168f9ac6003901f82082999f752ea"
  },
  {
    "url": "Product/greens.html",
    "revision": "23fc113301c2459f2cfe2a061d15c5c9"
  },
  {
    "url": "Product/index.html",
    "revision": "d87f7f12d54f209ff9c55f6790ddf343"
  },
  {
    "url": "Product/one.html",
    "revision": "10507852af00fdca573de48654747395"
  },
  {
    "url": "yuhua-demo-icon.svg",
    "revision": "97f26d85be46b25db2b419562f0d8192"
  },
  {
    "url": "yuhua-demo-icon2.svg",
    "revision": "325dd5d86f596c987b1f725eb1c295ad"
  },
  {
    "url": "yuhua-demo-p.svg",
    "revision": "25fb9f143c4f93b491365c22abb4c50b"
  },
  {
    "url": "zh/About1.html",
    "revision": "a97c474a86ccb5ee06cc29331f91503f"
  },
  {
    "url": "zh/index.html",
    "revision": "237261ed7e90de874b884f7f92b7e6db"
  },
  {
    "url": "zh/Product/index.html",
    "revision": "36dcecbfd68bbb383e5f07acfd7b95ec"
  },
  {
    "url": "zh/Product/one.html",
    "revision": "43ce3f0ebf21a367b0d42e2b8fd9eeeb"
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
