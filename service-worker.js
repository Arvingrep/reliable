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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e772649aa74bc4ee0a3570f00c35e192"
  },
  {
    "url": "assets/6d308bd9gw1f5scrp1p4rj20rs0gatbj.jpg",
    "revision": "07afc72da8ac1181b6920160b3a96bdc"
  },
  {
    "url": "assets/6d308bd9gy1ft3id6gbmej21kw12r7hb.jpg",
    "revision": "3fdb04471053ab25c3888ad719467d86"
  },
  {
    "url": "assets/6d308bd9gy1ft3id6n0ajj21kw12rduv.jpg",
    "revision": "e5aaea0c2b2c78fec78667e3df099c47"
  },
  {
    "url": "assets/6d308bd9gy1ft3jq4frzjj21kw10nqek.jpg",
    "revision": "6834311eddb0d96d03d4a2612f6ae274"
  },
  {
    "url": "assets/6d308bd9gy1ft3jw0q7o0j21kw10ndql.jpg",
    "revision": "58d0cc5063e8062d62b1651b022507a3"
  },
  {
    "url": "assets/6d308bd9gy1ft3jw2iloqj21kw10nguj.jpg",
    "revision": "74a561fda505379a2769de4fd9613b13"
  },
  {
    "url": "assets/6d308bd9gy1ft3jw318grj21kw10nwp4.jpg",
    "revision": "bcc159c8defbab71a6047f7ca0c1aca6"
  },
  {
    "url": "assets/6d308bd9gy1ft3jw32rz0j21kw10ntma.jpg",
    "revision": "1b8c1dd33f878075a158022758d6a3e9"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqbd9e3j21kw0xx45p.jpg",
    "revision": "4b90d01913b7aeb5c2b40a443d9f79e2"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqbgjesj21kw0xx7ee.jpg",
    "revision": "4f1d3b8471ec50cd33cbc4d365dfdc41"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqbnft5j21kw0xxaq1.jpg",
    "revision": "3c5f59d7e124ab24fbcef30ba8ace5a8"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqcab4vj21kw0xxwn0.jpg",
    "revision": "44becb0bcd7d43cee1cc25abf5cb43fb"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqcmte5j21kw0xxdm6.jpg",
    "revision": "189a9e9588f3c121f1143a0ad97abb8d"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqcraoij21kw0xxjyt.jpg",
    "revision": "c091600cd661f7806c31089a26d0ad14"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqd3c7fj21kw0xxqcj.jpg",
    "revision": "565812823763a1cbd0fe2407bb0f1860"
  },
  {
    "url": "assets/6d308bd9gy1ftc27nq3rsj21kw12j7if.jpg",
    "revision": "0e20484b8320666f904b03a67f858e77"
  },
  {
    "url": "assets/6d308bd9gy1ftc27pr7xuj21kw128gzp.jpg",
    "revision": "404ac0e1447ce512a02d0776d7c3aad8"
  },
  {
    "url": "assets/6d308bd9gy1ftc27q3vd3j21kw128tpk.jpg",
    "revision": "f07ced9d44ea5ea522aa91392813e0a0"
  },
  {
    "url": "assets/6d308bd9gy1ftc4y26xzaj21kw10g12f.jpg",
    "revision": "5d0537381e0d4614ceb567fd35256af8"
  },
  {
    "url": "assets/6d308bd9gy1ftc4y31cf5j21kw10g7kz.jpg",
    "revision": "319af1966faaa505bc1f5e44bdad08a0"
  },
  {
    "url": "assets/6d308bd9ly1ft2p8qmlazj21kw15ztol.jpg",
    "revision": "8a1859dace500cd8441019656b2c7241"
  },
  {
    "url": "assets/6d308bd9ly1ft2panw2oqj21kw15znaj.jpg",
    "revision": "60e48d83189fd329efdcb6ddd063215f"
  },
  {
    "url": "assets/6d308bd9ly1ft2peam690j21kw15ztl8.jpg",
    "revision": "5215aa921b1006e27ca7643df55c303a"
  },
  {
    "url": "assets/6d308bd9ly1ft2plz2djxj21kw16pk5j.jpg",
    "revision": "f3a438a5a26467bfe8a341a43c514b2d"
  },
  {
    "url": "assets/6d308bd9ly1ft2pvmld7dj21kw148wn3.jpg",
    "revision": "c8769a2266005cb26249a5e4d22210ab"
  },
  {
    "url": "assets/6d308bd9ly1ft2pvmlnkij21kw148dph.jpg",
    "revision": "6ce79fa00f7114d5c2925984ed69bda5"
  },
  {
    "url": "assets/6d308bd9ly1ft2pvmlz1hj21kw148tl3.jpg",
    "revision": "654c912c49c2c5db001e76db71c61d79"
  },
  {
    "url": "assets/6d308bd9ly1ft2pvmmewxj21kw14849j.jpg",
    "revision": "f84f9567389f573ed407d54316abe61c"
  },
  {
    "url": "assets/6d308bd9ly1fz3wii2wqsj21bh0u0qij.jpg",
    "revision": "f15b81f664a11c17813cf8839b68776a"
  },
  {
    "url": "assets/css/0.styles.2e4c79a4.css",
    "revision": "3e2f90edd6383f37ba27f8c698af028e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.745c6257.js",
    "revision": "5f576c59b59246771169b69d97a06341"
  },
  {
    "url": "assets/js/11.97969699.js",
    "revision": "0337450c7b448038d83515feb80dc4d7"
  },
  {
    "url": "assets/js/12.63852612.js",
    "revision": "dfad7cd1e426bd138f0e90d27e80c9a9"
  },
  {
    "url": "assets/js/13.d1f7fd5c.js",
    "revision": "5ec58eda13edac7611beebec2aa223c8"
  },
  {
    "url": "assets/js/14.8ecd7553.js",
    "revision": "244f8502188a7739cae5478715cf3afe"
  },
  {
    "url": "assets/js/15.2d4fc902.js",
    "revision": "e5dda1c8f8f48d44d548997b8fc1847d"
  },
  {
    "url": "assets/js/16.967e3d52.js",
    "revision": "5f9122926f4c5d3f77c747dfa7c180c1"
  },
  {
    "url": "assets/js/17.379317a9.js",
    "revision": "897b7f775af8482493bea9e9a78ed137"
  },
  {
    "url": "assets/js/18.c21eaef9.js",
    "revision": "21c1cab591187e7416cb61acdccb14a9"
  },
  {
    "url": "assets/js/19.d20992da.js",
    "revision": "024eb573716d9700a4242494e5e476f3"
  },
  {
    "url": "assets/js/2.d580216f.js",
    "revision": "853e091de8ba1e7c1e1c63d820ee6c09"
  },
  {
    "url": "assets/js/20.b34519de.js",
    "revision": "bbf65c851f3e2a54e08c06c9c5b96678"
  },
  {
    "url": "assets/js/21.0d175949.js",
    "revision": "117e545c64a4124962be3d978c9e6988"
  },
  {
    "url": "assets/js/3.da6c02d3.js",
    "revision": "e4ced83174fb5000ebdfe32faa94b760"
  },
  {
    "url": "assets/js/4.d6d5f355.js",
    "revision": "b08faa5773a9d3db30ab67ad283cc844"
  },
  {
    "url": "assets/js/5.b0316886.js",
    "revision": "482c1b593e1219799aede7063e0f32aa"
  },
  {
    "url": "assets/js/6.9e366cd7.js",
    "revision": "a5471335c4c9a69b813bcc97fbcb16c5"
  },
  {
    "url": "assets/js/7.78a5bd8a.js",
    "revision": "0897b823299c7fa6f07d066beb586105"
  },
  {
    "url": "assets/js/8.972e7da9.js",
    "revision": "5784167d3de216aea9b9791a376f3dd5"
  },
  {
    "url": "assets/js/9.24312673.js",
    "revision": "b9336e2fa5191e579e5e808bbfb6ab7c"
  },
  {
    "url": "assets/js/app.e754bcf5.js",
    "revision": "385aaef08aa1b45a4c66155d61ffe5de"
  },
  {
    "url": "guide/index.html",
    "revision": "ac95c25b5fc780d762ea5fd75c1f2d12"
  },
  {
    "url": "guide/integrate-with-gitlab-ci.html",
    "revision": "fccedab7962a6d2cf8926b5725caab71"
  },
  {
    "url": "guide/integrate-with-jenkins.html",
    "revision": "8d34d5e4f395ca5d7b03f710c2bdbdaf"
  },
  {
    "url": "guide/jenkins-android.html",
    "revision": "fa5ad24800bc52eabb5c6852d06d7f0d"
  },
  {
    "url": "guide/jenkins-ios.html",
    "revision": "f58fb78fd3e1dced2c7ac98d5adce8f9"
  },
  {
    "url": "guide/jenkins-web.html",
    "revision": "7d35af771fb40f42c9e35a16c13774a2"
  },
  {
    "url": "guide/reliable-cli.html",
    "revision": "7ac59e081542d90c42a954baec9b3d32"
  },
  {
    "url": "guide/reliable-web-deploy.html",
    "revision": "be6e5ca11d57798116b6c5b5495e53f8"
  },
  {
    "url": "index.html",
    "revision": "6da1f536c64048d0795aa0dcb3ee699c"
  },
  {
    "url": "logo/reliable.svg",
    "revision": "b34e8a8f81b1ba112b58e859061f289c"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "b13ecda16d5ca1cd8b67c07aa49f0fe2"
  },
  {
    "url": "zh/guide/integrate-with-gitlab-ci.html",
    "revision": "caddee135634c56cee08d4dc0ec468c7"
  },
  {
    "url": "zh/guide/integrate-with-jenkins.html",
    "revision": "903b704ac28538148bc8c1b6ee958823"
  },
  {
    "url": "zh/guide/jenkins-android.html",
    "revision": "fc7af5e6e636bacc16385da4bcb56662"
  },
  {
    "url": "zh/guide/jenkins-ios.html",
    "revision": "8efbabd5c192b1a88c08bcee3cc9fdb3"
  },
  {
    "url": "zh/guide/jenkins-web.html",
    "revision": "6a51bd8e42f786050f63b6f925aa2614"
  },
  {
    "url": "zh/guide/reliable-cli.html",
    "revision": "b92463b0d0c0e76c06b5715a075d2742"
  },
  {
    "url": "zh/guide/reliable-web-deploy.html",
    "revision": "8951da54adc33dfedc98b059a0d9f7da"
  },
  {
    "url": "zh/index.html",
    "revision": "a8e33464adc00fe189370014207988de"
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
