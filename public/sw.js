if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let c={};const d=e=>s(e,n),r={module:{uri:n},exports:c,require:d};a[n]=Promise.all(i.map((e=>r[e]||d(e)))).then((e=>(t(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"f11bef46e3013b550dbb1a894d6abf90"},{url:"/_next/static/chunks/1343-95c966f38b05d8d8.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/13b76428-ccac6b34b8b9518b.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/1493.fa52be76826452e4.js",revision:"fa52be76826452e4"},{url:"/_next/static/chunks/1684.d4ba47a8336a34c4.js",revision:"d4ba47a8336a34c4"},{url:"/_next/static/chunks/1893-4f52670f7070c1ed.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/1913.e364ad187754b80a.js",revision:"e364ad187754b80a"},{url:"/_next/static/chunks/2358-f6b379e404836bbd.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/2753.8d736651e21db97a.js",revision:"8d736651e21db97a"},{url:"/_next/static/chunks/3057-3f9048a863dc9e5a.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/3303-362d0b1ad4ff517a.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/3868-8de6325a4e187b41.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/3964-1154e7c4dd7705e6.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/413-260baf7a9b5abd4e.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/4726.bee0a88a8d1ac927.js",revision:"bee0a88a8d1ac927"},{url:"/_next/static/chunks/4775.02b5c8baaa7517c7.js",revision:"02b5c8baaa7517c7"},{url:"/_next/static/chunks/478-c61ac8e50e9099b2.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/5290-222179bad8bfd3cf.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/5626-74448e8bdd989660.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/5732-608e24501f8e326e.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/5741-9d2d85ac8c0a78e4.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/5748-725316eb9ee5a7e3.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/5820-7accd3a3744e4476.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/6288-af0de626f121f79c.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/6445-6ceff066602fec08.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/664-8c493adec1e9e31b.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/6767-3c74e5556b512fce.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/7393-5767c865f26a1137.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/7472-b844c74b028ddf3c.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/8360-f1cd8cb222e3e46f.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/(auth)/login/page-5486cad63661c903.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/(auth)/register/page-f50d63e7bc57e506.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/(dashboard)/bills/page-53639370234240c1.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/(dashboard)/home/page-37a92f750b69d7bb.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/(dashboard)/layout-ce220034d6dd3f28.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/(dashboard)/payments/create/page-a41ffe9940f0f68e.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/(dashboard)/payments/page-84b5f67f0e2931f3.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/(dashboard)/savings/page-418f6760299aaafe.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/(dashboard)/settings/page-b02a02e21a59b477.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/_not-found-fb5dcec614e4249d.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/claim/%5Bid%5D/page-b66bcf8f59cb0b2d.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/claim/page-aae0a94de32f636b.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/i/bills/%5Bid%5D/page-b259bb2e04194dae.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/layout-9eb0daea3dae6004.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/page-2e99daaf52784f19.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/app/pay/%5Bid%5D/page-8e1bd8cb5bf9b35d.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/bf6a786c-0a74203676c56e8b.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/c16f53c3-2cc724c571568494.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/dc112a36-a26ec11f6dfc39b0.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/framework-638abc5ad5ea33cc.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/main-37868e89fe219f97.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/main-app-1e7ce5f1ecdd23ae.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/pages/_app-0a6f9986ee298e67.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/pages/_error-77acd5d276fadc61.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-942e4fae3bf3e55e.js",revision:"iP1lxGeeeaptHdg9570Hn"},{url:"/_next/static/css/decec166b9ef9399.css",revision:"decec166b9ef9399"},{url:"/_next/static/iP1lxGeeeaptHdg9570Hn/_buildManifest.js",revision:"b9418b3f2fddb202e5112ea6e82c15fe"},{url:"/_next/static/iP1lxGeeeaptHdg9570Hn/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/00045315ec24c208-s.woff2",revision:"ab395397a9e8090889f607b2e0c4e02e"},{url:"/_next/static/media/0e7784537271ba44-s.p.woff2",revision:"a4cb9392e8f15e8f21a5d7ad4a5a989a"},{url:"/_next/static/media/2a15876e25787f01-s.p.woff2",revision:"3529e5e45d51329ccdc24c910d7abc0a"},{url:"/_next/static/media/42ca9a2dc174b9b9-s.p.woff2",revision:"c27a2e28b3a242fa8ff8f98b497e77ab"},{url:"/_next/static/media/4ae5878233d4800a-s.woff2",revision:"ee8873012a266b6e4b44fc8455759e50"},{url:"/_next/static/media/642cf3f5695072c2-s.woff2",revision:"2e1c824a40ffbf5f81d054d08fa63924"},{url:"/_next/static/media/6e011519a854d1d2-s.woff2",revision:"d7193a0e9a2c04a02e0b182dc93b1141"},{url:"/_next/static/media/70336daae8f9acb3-s.woff2",revision:"b2eba9c14da0e8b58101509bacbfaf08"},{url:"/_next/static/media/7ebd901f2f4a0b98-s.p.woff2",revision:"2bf0c05208a33f85cf7cb16d2d14507f"},{url:"/_next/static/media/83c76cede88902c5-s.p.woff2",revision:"263efe7a03360205358705fe7a582c79"},{url:"/_next/static/media/8a63bc110e8f45ad-s.woff2",revision:"903f1807a02013d8adfada6444117ef4"},{url:"/_next/static/media/95a978e26cc29d74-s.p.woff2",revision:"96bae7b3e3968ac6352819fe91140292"},{url:"/_next/static/media/a75fe934ca01b6d6-s.woff2",revision:"3ef46f48125aa6d53b35b50fd5185bab"},{url:"/_next/static/media/ace9c6b312d37d07-s.woff2",revision:"cd0b1b9c31ae4c0c45e400dfb83e8fb8"},{url:"/_next/static/media/af700d9cbf4b15b0-s.woff2",revision:"2346a1b469af04bef948749af8a73637"},{url:"/_next/static/media/b8ce78b8b9460bfe-s.woff2",revision:"fe7fb3e9a1df9354ad892203bd8da4a6"},{url:"/_next/static/media/brave.49e0c656.png",revision:"8813ea8c3f9b2d3ba040d3ad12ce1990"},{url:"/_next/static/media/c02c542cee7c0ea3-s.woff2",revision:"f08ba3ecdb4b75f24504e5771305debb"},{url:"/_next/static/media/c28dd3d5af2532ea-s.woff2",revision:"3f7f478921edbffbd7bd07c8f8401152"},{url:"/_next/static/media/coinbase.b6a54a98.webp",revision:"3075e5f06fd33a6da218aad481c35545"},{url:"/_next/static/media/d0b7d64a65dc32f9-s.p.woff2",revision:"c6464f98a72f6fb16d7e0c142064a4b4"},{url:"/_next/static/media/d4a6d1072ea531dd-s.woff2",revision:"039ead83fe94a9906d08fae7cf13629c"},{url:"/_next/static/media/e1012b8d4e21a3f0-s.woff2",revision:"93bef5ee47600e3752a4626b1bf9483e"},{url:"/_next/static/media/ec466115de78afd3-s.woff2",revision:"e86502b30b2b98eed3d2f180cdb6ef78"},{url:"/_next/static/media/ed0713aabc469750-s.woff2",revision:"e3438eb84ab027e5ad586dc596b1b2f1"},{url:"/_next/static/media/f2bfb63acfc2a372-s.woff2",revision:"808a752d8abb231b14c1c64ac1394048"},{url:"/_next/static/media/f4d4117ac16cdbe3-s.p.woff2",revision:"0c87d07d0b0e60989a869b0ece1754a3"},{url:"/_next/static/media/f5e5067cd50e2c82-s.p.woff2",revision:"13fd948eebe1c50558df7f53a2922e70"},{url:"/_next/static/media/f6c423f2f3e4cdb4-s.woff2",revision:"ad0695b83ab77f1927fd1f28615b2f74"},{url:"/_next/static/media/icon.be41711e.png",revision:"2fb08a7f8c13e3324a06adbc5371b0eb"},{url:"/_next/static/media/metamask.11381b40.png",revision:"4438fc2764f569a685d2a738351c24c3"},{url:"/_next/static/media/walletconnect.fd2f1650.webp",revision:"bc79cf15ae946361ea45f926480b8906"},{url:"/banner/bg.png",revision:"06fcfcc51acf883fdc7451e90d1fcb84"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
