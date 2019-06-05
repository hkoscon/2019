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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

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
    "url": "/2019//06677654f4cd4e19dcc6.js",
    "revision": "3a28ee57e71849a1abc87b8291ef69c1"
  },
  {
    "url": "/2019//0a7007e0ef452862c6dc.css",
    "revision": "48bebad343b53e94a957a80019e523ec"
  },
  {
    "url": "/2019//0c7a307ce3868101e58c.js",
    "revision": "cb93dbd78a1ba49e4af55d45ff4a17de"
  },
  {
    "url": "/2019//13a5e02fb610dfaa915a.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/2019//13b09248b961e9a3d3cf.js",
    "revision": "49936f8fa24c84c365e587ca06f822ba"
  },
  {
    "url": "/2019//14b191276c210d6e7e11.js",
    "revision": "2eee5f10bcb9e8d81f32ecb527df82df"
  },
  {
    "url": "/2019//159fb2a58774fa600f00.js",
    "revision": "761228e9e18046d7e020b2f2e8534850"
  },
  {
    "url": "/2019//200.html",
    "revision": "b2dc5deae6532181376dfa91c31dc2cb"
  },
  {
    "url": "/2019//28026f771b814d34c261.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/2019//36c821bbb38fe01e8ee9.css",
    "revision": "89ee1381dc18ed5e54bdb19d4c8e6c8e"
  },
  {
    "url": "/2019//37c8017205573a1be8f0.css",
    "revision": "56a413c7db34468fee0e33c47e4717a2"
  },
  {
    "url": "/2019//385906eec9e50c09c0bc.js",
    "revision": "b4110250a9f3d2f64f6b128f74764422"
  },
  {
    "url": "/2019//3d8e9d0a28cec342e837.css",
    "revision": "92ac8a848037992b93004565ee7c018b"
  },
  {
    "url": "/2019//40a9a230242fd8d28d7b.js",
    "revision": "a00a1c8a308c346ce85ee77751a3b6be"
  },
  {
    "url": "/2019//45af625e7193cf814cba.css",
    "revision": "7fbf42c8240a9221b921fcfa5be1c28a"
  },
  {
    "url": "/2019//45da2d9ed774f48f93b7.css",
    "revision": "a7a7bcc5069a2d30051021536ca5ee96"
  },
  {
    "url": "/2019//4dd83e329df54977296e.css",
    "revision": "33c5ac4647794a2b2151cedbc8697921"
  },
  {
    "url": "/2019//5285de94b0245d2587b8.js",
    "revision": "74dec999c15fe2b2b4caeb5550b183f2"
  },
  {
    "url": "/2019//533e7f0c44353f502a05.js",
    "revision": "b2c1c41d7c5a18f1fa22f202f7361532"
  },
  {
    "url": "/2019//549a5598e102b8073ac0.js",
    "revision": "96ae882542cf3d0e8070a1a62c07bdde"
  },
  {
    "url": "/2019//580093837ece7dd06690.js",
    "revision": "bd7b773e9ed8c2bc9275b9d6bf457b1d"
  },
  {
    "url": "/2019//65a468635d7e2bbd7bf8.css",
    "revision": "668bec8ed029aa41e4edfd130c04467e"
  },
  {
    "url": "/2019//6a24f7ed8227bb377704.js",
    "revision": "17ea3adfb99a224ef2505662d2ad11a3"
  },
  {
    "url": "/2019//6c47ae165de142f06ac4.js",
    "revision": "51bd5d70babe6f662cde86fa710f0232"
  },
  {
    "url": "/2019//6d5077a7f07ef147615c.css",
    "revision": "df4b7c436dea4b56cfff94a89031318a"
  },
  {
    "url": "/2019//73940212a2bc2b784a9e.js",
    "revision": "f57197cd0edf7607c8e28c26f7b177c1"
  },
  {
    "url": "/2019//77ce10b51f563326a23f.css",
    "revision": "2ec47afeca7210758bb8a7b6fc139634"
  },
  {
    "url": "/2019//8192025c15e3cc812a22.js",
    "revision": "307c5186983c1dc2c5b25aed939e0ab7"
  },
  {
    "url": "/2019//884aef19c7edaf5b65c7.js",
    "revision": "bb4be4ff9360112867443041d348787d"
  },
  {
    "url": "/2019//8f8d7852c74821cf39b3.css",
    "revision": "62a1268e43bd720d34d317ada4cf02a6"
  },
  {
    "url": "/2019//9571043b8539bb83ed17.css",
    "revision": "5060781f96b359aaad62ccacf5c5e926"
  },
  {
    "url": "/2019//96e6fac2497d1a8a71fe.css",
    "revision": "43d5405ab0f4bc41a7452dbc00d25e15"
  },
  {
    "url": "/2019//about/coc/index.html",
    "revision": "fda381da8b33cd018b837de75fc0c4e3"
  },
  {
    "url": "/2019//about/conference/index.html",
    "revision": "bffe8806218c6ef52199c94ccc970016"
  },
  {
    "url": "/2019//about/organizers/index.html",
    "revision": "8dce820874f101cba8b7f5b9776ac7d6"
  },
  {
    "url": "/2019//about/volunteers/index.html",
    "revision": "a852f44d2d82aebf817088348118ab49"
  },
  {
    "url": "/2019//b30c6329d2468cf17153.css",
    "revision": "e68ed3e877a82ead18777640c6058001"
  },
  {
    "url": "/2019//bae463d58234ba7ea664.js",
    "revision": "5e90a6f5aa41fcad9be73fac697de6cf"
  },
  {
    "url": "/2019//bb2de4e8c52eba84f542.js",
    "revision": "32a2ddbbf1c254f2eccfa3e634b46756"
  },
  {
    "url": "/2019//c265564cf103152868dd.css",
    "revision": "bbeafe734fe483a531602de7ec484b18"
  },
  {
    "url": "/2019//cfc/index.html",
    "revision": "3ea9e973fbdb3d592b73c1e6351bbdc1"
  },
  {
    "url": "/2019//cfced533df7ad810d41d.js",
    "revision": "604ad2f3884a776a0bbd39d3508571df"
  },
  {
    "url": "/2019//cfp/index.html",
    "revision": "8ba93ae2e3504f57439730222e0ca012"
  },
  {
    "url": "/2019//d220e64c3129bdaaa71b.js",
    "revision": "8c7d351823ec5c95a81ae68be66fb427"
  },
  {
    "url": "/2019//d4a6875306e57e9572e4.js",
    "revision": "d6f416501cceeb5d8d4a165895b91e67"
  },
  {
    "url": "/2019//dc7c7bec2bec14e04999.js",
    "revision": "a74133295d292ec8004487e5229a39f0"
  },
  {
    "url": "/2019//e19ef98fc74386fdb495.js",
    "revision": "64c1a9fb2b6598b5f11bb8175cc5b3b0"
  },
  {
    "url": "/2019//f11981a41b6e1bda9c22.js",
    "revision": "1e3c89df1e694d8c4bae3712ff652423"
  },
  {
    "url": "/2019//f3915beb94fe7fe3a418.js",
    "revision": "be9d95369c04fea515fec2f3b8b781b8"
  },
  {
    "url": "/2019//fe95ce78128f694c9829.js",
    "revision": "08d9b226e713676990ad4fa70707175d"
  },
  {
    "url": "/2019//images/banner.jpg",
    "revision": "376ac4802d3c925b223330562ff4654e"
  },
  {
    "url": "/2019//images/bg.jpg",
    "revision": "fbc85c77524af2f3694fcd7ce2abc048"
  },
  {
    "url": "/2019//images/volunteer/0355e6c99e405f2d650a048f93849e0a.jpg",
    "revision": "f2b53740fd1d3af56ae27da3a98f1f8b"
  },
  {
    "url": "/2019//images/volunteer/318824b7d24aa53a1550c3fdcc3cdaad.jpg",
    "revision": "718f2353e9a4a2fc0f69966ff9c3f00e"
  },
  {
    "url": "/2019//images/volunteer/441a4f7b4e3fc43c174c9018a8fe88f3.jpg",
    "revision": "559c8ad17d71fcc1a17855be0ede9e22"
  },
  {
    "url": "/2019//images/volunteer/5af7cdeb38835c964eeadcb6c8f2c32c.jpg",
    "revision": "ddf79060560d8a397533f628e4ea9031"
  },
  {
    "url": "/2019//images/volunteer/7871c0482c9d274d68fe1d056a7cce8b.jpg",
    "revision": "81670649ca0068b39c53d2e42b90545c"
  },
  {
    "url": "/2019//images/volunteer/824010d0d7fcf80d2f629309de68becb.jpg",
    "revision": "3c8dcde9b5dead1c6b9f242d762ea194"
  },
  {
    "url": "/2019//images/volunteer/ac09c01ecec26e63726faa64ca59fa30.jpg",
    "revision": "52910f14529df88f419b1ff33be78533"
  },
  {
    "url": "/2019//images/volunteer/b402043e9d8202b0b252eca0a9e5639e.jpg",
    "revision": "0d09e273188248b025e5863d54621aa0"
  },
  {
    "url": "/2019//images/volunteer/c63e3dcf23114e4769ac00c16617d1e9.jpg",
    "revision": "8ed0d10320039ed20e70de248003c340"
  },
  {
    "url": "/2019//images/volunteer/cc93adf96a1b6d795983ede8cb3d111b.jpg",
    "revision": "59b8d98dc974c797f7ddefba6943b2b6"
  },
  {
    "url": "/2019//images/volunteer/d22e8f6bf9c2ce9b185c270a442e288a.jpg",
    "revision": "be8f9bae79059fff2c7d6989509de383"
  },
  {
    "url": "/2019//images/volunteer/e11966ad5e195fef25bf0bd163fb7a98.jpg",
    "revision": "d663ee0d529cbd942b4e1a7e674cf68f"
  },
  {
    "url": "/2019//images/volunteer/fa29d4359d8c420eec9b84532765dfec.jpg",
    "revision": "7c31719da41196175814289839bd8a57"
  },
  {
    "url": "/2019//img/eb90f7f.png",
    "revision": "eb90f7fbc71ca73d9d3ab9d57657bbc2"
  },
  {
    "url": "/2019//index.html",
    "revision": "a7b06011cb00b538ec4e7b070d5682bb"
  },
  {
    "url": "/2019//sponsors/index.html",
    "revision": "97eb6c4333b2c3a3d4ff016bb66d0a18"
  },
  {
    "url": "/2019//timetable/index.html",
    "revision": "b29322d89f075bb026ebbd46b40915e8"
  },
  {
    "url": "/2019//topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "7f0ca0bf517af01545bb50374d31f255"
  },
  {
    "url": "/2019//topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "e9be6c6e358778cb6b086d7d7fec38e5"
  },
  {
    "url": "/2019//topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "a48e708d1e3a784b1891df9e6f5392a9"
  },
  {
    "url": "/2019//topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "cb5f55895f2855bf6de4494bbce49b66"
  },
  {
    "url": "/2019//topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "b0f8da92caf35b012148f399d3a0fd99"
  },
  {
    "url": "/2019//topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "b2dbf2d269c923bc55a259e67182004d"
  },
  {
    "url": "/2019//topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "2ef55a4d83c3dfc903d80e9bfd4d1f55"
  },
  {
    "url": "/2019//topics/devops-ansible-native-kubernetes/index.html",
    "revision": "1329ea97b0a390e7aae54c9fb7f33c26"
  },
  {
    "url": "/2019//topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "721c8ea2f24004194efdf0c8c3b45082"
  },
  {
    "url": "/2019//topics/diy-wealth-management-app/index.html",
    "revision": "f39efe3d2ebcef1ca2c3bffd9f6fafe9"
  },
  {
    "url": "/2019//topics/ethereum-and-enterprise-corporate-strategies-open-source-blockchain-deployments/index.html",
    "revision": "2eefdac704219d5293e7b0dc4134d72e"
  },
  {
    "url": "/2019//topics/formal-verification-smart-contract/index.html",
    "revision": "27e86adf086791954ce63da0ad29827a"
  },
  {
    "url": "/2019//topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "0bc6cb21137ea86859b7574385d11c71"
  },
  {
    "url": "/2019//topics/hk01-scales-open-sources-and-event-driven-architecture/index.html",
    "revision": "3a824c62c2cfb2677e8ac97824c4a419"
  },
  {
    "url": "/2019//topics/homemade-scientific-clusters/index.html",
    "revision": "c834564564a0655b40ed5cf0b74f0835"
  },
  {
    "url": "/2019//topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "3fb76f62e4cc85c6db0127272bc8fb5f"
  },
  {
    "url": "/2019//topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "39f4424542a88136aa4f940d539b804d"
  },
  {
    "url": "/2019//topics/index.html",
    "revision": "aa9a337b68e4a5d86e5c441eb24c0385"
  },
  {
    "url": "/2019//topics/innovation-and-open-source/index.html",
    "revision": "ec44aececc88701048a8f29793770867"
  },
  {
    "url": "/2019//topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "0d95556b7774112d531e195c4cc3e48b"
  },
  {
    "url": "/2019//topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "1fd80b892ff609da7d09dbcb0e746674"
  },
  {
    "url": "/2019//topics/introduction-nginx-unit-nginx-web-application-server/index.html",
    "revision": "316a5e3b09cb5cf33faf92b7d561a1a7"
  },
  {
    "url": "/2019//topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "845e554539bebac23d57327f99b2cc72"
  },
  {
    "url": "/2019//topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "ca95c0480230284aec98e59618580d2a"
  },
  {
    "url": "/2019//topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "da069775a60c237461b7fce0b6dd64ba"
  },
  {
    "url": "/2019//topics/lighting-talks/index.html",
    "revision": "3f38623cb460a95da73e916016df2bf6"
  },
  {
    "url": "/2019//topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "04195ab86946bf6591c59bbf46079e1f"
  },
  {
    "url": "/2019//topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "b048ad44be195763b774619c6303f3f4"
  },
  {
    "url": "/2019//topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "33d89709f1417b657698f02d5d4cabc6"
  },
  {
    "url": "/2019//topics/now-and-future-open-source-hong-kong-community-development/index.html",
    "revision": "bd9c56bc90fbc1c85edfb89a61d9ff40"
  },
  {
    "url": "/2019//topics/open-hardware-using-cloud/index.html",
    "revision": "55c52dac87df2ab4ca2c21d2a05e56a1"
  },
  {
    "url": "/2019//topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "e8530cf363dfdcbcf6b421d4cc9193d3"
  },
  {
    "url": "/2019//topics/openfaas-vs-fission-our-experiences-building-serverless-platform-app-development/index.html",
    "revision": "2188e65dfe594fed305a76ad6ea84e6c"
  },
  {
    "url": "/2019//topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "42eb373ef3d8b23b3859e8efde94efce"
  },
  {
    "url": "/2019//topics/plant-identification-system-ai-ar/index.html",
    "revision": "1c9d5514cb5dfd4048bca1b9e7c651ec"
  },
  {
    "url": "/2019//topics/plug-it-mysql-authentication-windows-pam/index.html",
    "revision": "fb1ba15e8b7ff67c86e1231b4cd4d2a3"
  },
  {
    "url": "/2019//topics/predicting-nba-results-tensorflow/index.html",
    "revision": "20f17a4585dbe994aeaa1d4356c38793"
  },
  {
    "url": "/2019//topics/pushing-upstream/index.html",
    "revision": "c891b58d400e30194ec5115d5e402269"
  },
  {
    "url": "/2019//topics/r-exploratory-data-analysis/index.html",
    "revision": "d83b0b17e8d804a572a6de8c918ddf4d"
  },
  {
    "url": "/2019//topics/random-number-generation-simulation-blockchain-and-cryptography/index.html",
    "revision": "b9751060ecad43dc72167c0a143cd96f"
  },
  {
    "url": "/2019//topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "991899b1f362937c94d0fc595f479880"
  },
  {
    "url": "/2019//topics/run-programs-faster-anywhere-graalvm/index.html",
    "revision": "c9b57fd60cfd5f31ba6b27a33bfa62eb"
  },
  {
    "url": "/2019//topics/status-quo-tensorflow-lite/index.html",
    "revision": "5e7dfc34ccd183a319a2701cddd8468f"
  },
  {
    "url": "/2019//topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "1b4b7e46cc635536e4e503c4e2bf5457"
  },
  {
    "url": "/2019//topics/user-intent-steers-ai-powered-search/index.html",
    "revision": "c926455947cac859417fb91b56d76c51"
  },
  {
    "url": "/2019//topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "68c462c6efec4b1aee99261d2922b543"
  },
  {
    "url": "/2019//topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "8c8c3ff31ea04c5029a2b6f65c9f8dc1"
  },
  {
    "url": "/2019//topics/whats-new-freebsd-120/index.html",
    "revision": "52e64417c622d375a8e22f853f5e18db"
  },
  {
    "url": "/2019//topics/whats-new-haxe-4/index.html",
    "revision": "e28eda96c7abe921d4d247d126b716f9"
  },
  {
    "url": "/2019//topics/wordpress-search-engine-optimization-wordpress-seo/index.html",
    "revision": "85b2d8ca2ba7b45b84fe812d07c967b5"
  },
  {
    "url": "/2019//about/coc/",
    "revision": "fda381da8b33cd018b837de75fc0c4e3"
  },
  {
    "url": "/2019//about/conference/",
    "revision": "bffe8806218c6ef52199c94ccc970016"
  },
  {
    "url": "/2019//about/organizers/",
    "revision": "8dce820874f101cba8b7f5b9776ac7d6"
  },
  {
    "url": "/2019//about/volunteers/",
    "revision": "a852f44d2d82aebf817088348118ab49"
  },
  {
    "url": "/2019//cfc/",
    "revision": "3ea9e973fbdb3d592b73c1e6351bbdc1"
  },
  {
    "url": "/2019//cfp/",
    "revision": "8ba93ae2e3504f57439730222e0ca012"
  },
  {
    "url": "/2019//",
    "revision": "a7b06011cb00b538ec4e7b070d5682bb"
  },
  {
    "url": "/2019//sponsors/",
    "revision": "97eb6c4333b2c3a3d4ff016bb66d0a18"
  },
  {
    "url": "/2019//timetable/",
    "revision": "b29322d89f075bb026ebbd46b40915e8"
  },
  {
    "url": "/2019//topics/8-essential-steps-secure-your-mysql/",
    "revision": "7f0ca0bf517af01545bb50374d31f255"
  },
  {
    "url": "/2019//topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "e9be6c6e358778cb6b086d7d7fec38e5"
  },
  {
    "url": "/2019//topics/build-minimal-dbms-scratch-rust/",
    "revision": "a48e708d1e3a784b1891df9e6f5392a9"
  },
  {
    "url": "/2019//topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "cb5f55895f2855bf6de4494bbce49b66"
  },
  {
    "url": "/2019//topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "b0f8da92caf35b012148f399d3a0fd99"
  },
  {
    "url": "/2019//topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "b2dbf2d269c923bc55a259e67182004d"
  },
  {
    "url": "/2019//topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "2ef55a4d83c3dfc903d80e9bfd4d1f55"
  },
  {
    "url": "/2019//topics/devops-ansible-native-kubernetes/",
    "revision": "1329ea97b0a390e7aae54c9fb7f33c26"
  },
  {
    "url": "/2019//topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "721c8ea2f24004194efdf0c8c3b45082"
  },
  {
    "url": "/2019//topics/diy-wealth-management-app/",
    "revision": "f39efe3d2ebcef1ca2c3bffd9f6fafe9"
  },
  {
    "url": "/2019//topics/ethereum-and-enterprise-corporate-strategies-open-source-blockchain-deployments/",
    "revision": "2eefdac704219d5293e7b0dc4134d72e"
  },
  {
    "url": "/2019//topics/formal-verification-smart-contract/",
    "revision": "27e86adf086791954ce63da0ad29827a"
  },
  {
    "url": "/2019//topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "0bc6cb21137ea86859b7574385d11c71"
  },
  {
    "url": "/2019//topics/hk01-scales-open-sources-and-event-driven-architecture/",
    "revision": "3a824c62c2cfb2677e8ac97824c4a419"
  },
  {
    "url": "/2019//topics/homemade-scientific-clusters/",
    "revision": "c834564564a0655b40ed5cf0b74f0835"
  },
  {
    "url": "/2019//topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "3fb76f62e4cc85c6db0127272bc8fb5f"
  },
  {
    "url": "/2019//topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "39f4424542a88136aa4f940d539b804d"
  },
  {
    "url": "/2019//topics/",
    "revision": "aa9a337b68e4a5d86e5c441eb24c0385"
  },
  {
    "url": "/2019//topics/innovation-and-open-source/",
    "revision": "ec44aececc88701048a8f29793770867"
  },
  {
    "url": "/2019//topics/introducing-open-technology-hong-kong-education/",
    "revision": "0d95556b7774112d531e195c4cc3e48b"
  },
  {
    "url": "/2019//topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "1fd80b892ff609da7d09dbcb0e746674"
  },
  {
    "url": "/2019//topics/introduction-nginx-unit-nginx-web-application-server/",
    "revision": "316a5e3b09cb5cf33faf92b7d561a1a7"
  },
  {
    "url": "/2019//topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "845e554539bebac23d57327f99b2cc72"
  },
  {
    "url": "/2019//topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "ca95c0480230284aec98e59618580d2a"
  },
  {
    "url": "/2019//topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "da069775a60c237461b7fce0b6dd64ba"
  },
  {
    "url": "/2019//topics/lighting-talks/",
    "revision": "3f38623cb460a95da73e916016df2bf6"
  },
  {
    "url": "/2019//topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "04195ab86946bf6591c59bbf46079e1f"
  },
  {
    "url": "/2019//topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "b048ad44be195763b774619c6303f3f4"
  },
  {
    "url": "/2019//topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "33d89709f1417b657698f02d5d4cabc6"
  },
  {
    "url": "/2019//topics/now-and-future-open-source-hong-kong-community-development/",
    "revision": "bd9c56bc90fbc1c85edfb89a61d9ff40"
  },
  {
    "url": "/2019//topics/open-hardware-using-cloud/",
    "revision": "55c52dac87df2ab4ca2c21d2a05e56a1"
  },
  {
    "url": "/2019//topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "e8530cf363dfdcbcf6b421d4cc9193d3"
  },
  {
    "url": "/2019//topics/openfaas-vs-fission-our-experiences-building-serverless-platform-app-development/",
    "revision": "2188e65dfe594fed305a76ad6ea84e6c"
  },
  {
    "url": "/2019//topics/pim25-crowdsourced-weather-data-project/",
    "revision": "42eb373ef3d8b23b3859e8efde94efce"
  },
  {
    "url": "/2019//topics/plant-identification-system-ai-ar/",
    "revision": "1c9d5514cb5dfd4048bca1b9e7c651ec"
  },
  {
    "url": "/2019//topics/plug-it-mysql-authentication-windows-pam/",
    "revision": "fb1ba15e8b7ff67c86e1231b4cd4d2a3"
  },
  {
    "url": "/2019//topics/predicting-nba-results-tensorflow/",
    "revision": "20f17a4585dbe994aeaa1d4356c38793"
  },
  {
    "url": "/2019//topics/pushing-upstream/",
    "revision": "c891b58d400e30194ec5115d5e402269"
  },
  {
    "url": "/2019//topics/r-exploratory-data-analysis/",
    "revision": "d83b0b17e8d804a572a6de8c918ddf4d"
  },
  {
    "url": "/2019//topics/random-number-generation-simulation-blockchain-and-cryptography/",
    "revision": "b9751060ecad43dc72167c0a143cd96f"
  },
  {
    "url": "/2019//topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "991899b1f362937c94d0fc595f479880"
  },
  {
    "url": "/2019//topics/run-programs-faster-anywhere-graalvm/",
    "revision": "c9b57fd60cfd5f31ba6b27a33bfa62eb"
  },
  {
    "url": "/2019//topics/status-quo-tensorflow-lite/",
    "revision": "5e7dfc34ccd183a319a2701cddd8468f"
  },
  {
    "url": "/2019//topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "1b4b7e46cc635536e4e503c4e2bf5457"
  },
  {
    "url": "/2019//topics/user-intent-steers-ai-powered-search/",
    "revision": "c926455947cac859417fb91b56d76c51"
  },
  {
    "url": "/2019//topics/vlc-and-open-source-multimedia-news/",
    "revision": "68c462c6efec4b1aee99261d2922b543"
  },
  {
    "url": "/2019//topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "8c8c3ff31ea04c5029a2b6f65c9f8dc1"
  },
  {
    "url": "/2019//topics/whats-new-freebsd-120/",
    "revision": "52e64417c622d375a8e22f853f5e18db"
  },
  {
    "url": "/2019//topics/whats-new-haxe-4/",
    "revision": "e28eda96c7abe921d4d247d126b716f9"
  },
  {
    "url": "/2019//topics/wordpress-search-engine-optimization-wordpress-seo/",
    "revision": "85b2d8ca2ba7b45b84fe812d07c967b5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2019//", new workbox.strategies.NetworkFirst(), 'GET');
