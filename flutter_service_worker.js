'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "35a7a4e204eaaff11711f091b2274018",
"assets/assets/about.html": "1d19cd61696da8685dc8e11497f4fc37",
"assets/assets/avatar.jpg": "262cf54ffad42bf29824f4f4394f3772",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/works/adyen.png": "066b4d0268fb8dc64d7cfc9199353d92",
"assets/assets/works/cet.png": "63db6e249927a14f4a22b1b3c8ae3d0e",
"assets/assets/works/cip.png": "31ba775739a165d7c714f2bc12265fd3",
"assets/assets/works/confidencial.png": "1949de27340328a084ac406b4832ec6d",
"assets/assets/works/dw.png": "4531fa5d0ec6788c816bf1eeb61031ae",
"assets/assets/works/lr.png": "fa862319bc01e5d957752c9837f4c269",
"assets/assets/works/ls.png": "b428ecbe47aaa0a57aff720f366ce294",
"assets/assets/works/mastersaf.png": "b0b54d7d8f2e2af6fbf812b7e3f18e4e",
"assets/assets/works/paypaxx.png": "662590b9218cf511a4a4612f57e52775",
"assets/assets/works/sapb1.png": "583c78aaeb4af42a3f8123f592f5940c",
"assets/FontManifest.json": "592290621294619b16740a9d89232ba6",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "66dcbdaf6a9a82b0921f48ef27af2b36",
"index.html": "a5108a819252f3498482f8ee76c1b5e3",
"/": "a5108a819252f3498482f8ee76c1b5e3",
"main.dart.js": "a52d05631f98b107233543dcec29845a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
