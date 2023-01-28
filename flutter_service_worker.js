'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d1e4aead998d0b017c960c79e61f2d4a",
"index.html": "eba90ac52e2b0e1c1855425f135c1f50",
"/": "eba90ac52e2b0e1c1855425f135c1f50",
"main.dart.js": "64044a3d4f0069b0b691531e818ee9c3",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dbc86cc8c36906f0707c834aef4ee737",
"assets/images/Line%25206line.png": "4bd1adea6c8d3794a0248daf7a4761b6",
"assets/images/grafik-thumb-1.png": "de0515f91953850467257ecb33233a24",
"assets/images/chroma%2520png%25202.png": "c791ddd5703be2264fa9db5ab5866b66",
"assets/images/4GLt9tPbFBYl94wc%25201.png": "7b396d3824b095e60458f2f930bb3112",
"assets/images/chroma-temp.png": "47873aa0113f33a998bffa31b19976ea",
"assets/images/MIMOSA%2520PLUS-logo-Vertical-ORIGINAL-01.png": "911f18950c6ef589c9e860168d6a39fd",
"assets/images/flexibility.png": "9501a87cdcbd5bebf4349ac7c6e2ce0f",
"assets/images/crimson-logo.svg": "18c5f5813e902115c503700c102b42d5",
"assets/images/shutterstock_1233788326.jpg": "7f987f2d0bc9843b17625218d8659439",
"assets/images/chroma%2520white.png": "b710ea9558a3a4d64b31ffcc8ce46ba1",
"assets/images/warm_service.png": "0fba727b8865643b2924bf84ece75eeb",
"assets/images/e-commerce.svg": "dcd4a31c8aa9676f587a96d8b4d25b6e",
"assets/images/quest-logo.svg": "90fab7a5ae5728ab7a0cad38512cac8b",
"assets/images/hotel_operations.svg": "e02db8f37b504d9aafadd33c85935513",
"assets/images/Chroma%2520Logo1.svg": "4613c6e0b0f4005b0d586dd34495787b",
"assets/images/azure_bg.png": "33e5195cc33b94375380a2402261bc0c",
"assets/images/IMG_5236%25201.png": "10f2278f3a82fdce350387ced1e2313f",
"assets/images/preopening.svg": "5173ee2be44c105fe67ceaf4551baef8",
"assets/images/brands-thumb-3.png": "c1015c8b9420a2da127dcef01c33fb0e",
"assets/images/sustainability-banner.png": "a41afcf65af36610c4e26ff441d9e5a5",
"assets/images/Chroma%2520Logo1.png": "134bd1f2c84a48b45ca419da56cbb74c",
"assets/images/crimson-1.png": "e689844b93b61c9bb7fb302df82bf685",
"assets/images/brilliant.png": "e4033b26f22fc1c8a9690d2f4b103a87",
"assets/images/instagram.svg": "eba29cc027ee024971c03421834e5e5d",
"assets/images/quest-logo.png": "8eb9be1e29f02d4e9cb2ca6bb0412cdb",
"assets/images/Table%25201.png": "9b37798d5bc89e20c89737593c69501b",
"assets/images/brands-thumb-2.png": "48029f1eb601fac76d923f946cdf96a9",
"assets/images/Vector.png": "9b9391d7c180e0143798a032aaa25965",
"assets/images/Table%25203.png": "3380f42df3fd2e82b59d834d1264fdf9",
"assets/images/our_leaders.png": "a3809db1818e9b51056cdaff9b7242fc",
"assets/images/crimson-2.png": "67ae192d5929aa19491b060537cc48af",
"assets/images/crimson-3.png": "37f28fa905045e7ff38e2368b67364fa",
"assets/images/bakerj-logo.png": "03b3bf26c5bc3a5803a26c1955925332",
"assets/images/Table%25202.png": "960919e0035ce74585395ba6f7aa3b70",
"assets/images/brands-thumb-1.png": "a06a63161ead69dfa5a0ecf4fecfb217",
"assets/images/crimson-logo.png": "68c3575e422466c513f22918a79587ff",
"assets/images/news-banner.png": "ea901b2c0d419e8ce69ff850b70d7aeb",
"assets/images/human_resources_management.svg": "e2e87604b7815b8c522d39046d88b5ed",
"assets/images/MIMOSA%2520PLUS-logo-Vertical-ORIGINAL-01.svg": "ca28197d6b06008896f952ad01d0894f",
"assets/images/Table%25205.png": "99eadb087ce932606d6d51d6bf93348c",
"assets/images/technical_service.svg": "e4455937503ab071bdfd44a5911008ea",
"assets/images/Table%25204.png": "59f0a85b289177e660db4bab6e51b92d",
"assets/images/crimson.png": "4a57ecf5ca387a9b5954c99213ff4b9f",
"assets/images/quest-2.png": "3ee0cb3a7f1106a0a18fb1d175dac762",
"assets/images/IMG_3978%25201.png": "760a924cf8b8450260031cc0271fbc97",
"assets/images/our-brands-banner.png": "d2c5b998b97d68b63532f56682961c57",
"assets/images/fearlessness.png": "9dd1387f97614540b85225a55f76578d",
"assets/images/assembly%25201tool.png": "a7a9f0f5aa8b49091e08fcaa132cb3a7",
"assets/images/QUEST%2520LOGO-UP.png": "e9c492b670291ff78d926e492ba12ec8",
"assets/images/quest-3.png": "98f49229f03bd8c5e637a185f0a13943",
"assets/images/quest-1.png": "17e9a6554a08979c98fc6fcadfd5330f",
"assets/images/timberland-logo.png": "85107da449bd23836233f1cd0e527aaa",
"assets/images/arrow_down.svg": "d5a52e05b49d76ff317be2974882aa0c",
"assets/images/DEV01%2520DSC_8612b%25201.png": "db69037b3d42c9f4af8f26cf320c051d",
"assets/images/facebook.svg": "c819596e3aeb67cfaebcc3f51454f900",
"assets/images/CFCM%2520-%2520Swimming%2520Pool%25201.png": "1ebef0dc5b55f161c8b9b8ed9be62e4a",
"assets/images/group2.svg": "955082e68980b8e2cc5db8fd607a4daa",
"assets/images/news-thumb-2.png": "f3922fddba5f25749829d1032879eef6",
"assets/images/table1.png": "f90b939764dc4ddda301244153c66d77",
"assets/images/Group%2520150.png": "92b4a9bfbedf95c3b4b1f857736d1a21",
"assets/images/Group%2520151.png": "1d242c3a5c30d05b0e707ecec04beb53",
"assets/images/news-thumb-3.png": "7ba65e36c94dab2d9704371efcdb9c11",
"assets/images/grafik-logo.png": "db4315c74b4c3680e0543c2472078ee6",
"assets/images/group1.svg": "630ecde3aeae628184a133ace1c6fbe8",
"assets/images/chroma2.png": "ccde48eb4d9ff45f9547fabbf2e26660",
"assets/images/news-thumb-1.png": "086f4a98a946aa1f17d02a1eb09e0a4a",
"assets/images/table2.png": "a5e545b64af0b8161cd383dec0e90a81",
"assets/images/sales_marketing.svg": "ccddf619bd9ec49c31fe9893a6991b14",
"assets/images/phone.png": "53127bd1bf46b44c283998caaeff45dd",
"assets/images/table3.png": "2ae75fe811907bd84e09453fd73b6814",
"assets/images/Azure%2520Beach%2520Club%2520Logo-05.svg": "51c7265f29b677a3a590961384da45e0",
"assets/images/brand_repositioning.svg": "dbaf6dafe1bdd8871a006c4eb29ca1ab",
"assets/images/Azure%2520Beach%2520Club%2520Logo-05.png": "a6fbc8d281454600f0556c97d068a765",
"assets/images/food-beve-1.png": "0c7cb077a92598e2fe328f12dda1acf1",
"assets/images/Picture1.png": "225d097d0bc1f8bbdb88d0f03e8c9f4a",
"assets/images/creativity.png": "350ed50ebb0989e9dd20c79c41f999a7",
"assets/images/firehouse-logo.png": "5ea17df6c890b3c6e9fdac54ee8e0a2b",
"assets/images/IMG_1781%25201.png": "afb928875434f4ab748281aa9c6be49d",
"assets/images/food-beve-2.png": "ce039b28fb74816dc5fe76c6f8b5fe54",
"assets/images/linkedIn.svg": "e1dbdb460285fbcdb17031c7e24274e5",
"assets/images/Picture2.png": "f88e29e85ceeeac9ec98de2304cd02be",
"assets/images/Picture3.jpg": "7d9262d77d528c50fc47e39b5f5457b0",
"assets/images/Chroma-Hospitality%25201c.png": "c627bdb3d275b727d1f3b77aa30b6323",
"assets/images/Gallery%2520-%2520Lobby%2520(6)%25201.png": "b8f503b54ba5c943963ffaeb6683afdf",
"assets/images/coming_soon.png": "bcdb48f183cb862718f18e8307eaf58d",
"assets/images/timberland-logo.svg": "1f388ad66525eba8a2b869be3e56d045",
"assets/images/firehouse_Pizza.png": "cb574edae1875e8f590748d7ba728aae",
"assets/images/Facade.jpg": "22ce6140e55e0bad1d62b671c09f21de",
"assets/AssetManifest.json": "9d97e2af142bcf7d40c53647c22ed1cc",
"assets/NOTICES": "0ef3c4aafa13f29379421ea4315d185a",
"assets/FontManifest.json": "67f10f52d8d125eb768eebfd590f82dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4ebbed9f98caa10c42b5765e7c03d18b",
"assets/fonts/Avenir%2520LT%2520Std%252045%2520Book.otf": "ecb0c2ae369ba2a89d9a1ec2a1b3187b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/crib_img1.png": "b1cf216a919d4636be87113cbcbc88a1",
"assets/assets/images/co-working%2520space%2520artwork.png": "8e5f69ae5653bbd969a22f1dfac2816b",
"assets/assets/images/reCaptcha.png": "293d235db54c560bc9e09f57027b532e",
"assets/assets/images/crib_logo.png": "2bbb92cd25a02e1c017d443a733f4bf4",
"assets/assets/images/connected.png": "744e0cb89813141df3f35a0f06ce4cf1",
"assets/assets/images/banner.png": "922ea3ce5913af1cf63c0d258970c047",
"assets/assets/images/advantage_bg.png": "b69b518e66fb930986eeeb846f90159f",
"assets/assets/images/rooms-banner.png": "fd2f415f73f932db26f18f0f745b5679",
"assets/assets/images/gallery/The%2520Crib%2520Clark%2520Panoramic.jpg": "d0a4b22d310df9c8d6577aed5db4874b",
"assets/assets/images/gallery/Bunk%2520Beds%25203.jpg": "d2629c157b390caa13fcac77c0c1ccce",
"assets/assets/images/gallery/Bunk%2520Beds%25202.jpg": "070d42bd9fb6c608286b3a3658bf0ec3",
"assets/assets/images/gallery/Bunk%2520Beds%25205.jpg": "5d3aa3f7d777d6ed7d39f1e4559e5f50",
"assets/assets/images/gallery/Bunk%2520Beds%25204.jpg": "74a9a7fcdf7f5112beac2786db2093ab",
"assets/assets/images/gallery/The%2520Crib%2520Clark%2520Crib%2520Fence%25202.jpg": "6a75e6e784143af4b0b4a020775fb0d8",
"assets/assets/images/gallery/lobby%25202.png": "213f971573e7b65d6630e2be0e9d97d8",
"assets/assets/images/gallery/The%2520Crib%2520Clark%2520Crib%2520Fence%25203.jpg": "95c0da2c4473d74a1c52109851e36e87",
"assets/assets/images/gallery/The%2520Crib%2520Clark%2520Crib%2520Fence%25201.jpg": "23a481bff965f3e3516af066d4291981",
"assets/assets/images/gallery/The%2520Crib%2520Clark%2520Crib%2520Fence%25204.jpg": "a2e00103359bd437097084d79c321c64",
"assets/assets/images/gallery/Dine.jpg": "8ef563131678062ee276e42c3c78ed3a",
"assets/assets/images/gallery/Toilet.jpg": "19fc2654608a320055baddc98f3688f6",
"assets/assets/images/gallery/Toilet%25202.jpg": "53e70fddd49669a69b8398bf93f027f5",
"assets/assets/images/gallery/Location%2520Clark%2520Pic.png": "b185a19a5aebf90b5e772b3e25ba729f",
"assets/assets/images/banner1.png": "6d27412a0f90f674231e9d6ad0e7d114",
"assets/assets/images/room.png": "27ae95c167bf8ca91d528fa7032306a9",
"assets/assets/images/aboutTheCrib.png": "2e9be2aab0a53115656d083cdcf66949",
"assets/assets/images/coliving4.png": "420ab478bc066b0d802993c23fcabd87",
"assets/assets/images/crib_logo_w.png": "3ef4ae2dbfd50a12b5f1db0f8a44858b",
"assets/assets/images/hexagon1.png": "0746a5f9bc6abb0afaa07230d7768eaf",
"assets/assets/images/coliving1.png": "9a31affc8e605a886f4fbd12e455dc52",
"assets/assets/images/hexagon2.png": "e45773731763ea36d0e89e71f5267459",
"assets/assets/images/coliving2.png": "717c7e36e4cebd236474bb16d3672fbe",
"assets/assets/images/coliving3.png": "c8761428fa80485e718ac25f73705db7",
"assets/assets/images/room4.png": "2a386194f3aaaa6413782b7f4083eddc",
"assets/assets/images/Apartment%25201.png": "ae79d936497a06eb36175be6c4b726e1",
"assets/assets/images/take_theLeap_social.png": "6438ceb48bb9f4a86b3aa157418e3247",
"assets/assets/images/banner%25202.png": "adc473ab7900fc984009e539b3813caa",
"assets/assets/images/banner%25203.png": "ef229a8e37bfb7c403dff6d5ee7508e1",
"assets/assets/images/room5.png": "e606d17c8211c26da7c8008dc39d5feb",
"assets/assets/images/vr.png": "55057732625e721a452aae57aea45d70",
"assets/assets/images/Apartment%25202.png": "04c7613ef89ce93ea8ea3578d62c4e12",
"assets/assets/images/Apartment%25203.png": "c82cb6844bbb0a61497b94ce371c1853",
"assets/assets/images/pressroom-bg.png": "853bd2d4bbec4596b2f708fd8aa34fb9",
"assets/assets/images/room6.png": "392c3c474a3403992a0c4f0d52c61ec5",
"assets/assets/images/room2.png": "17007499b31e0e52c9a847e9bc04f2cb",
"assets/assets/images/Apartment1.png": "cefa03d37418f23fed23c245d2822be8",
"assets/assets/images/banner%25204.png": "a5e871be7039c5cfbb2fa83b29b491b6",
"assets/assets/images/banner%25205.png": "3f93293c58de3f3794ab0e34d0556a51",
"assets/assets/images/room3.png": "c4084ce21cf1345e538c066dd91f94ab",
"assets/assets/images/Location%2520Clark%2520Pic.png": "b185a19a5aebf90b5e772b3e25ba729f",
"assets/assets/images/room1.png": "27ff0bf6b603fef14e798b404a2ff882",
"assets/assets/images/banner%25207.png": "88983823d06f468b32c2210ad9743435",
"assets/assets/images/Apartment2.png": "4766604d091c7c0f4ca21a08908b2554",
"assets/assets/images/Apartment3.png": "4e2f5d62de0c1f507e7100f8f0f2e970",
"assets/assets/images/banner%25206.png": "e7f21c945aa6f7075fecc316dd1ef53b",
"assets/assets/icons/ratesPolyA.png": "1961c8188b4456b83bd2ebdb038626c5",
"assets/assets/icons/locationPolyB.png": "79cac438156d03c7318359eece4c5840",
"assets/assets/icons/yt.png": "d33b071246f43c32cb06d4cf2d54aec8",
"assets/assets/icons/double-deck.png": "585e4e04a74c7cb02dcfaee62d2913ca",
"assets/assets/icons/ratesPolyB.png": "148268401e737084a64208fda3bf4aa0",
"assets/assets/icons/locationPolyA.png": "434deed8a8be30e3d1fd5662607cfb1e",
"assets/assets/icons/spaceForEveryonePolyB.png": "ae32092baa519c075545c5cb79215bd9",
"assets/assets/icons/envelope.png": "a70eeccf6635fc41d268ebf40d5c1f3d",
"assets/assets/icons/takeTheLeap_polyA.png": "bef4f6bdc0aa8d3cadd0ffeda7ea0130",
"assets/assets/icons/spaceForEveryonePolyA.png": "611da6c16057f4df882264f71ed40ff2",
"assets/assets/icons/takeTheLeap_polyB.png": "5c01a4d2327228d2d8fd9c49edded6d4",
"assets/assets/icons/galleryPolyA.png": "0451fafd9882bf731ffdabb5a5981883",
"assets/assets/icons/shower.png": "88ba512292be8c46a935920e12ff91af",
"assets/assets/icons/fb.png": "28d2e57010822e1d1e663bb9b95bdc9e",
"assets/assets/icons/galleryPolyB.png": "aaf71728afc1529f7999a22ada5f4adf",
"assets/assets/icons/home.png": "3403d2d24e83894b13192b90057a32b2",
"assets/assets/icons/bed.png": "c61ab08eeac965fd7c221e71b56ff292",
"assets/assets/icons/hand.png": "90bede306460fc6651edce7445660db5",
"assets/assets/icons/ig.png": "123aa1bd8187b549df9299302b2b1218",
"assets/assets/icons/heart.png": "da8ff750e20a93d16546679dd985d389",
"assets/assets/icons/elon.png": "960eee3e9b0e633fbc9f5f5cdad2aa5c",
"assets/assets/icons/bedroomPolyB.png": "a3bf93587269aaccd2e6acbd4f37b535",
"assets/assets/icons/study-desk.png": "95959107753bd6bc7ff3f76dd33664dc",
"assets/assets/icons/bedroomPolyA.png": "b6196de15f7aae210dd792e0374d0d8e",
"assets/assets/icons/phone.png": "e6894929fd700f75cf6cc93981b9809b",
"assets/assets/icons/single-bed.png": "ddc02bb20acd003fcbdf43c845c1dd8b",
"assets/assets/icons/hexAbout1.png": "2f56cbb254baddbd3ffbee8cbf746ce5",
"assets/assets/icons/toilet.png": "6fdee138aea2e3ae581720e7b81e6c99",
"assets/assets/icons/hexAbout2.png": "e285f8485bbf7082116edbee5e193151",
"assets/assets/icons/check-green.png": "10965e224e679433fde70c2ce8ec2eee",
"assets/assets/icons/polyEndB.png": "c7c828126456e6f4aa7eec761dc128f4",
"assets/assets/icons/loc.png": "e50c939a35a3ba6ea1e78a4f1c15238b",
"assets/assets/icons/polyEndA.png": "fd70730ca0bb55b62bb335d5f5a52165",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
