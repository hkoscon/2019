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
    "url": "/2019/096fd654834adceb26ac.js",
    "revision": "dfdd35e59ebce24d92b90c817b9143cf"
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
    "revision": "c9938968ff403928e4671672f0cab0c5"
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
    "url": "/2019/636edb70c330c75e6967.js",
    "revision": "14915d4c88500661b844842c8ce62b7b"
  },
  {
    "url": "/2019/6770773425b5cdb07f95.css",
    "revision": "1c284c5762aaf870b72d55f0c9c89822"
  },
  {
    "url": "/2019/6d5077a7f07ef147615c.css",
    "revision": "df4b7c436dea4b56cfff94a89031318a"
  },
  {
    "url": "/2019/717c603e764d9bf44d2e.js",
    "revision": "411cd0db2d4e6bd16b229a24e103e177"
  },
  {
    "url": "/2019/75fb60194aca88a51377.js",
    "revision": "6a50aeea9a2ed3ecffbbc76cdb8108f6"
  },
  {
    "url": "/2019/7f9d312a9afbb963401d.js",
    "revision": "c569bd92c97c17d4a22764b98aeaf48f"
  },
  {
    "url": "/2019/85681ec083df52666b7b.css",
    "revision": "10d5d691aa0b3533093b57c41687a438"
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
    "url": "/2019/90a8ac5e50c80ad3b015.css",
    "revision": "f57c2bd8adc9249a033a8c3889a4f7ea"
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
    "url": "/2019/about/coc/index.html",
    "revision": "d469efcd1449993a909b50f3a358e897"
  },
  {
    "url": "/2019/about/committee/index.html",
    "revision": "1d632003b3d3c0c799fcfaf8a9427cd3"
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
    "revision": "0bd2cb69fd47d08bad5303d6aa1f14b4"
  },
  {
    "url": "/2019/cfp/index.html",
    "revision": "ace39babeb20e9031a59ae12a1c5c430"
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
    "url": "/2019/e622db410d250b6334a6.js",
    "revision": "d4bc297f20d21fdfeca9a96d5655dfc1"
  },
  {
    "url": "/2019/ebd1ada532a122171362.js",
    "revision": "fb1ec5a88f5af103323c3bce97ff4841"
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
    "revision": "7146bee9edd46bdf6709bd1ff4a2f04b"
  },
  {
    "url": "/2019/timetable/index.html",
    "revision": "10a77db2882fe3c05cebff54dbcd1259"
  },
  {
    "url": "/2019/topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "f0c774e39d31ac590c4a66180f5566c8"
  },
  {
    "url": "/2019/topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "c9f5b652816f21afc3e4e0adf9bbd674"
  },
  {
    "url": "/2019/topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "83fdf5269cb4c97f1ea7d73fdbbd31e6"
  },
  {
    "url": "/2019/topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "6c4c86d1b6b9333bc6a86808dcad53a3"
  },
  {
    "url": "/2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "01b5635c7e4bb029b6511f75f69338ce"
  },
  {
    "url": "/2019/topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "1526b008e7726f6acfb2b95238e11c5f"
  },
  {
    "url": "/2019/topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "8dc5c8670fa0aaa7592476bdb6b91dae"
  },
  {
    "url": "/2019/topics/devops-ansible-native-kubernetes/index.html",
    "revision": "3bf02d796c99d58c8288d204b5d21f91"
  },
  {
    "url": "/2019/topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "accab63255b840ea583956b099fd7ae1"
  },
  {
    "url": "/2019/topics/diy-wealth-management-app/index.html",
    "revision": "5bd964738baf8828870c11f2e497a548"
  },
  {
    "url": "/2019/topics/formal-verification-smart-contract/index.html",
    "revision": "d4ded300d7485e9341ea92e02c0eeb9a"
  },
  {
    "url": "/2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "d738d6296b8e581ab6008983020afb22"
  },
  {
    "url": "/2019/topics/homemade-scientific-clusters/index.html",
    "revision": "93b8c2149a8cf0f8335af43296d5b8e4"
  },
  {
    "url": "/2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "32695ec41f8b4dae44351ed95a427ac4"
  },
  {
    "url": "/2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "3695d49d157f6b3adf984e135c24745c"
  },
  {
    "url": "/2019/topics/index.html",
    "revision": "a84405e482b36719b0687d03f6c0cb28"
  },
  {
    "url": "/2019/topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "304984cea06bdb1576df4a4a7cb03d5f"
  },
  {
    "url": "/2019/topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "79d762f9cac454e52d3ffb8c8ca47871"
  },
  {
    "url": "/2019/topics/introduct-students-open-source-conference/index.html",
    "revision": "1fb5aa19a11042d3833dcaf9b4e20b1c"
  },
  {
    "url": "/2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "c76086050b8e6db43019674b65700e14"
  },
  {
    "url": "/2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "156e171fe51dc680549272bbda2fd4fa"
  },
  {
    "url": "/2019/topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "363f52be3bc5d4580eb91294fdfe5813"
  },
  {
    "url": "/2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "35044a8b2a3b0ad65c615a03512b5c40"
  },
  {
    "url": "/2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "e1ffa43cd2949d6ee3bd931fb8a406bf"
  },
  {
    "url": "/2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "f8eac7b1d849a11327ba7c958bf22ab8"
  },
  {
    "url": "/2019/topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "9ddeddc941eec17c9e2d1ee30c8ae58b"
  },
  {
    "url": "/2019/topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "bff2a527ad23a38691f9d770e559e848"
  },
  {
    "url": "/2019/topics/plant-identification-system-ai-ar/index.html",
    "revision": "bb718ba8685a4e9a2e151425054f33f5"
  },
  {
    "url": "/2019/topics/plug-it-my-sql-authentication-windows-pam/index.html",
    "revision": "8ee8a4e2db679dff7e8498ffd71824d9"
  },
  {
    "url": "/2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "797aa0f6e5801f296cd8376c5ab1bb8e"
  },
  {
    "url": "/2019/topics/r-exploratory-data-analysis/index.html",
    "revision": "3db96fb1b50c60e0739a4150c41b595b"
  },
  {
    "url": "/2019/topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "a3c04e527fdf546fa67187645c1a10d6"
  },
  {
    "url": "/2019/topics/status-quo-tensorflow-lite/index.html",
    "revision": "acbb504e9dba802e8d5e91af6e0563d7"
  },
  {
    "url": "/2019/topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "93b2e9f45fb52e1f08475db549884b34"
  },
  {
    "url": "/2019/topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "2d8ed563fba91f64582f4eb1c7925ff8"
  },
  {
    "url": "/2019/topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "8ba13cbef3c30e9461e98d6443a684d4"
  },
  {
    "url": "/2019/topics/whats-new-haxe-4/index.html",
    "revision": "32f19898e837897198cc4b666f5c5216"
  },
  {
    "url": "/2019/topics/wordpress-seo/index.html",
    "revision": "c915e9d94d09f1d2c42a7dd92a809c28"
  },
  {
    "url": "/2019/about/coc/",
    "revision": "d469efcd1449993a909b50f3a358e897"
  },
  {
    "url": "/2019/about/committee/",
    "revision": "1d632003b3d3c0c799fcfaf8a9427cd3"
  },
  {
    "url": "/2019/cfc/",
    "revision": "0bd2cb69fd47d08bad5303d6aa1f14b4"
  },
  {
    "url": "/2019/cfp/",
    "revision": "ace39babeb20e9031a59ae12a1c5c430"
  },
  {
    "url": "/2019/",
    "revision": "7146bee9edd46bdf6709bd1ff4a2f04b"
  },
  {
    "url": "/2019/timetable/",
    "revision": "10a77db2882fe3c05cebff54dbcd1259"
  },
  {
    "url": "/2019/topics/8-essential-steps-secure-your-mysql/",
    "revision": "f0c774e39d31ac590c4a66180f5566c8"
  },
  {
    "url": "/2019/topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "c9f5b652816f21afc3e4e0adf9bbd674"
  },
  {
    "url": "/2019/topics/build-minimal-dbms-scratch-rust/",
    "revision": "83fdf5269cb4c97f1ea7d73fdbbd31e6"
  },
  {
    "url": "/2019/topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "6c4c86d1b6b9333bc6a86808dcad53a3"
  },
  {
    "url": "/2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "01b5635c7e4bb029b6511f75f69338ce"
  },
  {
    "url": "/2019/topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "1526b008e7726f6acfb2b95238e11c5f"
  },
  {
    "url": "/2019/topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "8dc5c8670fa0aaa7592476bdb6b91dae"
  },
  {
    "url": "/2019/topics/devops-ansible-native-kubernetes/",
    "revision": "3bf02d796c99d58c8288d204b5d21f91"
  },
  {
    "url": "/2019/topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "accab63255b840ea583956b099fd7ae1"
  },
  {
    "url": "/2019/topics/diy-wealth-management-app/",
    "revision": "5bd964738baf8828870c11f2e497a548"
  },
  {
    "url": "/2019/topics/formal-verification-smart-contract/",
    "revision": "d4ded300d7485e9341ea92e02c0eeb9a"
  },
  {
    "url": "/2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "d738d6296b8e581ab6008983020afb22"
  },
  {
    "url": "/2019/topics/homemade-scientific-clusters/",
    "revision": "93b8c2149a8cf0f8335af43296d5b8e4"
  },
  {
    "url": "/2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "32695ec41f8b4dae44351ed95a427ac4"
  },
  {
    "url": "/2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "3695d49d157f6b3adf984e135c24745c"
  },
  {
    "url": "/2019/topics/",
    "revision": "a84405e482b36719b0687d03f6c0cb28"
  },
  {
    "url": "/2019/topics/introducing-open-technology-hong-kong-education/",
    "revision": "304984cea06bdb1576df4a4a7cb03d5f"
  },
  {
    "url": "/2019/topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "79d762f9cac454e52d3ffb8c8ca47871"
  },
  {
    "url": "/2019/topics/introduct-students-open-source-conference/",
    "revision": "1fb5aa19a11042d3833dcaf9b4e20b1c"
  },
  {
    "url": "/2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "c76086050b8e6db43019674b65700e14"
  },
  {
    "url": "/2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "156e171fe51dc680549272bbda2fd4fa"
  },
  {
    "url": "/2019/topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "363f52be3bc5d4580eb91294fdfe5813"
  },
  {
    "url": "/2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "35044a8b2a3b0ad65c615a03512b5c40"
  },
  {
    "url": "/2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "e1ffa43cd2949d6ee3bd931fb8a406bf"
  },
  {
    "url": "/2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "f8eac7b1d849a11327ba7c958bf22ab8"
  },
  {
    "url": "/2019/topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "9ddeddc941eec17c9e2d1ee30c8ae58b"
  },
  {
    "url": "/2019/topics/pim25-crowdsourced-weather-data-project/",
    "revision": "bff2a527ad23a38691f9d770e559e848"
  },
  {
    "url": "/2019/topics/plant-identification-system-ai-ar/",
    "revision": "bb718ba8685a4e9a2e151425054f33f5"
  },
  {
    "url": "/2019/topics/plug-it-my-sql-authentication-windows-pam/",
    "revision": "8ee8a4e2db679dff7e8498ffd71824d9"
  },
  {
    "url": "/2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "797aa0f6e5801f296cd8376c5ab1bb8e"
  },
  {
    "url": "/2019/topics/r-exploratory-data-analysis/",
    "revision": "3db96fb1b50c60e0739a4150c41b595b"
  },
  {
    "url": "/2019/topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "a3c04e527fdf546fa67187645c1a10d6"
  },
  {
    "url": "/2019/topics/status-quo-tensorflow-lite/",
    "revision": "acbb504e9dba802e8d5e91af6e0563d7"
  },
  {
    "url": "/2019/topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "93b2e9f45fb52e1f08475db549884b34"
  },
  {
    "url": "/2019/topics/vlc-and-open-source-multimedia-news/",
    "revision": "2d8ed563fba91f64582f4eb1c7925ff8"
  },
  {
    "url": "/2019/topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "8ba13cbef3c30e9461e98d6443a684d4"
  },
  {
    "url": "/2019/topics/whats-new-haxe-4/",
    "revision": "32f19898e837897198cc4b666f5c5216"
  },
  {
    "url": "/2019/topics/wordpress-seo/",
    "revision": "c915e9d94d09f1d2c42a7dd92a809c28"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2019/", new workbox.strategies.NetworkFirst(), 'GET');
