importScripts('/2019/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/2019/1360e287921a64b5ba33.js",
    "revision": "8f53c388febe7d6d177cf11b2281e646"
  },
  {
    "url": "/2019/136286a94b0d8f13fe33.js",
    "revision": "b1cebe65865877dbc9b9398e96fb90c9"
  },
  {
    "url": "/2019/1d2b9e4bbcd67f2fad21.css",
    "revision": "d32ffbbec375bf9eaf56aceb9fd1a38c"
  },
  {
    "url": "/2019/2336ba211feb5fbdf1c8.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/2019/2e32bf908c2d1b5ee8ea.js",
    "revision": "3951f163360384bd7d5bb99e15b659bc"
  },
  {
    "url": "/2019/2f226acd375e9ef77339.js",
    "revision": "c78927382820a826c3f11b43ff3ba007"
  },
  {
    "url": "/2019/407676dd810dabd95018.css",
    "revision": "13de707a1eae6b5a8b8abee3e3fcd1a4"
  },
  {
    "url": "/2019/40aab2f913cef5f766c4.css",
    "revision": "8c2ce15200a6b500719375696c468d52"
  },
  {
    "url": "/2019/50e5ab0e7310fa8a3d3c.js",
    "revision": "b2cbc32a47ab935e44b26f0094f9a356"
  },
  {
    "url": "/2019/5613816cd420ccd743f4.css",
    "revision": "a4dcdb2f6778b7814cf929c64f268456"
  },
  {
    "url": "/2019/654acb5a30ce1601c9ea.js",
    "revision": "aed1d2abb5b948bd7317c07aaae1f58a"
  },
  {
    "url": "/2019/68cdf660f2421fe9c198.js",
    "revision": "1fe185b5217b9bf1ee3a3aa3a684ca70"
  },
  {
    "url": "/2019/6c239766c67b95d6bc11.js",
    "revision": "1bdc56d2c640909485dd143b5ebab6ea"
  },
  {
    "url": "/2019/6ed99ba02008e0e50edc.css",
    "revision": "1c284c5762aaf870b72d55f0c9c89822"
  },
  {
    "url": "/2019/7389892b85aca1e83f61.css",
    "revision": "d0250849b7de8a9d4788a412693f849b"
  },
  {
    "url": "/2019/74297a4deea0ab6cdd7f.js",
    "revision": "6f2ebd4338c718baccd229bc6354dfd8"
  },
  {
    "url": "/2019/9adcd123f92132590eaf.js",
    "revision": "a55d7a856ff7bb21974dd4491b448190"
  },
  {
    "url": "/2019/9d36c7c092a78f74f295.js",
    "revision": "1732e164ed0b750505fa858375867dbe"
  },
  {
    "url": "/2019/9ed8a48e998a8623ed3c.css",
    "revision": "9fdc55af5d148081693de80e238a9c5e"
  },
  {
    "url": "/2019/a7b1c3444ed6895a41f3.js",
    "revision": "4c6cda912e2d84960e50305fcfb6951b"
  },
  {
    "url": "/2019/a9159d85cf68e79be0a1.js",
    "revision": "98b41969e430e501ab991fb11a16c328"
  },
  {
    "url": "/2019/b2a1e20abb2795630d55.js",
    "revision": "b0c1d50bcf32233d6bd1dc1371dc7cd6"
  },
  {
    "url": "/2019/c571ce901201e6c2408e.css",
    "revision": "10d5d691aa0b3533093b57c41687a438"
  },
  {
    "url": "/2019/c9e541b50f013c41b83d.js",
    "revision": "e6697a0ead41bf9477e813a6f1d221a3"
  },
  {
    "url": "/2019/dfaa8b0387fec95250f9.css",
    "revision": "df4b7c436dea4b56cfff94a89031318a"
  },
  {
    "url": "/2019/dfac431a3c7bbbacb4c0.js",
    "revision": "d47fd193531a52265f4f77631fd82c7f"
  },
  {
    "url": "/2019/e12ace7a7c92962b08d0.js",
    "revision": "8542d8375daf161d89ae4007d7aa2cbe"
  },
  {
    "url": "/2019/eab4f4053325ee9dd8f1.css",
    "revision": "0c02e47203b1290ad5f5abb4f970155e"
  },
  {
    "url": "/2019/f088f7fb3e8c07b48146.css",
    "revision": "f0ff665a8c84f76dbfeb5edc8ac6f809"
  },
  {
    "url": "/2019/f2501b6bed0c8f4f78c1.js",
    "revision": "e716268cce56468f41b5211e43c8b013"
  },
  {
    "url": "/2019/f506dd2ac8530c5dd014.js",
    "revision": "dac3191eded4b91994161ef66f775f6d"
  },
  {
    "url": "/2019/f72f566b1b7f341e96ee.css",
    "revision": "43d5405ab0f4bc41a7452dbc00d25e15"
  },
  {
    "url": "/2019/f7f8281a5818c2b77921.js",
    "revision": "f30888a8f9eace5dbc1bcaf021fa51ce"
  },
  {
    "url": "/2019/fa06e18c2a58506e21be.js",
    "revision": "689e6e52ba37c91e07d93b0a547b1d00"
  }
], {
  "cacheId": "2019",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.precaching.precacheAndRoute(['/2019/images/banner.jpg', '/2019/images/bg.jpg', '/2019/data/timetable.json'])

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/2019/.*'), workbox.strategies.networkFirst({}), 'GET')
