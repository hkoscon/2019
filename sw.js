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
    "url": "/2019//06d757af6265a995564a.js",
    "revision": "c54d66781b6c22fa917b0b364623c4da"
  },
  {
    "url": "/2019//0a7007e0ef452862c6dc.css",
    "revision": "48bebad343b53e94a957a80019e523ec"
  },
  {
    "url": "/2019//0b243992cf10f81d252f.js",
    "revision": "818d19e8323d28ba8736416ced6225ce"
  },
  {
    "url": "/2019//13a5e02fb610dfaa915a.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/2019//175d018509517c523e12.js",
    "revision": "e243c5338943e3d7210ec45b4c582a39"
  },
  {
    "url": "/2019//188d3bb035d8592ab6eb.js",
    "revision": "bb72b1ca67e7b30a2cd5b6e1d09950db"
  },
  {
    "url": "/2019//1d535bb7a912d165978a.css",
    "revision": "e3a18a19d075d60d1f1e4d5835d434f0"
  },
  {
    "url": "/2019//200.html",
    "revision": "db000167e5192c691ec1132b07998f2c"
  },
  {
    "url": "/2019//207d3bfb14e1e2ef0982.js",
    "revision": "be543a6d2bc9d130508be7bd90cf3907"
  },
  {
    "url": "/2019//231096c57acf96f40de3.js",
    "revision": "cb9e183787560c405e4f31b90ce0157c"
  },
  {
    "url": "/2019//28026f771b814d34c261.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/2019//2d1a02d2f1ea78d87c15.js",
    "revision": "2fc26be0cb1930e60d731908ab813231"
  },
  {
    "url": "/2019//335447078017e2183256.js",
    "revision": "bc0c91bdc57991a39160eeb20c3b72ab"
  },
  {
    "url": "/2019//35026d163a1103bb7aa0.js",
    "revision": "3b34d57ddba6bcc4be64795e97a013f4"
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
    "url": "/2019//38f4bb9d807e243bc03f.js",
    "revision": "8d8d81e6004e4d4c9367d6c23cf4d86f"
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
    "url": "/2019//488b754d0f26b829feb5.js",
    "revision": "64dbd3b862050e42ca13a3c92279d477"
  },
  {
    "url": "/2019//4b55802fd9966b000cee.js",
    "revision": "9c9ff2cbf5075d1fdcea69bd6ec57c18"
  },
  {
    "url": "/2019//4dd83e329df54977296e.css",
    "revision": "33c5ac4647794a2b2151cedbc8697921"
  },
  {
    "url": "/2019//51da3135e0795087c4e8.css",
    "revision": "e796e4f7f653e713a97e1643a791b2e4"
  },
  {
    "url": "/2019//65a468635d7e2bbd7bf8.css",
    "revision": "668bec8ed029aa41e4edfd130c04467e"
  },
  {
    "url": "/2019//6d8dabdcff564fad5685.css",
    "revision": "08e5d711f8ddba6decd032a030f80540"
  },
  {
    "url": "/2019//77ce10b51f563326a23f.css",
    "revision": "2ec47afeca7210758bb8a7b6fc139634"
  },
  {
    "url": "/2019//79b1c2996a80df27fecd.js",
    "revision": "5313cdee5b6e616c844ad4ffc08f28d0"
  },
  {
    "url": "/2019//884aef19c7edaf5b65c7.js",
    "revision": "bb4be4ff9360112867443041d348787d"
  },
  {
    "url": "/2019//91e09d5a3d6384efabdb.js",
    "revision": "522ec088b6e19e4d2c93b097073535e7"
  },
  {
    "url": "/2019//9571043b8539bb83ed17.css",
    "revision": "5060781f96b359aaad62ccacf5c5e926"
  },
  {
    "url": "/2019//9766616e77a292eedc65.js",
    "revision": "e97f72b3a9f6df87c803ef767a65bc46"
  },
  {
    "url": "/2019//9dac8f21aa8507aaff05.js",
    "revision": "37a4e175d149dbbb2873407f731276a1"
  },
  {
    "url": "/2019//a77472c2467da355afe4.css",
    "revision": "ab84e9c80ac424f2dd483c85db085029"
  },
  {
    "url": "/2019//about/coc/index.html",
    "revision": "974a072462ba96e764ac747db1396728"
  },
  {
    "url": "/2019//about/conference/index.html",
    "revision": "f3e63317465e5dae06c37eefdf8b4d60"
  },
  {
    "url": "/2019//about/organizers/index.html",
    "revision": "3b353bffa785f51f23407f8df8f8bbdc"
  },
  {
    "url": "/2019//about/volunteers/index.html",
    "revision": "7ce0d4b1c8c2781ba995542e18f93a33"
  },
  {
    "url": "/2019//b17086d448646e3043e9.js",
    "revision": "ca03f1edffac8e42b9fe954ad38a463a"
  },
  {
    "url": "/2019//b6eb39e1e7bf755c2c19.js",
    "revision": "c7323bfe8f0404d08c74c7d3a8e42156"
  },
  {
    "url": "/2019//b780043141f4eee7ce65.js",
    "revision": "7d024e44f59de6253b1ace0eafbf2012"
  },
  {
    "url": "/2019//c265564cf103152868dd.css",
    "revision": "bbeafe734fe483a531602de7ec484b18"
  },
  {
    "url": "/2019//c34463625c0fa7781e96.js",
    "revision": "dc716319e81cd8a9f4866d5e577d4b86"
  },
  {
    "url": "/2019//c64bac2a47acfb0e8f1f.js",
    "revision": "075c0fa6cca911a86174050fb72c465b"
  },
  {
    "url": "/2019//cfc/index.html",
    "revision": "d3368a4ab7a154d9f070963caf932c66"
  },
  {
    "url": "/2019//cfp/index.html",
    "revision": "df3c91c06db3980ec4ebda3b6684fc3f"
  },
  {
    "url": "/2019//d14cada5251765f59a4e.js",
    "revision": "c22b5d3ade395df047fd4ffe3873dd1d"
  },
  {
    "url": "/2019//f02d56b564f4e3e2bf74.js",
    "revision": "32fac881b40432e6f9ee5a0aaad980e4"
  },
  {
    "url": "/2019//f601e6ac2b473ec02410.js",
    "revision": "ef8eb0f832be66600e29f6a8567d9f58"
  },
  {
    "url": "/2019//fb0896fd64f8e351c05a.js",
    "revision": "0f2fc4ef42ffab6a857bfc0a17a9f2b9"
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
    "revision": "e7fd3f2813b0253f24ba00aee83959d7"
  },
  {
    "url": "/2019//sponsors/index.html",
    "revision": "1d5fb53f1dc012e1c21864dce6515052"
  },
  {
    "url": "/2019//timetable/index.html",
    "revision": "6cfcf1bff4618760a1166a9b10c96457"
  },
  {
    "url": "/2019//topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "a50a6763df7ade385e1bf4a8e9055362"
  },
  {
    "url": "/2019//topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "a3f3f1f98bdaff3b3fc02b373d5d8ca8"
  },
  {
    "url": "/2019//topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "4f5028694317302a0275ad87070425a8"
  },
  {
    "url": "/2019//topics/community-community-what-open-culture-foundation/index.html",
    "revision": "b8fba66629d8c6e0e853352f2e5616ce"
  },
  {
    "url": "/2019//topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "b83acbd670fcdee7e7245b29cf59a562"
  },
  {
    "url": "/2019//topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "19785d7045f6a58ebc2fe3306f8d97d4"
  },
  {
    "url": "/2019//topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "3e4266e8eae415eb60c2dcd1a32dcf6b"
  },
  {
    "url": "/2019//topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "d47c23d8211db36414bafc5b357ce754"
  },
  {
    "url": "/2019//topics/devops-ansible-native-kubernetes/index.html",
    "revision": "99e0560d642ceedaf5a7686a701a1d80"
  },
  {
    "url": "/2019//topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "d9139cbe35af2dd51f2a669ca233898f"
  },
  {
    "url": "/2019//topics/diy-wealth-management-app/index.html",
    "revision": "726a6a52d47e9d8227357e67fc3f4030"
  },
  {
    "url": "/2019//topics/ethereum-and-enterprise-corporate-strategies-open-source-blockchain-deployments/index.html",
    "revision": "e5de093ef0253dc61881d7d44e7c69b6"
  },
  {
    "url": "/2019//topics/formal-verification-smart-contract/index.html",
    "revision": "59c94df498937ada063d807b2b65b54d"
  },
  {
    "url": "/2019//topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "3f31c87f0837e382e7816b97f801d80a"
  },
  {
    "url": "/2019//topics/hk01-scales-open-sources-and-event-driven-architecture/index.html",
    "revision": "bf35fdddf559ca293edc76e3a496af49"
  },
  {
    "url": "/2019//topics/homemade-scientific-clusters/index.html",
    "revision": "2ee9cb4a0e4b4268b681bf001fd84e26"
  },
  {
    "url": "/2019//topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "ebe1f18c17ac00d4d8e4df4587612ece"
  },
  {
    "url": "/2019//topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "af9634d0ed64f269eb65a4074a7f9e84"
  },
  {
    "url": "/2019//topics/index.html",
    "revision": "2408b772897d019c746e90f6f9717d63"
  },
  {
    "url": "/2019//topics/innovation-and-open-source/index.html",
    "revision": "05c59c16701fbc768f2abb6d5b771907"
  },
  {
    "url": "/2019//topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "f5554a667422d362bf09b59591eb340f"
  },
  {
    "url": "/2019//topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "0408a794315f16d2e76ead307dd8b440"
  },
  {
    "url": "/2019//topics/introduction-nginx-unit-nginx-web-application-server/index.html",
    "revision": "e2a70eb8338c27647c9108decb37394f"
  },
  {
    "url": "/2019//topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "8159c0c31d2855e706ba72592fca7ee1"
  },
  {
    "url": "/2019//topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "c48dda900bc65f4292399eff9b6c2c67"
  },
  {
    "url": "/2019//topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "6ae938129f0756c6c5ae020f2a8326dd"
  },
  {
    "url": "/2019//topics/lighting-talks/index.html",
    "revision": "bc897ec811add15c1301834a22a5b9a7"
  },
  {
    "url": "/2019//topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "8da059c8c06f918e916b1bc7f0a0789b"
  },
  {
    "url": "/2019//topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "d9afab079274e7d70396aaf80a39c386"
  },
  {
    "url": "/2019//topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "e1c42aa2b42ec310e5bef096941633bc"
  },
  {
    "url": "/2019//topics/now-and-future-open-source-hong-kong-community-development/index.html",
    "revision": "bc52043b07a58f1b883637fc32afa26e"
  },
  {
    "url": "/2019//topics/open-hardware-using-cloud/index.html",
    "revision": "1f94e45dd5705dcaee324280d7a1a150"
  },
  {
    "url": "/2019//topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "16c5efe67714e650289373c905e9f8e1"
  },
  {
    "url": "/2019//topics/openfaas-vs-fission-our-experiences-building-serverless-platform-app-development/index.html",
    "revision": "81a0533db50dfe37fab8603c4cd48203"
  },
  {
    "url": "/2019//topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "1986c8c05e835ea90268cf48fe10f5f6"
  },
  {
    "url": "/2019//topics/plant-identification-system-ai-ar/index.html",
    "revision": "bd92b7838f335a5c493cfc8053979e20"
  },
  {
    "url": "/2019//topics/plug-it-mysql-authentication-windows-pam/index.html",
    "revision": "7f08d68a9382909a21eeb3791efdf6aa"
  },
  {
    "url": "/2019//topics/predicting-nba-results-tensorflow/index.html",
    "revision": "d21de088a6c5eba399583d71a53b0a10"
  },
  {
    "url": "/2019//topics/pushing-upstream/index.html",
    "revision": "94e508af11a8f68ff90b60f07a9f7289"
  },
  {
    "url": "/2019//topics/r-exploratory-data-analysis/index.html",
    "revision": "c7ad52e4cc07fa302b9bee4a34e9344d"
  },
  {
    "url": "/2019//topics/random-number-generation-simulation-blockchain-and-cryptography/index.html",
    "revision": "5966db12b5461f20ae80770df559f9f8"
  },
  {
    "url": "/2019//topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "8c029cefd3daa6c4af2a079ddc298e11"
  },
  {
    "url": "/2019//topics/run-programs-faster-anywhere-graalvm/index.html",
    "revision": "7a92e44a10a7b169fcd28b302ee4d403"
  },
  {
    "url": "/2019//topics/status-quo-tensorflow-lite/index.html",
    "revision": "142c0638d1a93423ddadb995f3cac48b"
  },
  {
    "url": "/2019//topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "0288aacb2525932d4abdf5634c3a3815"
  },
  {
    "url": "/2019//topics/user-intent-steers-ai-powered-search/index.html",
    "revision": "30491bb57cb4ff9663825fc6b39f67bd"
  },
  {
    "url": "/2019//topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "4944f01a6797fb1658925177e807577c"
  },
  {
    "url": "/2019//topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "6bdeea6a5432c74787133e62b599de52"
  },
  {
    "url": "/2019//topics/whats-new-freebsd-120/index.html",
    "revision": "6430eef07afb768c90d4836c7ff6f370"
  },
  {
    "url": "/2019//topics/whats-new-haxe-4/index.html",
    "revision": "823fa3a90a4bbd457096f0efc390b106"
  },
  {
    "url": "/2019//topics/wordpress-search-engine-optimization-wordpress-seo/index.html",
    "revision": "a414b8a31832d6c1bdccd12f09629845"
  },
  {
    "url": "/2019//about/coc/",
    "revision": "974a072462ba96e764ac747db1396728"
  },
  {
    "url": "/2019//about/conference/",
    "revision": "f3e63317465e5dae06c37eefdf8b4d60"
  },
  {
    "url": "/2019//about/organizers/",
    "revision": "3b353bffa785f51f23407f8df8f8bbdc"
  },
  {
    "url": "/2019//about/volunteers/",
    "revision": "7ce0d4b1c8c2781ba995542e18f93a33"
  },
  {
    "url": "/2019//cfc/",
    "revision": "d3368a4ab7a154d9f070963caf932c66"
  },
  {
    "url": "/2019//cfp/",
    "revision": "df3c91c06db3980ec4ebda3b6684fc3f"
  },
  {
    "url": "/2019//",
    "revision": "e7fd3f2813b0253f24ba00aee83959d7"
  },
  {
    "url": "/2019//sponsors/",
    "revision": "1d5fb53f1dc012e1c21864dce6515052"
  },
  {
    "url": "/2019//timetable/",
    "revision": "6cfcf1bff4618760a1166a9b10c96457"
  },
  {
    "url": "/2019//topics/8-essential-steps-secure-your-mysql/",
    "revision": "a50a6763df7ade385e1bf4a8e9055362"
  },
  {
    "url": "/2019//topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "a3f3f1f98bdaff3b3fc02b373d5d8ca8"
  },
  {
    "url": "/2019//topics/build-minimal-dbms-scratch-rust/",
    "revision": "4f5028694317302a0275ad87070425a8"
  },
  {
    "url": "/2019//topics/community-community-what-open-culture-foundation/",
    "revision": "b8fba66629d8c6e0e853352f2e5616ce"
  },
  {
    "url": "/2019//topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "b83acbd670fcdee7e7245b29cf59a562"
  },
  {
    "url": "/2019//topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "19785d7045f6a58ebc2fe3306f8d97d4"
  },
  {
    "url": "/2019//topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "3e4266e8eae415eb60c2dcd1a32dcf6b"
  },
  {
    "url": "/2019//topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "d47c23d8211db36414bafc5b357ce754"
  },
  {
    "url": "/2019//topics/devops-ansible-native-kubernetes/",
    "revision": "99e0560d642ceedaf5a7686a701a1d80"
  },
  {
    "url": "/2019//topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "d9139cbe35af2dd51f2a669ca233898f"
  },
  {
    "url": "/2019//topics/diy-wealth-management-app/",
    "revision": "726a6a52d47e9d8227357e67fc3f4030"
  },
  {
    "url": "/2019//topics/ethereum-and-enterprise-corporate-strategies-open-source-blockchain-deployments/",
    "revision": "e5de093ef0253dc61881d7d44e7c69b6"
  },
  {
    "url": "/2019//topics/formal-verification-smart-contract/",
    "revision": "59c94df498937ada063d807b2b65b54d"
  },
  {
    "url": "/2019//topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "3f31c87f0837e382e7816b97f801d80a"
  },
  {
    "url": "/2019//topics/hk01-scales-open-sources-and-event-driven-architecture/",
    "revision": "bf35fdddf559ca293edc76e3a496af49"
  },
  {
    "url": "/2019//topics/homemade-scientific-clusters/",
    "revision": "2ee9cb4a0e4b4268b681bf001fd84e26"
  },
  {
    "url": "/2019//topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "ebe1f18c17ac00d4d8e4df4587612ece"
  },
  {
    "url": "/2019//topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "af9634d0ed64f269eb65a4074a7f9e84"
  },
  {
    "url": "/2019//topics/",
    "revision": "2408b772897d019c746e90f6f9717d63"
  },
  {
    "url": "/2019//topics/innovation-and-open-source/",
    "revision": "05c59c16701fbc768f2abb6d5b771907"
  },
  {
    "url": "/2019//topics/introducing-open-technology-hong-kong-education/",
    "revision": "f5554a667422d362bf09b59591eb340f"
  },
  {
    "url": "/2019//topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "0408a794315f16d2e76ead307dd8b440"
  },
  {
    "url": "/2019//topics/introduction-nginx-unit-nginx-web-application-server/",
    "revision": "e2a70eb8338c27647c9108decb37394f"
  },
  {
    "url": "/2019//topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "8159c0c31d2855e706ba72592fca7ee1"
  },
  {
    "url": "/2019//topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "c48dda900bc65f4292399eff9b6c2c67"
  },
  {
    "url": "/2019//topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "6ae938129f0756c6c5ae020f2a8326dd"
  },
  {
    "url": "/2019//topics/lighting-talks/",
    "revision": "bc897ec811add15c1301834a22a5b9a7"
  },
  {
    "url": "/2019//topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "8da059c8c06f918e916b1bc7f0a0789b"
  },
  {
    "url": "/2019//topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "d9afab079274e7d70396aaf80a39c386"
  },
  {
    "url": "/2019//topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "e1c42aa2b42ec310e5bef096941633bc"
  },
  {
    "url": "/2019//topics/now-and-future-open-source-hong-kong-community-development/",
    "revision": "bc52043b07a58f1b883637fc32afa26e"
  },
  {
    "url": "/2019//topics/open-hardware-using-cloud/",
    "revision": "1f94e45dd5705dcaee324280d7a1a150"
  },
  {
    "url": "/2019//topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "16c5efe67714e650289373c905e9f8e1"
  },
  {
    "url": "/2019//topics/openfaas-vs-fission-our-experiences-building-serverless-platform-app-development/",
    "revision": "81a0533db50dfe37fab8603c4cd48203"
  },
  {
    "url": "/2019//topics/pim25-crowdsourced-weather-data-project/",
    "revision": "1986c8c05e835ea90268cf48fe10f5f6"
  },
  {
    "url": "/2019//topics/plant-identification-system-ai-ar/",
    "revision": "bd92b7838f335a5c493cfc8053979e20"
  },
  {
    "url": "/2019//topics/plug-it-mysql-authentication-windows-pam/",
    "revision": "7f08d68a9382909a21eeb3791efdf6aa"
  },
  {
    "url": "/2019//topics/predicting-nba-results-tensorflow/",
    "revision": "d21de088a6c5eba399583d71a53b0a10"
  },
  {
    "url": "/2019//topics/pushing-upstream/",
    "revision": "94e508af11a8f68ff90b60f07a9f7289"
  },
  {
    "url": "/2019//topics/r-exploratory-data-analysis/",
    "revision": "c7ad52e4cc07fa302b9bee4a34e9344d"
  },
  {
    "url": "/2019//topics/random-number-generation-simulation-blockchain-and-cryptography/",
    "revision": "5966db12b5461f20ae80770df559f9f8"
  },
  {
    "url": "/2019//topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "8c029cefd3daa6c4af2a079ddc298e11"
  },
  {
    "url": "/2019//topics/run-programs-faster-anywhere-graalvm/",
    "revision": "7a92e44a10a7b169fcd28b302ee4d403"
  },
  {
    "url": "/2019//topics/status-quo-tensorflow-lite/",
    "revision": "142c0638d1a93423ddadb995f3cac48b"
  },
  {
    "url": "/2019//topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "0288aacb2525932d4abdf5634c3a3815"
  },
  {
    "url": "/2019//topics/user-intent-steers-ai-powered-search/",
    "revision": "30491bb57cb4ff9663825fc6b39f67bd"
  },
  {
    "url": "/2019//topics/vlc-and-open-source-multimedia-news/",
    "revision": "4944f01a6797fb1658925177e807577c"
  },
  {
    "url": "/2019//topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "6bdeea6a5432c74787133e62b599de52"
  },
  {
    "url": "/2019//topics/whats-new-freebsd-120/",
    "revision": "6430eef07afb768c90d4836c7ff6f370"
  },
  {
    "url": "/2019//topics/whats-new-haxe-4/",
    "revision": "823fa3a90a4bbd457096f0efc390b106"
  },
  {
    "url": "/2019//topics/wordpress-search-engine-optimization-wordpress-seo/",
    "revision": "a414b8a31832d6c1bdccd12f09629845"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2019//", new workbox.strategies.NetworkFirst(), 'GET');
