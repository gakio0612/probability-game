self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('game-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './1066.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});