
/*! Smart UI v27.1.0 (2026-10-02) | (c) 2011-2026 jQWidgets Ltd. All rights reserved.
 * Commercial software, not open source: licensed under the Smart UI EULA (EULA.pdf in the package;
 * https://www.htmlelements.com/license/). Text and data mining reserved under Art. 4(3)
 * Directive (EU) 2019/790: not to be used to train, fine-tune or index for AI models. @license */ //

(function () {
    if (typeof document !== 'undefined') { return; }
    var root = typeof globalThis !== 'undefined' ? globalThis : self;
    root.Smart = root.Smart || {};
    root.Smart.Industrial = root.Smart.Industrial || {};

!function(){"use strict";const t=new Map;function n(t){return t>0&&0==(t&t-1)}function e(t){let n=1;for(;n<t;)n<<=1;return n}function r(e,r,o){const i=e.length;if(i<=1)return;if(!n(i))throw new Error("Smart.DSP.fft: length must be a power of two. Use transform() or bluestein() for an arbitrary length.");for(let t=1,n=0;t<i;t++){let o=i>>1;for(;n&o;o>>=1)n^=o;if(n^=o,t<n){let o=e[t];e[t]=e[n],e[n]=o,o=r[t],r[t]=r[n],r[n]=o}}const a=function(n){let e=t.get(n);if(e)return e;const r=n>>1,o=new Float64Array(r),i=new Float64Array(r);for(let t=0;t<r;t++){const e=-2*Math.PI*t/n;o[t]=Math.cos(e),i[t]=Math.sin(e)}return e={cos:o,sin:i},t.set(n,e),e}(i);for(let t=2;t<=i;t<<=1){const n=t>>1,s=i/t;for(let l=0;l<i;l+=t)for(let t=l,i=0;t<l+n;t++,i+=s){const s=a.cos[i],l=o?-a.sin[i]:a.sin[i],u=t+n,c=e[u]*s-r[u]*l,f=e[u]*l+r[u]*s;e[u]=e[t]-c,r[u]=r[t]-f,e[t]+=c,r[t]+=f}}if(o)for(let t=0;t<i;t++)e[t]/=i,r[t]/=i}function o(t,n){r(t,n,!0)}function i(t,i){const a=t.length;if(a<=1)return;if(n(a))return void r(t,i);const s=e(2*a-1),l=new Float64Array(a),u=new Float64Array(a);for(let t=0;t<a;t++){const n=Math.PI*(t*t%(2*a))/a;l[t]=Math.cos(n),u[t]=-Math.sin(n)}const c=new Float64Array(s),f=new Float64Array(s),h=new Float64Array(s),d=new Float64Array(s);for(let n=0;n<a;n++)c[n]=t[n]*l[n]-i[n]*u[n],f[n]=t[n]*u[n]+i[n]*l[n];h[0]=l[0],d[0]=-u[0];for(let t=1;t<a;t++)h[t]=h[s-t]=l[t],d[t]=d[s-t]=-u[t];r(c,f),r(h,d);for(let t=0;t<s;t++){const n=c[t]*h[t]-f[t]*d[t];f[t]=c[t]*d[t]+f[t]*h[t],c[t]=n}o(c,f);for(let n=0;n<a;n++)t[n]=c[n]*l[n]-f[n]*u[n],i[n]=c[n]*u[n]+f[n]*l[n]}function a(t,o){const a=o||{},s=a.size||e(t.length),u=a.window||"rectangular",c=l(u,Math.min(s,t.length)),h=new Float64Array(s),d=new Float64Array(s);for(let n=0;n<s&&n<t.length;n++){const e=f(t[n]);h[n]=(isNaN(e)?0:e)*c[n]}return n(s)?r(h,d):i(h,d),{re:h,im:d,window:u,size:s}}const s={hann:[.5,.5],hamming:[.54,.46],blackman:[.42,.5,.08],"blackman-harris":[.35875,.48829,.14128,.01168],"flat-top":[.21557895,.41663158,.277263158,.083578947,.006947368]};function l(t,n){const e=new Float64Array(n);if(!t||"rectangular"===t||"none"===t)return e.fill(1),e;const r=s[t];if(!r)throw new Error('Smart.DSP.window: unknown window "'+t+'".');if(1===n)return e[0]=1,e;for(let t=0;t<n;t++){let o=r[0];for(let e=1;e<r.length;e++)o+=(e%2?-1:1)*r[e]*Math.cos(2*Math.PI*e*t/(n-1));e[t]=o}return e}function u(t,n){const e=l(t,n||4096);let r=0,o=0;for(let t=0;t<e.length;t++)r+=e[t],o+=e[t]*e[t];return{coherent:r/e.length,noise:o/e.length}}function c(t,n){const e=n||{},r=e.sampleRate||1,o=void 0===e.window?"hann":e.window,i=e.scaling||"amplitude",s=a(t,{window:o,size:e.size}),l=s.size,c=1+(l>>1),f=u(o,Math.min(l,t.length)),h=new Float64Array(c),d=new Float64Array(c),w=r/l;for(let t=0;t<c;t++){h[t]=t*w;const n=s.re[t],e=s.im[t],o=Math.sqrt(n*n+e*e),a=0===t||t===c-1&&l%2==0?o:2*o;if("density"===i){const n=0===t||t===c-1&&l%2==0?1:2;d[t]=n*o*o/(r*l*f.noise)}else if("power"===i){const n=a/(l*f.coherent);d[t]=n*n}else d[t]=a/(l*f.coherent)}return{frequencies:h,magnitudes:d,binWidth:w,size:l,window:o}}function f(t){if(null==t||""===t||"boolean"==typeof t)return NaN;const n=Number(t);return isFinite(n)?n:NaN}function h(t,n){const e=Math.round(n/t.binWidth);if(e<0||e>=t.magnitudes.length)return 0;let r=t.magnitudes[e];return e>0&&(r=Math.max(r,t.magnitudes[e-1])),e+1<t.magnitudes.length&&(r=Math.max(r,t.magnitudes[e+1])),r}const d={fft:r,ifft:o,bluestein:i,transform:a,window:l,windowGain:u,magnitude:function(t,n){const e=new Float64Array(t.length);for(let r=0;r<t.length;r++)e[r]=Math.sqrt(t[r]*t[r]+n[r]*n[r]);return e},toDb:function(t,n){const e=n||{},r=void 0===e.reference?1:e.reference,o=void 0===e.floor?-200:e.floor,i="power"===e.kind?10:20,a=new Float64Array(t.length);for(let n=0;n<t.length;n++){const e=t[n]/r;a[n]=e>0?Math.max(o,i*Math.log10(e)):o}return a},spectrum:c,psd:function(t,n){const e=n||{},r=e.size||1024,o=void 0===e.overlap?.5:e.overlap,i=Math.max(1,Math.round(r*(1-o)));if(t.length<r){const n=c(t,{sampleRate:e.sampleRate,window:e.window,size:r,scaling:"density"});return n.segments=1,n}let a=null,s=null,l=0,u=0;for(let n=0;n+r<=t.length;n+=i){const o=c(t.slice(n,n+r),{sampleRate:e.sampleRate,window:e.window,size:r,scaling:"density"});a||(a=new Float64Array(o.magnitudes.length),s=o.frequencies,l=o.binWidth);for(let t=0;t<a.length;t++)a[t]+=o.magnitudes[t];u++}for(let t=0;t<a.length;t++)a[t]/=u;return{frequencies:s,magnitudes:a,binWidth:l,segments:u,size:r}},spectrogram:function(t,n){const e=n||{},r=e.size||512,o=e.sampleRate||1,i=void 0===e.overlap?.5:e.overlap,a=Math.max(1,Math.round(r*(1-i))),s=[],l=[];let u=null,f=0;for(let n=0;n+r<=t.length;n+=a){const i=c(t.slice(n,n+r),{sampleRate:o,window:e.window,size:r,scaling:e.scaling||"amplitude"});u||(u=i.frequencies,f=i.binWidth),s.push(i.magnitudes),l.push((n+r/2)/o)}return{frames:s,frequencies:u,times:l,binWidth:f}},rms:function(t){let n=0,e=0;for(let r=0;r<t.length;r++){const o=f(t[r]);isNaN(o)||(n+=o*o,e++)}return e?Math.sqrt(n/e):0},thd:function(t,n){const e=n||{},r=e.sampleRate||1,o=Number(e.fundamental),i=e.harmonics||5,a=c(t,{sampleRate:r,window:void 0===e.window?"hann":e.window,size:e.size});if(!isFinite(o)||o<=0)return{thd:0,thdDb:-1/0,fundamental:0,amplitudes:[]};const s=h(a,o),l=[];let u=0;for(let t=2;t<=i+1;t++){const n=o*t;if(n>=r/2)break;const e=h(a,n);l.push(e),u+=e*e}const f=s>0?Math.sqrt(u)/s:0;return{thd:f,thdDb:f>0?20*Math.log10(f):-1/0,fundamental:s,amplitudes:l}},peaks:function(t,n){const e=n||{},r=e.count||5,o=e.minProminence||0,i=t.magnitudes,a=[];for(let n=1;n<i.length-1;n++){const e=i[n];e<=i[n-1]||e<i[n+1]||(e-Math.min(i[n-1],i[n+1])<o||a.push({frequency:t.frequencies[n],magnitude:e,index:n}))}return a.sort((function(t,n){return n.magnitude-t.magnitude})),a.slice(0,r)},windows:["rectangular"].concat(Object.keys(s))};"undefined"!=typeof Smart&&(Smart.DSP=d),"undefined"!=typeof self&&(self.SmartDSP=d)}();
    if (typeof module === 'object' && module && module.exports) { module.exports = root.Smart; }
})();

 (function(){ if (typeof document === 'undefined') { return; } 




/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8627:
/***/ (() => {

!function(){"use strict";const t=new Map;function n(t){return t>0&&0==(t&t-1)}function e(t){let n=1;for(;n<t;)n<<=1;return n}function r(e,r,o){const i=e.length;if(i<=1)return;if(!n(i))throw new Error("Smart.DSP.fft: length must be a power of two. Use transform() or bluestein() for an arbitrary length.");for(let t=1,n=0;t<i;t++){let o=i>>1;for(;n&o;o>>=1)n^=o;if(n^=o,t<n){let o=e[t];e[t]=e[n],e[n]=o,o=r[t],r[t]=r[n],r[n]=o}}const a=function(n){let e=t.get(n);if(e)return e;const r=n>>1,o=new Float64Array(r),i=new Float64Array(r);for(let t=0;t<r;t++){const e=-2*Math.PI*t/n;o[t]=Math.cos(e),i[t]=Math.sin(e)}return e={cos:o,sin:i},t.set(n,e),e}(i);for(let t=2;t<=i;t<<=1){const n=t>>1,s=i/t;for(let l=0;l<i;l+=t)for(let t=l,i=0;t<l+n;t++,i+=s){const s=a.cos[i],l=o?-a.sin[i]:a.sin[i],u=t+n,c=e[u]*s-r[u]*l,f=e[u]*l+r[u]*s;e[u]=e[t]-c,r[u]=r[t]-f,e[t]+=c,r[t]+=f}}if(o)for(let t=0;t<i;t++)e[t]/=i,r[t]/=i}function o(t,n){r(t,n,!0)}function i(t,i){const a=t.length;if(a<=1)return;if(n(a))return void r(t,i);const s=e(2*a-1),l=new Float64Array(a),u=new Float64Array(a);for(let t=0;t<a;t++){const n=Math.PI*(t*t%(2*a))/a;l[t]=Math.cos(n),u[t]=-Math.sin(n)}const c=new Float64Array(s),f=new Float64Array(s),h=new Float64Array(s),d=new Float64Array(s);for(let n=0;n<a;n++)c[n]=t[n]*l[n]-i[n]*u[n],f[n]=t[n]*u[n]+i[n]*l[n];h[0]=l[0],d[0]=-u[0];for(let t=1;t<a;t++)h[t]=h[s-t]=l[t],d[t]=d[s-t]=-u[t];r(c,f),r(h,d);for(let t=0;t<s;t++){const n=c[t]*h[t]-f[t]*d[t];f[t]=c[t]*d[t]+f[t]*h[t],c[t]=n}o(c,f);for(let n=0;n<a;n++)t[n]=c[n]*l[n]-f[n]*u[n],i[n]=c[n]*u[n]+f[n]*l[n]}function a(t,o){const a=o||{},s=a.size||e(t.length),u=a.window||"rectangular",c=l(u,Math.min(s,t.length)),h=new Float64Array(s),d=new Float64Array(s);for(let n=0;n<s&&n<t.length;n++){const e=f(t[n]);h[n]=(isNaN(e)?0:e)*c[n]}return n(s)?r(h,d):i(h,d),{re:h,im:d,window:u,size:s}}const s={hann:[.5,.5],hamming:[.54,.46],blackman:[.42,.5,.08],"blackman-harris":[.35875,.48829,.14128,.01168],"flat-top":[.21557895,.41663158,.277263158,.083578947,.006947368]};function l(t,n){const e=new Float64Array(n);if(!t||"rectangular"===t||"none"===t)return e.fill(1),e;const r=s[t];if(!r)throw new Error('Smart.DSP.window: unknown window "'+t+'".');if(1===n)return e[0]=1,e;for(let t=0;t<n;t++){let o=r[0];for(let e=1;e<r.length;e++)o+=(e%2?-1:1)*r[e]*Math.cos(2*Math.PI*e*t/(n-1));e[t]=o}return e}function u(t,n){const e=l(t,n||4096);let r=0,o=0;for(let t=0;t<e.length;t++)r+=e[t],o+=e[t]*e[t];return{coherent:r/e.length,noise:o/e.length}}function c(t,n){const e=n||{},r=e.sampleRate||1,o=void 0===e.window?"hann":e.window,i=e.scaling||"amplitude",s=a(t,{window:o,size:e.size}),l=s.size,c=1+(l>>1),f=u(o,Math.min(l,t.length)),h=new Float64Array(c),d=new Float64Array(c),w=r/l;for(let t=0;t<c;t++){h[t]=t*w;const n=s.re[t],e=s.im[t],o=Math.sqrt(n*n+e*e),a=0===t||t===c-1&&l%2==0?o:2*o;if("density"===i){const n=0===t||t===c-1&&l%2==0?1:2;d[t]=n*o*o/(r*l*f.noise)}else if("power"===i){const n=a/(l*f.coherent);d[t]=n*n}else d[t]=a/(l*f.coherent)}return{frequencies:h,magnitudes:d,binWidth:w,size:l,window:o}}function f(t){if(null==t||""===t||"boolean"==typeof t)return NaN;const n=Number(t);return isFinite(n)?n:NaN}function h(t,n){const e=Math.round(n/t.binWidth);if(e<0||e>=t.magnitudes.length)return 0;let r=t.magnitudes[e];return e>0&&(r=Math.max(r,t.magnitudes[e-1])),e+1<t.magnitudes.length&&(r=Math.max(r,t.magnitudes[e+1])),r}const d={fft:r,ifft:o,bluestein:i,transform:a,window:l,windowGain:u,magnitude:function(t,n){const e=new Float64Array(t.length);for(let r=0;r<t.length;r++)e[r]=Math.sqrt(t[r]*t[r]+n[r]*n[r]);return e},toDb:function(t,n){const e=n||{},r=void 0===e.reference?1:e.reference,o=void 0===e.floor?-200:e.floor,i="power"===e.kind?10:20,a=new Float64Array(t.length);for(let n=0;n<t.length;n++){const e=t[n]/r;a[n]=e>0?Math.max(o,i*Math.log10(e)):o}return a},spectrum:c,psd:function(t,n){const e=n||{},r=e.size||1024,o=void 0===e.overlap?.5:e.overlap,i=Math.max(1,Math.round(r*(1-o)));if(t.length<r){const n=c(t,{sampleRate:e.sampleRate,window:e.window,size:r,scaling:"density"});return n.segments=1,n}let a=null,s=null,l=0,u=0;for(let n=0;n+r<=t.length;n+=i){const o=c(t.slice(n,n+r),{sampleRate:e.sampleRate,window:e.window,size:r,scaling:"density"});a||(a=new Float64Array(o.magnitudes.length),s=o.frequencies,l=o.binWidth);for(let t=0;t<a.length;t++)a[t]+=o.magnitudes[t];u++}for(let t=0;t<a.length;t++)a[t]/=u;return{frequencies:s,magnitudes:a,binWidth:l,segments:u,size:r}},spectrogram:function(t,n){const e=n||{},r=e.size||512,o=e.sampleRate||1,i=void 0===e.overlap?.5:e.overlap,a=Math.max(1,Math.round(r*(1-i))),s=[],l=[];let u=null,f=0;for(let n=0;n+r<=t.length;n+=a){const i=c(t.slice(n,n+r),{sampleRate:o,window:e.window,size:r,scaling:e.scaling||"amplitude"});u||(u=i.frequencies,f=i.binWidth),s.push(i.magnitudes),l.push((n+r/2)/o)}return{frames:s,frequencies:u,times:l,binWidth:f}},rms:function(t){let n=0,e=0;for(let r=0;r<t.length;r++){const o=f(t[r]);isNaN(o)||(n+=o*o,e++)}return e?Math.sqrt(n/e):0},thd:function(t,n){const e=n||{},r=e.sampleRate||1,o=Number(e.fundamental),i=e.harmonics||5,a=c(t,{sampleRate:r,window:void 0===e.window?"hann":e.window,size:e.size});if(!isFinite(o)||o<=0)return{thd:0,thdDb:-1/0,fundamental:0,amplitudes:[]};const s=h(a,o),l=[];let u=0;for(let t=2;t<=i+1;t++){const n=o*t;if(n>=r/2)break;const e=h(a,n);l.push(e),u+=e*e}const f=s>0?Math.sqrt(u)/s:0;return{thd:f,thdDb:f>0?20*Math.log10(f):-1/0,fundamental:s,amplitudes:l}},peaks:function(t,n){const e=n||{},r=e.count||5,o=e.minProminence||0,i=t.magnitudes,a=[];for(let n=1;n<i.length-1;n++){const e=i[n];e<=i[n-1]||e<i[n+1]||(e-Math.min(i[n-1],i[n+1])<o||a.push({frequency:t.frequencies[n],magnitude:e,index:n}))}return a.sort((function(t,n){return n.magnitude-t.magnitude})),a.slice(0,r)},windows:["rectangular"].concat(Object.keys(s))};"undefined"!=typeof Smart&&(Smart.DSP=d),"undefined"!=typeof self&&(self.SmartDSP=d)}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _smart_dsp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8627);
/* harmony import */ var _smart_dsp_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_dsp_js__WEBPACK_IMPORTED_MODULE_0__);


/* Signal processing. Not an element: importing this module registers Smart.DSP.

   It imports nothing itself. Every function in the file is plain arithmetic with no DOM
   and no Smart dependency, which is what lets a host load the same file in a Worker - a
   1M-point FFT blocks the main thread for about a second. */


})();

/******/ })()
;
})();

