// Minimaler Service Worker für PWA-Installation
self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request));
});
