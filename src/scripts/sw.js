import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './images/spoon.ico',
  './images/spoon48.webp',
  './images/spoon144.webp',
  './images/hero-image_2-large.webp',
  './images/hero-image_2-small.jpg',
  './images/hero-image_2.jpg',
  './images/manifest/ss_desktop.webp',
  './images/manifest/ss_mobile.webp',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
