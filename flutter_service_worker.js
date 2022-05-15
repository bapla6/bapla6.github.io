'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "af20fd84dff58d334c9ab42083267c29",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/gifs/animal.gif": "fb66831925abb9f952e7d41063ad3fa6",
"assets/gifs/baby1.gif": "3d4548142eba7cd2924aaa3b08ce44e3",
"assets/gifs/baby2.gif": "9170b6d4bfcc38c16b7403eba187ec1b",
"assets/gifs/castaway.gif": "25ba2e824a8fbb9c72856b8d51e7abbc",
"assets/gifs/dicaprio.gif": "bcc219933536ab6980f01f6b6bd05e25",
"assets/gifs/dog.gif": "447c9e570da08afd537a82d8f180f061",
"assets/gifs/eisb.gif": "c9522e489cce658d08194147abaa004c",
"assets/gifs/fatguy.gif": "6dec213afc3e7ee7a1345e4a96d3249e",
"assets/gifs/girl1.gif": "a5e962308706c1967778f5634edec088",
"assets/gifs/girl2.gif": "e0760f97fd6cc1dfd4de871bb9340925",
"assets/gifs/girl3.gif": "74bcdd4ee6510a943188f3dcc43409ee",
"assets/gifs/guy1.gif": "f2028985c2c21b0d3417008bbe2353e6",
"assets/gifs/guy2.gif": "93ea6128f7ef62977401648d35495e79",
"assets/gifs/monkey.gif": "20d3ce5f5137daa0bffa56a90d1948ca",
"assets/gifs/secretary.gif": "aba126d060cc38b06c7e14f2bab8436a",
"assets/gifs/skelett.gif": "f30fcf867f6afddde9744124c48538db",
"assets/gifs/swimmer.gif": "b53e0954ae49d402180360cf4f01baf6",
"assets/gifs/tier.gif": "21926f0c39647b902f9095219758f774",
"assets/gifs/wrestler.gif": "af997530d860bb4642b398a3cf5e1fad",
"assets/gifs/zombie.gif": "8dc611b09e6c410f071aee3ed881b1f4",
"assets/images/admin.jpg": "676bdbd790caadca795b51f8d6da4cd9",
"assets/images/apple.png": "a2b3b9152d4fd74986b9844448505512",
"assets/images/apple_logo_bw.png": "9fd4db225fb7e8dc728f9821ff2c23d2",
"assets/images/BP6.png": "fddca65d6be8b76dba826c10d923d997",
"assets/images/BP6_bw.png": "27b045651f3e75a6c5cd9c2998eca10a",
"assets/images/BP6_trans2.png": "7ebbe6eb1b6689a9b9890ae14f9a4407",
"assets/images/BP6_trans_white.png": "0705413df460f8f59ee3d48d98a6b4ba",
"assets/images/BP6_w.png": "39ded1130474daac025642e681f43f65",
"assets/images/facebook_logo.png": "911bdde808bb3cb83287fd70508ffc63",
"assets/images/gameTo10.jpg": "0ca5b8c929e9b1b0d9a13b48189abe20",
"assets/images/gameTo6.jpg": "2d6950f688d096bbf4de1170bea418c7",
"assets/images/google.png": "2e9032edd01424ae3621eea7452e7981",
"assets/images/google_logo.png": "df7263045f06484ab7470dfd84e86004",
"assets/images/k-pro.jpg": "7f7d7ce1710f7fc510c049573cd5b61f",
"assets/images/k0.jpg": "8a635ae9a26020d9a2a53cd4f87bea3a",
"assets/images/k1.jpg": "def68855d631308a3dc5bfc317a79495",
"assets/images/k10.jpg": "e0bf432192b84e15abe86c4fad352f08",
"assets/images/k11.jpg": "961e2ca6800a2bd8771db207866d0fef",
"assets/images/k12.jpg": "39af44533868e886a3f1a20670da20ec",
"assets/images/k13.jpg": "4c67495bb7d6f21b9fa2dfc18ae7935a",
"assets/images/k14.jpg": "08a033861f5681b2b4207d9e34ad752b",
"assets/images/k15.jpg": "f8f550b9e7f9b203d9a9c5499a20bd40",
"assets/images/k16.jpg": "c5eb49f48919e4e844682cca9d0fa6fd",
"assets/images/k17.jpg": "754824634ac1b3cb4824a11edf6fc7b3",
"assets/images/k18.jpg": "c67d4e842c5146a0e3db895562fa712f",
"assets/images/k2.jpg": "dda827238d0b25aba505a06c77cd9b28",
"assets/images/k3.jpg": "bc77583f77265520bd92752d43cccf70",
"assets/images/k33.jpg": "9715fd57152131bfb66314edaddb8206",
"assets/images/k3333.jpg": "4103670d131ecdf22e7214809b11532b",
"assets/images/k4.jpg": "d856124390ea381c9a9a9e6266c06a17",
"assets/images/k44.jpg": "ef7b9da2b5590b168f18f434bc068b84",
"assets/images/k4444.jpg": "f64b42837bd348872e28927a47e8dc49",
"assets/images/k5.jpg": "8291b6fcf5cee88bb20dd411de272d37",
"assets/images/k55.jpg": "e012477dac3a930bd7bbb401489ec82f",
"assets/images/k5555.jpg": "092a45974874ccf27a3d75f0fff36037",
"assets/images/k6.jpg": "f49a82e6020582364cef437824c0d311",
"assets/images/k66.jpg": "5d4e217995590596f547291333490f63",
"assets/images/k6666.jpg": "925a0b9541b07c031a1144b627468ce4",
"assets/images/k7.jpg": "a46e047cfdb5065501960abc8fc78d01",
"assets/images/k8.jpg": "1a45ca4ef8b63f679e6c6399aaa44ea8",
"assets/images/k9.jpg": "a941a273c638c687007d6ad5ce42f40d",
"assets/images/kfree.jpg": "4c9802ef817d75d2f53d534347c22fd8",
"assets/images/kretro.jpg": "6fb35a181f8c2ac13f086e21d9d75305",
"assets/images/kretro1.jpg": "e0bf432192b84e15abe86c4fad352f08",
"assets/images/kretro2.jpg": "961e2ca6800a2bd8771db207866d0fef",
"assets/images/kretro3.jpg": "39af44533868e886a3f1a20670da20ec",
"assets/images/kretro4.jpg": "4c67495bb7d6f21b9fa2dfc18ae7935a",
"assets/images/kretro5.jpg": "08a033861f5681b2b4207d9e34ad752b",
"assets/images/kretro6.jpg": "f8f550b9e7f9b203d9a9c5499a20bd40",
"assets/images/kretro7.jpg": "c5eb49f48919e4e844682cca9d0fa6fd",
"assets/images/kretro8.jpg": "754824634ac1b3cb4824a11edf6fc7b3",
"assets/images/kretro9.jpg": "c67d4e842c5146a0e3db895562fa712f",
"assets/images/trans.png": "f01ae29dd28f3fd24118900bb68cff54",
"assets/NOTICES": "095069c7256014efc2a30200ef62b3bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"BP6_w.png": "39ded1130474daac025642e681f43f65",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "32221bfc4ca5a9fc84097d2ca3d60daa",
"icons/Icon-192.png": "1a97439b9353696b37918ad3f009bcd4",
"icons/Icon-512.png": "1ecef01de08567736719cea7e8bc5d20",
"index.html": "aaa743cde58ee40f60422913462db082",
"/": "aaa743cde58ee40f60422913462db082",
"main.dart.js": "7be914066d37ed9aca7da6a1cb9b8c4d",
"manifest.json": "3751dcfd6d17ba590e3808d08ed0b371",
"version.json": "b888ec9eafddc00a4a383bdef6ea55e6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
