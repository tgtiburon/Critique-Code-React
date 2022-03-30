const APP_PREFIX = 'CritiqueCode-';
const VERSION = 'alpha-v0.0.1';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    './index.html',
    './assets/create-post.css',
    './assets/modal.css',
    './components/Create-Post/index.js',
    './components/Footer/index.js',
    './components/Header/index.js',
    './components/Login/index.js',
    './components/Profile/index.js',
    './components/Public-Profile/index.js',
    './components/Side-Panel/index.js',
    './components/Single-Post/index.js',
    './components/Timeline/index.js',
    './pages/Home.js',
    './pages/ProfilePage.js',
    './pages/SinglePost.js',
    './utils',
    './utils/actions.js',
    './utils/auth.js',
    './utils/GlobalState.js',
    './utils/mutations.js',
    './utils/queries.js',
    './utils/reducers.js',
    '../public/images/avatar1.png',
    '../public/images/avatar2.png',
    '../public/images/avatar3.png',
    '../public/images/avatar4.png',
    '../public/images/avatar5.png',
    '../public/images/avatar6.png',
    '../public/images/avatar7.png',
    '../public/images/avatar8.png'
];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACH_NAME).then(function(cache) {
            console.log('installing cache: ' + CACHE_NAME);
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(keyList) {
            let cacheKeepList = keyList.filter(function(key) {
                return key.indexOf(APP_PREFIX);
            });
            cacheKeepList.push(CACHE_NAME);

            return Promise.all(
                keyList.map(function(key, i) {
                    if(cacheKeepList.indexOf(key) === -1) {
                        console.log('deleting cache: ' + keyList[i]);
                        return caches.delete(keyList[i]);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function(e) {
    console.log('fetch request: ' + e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(request) {
            if(request) {
                console.log('responding with cache: ' + e.request.url);
                return request;
            } else {
                console.log('file is not cached, fetching: ' + e.request.url);
                return fetch(e.request);
            }
        })
    );
});