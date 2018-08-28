self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('restaurant').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/restaurant.html?id=1',
        '/restaurant.html?id=2',
        '/restaurant.html?id=3',
        '/restaurant.html?id=4',
        '/restaurant.html?id=5',
        '/restaurant.html?id=6',
        '/restaurant.html?id=7',
        '/restaurant.html?id=8',
        '/restaurant.html?id=9',
        '/restaurant.html?id=10',
        '/manifest.json',
        '/img/1.webp',
        '/img/2.webp',
        '/img/3.webp',
        '/img/4.webp',
        '/img/5.webp',
        '/img/6.webp',
        '/img/7.webp',
        '/img/8.webp',
        '/img/9.webp',
        '/img/10.webp',
        '/img/favicon.ico',
        '/img/logo-48.png',
        '/img/logo-96.png',
        '/img/logo-144.png',
        '/img/logo-192.png',
        '/img/logo-512.png',
        '/img/image_not_found.png',
        '/layers-2x.png',
        '/layers.png',
        '/marker-icon-2x.png',
        '/marker-icon.png',
        '/marker-shadow.png',
        '/js/all.js',
        '/js/restaurant.js'
        ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
