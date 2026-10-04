const CACHE='oct2026-mpf-addon-r1';
self.addEventListener('install',event=>{self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const k of await caches.keys())if(k!==CACHE)await caches.delete(k);await self.clients.claim();})());});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith((async()=>{try{return await fetch(event.request,{cache:'no-store'});}catch(err){const hit=await caches.match(event.request);if(hit)return hit;throw err;}})());});
