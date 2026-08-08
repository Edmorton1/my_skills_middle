console.log('Service Worker запущен');

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    self.clients.claim()
  );
});

self.addEventListener('fetch', event => {
  if (new URL(event.request.url).pathname === '/worker/data.json') {
    event.respondWith(
      new Response('12 SERVICE WORKER', {
        headers: {
          'Content-Type': 'text/plain'
        }
      })
    );
  }
});

self.addEventListener('message', event => {
  console.log('Service Worker получил:', event.data);

  self.registration.showNotification('Service Worker', {
    body: 'Я работаю отдельно от страницы'
  });
});

self.addEventListener('push', event => {
  console.log('PUSH ПРИШЁЛ');

  event.waitUntil(
    self.registration.showNotification('Push', {
      body: 'Service Worker проснулся сам'
    })
  );
});
