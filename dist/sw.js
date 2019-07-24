importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0480aabda61012b543f0.js",
    "revision": "b112e4c69bace7f957a883ec038d406c"
  },
  {
    "url": "/_nuxt/13d0d468c3cecb3f5a9b.js",
    "revision": "7aa334c46facdb2bbabf4c77967f2cc4"
  },
  {
    "url": "/_nuxt/24198ae95f849108c262.js",
    "revision": "fb7e8c38b4572a4fbf3779c594f17844"
  },
  {
    "url": "/_nuxt/420a78623ca293cf5665.js",
    "revision": "7bbb7f243db1c7d1d0d63067eaa0278d"
  },
  {
    "url": "/_nuxt/6a757b24a778727af6b4.js",
    "revision": "4e7f27817800f4925f33d59d95eb9476"
  },
  {
    "url": "/_nuxt/7135020c02f024848f5a.js",
    "revision": "443135824cac58bad65e3d597fd05640"
  },
  {
    "url": "/_nuxt/964f38c4a80d3aac89bb.js",
    "revision": "19eacd118e006d2a779a02aaf128a4cd"
  },
  {
    "url": "/_nuxt/b10f8605e6791bccb893.js",
    "revision": "7da1f14fb2c8031981809c53993fe237"
  },
  {
    "url": "/_nuxt/b187ca16ded449ba8134.js",
    "revision": "b792836191e5535357d70a69d1d38a34"
  },
  {
    "url": "/_nuxt/dc5d7e9154df2ca48902.js",
    "revision": "a1526a661b029374b8dedf6e402193bf"
  },
  {
    "url": "/_nuxt/ee842147895c13d46d4e.js",
    "revision": "d5d721447cdffbbbf0a6f98940954381"
  }
], {
  "cacheId": "garage",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
