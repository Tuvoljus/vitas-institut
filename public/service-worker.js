if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const c=e=>i(e,t),u={module:{uri:t},exports:r,require:c};s[t]=Promise.all(n.map((e=>u[e]||c(e)))).then((e=>(a(...e),r)))}}define(["./workbox-22673765"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/bSOGiOMuANW-CUiCDds5h/_buildManifest.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/bSOGiOMuANW-CUiCDds5h/_middlewareManifest.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/bSOGiOMuANW-CUiCDds5h/_ssgManifest.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/185-211f703eba5b58da.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/223.782947d5dc5d350f.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/253.b5f6d1abc4a4322f.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/305-7de2a14d2071a043.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/346-64194c380eeee671.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/348.c26e18fc14c3132b.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/474.adbeee25e01bb6a5.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/6.5ccb25c957f1177f.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/62-b3d8480f14f81727.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/675-b9e4539e8c0434c4.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/677.712b5d76fc60873d.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/74-f3eaaeedb37d6100.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/947.fa2690d43f459f07.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/framework-01395af778c6fb71.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/main-b8b298c785b5f1b5.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/Anfahrt-9f0f71c69ea7bdfc.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/_app-3bd3e8c9f4996e9c.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/_error-d742f979193aeae4.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/aktuelles-und-links-6264e83972988aea.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen-fddff4056ae96d72.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Atemtherapie-der-befreite-Atem-478e756a9411f354.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Bindegewebsmassage-b6055e729636f1e1.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Colonmassage-Viscerale-Mobilisation-9c6bc2e07fb79d40.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/EMDR-Coaching-ce393d09410959b5.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Entspannungs-Methoden-459d490c97814722.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Golgi-Punkt-Schmerztherapie-0803e525c2313c71.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Klassische-Massage-8e6800edef762212.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Lymph-Mobilisation-Lymphdrainage-6d3db832ad18b0ad.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Manuelle-Therapie-Marnitz-Cyriax-23dfa18c51e32ffc.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Massage-2ac6d7fde228eade.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Matrix-Rhythmus-Therapie-MaRhyThe-bf6dcfeffcf2c2e0.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Methode-Dr-Furter-ca8461a2b54a2212.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Novafon-Schallwellenbehandllung-5fbde01470c6d121.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Osflow-Schwingungsplatte-10ddcdf8a231d7b9.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Pneumatische-Pulsations-Massage-be9f02d8d4f9f39b.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Reflexzonen-Therapie-b633f153f9020602.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Saugwellen-Therapie-a7d83ae12ac2579d.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Scenar-Therapie-28661a19f31b42bf.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Schmerztherapie-nach-Liebscher-und-Bracht-690bb8df7a2750b8.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Stressreduktion-EFT-889c1b7e85c94b5a.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/Triggerpunktbehandlung-f07b195adccb2382.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/behandlungen/was-kann-alles-behandelt-werden-82459bf6424fb9f3.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/datenschutz-e94429ebfafa2476.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/fallback-09bbac69fba6bf7e.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/impressum-12d3a23c2e3be192.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/index-79804beccecabe8f.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/pages/preise-39ecb361cbd8f11a.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/chunks/webpack-12ca4124a4d6c0a2.js",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/css/739ca9a44655b37d.css",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/css/8690bce15840d943.css",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/css/aad3dd6de2d70d2f.css",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/css/eb9fc3245b577f87.css",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/css/f0960f094a556753.css",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/_next/static/css/fb7ceb166121e59a.css",revision:"bSOGiOMuANW-CUiCDds5h"},{url:"/favicon.ico",revision:"6aad95a2d13aeb5bf70689eb52020292"},{url:"/img/778.jpg",revision:"2bbbe8091501c767c5e2a032e157a661"},{url:"/img/Anfahrt_Bernhard_Kaeser.jpg",revision:"591e5c3cc2ccd41857e959af987fea19"},{url:"/img/Bernhard.jpg",revision:"5cdeb55293b98a920edefb0e39f3f859"},{url:"/img/Bernhard_Kaeser.JPG",revision:"192f3a7476ee8e84179b501aab28c704"},{url:"/img/Header_Bild_Gruen.jpg",revision:"85831242ecce201779f8252fd612f707"},{url:"/img/Header_Bild_Rot.jpg",revision:"e28859c32d2d38c9bc8601d23fe92e26"},{url:"/img/Header_Bild_Rot_BAK2.jpg",revision:"47717449aa30de80067026cd8cc5abf9"},{url:"/img/Header_Bild_blau.jpg",revision:"8b28520e2d8109a723347bb722945193"},{url:"/img/Hintergrund_Header_blau_1920.jpg",revision:"f2c41b4039c8c22ba49ce8eee30da95b"},{url:"/img/Hintergrund_Header_roetlich_1920.jpg",revision:"4f9d382caa2e12917a54b769360847b8"},{url:"/img/Logo_Vitas_Institut.svg",revision:"94661bc495e00aceaf0bf90d7ad46611"},{url:"/img/Logo_Vitas_Institut_weiß.svg",revision:"7528aa6e02bdc1d52a92574070db57e3"},{url:"/img/Physiotherapeut_Altstadt_Bernhard_Käser.jpg",revision:"6d9d8a0249300667e4309a5dcd9190b3"},{url:"/img_avif/Anfahrt_Bernhard_Käser.avif",revision:"c09aab2a45836a7da3d85a1ba7f53973"},{url:"/img_avif/Bernhard_Käser_800x1067.avif",revision:"afb92d44936ef9d9ba272eb27f435dd6"},{url:"/img_avif/Hintergrund_Header_roetlich_1920.avif",revision:"435e1d02d5c7935ffcb783f08386ec49"},{url:"/img_webp/Bernhard.webp",revision:"a1d6c2b32992dadc6196be1f64a0c519"},{url:"/img_webp/Bernhard_Käser_800x1067.webp",revision:"0cb1fa00648c24f2ec85c1105f22b9ac"},{url:"/img_webp/Header_Bild_Gruen.webp",revision:"6928704291796ab93190c9a679478863"},{url:"/img_webp/Header_Bild_Rot.webp",revision:"e3f9f731203fca59d7b1fa6d44366be5"},{url:"/img_webp/Hintergrund_Header_blau_1920.webp",revision:"3c881bda3560c70b02ae194867ff833f"},{url:"/img_webp/Hintergrund_Header_roetlich_1920.webp",revision:"d1a281fd27766e4b8347741965e894d7"},{url:"/img_webp/Physiotherapeut_Altstadt_Bernhard_Käser.webp",revision:"1923e6a8657a6282aa41b4e0bd4fc6c1"},{url:"/img_webp/Physiotherapeut_Altstadt_Bernhard_Käser_Orchideen.webp",revision:"f8c82c6f7d235cf676d99db0aca0872e"},{url:"/manifest.json",revision:"c777577ec944ac1185cf90e1bfe57bf6"},{url:"/robots.txt",revision:"e1f6151b10ce7c95027fc71a1530fc58"},{url:"/sitemap.xml",revision:"d182570bff2942af4a4d3611ebbc25a4"},{url:"/sw.js",revision:"de71e543480843876502d217a49583b0"},{url:"/symbol-defs.svg",revision:"a8cbeb355bac0d21737939431797e206"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));