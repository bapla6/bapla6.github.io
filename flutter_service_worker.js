'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "db65c167ea9d68e4a604278949265ece",
"assets/AssetManifest.bin.json": "8e08bddc9968097f81cc1021f024bbdf",
"assets/AssetManifest.json": "f4d384c41bf7c5741ceeb9ffd81a361e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e866445f0a9f0843a771e1544e5b8d5e",
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
"assets/images/admin.jpg": "387a498153241b1c0d25ee309362f308",
"assets/images/apple_logo_bw.png": "9fd4db225fb7e8dc728f9821ff2c23d2",
"assets/images/gameTo10.jpg": "450644e09f7c2517050583ac35971d05",
"assets/images/gameTo6.jpg": "8afd87d14b820ec2a3821ad4b9b8371a",
"assets/images/google_logo_s.png": "29b139390ff32deae21f74168195f3c3",
"assets/images/ic_launcher.png": "3d23ef9bc65c689e56a849f3a3e30adc",
"assets/images/ic_launcher_new.png": "21652f7e795d9bd6aada9a819419a7de",
"assets/images/ic_mono.png": "769da1e2efecbd89ca30cb19107fa94a",
"assets/images/ic_mono2.png": "d86e6ef7acfd581c27d75be1461a5951",
"assets/images/k-pro.jpg": "c3c5002626afd9f8ef37f594b816f38d",
"assets/images/k0.jpg": "8a635ae9a26020d9a2a53cd4f87bea3a",
"assets/images/k1.jpg": "01ed64bf78cb1851ec7518cff80055bb",
"assets/images/k10.jpg": "693f7c8781980328309a46049c7c5025",
"assets/images/k11.jpg": "40c1733b0d2dffeceeffedcc04bd6cab",
"assets/images/k12.jpg": "c1e300988c39d9f9371ff76ded5a6eb2",
"assets/images/k13.jpg": "f2d9485c77f60bc436e31e874b8a9793",
"assets/images/k14.jpg": "d4964cada2fd0521948cff6801c69bb8",
"assets/images/k15.jpg": "7f42a693ac940cf6072a83d222dc77b4",
"assets/images/k16.jpg": "63c61da7e17528d38a721d30fa413c4b",
"assets/images/k17.jpg": "4578a0aa2ab7caae2bb72fef8ca4314f",
"assets/images/k18.jpg": "438dd4589bc7970abd99d0a438abcd2b",
"assets/images/k2.jpg": "8d583a69e5b6bdfcb23af8e15e8a860d",
"assets/images/k3.jpg": "943ddc8bda914e7b248735b939a29a90",
"assets/images/k4.jpg": "622cf136b16acf4eac3e1d7b867ca0ee",
"assets/images/k5.jpg": "217a79bf926c6d249e71234ffb846434",
"assets/images/k6.jpg": "52b6f85a1b1bcb289ba61f75ab8bc7df",
"assets/images/k7.jpg": "fd61270e76504333cebfeffddbb2ba97",
"assets/images/k8.jpg": "2fcdf81228d9a0c96a547823736e024d",
"assets/images/k9.jpg": "65257c49ea6498125e78eb722c8527bc",
"assets/images/kfree.jpg": "05d3af0ed2f4c3ec59080e19772cb25c",
"assets/images/knull.jpg": "438dd4589bc7970abd99d0a438abcd2b",
"assets/images/kretro.jpg": "6c647df95cf297f975ef6fdaee24a2af",
"assets/images/kretro1.jpg": "693f7c8781980328309a46049c7c5025",
"assets/images/kretro2.jpg": "40c1733b0d2dffeceeffedcc04bd6cab",
"assets/images/kretro3.jpg": "c1e300988c39d9f9371ff76ded5a6eb2",
"assets/images/kretro4.jpg": "f2d9485c77f60bc436e31e874b8a9793",
"assets/images/kretro5.jpg": "d4964cada2fd0521948cff6801c69bb8",
"assets/images/kretro6.jpg": "7f42a693ac940cf6072a83d222dc77b4",
"assets/images/kretro7.jpg": "63c61da7e17528d38a721d30fa413c4b",
"assets/images/kretro8.jpg": "4578a0aa2ab7caae2bb72fef8ca4314f",
"assets/images/kretro9.jpg": "438dd4589bc7970abd99d0a438abcd2b",
"assets/images/logo_foreground.png": "b0e00d70bf2d43d22b7e2dbfe1f4d59b",
"assets/images/Logo_transp2.png": "eb45c08dd0eed1968874ccd284553653",
"assets/images/Logo_transp7.png": "b5b1bb772efc012e41878f564858f73f",
"assets/NOTICES": "594612c1973a12863d7681d7fc17dcdf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "8713272df7fa96954c890f591fd0ee44",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "db7b5b53ed9bc32a844bad1ce07ac10c",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "56c61b5715fd1c6755f93a94b8be0aa4",
"favicon.png": "86bc3e0325557254ed2549c604c0f576",
"firebase-messaging-sw.js": "f447fbbeb33a52f99dfd156fb7cea160",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "8a06d6b8cd8dfb59d05a6a384c551bc8",
"icons/Icon-512.png": "01cd2ee8583cd89fffac9d270643c259",
"icons/Icon-maskable-192.png": "8a06d6b8cd8dfb59d05a6a384c551bc8",
"icons/Icon-maskable-512.png": "01cd2ee8583cd89fffac9d270643c259",
"index.html": "0e1a46ea9e6d1f8c9c896c3ef983a837",
"/": "0e1a46ea9e6d1f8c9c896c3ef983a837",
"main.dart.js": "38a545a12668e4e2f65e35d48e43e2be",
"manifest.json": "b990fbf92dea206fe353ff3bc5199a2d",
"splash/img/dark-1x.png": "12cf60eef266903d56506fe01956b6dd",
"splash/img/dark-2x.png": "09ed88d5662024ab7a9dbdde6ffec52a",
"splash/img/dark-3x.png": "da0144f053afd107bdbfa15b78b4acff",
"splash/img/dark-4x.png": "16a3c0e8e5890d18da7f2ab5ce47fdce",
"splash/img/light-1x.png": "12cf60eef266903d56506fe01956b6dd",
"splash/img/light-2x.png": "09ed88d5662024ab7a9dbdde6ffec52a",
"splash/img/light-3x.png": "da0144f053afd107bdbfa15b78b4acff",
"splash/img/light-4x.png": "16a3c0e8e5890d18da7f2ab5ce47fdce",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "3e8699dd65a865ff991ec5b47a93643d",
"version.json": "268a429ec6f57828ccf3387aea4b90ab"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
