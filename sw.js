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
    "url": "/2019//06539fb339756130601f.js",
    "revision": "df6afd3b4b8515a260d56dcd99a3e39b"
  },
  {
    "url": "/2019//06722de5b33762f50f68.js",
    "revision": "724829983fef69c0537ada4e4794eddf"
  },
  {
    "url": "/2019//0a7007e0ef452862c6dc.css",
    "revision": "48bebad343b53e94a957a80019e523ec"
  },
  {
    "url": "/2019//13a5e02fb610dfaa915a.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/2019//200.html",
    "revision": "bf67d0fe223eb0c88f13a97235760b34"
  },
  {
    "url": "/2019//28026f771b814d34c261.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/2019//2c57310888a2cd366ed8.js",
    "revision": "4610264abdda83e62248a1425338d50b"
  },
  {
    "url": "/2019//2ed3acf125202d45de8e.js",
    "revision": "808d611ce4773cbc0cd9d0e75c552a37"
  },
  {
    "url": "/2019//2f7ae61d000d668e8e12.js",
    "revision": "5033118dda4289b42450058e7836d656"
  },
  {
    "url": "/2019//3094190d269f3dc44186.js",
    "revision": "c9f1d7ada7723d19af08da111506a191"
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
    "url": "/2019//3d8e9d0a28cec342e837.css",
    "revision": "92ac8a848037992b93004565ee7c018b"
  },
  {
    "url": "/2019//40829b654df95d9faf0a.js",
    "revision": "0cc3878c64cfc310f6d88d39c669c138"
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
    "url": "/2019//46470fbcc7ee68b397a9.js",
    "revision": "6640835d93f16b752b1d6456cea0e6a5"
  },
  {
    "url": "/2019//4dd83e329df54977296e.css",
    "revision": "33c5ac4647794a2b2151cedbc8697921"
  },
  {
    "url": "/2019//547a081fe0f5ddcc4e35.js",
    "revision": "4ef97a2f75e5c771606c976edc92f608"
  },
  {
    "url": "/2019//5e1bd858b205deccaadf.js",
    "revision": "72f99eb1a784be50797c81362e1fff68"
  },
  {
    "url": "/2019//5fcb9f5b8abe19b2a570.js",
    "revision": "ba0d45a160f87e54390134651530c324"
  },
  {
    "url": "/2019//61a8713b583786cfffd5.js",
    "revision": "79fbf20063caaf044c61943e645ccc81"
  },
  {
    "url": "/2019//657cc75d3b1dc3832b27.js",
    "revision": "011b4480452b1fb4730c2bad67d3c021"
  },
  {
    "url": "/2019//65a468635d7e2bbd7bf8.css",
    "revision": "668bec8ed029aa41e4edfd130c04467e"
  },
  {
    "url": "/2019//6d5077a7f07ef147615c.css",
    "revision": "df4b7c436dea4b56cfff94a89031318a"
  },
  {
    "url": "/2019//6fa6bf5d181c66b3045f.js",
    "revision": "e37e040583d2601eea354dc5aea4a29d"
  },
  {
    "url": "/2019//757d55efc614a45d3cf3.js",
    "revision": "79090199009f7e2296f4bd0edf8e1fd1"
  },
  {
    "url": "/2019//75fc98b74f7faca952b5.js",
    "revision": "ff8da63753b59d195abd851d7c385f06"
  },
  {
    "url": "/2019//77ce10b51f563326a23f.css",
    "revision": "2ec47afeca7210758bb8a7b6fc139634"
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
    "url": "/2019//92950765ce6ea67930b1.js",
    "revision": "d327a2c8a45c3a94a0f987509d08a287"
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
    "url": "/2019//a932f7f7bcf5aafff7a2.js",
    "revision": "937984266d58900a9ed86e408720715c"
  },
  {
    "url": "/2019//about/coc/index.html",
    "revision": "83ad072f3ba021d302d6ce6a865295a4"
  },
  {
    "url": "/2019//about/conference/index.html",
    "revision": "4b6e0e46dfdbe622174df68f927e9079"
  },
  {
    "url": "/2019//about/organizers/index.html",
    "revision": "06be65465bf2874ac298dfee3c05a298"
  },
  {
    "url": "/2019//about/volunteers/index.html",
    "revision": "5fa15b6f51670ea3f28ddb9f347afe48"
  },
  {
    "url": "/2019//b3895689bc9adb954470.js",
    "revision": "ece7c474f2ac4ed75253f1c5f08884dc"
  },
  {
    "url": "/2019//b463e1bee1ed7a517473.js",
    "revision": "7f155e7b933f51df4cbe793951b20cac"
  },
  {
    "url": "/2019//c265564cf103152868dd.css",
    "revision": "bbeafe734fe483a531602de7ec484b18"
  },
  {
    "url": "/2019//c55b29f549df819f2699.js",
    "revision": "8c33391f01a81c58b8296359d8db5082"
  },
  {
    "url": "/2019//cfc/index.html",
    "revision": "5dea197d78b6c792ffa543197432057b"
  },
  {
    "url": "/2019//cfp/index.html",
    "revision": "8f645f702ae110d826ae78b267f46f8a"
  },
  {
    "url": "/2019//d833b0fcc79baed1292d.js",
    "revision": "9c447747fd6c0725b94906ae1dcdbdf0"
  },
  {
    "url": "/2019//dac3888e431744bdeba0.js",
    "revision": "f329d105a56de99458dc5cd0ea15aafd"
  },
  {
    "url": "/2019//f3e80f53e49f07debcf6.js",
    "revision": "ca905d81fd25214f7a5e2a9d8048c8a9"
  },
  {
    "url": "/2019//f84284c96a21f393149b.js",
    "revision": "6351f2296afa6818703f7d18b8fbb156"
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
    "revision": "6a9cc8dc2d1d38d79aed05f0cb85b9e8"
  },
  {
    "url": "/2019//sponsors/index.html",
    "revision": "02deba9d190275472003a555e8d8bf98"
  },
  {
    "url": "/2019//timetable/index.html",
    "revision": "a2e17f5ebd7f9fd7834c8dd67fe5f6d6"
  },
  {
    "url": "/2019//topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "9c71ef740f04a724e6558941c95f2609"
  },
  {
    "url": "/2019//topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "86fcbccaece753768472038dba16ee3d"
  },
  {
    "url": "/2019//topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "e2a6c9a263ac74f04c1439bf2059eabe"
  },
  {
    "url": "/2019//topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "40b97d3fa2c8c7f63d576c92b62c6730"
  },
  {
    "url": "/2019//topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "c82e435248b77fe56a29bd96b2aaaedd"
  },
  {
    "url": "/2019//topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "19682d9df830b7744efb108b011a956f"
  },
  {
    "url": "/2019//topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "aa5000336e42a46898d52ac5c2211995"
  },
  {
    "url": "/2019//topics/devops-ansible-native-kubernetes/index.html",
    "revision": "c96b35fdb88d2132c50160ca4567343c"
  },
  {
    "url": "/2019//topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "02da10d42a85c5d4fa8042ff3ea8c8b4"
  },
  {
    "url": "/2019//topics/diy-wealth-management-app/index.html",
    "revision": "f24d9c4f2c847f87fc463f5c7546b517"
  },
  {
    "url": "/2019//topics/formal-verification-smart-contract/index.html",
    "revision": "b773bcfe02f1fe8114e3c3cb643301fb"
  },
  {
    "url": "/2019//topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "2c52ba0b02b45617b64236fe8183b23a"
  },
  {
    "url": "/2019//topics/homemade-scientific-clusters/index.html",
    "revision": "2e7b5108f4559876b1f30fc019cbd72b"
  },
  {
    "url": "/2019//topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "4b09d083f39934a417597d0e83e02ba1"
  },
  {
    "url": "/2019//topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "9298d9561144085049e7b7958e265568"
  },
  {
    "url": "/2019//topics/index.html",
    "revision": "54a59b1fe650f027f60c3d3da189b17f"
  },
  {
    "url": "/2019//topics/innovation-and-open-source/index.html",
    "revision": "bc24aba4d4f42af21aca5992e15e69cb"
  },
  {
    "url": "/2019//topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "1186d87213e3b2f22f0499cd01f33884"
  },
  {
    "url": "/2019//topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "86b8e9271e5ccd6283c78dfd4bcec459"
  },
  {
    "url": "/2019//topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "56a684808d9d75dcac6489f0b8bb46d0"
  },
  {
    "url": "/2019//topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "4259af2dc2e36a3581d387e090cce11a"
  },
  {
    "url": "/2019//topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "62abe5979f719cab21f3fa4a53b7dbe9"
  },
  {
    "url": "/2019//topics/lighting-talks/index.html",
    "revision": "79ac0b858601292d12bc306131b4e4a1"
  },
  {
    "url": "/2019//topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "5bbe4784b51e36b39a79f0bc0ab94033"
  },
  {
    "url": "/2019//topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "54b2015c790d07466006bf7a4aff1136"
  },
  {
    "url": "/2019//topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "edb486dce983a6001eebfb245817e739"
  },
  {
    "url": "/2019//topics/now-and-future-open-source-hong-kong-community-development/index.html",
    "revision": "ae6ed79fd503ae4a6426e195a12a5c33"
  },
  {
    "url": "/2019//topics/open-hardware-using-cloud/index.html",
    "revision": "2ff51b833214ecdbb39e744282c51543"
  },
  {
    "url": "/2019//topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "8162e3b7f36b08762e051192de4b85f8"
  },
  {
    "url": "/2019//topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "86e5b9d54a2a80cd15815b169a0587b3"
  },
  {
    "url": "/2019//topics/plant-identification-system-ai-ar/index.html",
    "revision": "9cabf242f90d51d1eefdfa825ce02704"
  },
  {
    "url": "/2019//topics/plug-it-mysql-authentication-windows-pam/index.html",
    "revision": "7488c9cdef58021cc0b8efdf2b0382c2"
  },
  {
    "url": "/2019//topics/r-exploratory-data-analysis/index.html",
    "revision": "e30cc9bfe7625029f6c86188b2d310bd"
  },
  {
    "url": "/2019//topics/random-number-generation-simulation-blockchain-and-cryptography/index.html",
    "revision": "c225f46afc8ae9a5bc72e667b9b11d3c"
  },
  {
    "url": "/2019//topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "2ea81676a3b5f986a086ac78757a94ce"
  },
  {
    "url": "/2019//topics/run-programs-faster-anywhere-graalvm/index.html",
    "revision": "41b83e23b4d7228e4a6f3d076acfabbe"
  },
  {
    "url": "/2019//topics/status-quo-tensorflow-lite/index.html",
    "revision": "89a4941456025b39f31f1c74e188f94b"
  },
  {
    "url": "/2019//topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "a68669e3d4c9459c0afe6bcdb42ee1b1"
  },
  {
    "url": "/2019//topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "de5664ea51f03d0b66a94b2bdab7051e"
  },
  {
    "url": "/2019//topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "4b1c50ea6fb53552088b64cc4acd40e8"
  },
  {
    "url": "/2019//topics/whats-new-freebsd-120/index.html",
    "revision": "a836e03a7eeb844438119f5aaf74d97b"
  },
  {
    "url": "/2019//topics/whats-new-haxe-4/index.html",
    "revision": "9dc6b6480fbdab4ff7db08cdf27a9236"
  },
  {
    "url": "/2019//topics/wordpress-search-engine-optimization-wordpress-seo/index.html",
    "revision": "73122266c998f9bbf94be48f6b2030ae"
  },
  {
    "url": "/2019//about/coc/",
    "revision": "83ad072f3ba021d302d6ce6a865295a4"
  },
  {
    "url": "/2019//about/conference/",
    "revision": "4b6e0e46dfdbe622174df68f927e9079"
  },
  {
    "url": "/2019//about/organizers/",
    "revision": "06be65465bf2874ac298dfee3c05a298"
  },
  {
    "url": "/2019//about/volunteers/",
    "revision": "5fa15b6f51670ea3f28ddb9f347afe48"
  },
  {
    "url": "/2019//cfc/",
    "revision": "5dea197d78b6c792ffa543197432057b"
  },
  {
    "url": "/2019//cfp/",
    "revision": "8f645f702ae110d826ae78b267f46f8a"
  },
  {
    "url": "/2019//",
    "revision": "6a9cc8dc2d1d38d79aed05f0cb85b9e8"
  },
  {
    "url": "/2019//sponsors/",
    "revision": "02deba9d190275472003a555e8d8bf98"
  },
  {
    "url": "/2019//timetable/",
    "revision": "a2e17f5ebd7f9fd7834c8dd67fe5f6d6"
  },
  {
    "url": "/2019//topics/8-essential-steps-secure-your-mysql/",
    "revision": "9c71ef740f04a724e6558941c95f2609"
  },
  {
    "url": "/2019//topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "86fcbccaece753768472038dba16ee3d"
  },
  {
    "url": "/2019//topics/build-minimal-dbms-scratch-rust/",
    "revision": "e2a6c9a263ac74f04c1439bf2059eabe"
  },
  {
    "url": "/2019//topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "40b97d3fa2c8c7f63d576c92b62c6730"
  },
  {
    "url": "/2019//topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "c82e435248b77fe56a29bd96b2aaaedd"
  },
  {
    "url": "/2019//topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "19682d9df830b7744efb108b011a956f"
  },
  {
    "url": "/2019//topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "aa5000336e42a46898d52ac5c2211995"
  },
  {
    "url": "/2019//topics/devops-ansible-native-kubernetes/",
    "revision": "c96b35fdb88d2132c50160ca4567343c"
  },
  {
    "url": "/2019//topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "02da10d42a85c5d4fa8042ff3ea8c8b4"
  },
  {
    "url": "/2019//topics/diy-wealth-management-app/",
    "revision": "f24d9c4f2c847f87fc463f5c7546b517"
  },
  {
    "url": "/2019//topics/formal-verification-smart-contract/",
    "revision": "b773bcfe02f1fe8114e3c3cb643301fb"
  },
  {
    "url": "/2019//topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "2c52ba0b02b45617b64236fe8183b23a"
  },
  {
    "url": "/2019//topics/homemade-scientific-clusters/",
    "revision": "2e7b5108f4559876b1f30fc019cbd72b"
  },
  {
    "url": "/2019//topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "4b09d083f39934a417597d0e83e02ba1"
  },
  {
    "url": "/2019//topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "9298d9561144085049e7b7958e265568"
  },
  {
    "url": "/2019//topics/",
    "revision": "54a59b1fe650f027f60c3d3da189b17f"
  },
  {
    "url": "/2019//topics/innovation-and-open-source/",
    "revision": "bc24aba4d4f42af21aca5992e15e69cb"
  },
  {
    "url": "/2019//topics/introducing-open-technology-hong-kong-education/",
    "revision": "1186d87213e3b2f22f0499cd01f33884"
  },
  {
    "url": "/2019//topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "86b8e9271e5ccd6283c78dfd4bcec459"
  },
  {
    "url": "/2019//topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "56a684808d9d75dcac6489f0b8bb46d0"
  },
  {
    "url": "/2019//topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "4259af2dc2e36a3581d387e090cce11a"
  },
  {
    "url": "/2019//topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "62abe5979f719cab21f3fa4a53b7dbe9"
  },
  {
    "url": "/2019//topics/lighting-talks/",
    "revision": "79ac0b858601292d12bc306131b4e4a1"
  },
  {
    "url": "/2019//topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "5bbe4784b51e36b39a79f0bc0ab94033"
  },
  {
    "url": "/2019//topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "54b2015c790d07466006bf7a4aff1136"
  },
  {
    "url": "/2019//topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "edb486dce983a6001eebfb245817e739"
  },
  {
    "url": "/2019//topics/now-and-future-open-source-hong-kong-community-development/",
    "revision": "ae6ed79fd503ae4a6426e195a12a5c33"
  },
  {
    "url": "/2019//topics/open-hardware-using-cloud/",
    "revision": "2ff51b833214ecdbb39e744282c51543"
  },
  {
    "url": "/2019//topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "8162e3b7f36b08762e051192de4b85f8"
  },
  {
    "url": "/2019//topics/pim25-crowdsourced-weather-data-project/",
    "revision": "86e5b9d54a2a80cd15815b169a0587b3"
  },
  {
    "url": "/2019//topics/plant-identification-system-ai-ar/",
    "revision": "9cabf242f90d51d1eefdfa825ce02704"
  },
  {
    "url": "/2019//topics/plug-it-mysql-authentication-windows-pam/",
    "revision": "7488c9cdef58021cc0b8efdf2b0382c2"
  },
  {
    "url": "/2019//topics/r-exploratory-data-analysis/",
    "revision": "e30cc9bfe7625029f6c86188b2d310bd"
  },
  {
    "url": "/2019//topics/random-number-generation-simulation-blockchain-and-cryptography/",
    "revision": "c225f46afc8ae9a5bc72e667b9b11d3c"
  },
  {
    "url": "/2019//topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "2ea81676a3b5f986a086ac78757a94ce"
  },
  {
    "url": "/2019//topics/run-programs-faster-anywhere-graalvm/",
    "revision": "41b83e23b4d7228e4a6f3d076acfabbe"
  },
  {
    "url": "/2019//topics/status-quo-tensorflow-lite/",
    "revision": "89a4941456025b39f31f1c74e188f94b"
  },
  {
    "url": "/2019//topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "a68669e3d4c9459c0afe6bcdb42ee1b1"
  },
  {
    "url": "/2019//topics/vlc-and-open-source-multimedia-news/",
    "revision": "de5664ea51f03d0b66a94b2bdab7051e"
  },
  {
    "url": "/2019//topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "4b1c50ea6fb53552088b64cc4acd40e8"
  },
  {
    "url": "/2019//topics/whats-new-freebsd-120/",
    "revision": "a836e03a7eeb844438119f5aaf74d97b"
  },
  {
    "url": "/2019//topics/whats-new-haxe-4/",
    "revision": "9dc6b6480fbdab4ff7db08cdf27a9236"
  },
  {
    "url": "/2019//topics/wordpress-search-engine-optimization-wordpress-seo/",
    "revision": "73122266c998f9bbf94be48f6b2030ae"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2019//", new workbox.strategies.NetworkFirst(), 'GET');
