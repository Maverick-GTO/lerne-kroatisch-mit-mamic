const CACHE_NAME = 'mamic-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  './splash_logo.png'
];

// Installieren und Assets cachen
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Aktivieren
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Notwendig für die Installation: Fetch-Event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
