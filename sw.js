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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "hkoscon-2019"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/2019/07cb33705fa801f68249.css",
    "revision": "f0ff665a8c84f76dbfeb5edc8ac6f809"
  },
  {
    "url": "/2019/0b5e15d695467fdb9055.js",
    "revision": "2a817133780f47e1faf20c0ed58d078d"
  },
  {
    "url": "/2019/13a5e02fb610dfaa915a.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/2019/200.html",
    "revision": "a85f629ac59b17a907e5cecc859439f7"
  },
  {
    "url": "/2019/28026f771b814d34c261.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/2019/2d6459e48845553febd6.js",
    "revision": "8f98f8de5384c0c6b6113bd353e8e78c"
  },
  {
    "url": "/2019/2ea069efe534b61e1648.js",
    "revision": "aced3c8b8c35d391a426dbbb7882a482"
  },
  {
    "url": "/2019/357de23d328bf1cafb78.css",
    "revision": "d0250849b7de8a9d4788a412693f849b"
  },
  {
    "url": "/2019/45af625e7193cf814cba.css",
    "revision": "7fbf42c8240a9221b921fcfa5be1c28a"
  },
  {
    "url": "/2019/45da2d9ed774f48f93b7.css",
    "revision": "a7a7bcc5069a2d30051021536ca5ee96"
  },
  {
    "url": "/2019/47f41d740de2df95cd72.js",
    "revision": "c8915a01dea8cc9cdada8ffee9c5e885"
  },
  {
    "url": "/2019/54f7855073650b3b1b2b.css",
    "revision": "9fdc55af5d148081693de80e238a9c5e"
  },
  {
    "url": "/2019/5a1786e269a54a81553a.js",
    "revision": "9545079abe06ca8e9c6fef4d620246a2"
  },
  {
    "url": "/2019/607764a680483c0a66d8.css",
    "revision": "c22b82a8a27a895545fa16cd8808ee1f"
  },
  {
    "url": "/2019/636edb70c330c75e6967.js",
    "revision": "14915d4c88500661b844842c8ce62b7b"
  },
  {
    "url": "/2019/6d2fd0a71926b3be3475.js",
    "revision": "091cb845efb759a772ee549bc8d8d8cd"
  },
  {
    "url": "/2019/6d5077a7f07ef147615c.css",
    "revision": "df4b7c436dea4b56cfff94a89031318a"
  },
  {
    "url": "/2019/87c5f2451cc2305c3e7e.js",
    "revision": "a8f6ac63fbfbe66850b5aeacf91be6e6"
  },
  {
    "url": "/2019/9005dc1574c175357845.js",
    "revision": "47dab0dd5477efaf19e98a7d07791dec"
  },
  {
    "url": "/2019/9222f8371fe7f2a0a432.js",
    "revision": "65b0563c90a6d52702b316ae9e16e13a"
  },
  {
    "url": "/2019/94fd6a8b3e5717ed8aa8.js",
    "revision": "4739f6be40dc2e92a602f8893b2e821d"
  },
  {
    "url": "/2019/96e6fac2497d1a8a71fe.css",
    "revision": "43d5405ab0f4bc41a7452dbc00d25e15"
  },
  {
    "url": "/2019/9ba88d36027504e9eee9.js",
    "revision": "dc94507a5b11f0b02b597e3c9ce2aff3"
  },
  {
    "url": "/2019/a7af338e2f11de38f2ae.js",
    "revision": "6948181b6c2225c0e7197773d5b535f9"
  },
  {
    "url": "/2019/about/coc/index.html",
    "revision": "537a9acf44058802bcf2282072dc26c6"
  },
  {
    "url": "/2019/about/committee/index.html",
    "revision": "9b7eb80f8f943ff39b5cd2151289ff51"
  },
  {
    "url": "/2019/b47dc236fc2fe96ee57f.css",
    "revision": "b677ea7b448f399c8b775a01fa7d2626"
  },
  {
    "url": "/2019/bd9046ef3fdd6de07885.js",
    "revision": "b1fc83adf3a7f4707b4a807000b9a64b"
  },
  {
    "url": "/2019/bf95f650f00ca9bff1ec.css",
    "revision": "0c02e47203b1290ad5f5abb4f970155e"
  },
  {
    "url": "/2019/c3e7db12c74cf558ba13.js",
    "revision": "cf0028e6489bf714b9632496653806ca"
  },
  {
    "url": "/2019/cfc/index.html",
    "revision": "68b6688f21110f9b4574e71d6f497d45"
  },
  {
    "url": "/2019/cfp/index.html",
    "revision": "f694d7da9aed97d61d2e332650f078cf"
  },
  {
    "url": "/2019/dc8759bf3bd20f294e2e.js",
    "revision": "0b847bef021f5cda74c418cee433976a"
  },
  {
    "url": "/2019/dfb44ac98ade2bf22230.css",
    "revision": "a4dcdb2f6778b7814cf929c64f268456"
  },
  {
    "url": "/2019/e58269427215040eaa84.js",
    "revision": "a413bc148579e666536ab9464e916e7c"
  },
  {
    "url": "/2019/ebd1ada532a122171362.js",
    "revision": "fb1ec5a88f5af103323c3bce97ff4841"
  },
  {
    "url": "/2019/f3c36a8cab894c737b26.js",
    "revision": "b82e5afb330cb8b0647e208b0c3690b8"
  },
  {
    "url": "/2019/f8335c30c25db954983b.js",
    "revision": "77f34461f45e2e8e6e23a75680e23013"
  },
  {
    "url": "/2019/fd9782906e8f70f3c233.css",
    "revision": "d32ffbbec375bf9eaf56aceb9fd1a38c"
  },
  {
    "url": "/2019/ffc491fd08290ce28dd1.js",
    "revision": "10138d27344e55ff96587f9337848786"
  },
  {
    "url": "/2019/ffcbc26774ab48432e3a.js",
    "revision": "1dcd31bd500fe47ec84e1b292857798d"
  },
  {
    "url": "/2019/images/banner.jpg",
    "revision": "376ac4802d3c925b223330562ff4654e"
  },
  {
    "url": "/2019/images/bg.jpg",
    "revision": "fbc85c77524af2f3694fcd7ce2abc048"
  },
  {
    "url": "/2019/img/eb90f7f.png",
    "revision": "eb90f7fbc71ca73d9d3ab9d57657bbc2"
  },
  {
    "url": "/2019/index.html",
    "revision": "9269c51e78b51f3f0e884a5ca14b276b"
  },
  {
    "url": "/2019/timetable/index.html",
    "revision": "4c8f989e4c36499956e70f894c1f6133"
  },
  {
    "url": "/2019/topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "0bfc2dbaf3571bdd1e702d7159a63f1b"
  },
  {
    "url": "/2019/topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "f2183dc65b0dd7f92b7497194255792d"
  },
  {
    "url": "/2019/topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "bbfa666d0012cdd3e5aed8a82ad63dbd"
  },
  {
    "url": "/2019/topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "2c19461cace5a6400743b9a9a2501064"
  },
  {
    "url": "/2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "f088e542e6265975d06e3ac0d59cd36d"
  },
  {
    "url": "/2019/topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "954c3453f9728147c6e73ca51083b228"
  },
  {
    "url": "/2019/topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "66e690913ca46b1a06cd37439805a96a"
  },
  {
    "url": "/2019/topics/devops-ansible-native-kubernetes/index.html",
    "revision": "13207bbf7f40b7fb9053415988280c1b"
  },
  {
    "url": "/2019/topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "a94ec89dcbefbfbedefe297a2942056e"
  },
  {
    "url": "/2019/topics/diy-wealth-management-app/index.html",
    "revision": "5a78f1ca571c2c083de49e9752f65642"
  },
  {
    "url": "/2019/topics/formal-verification-smart-contract/index.html",
    "revision": "08699ef82363c937432d68f3dbd213f5"
  },
  {
    "url": "/2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "5428123d30fddfb027a5aaa8f07fbea2"
  },
  {
    "url": "/2019/topics/homemade-scientific-clusters/index.html",
    "revision": "e69ce3f4f846fb7422799228d64d3f64"
  },
  {
    "url": "/2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "c97647aafb7a33b959323fed0a6b2ee2"
  },
  {
    "url": "/2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "56294eae52aeac5cdfadefdecc9d57e7"
  },
  {
    "url": "/2019/topics/index.html",
    "revision": "9d6b52fb6814a10cfcb078a013fc6122"
  },
  {
    "url": "/2019/topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "cf61515ce255aca004d3fbefe1fc1952"
  },
  {
    "url": "/2019/topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "4f2fc44785878c317e79b95c1882f24e"
  },
  {
    "url": "/2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "7f33c48b90cea70434b83e052bef74f8"
  },
  {
    "url": "/2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "898ba356b1af0126bb56a1dd4bcc9a24"
  },
  {
    "url": "/2019/topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "25d0075fb10b394b7a3c27c63ed88cd7"
  },
  {
    "url": "/2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "fd72f75b2b3cb98bedbe2587ab0bedab"
  },
  {
    "url": "/2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "0ddae66294d38901fb7e3a896b540c58"
  },
  {
    "url": "/2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "47f00c0a7692e6433653b9b989524a91"
  },
  {
    "url": "/2019/topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "7bab0f6730b589327a12f9fd34202fd9"
  },
  {
    "url": "/2019/topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "4ea411729b75ff2c922cdbcc83acb1b3"
  },
  {
    "url": "/2019/topics/plant-identification-system-ai-ar/index.html",
    "revision": "03cc60d7e8b93a4b26311b8b96046a09"
  },
  {
    "url": "/2019/topics/plug-it-mysql-authentication-windows-pam/index.html",
    "revision": "a3ee7ebd17083d058c5730f7fff0fe50"
  },
  {
    "url": "/2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "50f93e400d7cd09f43822104dd70f4fc"
  },
  {
    "url": "/2019/topics/r-exploratory-data-analysis/index.html",
    "revision": "9f57b9620d294aaaa7ec162321e16a59"
  },
  {
    "url": "/2019/topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "8853f34d7d3370cf5a0339ce9817f3dc"
  },
  {
    "url": "/2019/topics/status-quo-tensorflow-lite/index.html",
    "revision": "e05a9e1902dbf4ffad3113462244730c"
  },
  {
    "url": "/2019/topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "d794964789ffa1c456338265b77a3b53"
  },
  {
    "url": "/2019/topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "0f13860408962538b2a1b25a6b5563d9"
  },
  {
    "url": "/2019/topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "14aea2d56acf6233fcff3f81d42df9a6"
  },
  {
    "url": "/2019/topics/whats-new-haxe-4/index.html",
    "revision": "2e9ad0572d4945d550d38021e0a2fb2e"
  },
  {
    "url": "/2019/topics/wordpress-search-engine-optimization-wordpress-seo/index.html",
    "revision": "69c812244fa4889e882e31bcdaca1b15"
  },
  {
    "url": "/2019/about/coc/",
    "revision": "537a9acf44058802bcf2282072dc26c6"
  },
  {
    "url": "/2019/about/committee/",
    "revision": "9b7eb80f8f943ff39b5cd2151289ff51"
  },
  {
    "url": "/2019/cfc/",
    "revision": "68b6688f21110f9b4574e71d6f497d45"
  },
  {
    "url": "/2019/cfp/",
    "revision": "f694d7da9aed97d61d2e332650f078cf"
  },
  {
    "url": "/2019/",
    "revision": "9269c51e78b51f3f0e884a5ca14b276b"
  },
  {
    "url": "/2019/timetable/",
    "revision": "4c8f989e4c36499956e70f894c1f6133"
  },
  {
    "url": "/2019/topics/8-essential-steps-secure-your-mysql/",
    "revision": "0bfc2dbaf3571bdd1e702d7159a63f1b"
  },
  {
    "url": "/2019/topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "f2183dc65b0dd7f92b7497194255792d"
  },
  {
    "url": "/2019/topics/build-minimal-dbms-scratch-rust/",
    "revision": "bbfa666d0012cdd3e5aed8a82ad63dbd"
  },
  {
    "url": "/2019/topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "2c19461cace5a6400743b9a9a2501064"
  },
  {
    "url": "/2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "f088e542e6265975d06e3ac0d59cd36d"
  },
  {
    "url": "/2019/topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "954c3453f9728147c6e73ca51083b228"
  },
  {
    "url": "/2019/topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "66e690913ca46b1a06cd37439805a96a"
  },
  {
    "url": "/2019/topics/devops-ansible-native-kubernetes/",
    "revision": "13207bbf7f40b7fb9053415988280c1b"
  },
  {
    "url": "/2019/topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "a94ec89dcbefbfbedefe297a2942056e"
  },
  {
    "url": "/2019/topics/diy-wealth-management-app/",
    "revision": "5a78f1ca571c2c083de49e9752f65642"
  },
  {
    "url": "/2019/topics/formal-verification-smart-contract/",
    "revision": "08699ef82363c937432d68f3dbd213f5"
  },
  {
    "url": "/2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "5428123d30fddfb027a5aaa8f07fbea2"
  },
  {
    "url": "/2019/topics/homemade-scientific-clusters/",
    "revision": "e69ce3f4f846fb7422799228d64d3f64"
  },
  {
    "url": "/2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "c97647aafb7a33b959323fed0a6b2ee2"
  },
  {
    "url": "/2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "56294eae52aeac5cdfadefdecc9d57e7"
  },
  {
    "url": "/2019/topics/",
    "revision": "9d6b52fb6814a10cfcb078a013fc6122"
  },
  {
    "url": "/2019/topics/introducing-open-technology-hong-kong-education/",
    "revision": "cf61515ce255aca004d3fbefe1fc1952"
  },
  {
    "url": "/2019/topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "4f2fc44785878c317e79b95c1882f24e"
  },
  {
    "url": "/2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "7f33c48b90cea70434b83e052bef74f8"
  },
  {
    "url": "/2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "898ba356b1af0126bb56a1dd4bcc9a24"
  },
  {
    "url": "/2019/topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "25d0075fb10b394b7a3c27c63ed88cd7"
  },
  {
    "url": "/2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "fd72f75b2b3cb98bedbe2587ab0bedab"
  },
  {
    "url": "/2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "0ddae66294d38901fb7e3a896b540c58"
  },
  {
    "url": "/2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "47f00c0a7692e6433653b9b989524a91"
  },
  {
    "url": "/2019/topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "7bab0f6730b589327a12f9fd34202fd9"
  },
  {
    "url": "/2019/topics/pim25-crowdsourced-weather-data-project/",
    "revision": "4ea411729b75ff2c922cdbcc83acb1b3"
  },
  {
    "url": "/2019/topics/plant-identification-system-ai-ar/",
    "revision": "03cc60d7e8b93a4b26311b8b96046a09"
  },
  {
    "url": "/2019/topics/plug-it-mysql-authentication-windows-pam/",
    "revision": "a3ee7ebd17083d058c5730f7fff0fe50"
  },
  {
    "url": "/2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "50f93e400d7cd09f43822104dd70f4fc"
  },
  {
    "url": "/2019/topics/r-exploratory-data-analysis/",
    "revision": "9f57b9620d294aaaa7ec162321e16a59"
  },
  {
    "url": "/2019/topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "8853f34d7d3370cf5a0339ce9817f3dc"
  },
  {
    "url": "/2019/topics/status-quo-tensorflow-lite/",
    "revision": "e05a9e1902dbf4ffad3113462244730c"
  },
  {
    "url": "/2019/topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "d794964789ffa1c456338265b77a3b53"
  },
  {
    "url": "/2019/topics/vlc-and-open-source-multimedia-news/",
    "revision": "0f13860408962538b2a1b25a6b5563d9"
  },
  {
    "url": "/2019/topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "14aea2d56acf6233fcff3f81d42df9a6"
  },
  {
    "url": "/2019/topics/whats-new-haxe-4/",
    "revision": "2e9ad0572d4945d550d38021e0a2fb2e"
  },
  {
    "url": "/2019/topics/wordpress-search-engine-optimization-wordpress-seo/",
    "revision": "69c812244fa4889e882e31bcdaca1b15"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2019/", new workbox.strategies.NetworkFirst(), 'GET');
