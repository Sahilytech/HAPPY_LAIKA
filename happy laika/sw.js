const CACHE_NAME = 'happy-laika-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/test.html',
  '/laika_happy.gif',
  '/laika_neutral.gif',
  '/laika_sleep.gif',
  '/laika_tired.gif',
  '/Pixel Heartbeat.mp3',
  '/icono1.png',
  '/icono2.png',
  '/icono3.png',
  '/icono4.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
