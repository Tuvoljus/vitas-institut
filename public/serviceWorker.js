Let CACHE_NAME = 'q-solutions';
Let urlsToCache = [
    '/',
    '/comleted'
];

// Install a service worker
self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

// Cache and return requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            //cache hit - return resonse
            if (response) {
                return response;
            }
            return fetch(event.request);
            }
        )
    );
});

//Update a service worker
self.addEventListener('activate', event => {
    Let cacheWhiteList = ['q-solutions'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});