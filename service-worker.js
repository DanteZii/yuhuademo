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
    "revision": "b75a5ba336e44d3ede1e71c5b5eedfc7"
  },
  {
    "url": "About/index.html",
    "revision": "352401d95d4ee6f42bf13a0d36c6b709"
  },
  {
    "url": "About1.html",
    "revision": "fc91b5945e53bfd5c49ad81c32cf29a8"
  },
  {
    "url": "assets/css/0.styles.0d6d7031.css",
    "revision": "dcae579d83b46e796a9043df37593e77"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7bb7404c.js",
    "revision": "903993d1b0e9cf71b5976edb2f77668c"
  },
  {
    "url": "assets/js/11.b152945a.js",
    "revision": "5bbb17d44f53168aec6694ba842ba967"
  },
  {
    "url": "assets/js/12.2becd63e.js",
    "revision": "d6915b698bbd0fee420f12367dd86282"
  },
  {
    "url": "assets/js/13.65a8d26d.js",
    "revision": "892b8c42770db080559590b513c090e7"
  },
  {
    "url": "assets/js/14.9266182d.js",
    "revision": "965ae320b9493600f0db6974d8f02497"
  },
  {
    "url": "assets/js/15.2e77948d.js",
    "revision": "bb449c77676e5c5628228cd9491b2fd2"
  },
  {
    "url": "assets/js/16.3b5f46ee.js",
    "revision": "10a9ae34705bd17e966e35ac55f4606e"
  },
  {
    "url": "assets/js/17.c20635a6.js",
    "revision": "530a35a17da22ea6d73894eae94477fe"
  },
  {
    "url": "assets/js/18.0738cd4f.js",
    "revision": "838c860974ac8087bbf0384f90ce855f"
  },
  {
    "url": "assets/js/19.1e246ce6.js",
    "revision": "7904800acdc6cae9336fe570359676b0"
  },
  {
    "url": "assets/js/2.cc7d0820.js",
    "revision": "448bde37a675e0a3f318e4e777661bef"
  },
  {
    "url": "assets/js/20.92a2b3f9.js",
    "revision": "b8fe9e7039c4a6dfb279f1f7370c7c9d"
  },
  {
    "url": "assets/js/21.5b4baf71.js",
    "revision": "06c7849db64c8e28da1c37010d279542"
  },
  {
    "url": "assets/js/22.18368fcc.js",
    "revision": "c499541c1eca4c6bc533be7736d98c91"
  },
  {
    "url": "assets/js/23.3c042beb.js",
    "revision": "96b3728d3e7abcaf4bff60f26c9f0c10"
  },
  {
    "url": "assets/js/24.146c5462.js",
    "revision": "5f672083a52c4262d6ccc2f94e193333"
  },
  {
    "url": "assets/js/25.e7b7432e.js",
    "revision": "1b5452b7509bc57f2c204ab625daec88"
  },
  {
    "url": "assets/js/26.6c230f82.js",
    "revision": "b88d53a9d8bca0d87a68ae0ddc47b91f"
  },
  {
    "url": "assets/js/27.4d6a8a73.js",
    "revision": "aec5cc49d74fe5216cbd0bbdf098a9b0"
  },
  {
    "url": "assets/js/28.7714e784.js",
    "revision": "52f37046fbff99f4092b5edf53750ca8"
  },
  {
    "url": "assets/js/29.ed17acd9.js",
    "revision": "56aa4c33bf986414c20119c49e6d63ba"
  },
  {
    "url": "assets/js/3.78ded785.js",
    "revision": "0e0bec3d3c7a5d791d81275f7ee4c497"
  },
  {
    "url": "assets/js/30.e4f537f2.js",
    "revision": "7ec4b5ae3bb5ce83bc0cab0b5efba269"
  },
  {
    "url": "assets/js/31.4999bf2b.js",
    "revision": "e17806d8016ad7c6cb26f961dffe742e"
  },
  {
    "url": "assets/js/32.a8c6074b.js",
    "revision": "2cff4363ae9095a14063418bf465e148"
  },
  {
    "url": "assets/js/33.ae7e62c7.js",
    "revision": "4fe9de86a934531209b33415930b9a2e"
  },
  {
    "url": "assets/js/34.7b94e118.js",
    "revision": "ee1300ed4f23425ff37c5363bca9c072"
  },
  {
    "url": "assets/js/35.e15072aa.js",
    "revision": "2b82aac7d87656dfdd966a9cb500c7bd"
  },
  {
    "url": "assets/js/36.3375dace.js",
    "revision": "60c1cfe35dbc6cb3ba13dad38d2da1e9"
  },
  {
    "url": "assets/js/37.e2983632.js",
    "revision": "331ad8a6d6dfdad53c70d52c0c7a809d"
  },
  {
    "url": "assets/js/38.13077d55.js",
    "revision": "ce67cd05b65574dbb9b918e10b621f2b"
  },
  {
    "url": "assets/js/39.60bf373a.js",
    "revision": "22b4e5b78a98f89969decb2ec39654ee"
  },
  {
    "url": "assets/js/4.bc887721.js",
    "revision": "8db30611a3f8d393e895918bf6ba5c57"
  },
  {
    "url": "assets/js/40.8572bfce.js",
    "revision": "98890b4a358cccf72cffd5d95c4b2282"
  },
  {
    "url": "assets/js/41.8939c28e.js",
    "revision": "b5e36265feed57b8650412e3be930fd5"
  },
  {
    "url": "assets/js/42.8f3d7208.js",
    "revision": "abb9cb34c9e5deb271164a0b71be3e76"
  },
  {
    "url": "assets/js/43.d6d78ab4.js",
    "revision": "676dbb50f6ac7c322a91a4372189dbdf"
  },
  {
    "url": "assets/js/44.8b604780.js",
    "revision": "2ca5692cd150fef2f273afb92c17339c"
  },
  {
    "url": "assets/js/45.b8605f13.js",
    "revision": "a78aa33ff4dc5b8d84a29fedd71689f3"
  },
  {
    "url": "assets/js/46.f9f40243.js",
    "revision": "8679b6b232674d7dd32498dea9c1db9f"
  },
  {
    "url": "assets/js/47.dd4a8b63.js",
    "revision": "ec7d0285e7879644ebc4f1ef0149a80b"
  },
  {
    "url": "assets/js/48.190f859b.js",
    "revision": "387b21ff639112f89dfb2cf8cbad6198"
  },
  {
    "url": "assets/js/49.39e24056.js",
    "revision": "cbcc04a535cb2703f0bbdb075717b287"
  },
  {
    "url": "assets/js/5.8cad02c4.js",
    "revision": "f0f7ac747b020ec89f9304908dc04b80"
  },
  {
    "url": "assets/js/50.a5684771.js",
    "revision": "6fb6004326cedffb24c4f8b8e26f4b02"
  },
  {
    "url": "assets/js/51.1a9304f7.js",
    "revision": "53ee2d08c436812bb039e8a0cb6f8e64"
  },
  {
    "url": "assets/js/6.e17da3ed.js",
    "revision": "ec2edff21b1cd5d24968d71274192c49"
  },
  {
    "url": "assets/js/7.65329e4f.js",
    "revision": "65f234681136d8182c42ee7e198f8e44"
  },
  {
    "url": "assets/js/8.a4bc3aab.js",
    "revision": "69998f41543704db09b0ee859f6c2701"
  },
  {
    "url": "assets/js/9.5629be46.js",
    "revision": "fd1f75376229ea1bbbba467f43f5d143"
  },
  {
    "url": "assets/js/app.fc12a83c.js",
    "revision": "8ded546650a101839a441ad1a149f2e5"
  },
  {
    "url": "assets/js/vendors~docsearch.95ef4635.js",
    "revision": "d73f2e6ef7380a83a2de9161f9db0443"
  },
  {
    "url": "hero.png",
    "revision": "30a141be53661e5e0d0efb8de3c931e4"
  },
  {
    "url": "heroyuhua5.png",
    "revision": "7458cff772782dd3707b274a7329e02d"
  },
  {
    "url": "heroyuhua5.svg",
    "revision": "f37d84294b932dd39004f827138d2021"
  },
  {
    "url": "heroyuhuac5.png",
    "revision": "761cb01b2cba80e1c7c9d7601062044a"
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
    "revision": "70703381c7350faf493603fa748f89cb"
  },
  {
    "url": "purchase/index.html",
    "revision": "63ae4a3732d5b4308f70d70f11a3d198"
  },
  {
    "url": "purchase/one.html",
    "revision": "d227f59ad569d97f4b81602655d58187"
  },
  {
    "url": "purchase/shell.html",
    "revision": "b1c9a791d8515a72703d823e98d0128f"
  },
  {
    "url": "purchase/shrimp.html",
    "revision": "ae4d40b3b046a1ef672b2100d67e78a6"
  },
  {
    "url": "recommend/2Yellow tail.html",
    "revision": "fe67ae72aba7c3251d0e4bed9dccfbf6"
  },
  {
    "url": "recommend/3Tempura shrimp.html",
    "revision": "023ef30496735ac12442faedd550b6ad"
  },
  {
    "url": "recommend/4Sushi fish fillet.html",
    "revision": "7c46d8b78fbc5530cbf044397f5a4b51"
  },
  {
    "url": "recommend/5Octopus ball.html",
    "revision": "85d28be235df8c70a02ba8d83cfb605d"
  },
  {
    "url": "recommend/6Sweet shrimp sashimi.html",
    "revision": "15b3c710b81010678ac9a8d3266db794"
  },
  {
    "url": "recommend/7Fresh strawberry.html",
    "revision": "849fb640ec1038507d291cc4576f963d"
  },
  {
    "url": "recommend/index.html",
    "revision": "05c423c7a33613b3a7da841c1623835f"
  },
  {
    "url": "SeafoodProcessing/2TempuraShrimp.html",
    "revision": "a85cc4e385c58bb9a049e2a0fb414f75"
  },
  {
    "url": "SeafoodProcessing/3CodFilletSeries.html",
    "revision": "a03fdcb0b2a7f755c120bfbc3f062669"
  },
  {
    "url": "SeafoodProcessing/4SquidSeries.html",
    "revision": "d47737f5421356f520eaa432de0bec6c"
  },
  {
    "url": "SeafoodProcessing/5SushiSeries.html",
    "revision": "2bc2d914844f016a67192d067857ae61"
  },
  {
    "url": "SeafoodProcessing/6SmokedSalmonFillet.html",
    "revision": "70acccfeaea65c4cafb74d91207834ed"
  },
  {
    "url": "SeafoodProcessing/index.html",
    "revision": "4330c08263cd922ee4ce9277da372f27"
  },
  {
    "url": "VegetableProcessing/2fungus.html",
    "revision": "4e9215af880dd1fc683b7a2967b85a95"
  },
  {
    "url": "VegetableProcessing/3fruit.html",
    "revision": "dc166ab2a953c0657d5d855c43524ed5"
  },
  {
    "url": "VegetableProcessing/index.html",
    "revision": "7b7186daf08905eabf6e60919e770e3b"
  },
  {
    "url": "yuhua-demo-icon-en.svg",
    "revision": "4fc772d4ee615c933c66a325f662fa30"
  },
  {
    "url": "yuhua-demo-icon-zh.svg",
    "revision": "c441a245fa40022118074cd1995472ef"
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
    "url": "zh/About/index.html",
    "revision": "2c9d86ae347c0f8845fc5aed7b54c39f"
  },
  {
    "url": "zh/index.html",
    "revision": "eb26c825804e2eca7c3052dc79caa076"
  },
  {
    "url": "zh/Product/index.html",
    "revision": "d1c327e2cc29d21f75cb4345a4767f5d"
  },
  {
    "url": "zh/Product/one.html",
    "revision": "a937688327eb2b17d3b1874013be8461"
  },
  {
    "url": "zh/purchase/index.html",
    "revision": "6ad5063e0a1cf1dd6685d3b831505918"
  },
  {
    "url": "zh/purchase/one.html",
    "revision": "31353047d0db486484e1308def93db6b"
  },
  {
    "url": "zh/purchase/shell.html",
    "revision": "f8a31b397d0bdb1710140d971244df05"
  },
  {
    "url": "zh/purchase/shrimp.html",
    "revision": "10d0b38155a4f45ff604956d1f9fdf5d"
  },
  {
    "url": "zh/recommend/2Yellow tail.html",
    "revision": "0b6e533b7ef1c23ab12864de0c65f60a"
  },
  {
    "url": "zh/recommend/3Tempura shrimp.html",
    "revision": "ab4ac00b0c6a7f1ef1c08e7020dc0845"
  },
  {
    "url": "zh/recommend/4Sushi fish fillet.html",
    "revision": "e002cdc0cc02d3740f138fa779f863fe"
  },
  {
    "url": "zh/recommend/5Octopus ball.html",
    "revision": "8f2d6f3add32d02e88ef0cce34606ebe"
  },
  {
    "url": "zh/recommend/6Sweet shrimp sashimi.html",
    "revision": "3d69c54a24422f9cc67a7b87f2c65956"
  },
  {
    "url": "zh/recommend/7Fresh strawberry.html",
    "revision": "1331bd4e9d2f549139e84f9c98dc7b1c"
  },
  {
    "url": "zh/recommend/index.html",
    "revision": "2602cac5f33d18474d8d492fdc3518ae"
  },
  {
    "url": "zh/SeafoodProcessing/2TempuraShrimp.html",
    "revision": "7355e62eb2ae595712a3a9abe4a3a4ee"
  },
  {
    "url": "zh/SeafoodProcessing/3CodFilletSeries.html",
    "revision": "baaa365503ed0def668d247ecd1e0c95"
  },
  {
    "url": "zh/SeafoodProcessing/4SquidSeries.html",
    "revision": "b230d1d6bffa0daae32cfcb86439b9bd"
  },
  {
    "url": "zh/SeafoodProcessing/5SushiSeries.html",
    "revision": "c8cb7c56789123474aec3799ee295b01"
  },
  {
    "url": "zh/SeafoodProcessing/6SmokedSalmonFillet.html",
    "revision": "6754402feb1fe5fbbe04145b87488e25"
  },
  {
    "url": "zh/SeafoodProcessing/index.html",
    "revision": "787bb19df5e5c5079c4fa62c76c3d469"
  },
  {
    "url": "zh/VegetableProcessing/2fungus.html",
    "revision": "432064e6189e58f27be399186d6fa197"
  },
  {
    "url": "zh/VegetableProcessing/3fruit.html",
    "revision": "3a899e7256ec3f4724714222e773bc53"
  },
  {
    "url": "zh/VegetableProcessing/index.html",
    "revision": "c47fb97420412247e96087c68494a295"
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
