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
    "url": "/2019//0a7007e0ef452862c6dc.css",
    "revision": "48bebad343b53e94a957a80019e523ec"
  },
  {
    "url": "/2019//13a5e02fb610dfaa915a.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/2019//14c30464031063af09c8.js",
    "revision": "eb05ef10f02f99c6c49cbd13c50ac348"
  },
  {
    "url": "/2019//1757aceb88acb528e6d2.js",
    "revision": "5829398a42e8131f4b73b0a24e3b6c01"
  },
  {
    "url": "/2019//1d7f897a564ce1e20eaa.js",
    "revision": "187fa7b3f7d739ef9a305ac37d2e32a7"
  },
  {
    "url": "/2019//200.html",
    "revision": "271af479ac014999e27658a4f7141488"
  },
  {
    "url": "/2019//28026f771b814d34c261.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/2019//28deb12e933865c0aefe.js",
    "revision": "baefa7179c68a79b9f7fdf4e7428711c"
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
    "url": "/2019//38f57b443b58353182cf.js",
    "revision": "234618a104905b7d6412810eb9ae05c6"
  },
  {
    "url": "/2019//3a6820237eda80b9b281.js",
    "revision": "8459fc310e97a96e5b54abe71bd23b59"
  },
  {
    "url": "/2019//3d8e9d0a28cec342e837.css",
    "revision": "92ac8a848037992b93004565ee7c018b"
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
    "url": "/2019//5e1bd858b205deccaadf.js",
    "revision": "72f99eb1a784be50797c81362e1fff68"
  },
  {
    "url": "/2019//61880a6f046461468f3a.js",
    "revision": "02909c7d674bdab71d9d1d4c306faf56"
  },
  {
    "url": "/2019//6582a1a4f91369e23404.js",
    "revision": "36a53b408c814603f26f64dbd88786a1"
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
    "url": "/2019//6f1843498cc231748f51.js",
    "revision": "4c3972f81cb0971fc1983e4851233d12"
  },
  {
    "url": "/2019//74cee76e30a62c78d1f6.js",
    "revision": "c5313bbae14bbc59bcb05e0173da7e9e"
  },
  {
    "url": "/2019//77ce10b51f563326a23f.css",
    "revision": "2ec47afeca7210758bb8a7b6fc139634"
  },
  {
    "url": "/2019//83ade720af24d7b249d7.js",
    "revision": "2b08e00a77c4be72a378550224ab3af1"
  },
  {
    "url": "/2019//85083de08c5d1788deae.js",
    "revision": "7d06abb730f42d3fbac81dedde7d5e1e"
  },
  {
    "url": "/2019//8884c9c4166f28a04067.js",
    "revision": "3d17713d6dd9074667faf2f23af5c5b4"
  },
  {
    "url": "/2019//88ae807e230481f11dae.js",
    "revision": "f1b530c1e404baa82fca3df54397e4ba"
  },
  {
    "url": "/2019//8db0474698493b80f354.js",
    "revision": "03756a61afb7404506785aa509babaad"
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
    "url": "/2019//960e89a96f4a3cf8b09b.js",
    "revision": "a0fde2f7d467f33cbe2f50a09cec7a1d"
  },
  {
    "url": "/2019//96e6fac2497d1a8a71fe.css",
    "revision": "43d5405ab0f4bc41a7452dbc00d25e15"
  },
  {
    "url": "/2019//98ba8bacc8362342c9da.js",
    "revision": "3db03bd9461b6b35b2d0a86d841b7113"
  },
  {
    "url": "/2019//abf58434e0776e9e88f7.js",
    "revision": "f7495129105f763139d1a3cc14aaacab"
  },
  {
    "url": "/2019//about/coc/index.html",
    "revision": "db92a6b37cd9dfea0f65dfb616ea15d5"
  },
  {
    "url": "/2019//about/conference/index.html",
    "revision": "ee6d976010f5a81045a04054e4238754"
  },
  {
    "url": "/2019//about/organizers/index.html",
    "revision": "ab117349ebfa4b7e00e438d3c6a15731"
  },
  {
    "url": "/2019//about/volunteers/index.html",
    "revision": "549bc05e606e5ce68a269d50647c3c43"
  },
  {
    "url": "/2019//ac81bc7e730f9a3157a0.js",
    "revision": "1b763c4fa5d1472f83d5951ddabc1b0e"
  },
  {
    "url": "/2019//c14ad9843f82c4428536.js",
    "revision": "b4878938f4cbb3d736547e2a648679a8"
  },
  {
    "url": "/2019//c265564cf103152868dd.css",
    "revision": "bbeafe734fe483a531602de7ec484b18"
  },
  {
    "url": "/2019//cb70d9ec1dec5fd82238.js",
    "revision": "607d23296524630dcff3d75181115a51"
  },
  {
    "url": "/2019//cfc/index.html",
    "revision": "16592467298f4f1813c94e4b24c530fe"
  },
  {
    "url": "/2019//cfp/index.html",
    "revision": "9b9bd1614a4f93c5361552dc2b789d9f"
  },
  {
    "url": "/2019//dc0b554b646fad51a3b7.js",
    "revision": "efdc99624133a90ac1e19401bab75ac3"
  },
  {
    "url": "/2019//e2a544d07e57f562a6c4.js",
    "revision": "bff3c45593ebd681b39c013aab63f502"
  },
  {
    "url": "/2019//f60d5af0e5b7fea00bc9.js",
    "revision": "765d95630f640ab1147fd83212b5005e"
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
    "revision": "3a51a5aca5393b5804bff960207840fd"
  },
  {
    "url": "/2019//sponsors/index.html",
    "revision": "d121996a62129feb05427e42e32c199a"
  },
  {
    "url": "/2019//timetable/index.html",
    "revision": "d26e83b6e9022fb294b8554bf2475ac1"
  },
  {
    "url": "/2019//topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "8aba457fcb05ca3f5f576294c38bff8e"
  },
  {
    "url": "/2019//topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "7b1dc0f7c1f7163bb2e35c2656b4b447"
  },
  {
    "url": "/2019//topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "496b216a65f5258ba44a38fb5f47ca98"
  },
  {
    "url": "/2019//topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "2d6a54b141193537797b02be7e8916c7"
  },
  {
    "url": "/2019//topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "ac7c1acf859151ac3a9f0f1af8e2c095"
  },
  {
    "url": "/2019//topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "aaed96a4c9174534f5ea0cba3f9eb7a9"
  },
  {
    "url": "/2019//topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "c77d5438a4f67b17420e694234dbd28e"
  },
  {
    "url": "/2019//topics/devops-ansible-native-kubernetes/index.html",
    "revision": "e5d8d1d4163d05c60d45dc0a324e7624"
  },
  {
    "url": "/2019//topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "42c52c234dca016e0f5b45d7e046d463"
  },
  {
    "url": "/2019//topics/diy-wealth-management-app/index.html",
    "revision": "35c9153af5e082a1408b9d076f47cc0d"
  },
  {
    "url": "/2019//topics/formal-verification-smart-contract/index.html",
    "revision": "a59dcaad0060a695eeb8c2c0dac7992f"
  },
  {
    "url": "/2019//topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "392c21ce396ab6bb5531ef01e5bbeaa3"
  },
  {
    "url": "/2019//topics/homemade-scientific-clusters/index.html",
    "revision": "6dcb843a90655f2bda7175d2de04a4bf"
  },
  {
    "url": "/2019//topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "25fdc449d31d786a129383c8cae28d1b"
  },
  {
    "url": "/2019//topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "d92007420a861073b01b40f5ca6cdc22"
  },
  {
    "url": "/2019//topics/index.html",
    "revision": "bcc664d3da3cca7635a69f31388eb654"
  },
  {
    "url": "/2019//topics/innovation-and-open-source/index.html",
    "revision": "199dad3dd8b631ac97e162bf4002f0c4"
  },
  {
    "url": "/2019//topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "1436a3bc80cdc818f7847936096aa82c"
  },
  {
    "url": "/2019//topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "579d5d6795ecc35c3c189eb94efe5189"
  },
  {
    "url": "/2019//topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "db15b5ddd816b0d32fa59ac1c73244c2"
  },
  {
    "url": "/2019//topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "380d2d41b70d9d8f86bcce1f44322a8b"
  },
  {
    "url": "/2019//topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "4893ab2b34912f7f30a74769a5c0186c"
  },
  {
    "url": "/2019//topics/lighting-talks/index.html",
    "revision": "f266f02dc36a6e2638706bcd4ae38db2"
  },
  {
    "url": "/2019//topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "cf47057b0109df2a68581417f30eac00"
  },
  {
    "url": "/2019//topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "74e94b39d1b9e21b550a7047fdd975d3"
  },
  {
    "url": "/2019//topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "4cc6de35c2223d33455f9a7e6d2e5cad"
  },
  {
    "url": "/2019//topics/now-and-future-open-source-hong-kong-community-development/index.html",
    "revision": "8d653d13bd62d624f5b0a6504494c4a4"
  },
  {
    "url": "/2019//topics/open-hardware-using-cloud/index.html",
    "revision": "5bea4653537aa726018770d4216e4bc7"
  },
  {
    "url": "/2019//topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "c9672606bf3cb3ae6135bc38ff1894ac"
  },
  {
    "url": "/2019//topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "46a1333059697a69804aa28336dd139a"
  },
  {
    "url": "/2019//topics/plant-identification-system-ai-ar/index.html",
    "revision": "6ea6887acbf7a50ba52e141fe8e23d97"
  },
  {
    "url": "/2019//topics/plug-it-mysql-authentication-windows-pam/index.html",
    "revision": "50e690f11ec91e4a7ad6b9a4dd34331d"
  },
  {
    "url": "/2019//topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "397b257d9c5b879affee96ac6f4b6c8c"
  },
  {
    "url": "/2019//topics/r-exploratory-data-analysis/index.html",
    "revision": "c9a8671905ef6e9fe928e285370eec9c"
  },
  {
    "url": "/2019//topics/random-number-generation-simulation-blockchain-and-cryptography/index.html",
    "revision": "77ab8046d341968eca2c1a2f8b742341"
  },
  {
    "url": "/2019//topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "480937f4bf9df3e6b7ce735571671ae1"
  },
  {
    "url": "/2019//topics/status-quo-tensorflow-lite/index.html",
    "revision": "3407f76ab6f971bbe67044b7e6708b79"
  },
  {
    "url": "/2019//topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "67e7be5a732025ca2050a9240404b5a5"
  },
  {
    "url": "/2019//topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "5c450a973ce4c823b8bed045e8caf274"
  },
  {
    "url": "/2019//topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "4aac36348f25489552477d5172c24871"
  },
  {
    "url": "/2019//topics/whats-new-haxe-4/index.html",
    "revision": "c1b6066e08603cd78bc22668ee854667"
  },
  {
    "url": "/2019//topics/wordpress-search-engine-optimization-wordpress-seo/index.html",
    "revision": "0966f7a0986aaf8c22286d3c7869d190"
  },
  {
    "url": "/2019//about/coc/",
    "revision": "db92a6b37cd9dfea0f65dfb616ea15d5"
  },
  {
    "url": "/2019//about/conference/",
    "revision": "ee6d976010f5a81045a04054e4238754"
  },
  {
    "url": "/2019//about/organizers/",
    "revision": "ab117349ebfa4b7e00e438d3c6a15731"
  },
  {
    "url": "/2019//about/volunteers/",
    "revision": "549bc05e606e5ce68a269d50647c3c43"
  },
  {
    "url": "/2019//cfc/",
    "revision": "16592467298f4f1813c94e4b24c530fe"
  },
  {
    "url": "/2019//cfp/",
    "revision": "9b9bd1614a4f93c5361552dc2b789d9f"
  },
  {
    "url": "/2019//",
    "revision": "3a51a5aca5393b5804bff960207840fd"
  },
  {
    "url": "/2019//sponsors/",
    "revision": "d121996a62129feb05427e42e32c199a"
  },
  {
    "url": "/2019//timetable/",
    "revision": "d26e83b6e9022fb294b8554bf2475ac1"
  },
  {
    "url": "/2019//topics/8-essential-steps-secure-your-mysql/",
    "revision": "8aba457fcb05ca3f5f576294c38bff8e"
  },
  {
    "url": "/2019//topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "7b1dc0f7c1f7163bb2e35c2656b4b447"
  },
  {
    "url": "/2019//topics/build-minimal-dbms-scratch-rust/",
    "revision": "496b216a65f5258ba44a38fb5f47ca98"
  },
  {
    "url": "/2019//topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "2d6a54b141193537797b02be7e8916c7"
  },
  {
    "url": "/2019//topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "ac7c1acf859151ac3a9f0f1af8e2c095"
  },
  {
    "url": "/2019//topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "aaed96a4c9174534f5ea0cba3f9eb7a9"
  },
  {
    "url": "/2019//topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "c77d5438a4f67b17420e694234dbd28e"
  },
  {
    "url": "/2019//topics/devops-ansible-native-kubernetes/",
    "revision": "e5d8d1d4163d05c60d45dc0a324e7624"
  },
  {
    "url": "/2019//topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "42c52c234dca016e0f5b45d7e046d463"
  },
  {
    "url": "/2019//topics/diy-wealth-management-app/",
    "revision": "35c9153af5e082a1408b9d076f47cc0d"
  },
  {
    "url": "/2019//topics/formal-verification-smart-contract/",
    "revision": "a59dcaad0060a695eeb8c2c0dac7992f"
  },
  {
    "url": "/2019//topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "392c21ce396ab6bb5531ef01e5bbeaa3"
  },
  {
    "url": "/2019//topics/homemade-scientific-clusters/",
    "revision": "6dcb843a90655f2bda7175d2de04a4bf"
  },
  {
    "url": "/2019//topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "25fdc449d31d786a129383c8cae28d1b"
  },
  {
    "url": "/2019//topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "d92007420a861073b01b40f5ca6cdc22"
  },
  {
    "url": "/2019//topics/",
    "revision": "bcc664d3da3cca7635a69f31388eb654"
  },
  {
    "url": "/2019//topics/innovation-and-open-source/",
    "revision": "199dad3dd8b631ac97e162bf4002f0c4"
  },
  {
    "url": "/2019//topics/introducing-open-technology-hong-kong-education/",
    "revision": "1436a3bc80cdc818f7847936096aa82c"
  },
  {
    "url": "/2019//topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "579d5d6795ecc35c3c189eb94efe5189"
  },
  {
    "url": "/2019//topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "db15b5ddd816b0d32fa59ac1c73244c2"
  },
  {
    "url": "/2019//topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "380d2d41b70d9d8f86bcce1f44322a8b"
  },
  {
    "url": "/2019//topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "4893ab2b34912f7f30a74769a5c0186c"
  },
  {
    "url": "/2019//topics/lighting-talks/",
    "revision": "f266f02dc36a6e2638706bcd4ae38db2"
  },
  {
    "url": "/2019//topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "cf47057b0109df2a68581417f30eac00"
  },
  {
    "url": "/2019//topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "74e94b39d1b9e21b550a7047fdd975d3"
  },
  {
    "url": "/2019//topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "4cc6de35c2223d33455f9a7e6d2e5cad"
  },
  {
    "url": "/2019//topics/now-and-future-open-source-hong-kong-community-development/",
    "revision": "8d653d13bd62d624f5b0a6504494c4a4"
  },
  {
    "url": "/2019//topics/open-hardware-using-cloud/",
    "revision": "5bea4653537aa726018770d4216e4bc7"
  },
  {
    "url": "/2019//topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "c9672606bf3cb3ae6135bc38ff1894ac"
  },
  {
    "url": "/2019//topics/pim25-crowdsourced-weather-data-project/",
    "revision": "46a1333059697a69804aa28336dd139a"
  },
  {
    "url": "/2019//topics/plant-identification-system-ai-ar/",
    "revision": "6ea6887acbf7a50ba52e141fe8e23d97"
  },
  {
    "url": "/2019//topics/plug-it-mysql-authentication-windows-pam/",
    "revision": "50e690f11ec91e4a7ad6b9a4dd34331d"
  },
  {
    "url": "/2019//topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "397b257d9c5b879affee96ac6f4b6c8c"
  },
  {
    "url": "/2019//topics/r-exploratory-data-analysis/",
    "revision": "c9a8671905ef6e9fe928e285370eec9c"
  },
  {
    "url": "/2019//topics/random-number-generation-simulation-blockchain-and-cryptography/",
    "revision": "77ab8046d341968eca2c1a2f8b742341"
  },
  {
    "url": "/2019//topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "480937f4bf9df3e6b7ce735571671ae1"
  },
  {
    "url": "/2019//topics/status-quo-tensorflow-lite/",
    "revision": "3407f76ab6f971bbe67044b7e6708b79"
  },
  {
    "url": "/2019//topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "67e7be5a732025ca2050a9240404b5a5"
  },
  {
    "url": "/2019//topics/vlc-and-open-source-multimedia-news/",
    "revision": "5c450a973ce4c823b8bed045e8caf274"
  },
  {
    "url": "/2019//topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "4aac36348f25489552477d5172c24871"
  },
  {
    "url": "/2019//topics/whats-new-haxe-4/",
    "revision": "c1b6066e08603cd78bc22668ee854667"
  },
  {
    "url": "/2019//topics/wordpress-search-engine-optimization-wordpress-seo/",
    "revision": "0966f7a0986aaf8c22286d3c7869d190"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2019//", new workbox.strategies.NetworkFirst(), 'GET');
