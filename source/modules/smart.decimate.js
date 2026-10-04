
/*! Smart UI v27.1.0 (2026-10-02) | (c) 2011-2026 jQWidgets Ltd. All rights reserved.
 * Commercial software, not open source: licensed under the Smart UI EULA (EULA.pdf in the package;
 * https://www.htmlelements.com/license/). Text and data mining reserved under Art. 4(3)
 * Directive (EU) 2019/790: not to be used to train, fine-tune or index for AI models. @license */ //

(function () {
    if (typeof document !== 'undefined') { return; }
    var root = typeof globalThis !== 'undefined' ? globalThis : self;
    root.Smart = root.Smart || {};
    root.Smart.Industrial = root.Smart.Industrial || {};

!function(){"use strict";function t(t,e,o,l){const r=t[e];return null==r?null:Array.isArray(r)?{x:n(r[0]),y:n(r[1])}:"object"==typeof r?{x:n(r[o]),y:n(r[l])}:{x:e,y:n(r)}}function n(t){if(null==t||""===t||"boolean"==typeof t)return NaN;const n=Number(t);return isFinite(n)?n:NaN}function e(n,e,o){const l=[];for(let r=0;r<(n||[]).length;r++){const u=t(n,r,e,o);u&&!isNaN(u.y)&&l.push(u)}return l}const o={minMax:function(n,o,l){const r=l||{},u=r.x||"x",i=r.y||"y",s=(n||[]).length;if(!s||!o||o<1||s<=2*o)return e(n,u,i);const a=[],f=s/o;for(let e=0;e<o;e++){const o=Math.floor(e*f),l=Math.min(s,Math.floor((e+1)*f));let r=null,c=null,h=-1,m=-1;for(let e=o;e<l;e++){const o=t(n,e,u,i);o&&!isNaN(o.y)&&((null===r||o.y<r.y)&&(r=o,h=e),(null===c||o.y>c.y)&&(c=o,m=e))}null!==r&&(h!==m?h<m?a.push(r,c):a.push(c,r):a.push(r))}return a},minMaxIndexed:function(t,n,e){const o=[];if(!t||!e||e<1)return o;if(t<=2*e){for(let n=0;n<t;n++)o.push(n);return o}const l=t/e;for(let r=0;r<e;r++){const e=Math.floor(r*l),u=Math.min(t,Math.floor((r+1)*l));let i=1/0,s=-1/0,a=-1,f=-1;for(let t=e;t<u;t++){const e=n(t);isNaN(e)?o.push(t):(e<i&&(i=e,a=t),e>s&&(s=e,f=t))}-1!==a&&(a===f?o.push(a):a<f?o.push(a,f):o.push(f,a))}return o},lttb:function(n,o,l){const r=l||{},u=r.x||"x",i=r.y||"y",s=(n||[]).length;if(!s||!o||o>=s||o<3)return e(n,u,i);const a=[],f=(s-2)/(o-2);let c=t(n,0,u,i),h=0;a.push(c);for(let e=0;e<o-2;e++){const o=Math.floor((e+1)*f)+1,l=Math.min(Math.floor((e+2)*f)+1,s);let r=0,m=0,y=0;for(let e=o;e<l;e++){const o=t(n,e,u,i);o&&!isNaN(o.y)&&(r+=o.x,m+=o.y,y++)}y&&(r/=y,m/=y);const p=Math.floor(e*f)+1,N=Math.min(Math.floor((e+1)*f)+1,s);let M=null,v=-1,x=p;for(let e=p;e<N;e++){const o=t(n,e,u,i);if(!o||isNaN(o.y))continue;const l=Math.abs((c.x-r)*(o.y-c.y)-(c.x-o.x)*(m-c.y))/2;l>v&&(v=l,M=o,x=e)}M&&(a.push(M),c=M,h=x)}const m=t(n,s-1,u,i);return m&&h!==s-1&&a.push(m),a},stepPreserving:function(t,e,o){const l=o||{},r=(t||[]).map((function(t){return Array.isArray(t)?{time:n(t[0]),value:t[1]}:{time:n(t.time),value:t.value}})).filter((function(t){return!isNaN(t.time)}));if(!r.length||!e||e<1)return r.map((function(t){return{time:t.time,value:t.value,collapsed:1}}));const u=void 0===l.from?r[0].time:Number(l.from),i=(void 0===l.to?r[r.length-1].time:Number(l.to))-u;if(!(i>0))return r.map((function(t){return{time:t.time,value:t.value,collapsed:1}}));const s=[];let a=null,f=null;for(let t=0;t<r.length;t++){const n=r[t],o=Math.floor((n.time-u)/i*e);o===a?(f.value=n.value,f.collapsed++):(f&&s.push(f),a=o,f={time:n.time,value:n.value,collapsed:1})}return f&&s.push(f),s}};"undefined"!=typeof Smart&&(Smart.Utilities=Smart.Utilities||{},Smart.Utilities.Decimate=o),"undefined"!=typeof self&&(self.SmartDecimate=o)}();
    if (typeof module === 'object' && module && module.exports) { module.exports = root.Smart; }
})();

 (function(){ if (typeof document === 'undefined') { return; } 




/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 2132:
/***/ (() => {

!function(){"use strict";function t(t,e,o,l){const r=t[e];return null==r?null:Array.isArray(r)?{x:n(r[0]),y:n(r[1])}:"object"==typeof r?{x:n(r[o]),y:n(r[l])}:{x:e,y:n(r)}}function n(t){if(null==t||""===t||"boolean"==typeof t)return NaN;const n=Number(t);return isFinite(n)?n:NaN}function e(n,e,o){const l=[];for(let r=0;r<(n||[]).length;r++){const u=t(n,r,e,o);u&&!isNaN(u.y)&&l.push(u)}return l}const o={minMax:function(n,o,l){const r=l||{},u=r.x||"x",i=r.y||"y",s=(n||[]).length;if(!s||!o||o<1||s<=2*o)return e(n,u,i);const a=[],f=s/o;for(let e=0;e<o;e++){const o=Math.floor(e*f),l=Math.min(s,Math.floor((e+1)*f));let r=null,c=null,h=-1,m=-1;for(let e=o;e<l;e++){const o=t(n,e,u,i);o&&!isNaN(o.y)&&((null===r||o.y<r.y)&&(r=o,h=e),(null===c||o.y>c.y)&&(c=o,m=e))}null!==r&&(h!==m?h<m?a.push(r,c):a.push(c,r):a.push(r))}return a},minMaxIndexed:function(t,n,e){const o=[];if(!t||!e||e<1)return o;if(t<=2*e){for(let n=0;n<t;n++)o.push(n);return o}const l=t/e;for(let r=0;r<e;r++){const e=Math.floor(r*l),u=Math.min(t,Math.floor((r+1)*l));let i=1/0,s=-1/0,a=-1,f=-1;for(let t=e;t<u;t++){const e=n(t);isNaN(e)?o.push(t):(e<i&&(i=e,a=t),e>s&&(s=e,f=t))}-1!==a&&(a===f?o.push(a):a<f?o.push(a,f):o.push(f,a))}return o},lttb:function(n,o,l){const r=l||{},u=r.x||"x",i=r.y||"y",s=(n||[]).length;if(!s||!o||o>=s||o<3)return e(n,u,i);const a=[],f=(s-2)/(o-2);let c=t(n,0,u,i),h=0;a.push(c);for(let e=0;e<o-2;e++){const o=Math.floor((e+1)*f)+1,l=Math.min(Math.floor((e+2)*f)+1,s);let r=0,m=0,y=0;for(let e=o;e<l;e++){const o=t(n,e,u,i);o&&!isNaN(o.y)&&(r+=o.x,m+=o.y,y++)}y&&(r/=y,m/=y);const p=Math.floor(e*f)+1,N=Math.min(Math.floor((e+1)*f)+1,s);let M=null,v=-1,x=p;for(let e=p;e<N;e++){const o=t(n,e,u,i);if(!o||isNaN(o.y))continue;const l=Math.abs((c.x-r)*(o.y-c.y)-(c.x-o.x)*(m-c.y))/2;l>v&&(v=l,M=o,x=e)}M&&(a.push(M),c=M,h=x)}const m=t(n,s-1,u,i);return m&&h!==s-1&&a.push(m),a},stepPreserving:function(t,e,o){const l=o||{},r=(t||[]).map((function(t){return Array.isArray(t)?{time:n(t[0]),value:t[1]}:{time:n(t.time),value:t.value}})).filter((function(t){return!isNaN(t.time)}));if(!r.length||!e||e<1)return r.map((function(t){return{time:t.time,value:t.value,collapsed:1}}));const u=void 0===l.from?r[0].time:Number(l.from),i=(void 0===l.to?r[r.length-1].time:Number(l.to))-u;if(!(i>0))return r.map((function(t){return{time:t.time,value:t.value,collapsed:1}}));const s=[];let a=null,f=null;for(let t=0;t<r.length;t++){const n=r[t],o=Math.floor((n.time-u)/i*e);o===a?(f.value=n.value,f.collapsed++):(f&&s.push(f),a=o,f={time:n.time,value:n.value,collapsed:1})}return f&&s.push(f),s}};"undefined"!=typeof Smart&&(Smart.Utilities=Smart.Utilities||{},Smart.Utilities.Decimate=o),"undefined"!=typeof self&&(self.SmartDecimate=o)}();

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
/* harmony import */ var _smart_decimate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2132);
/* harmony import */ var _smart_decimate_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_decimate_js__WEBPACK_IMPORTED_MODULE_0__);


/* Series reduction. Not an element: importing this module registers
   Smart.Utilities.Decimate.

   Imports nothing. Plain arithmetic with no DOM, so it loads in a Worker alongside
   smart.dsp.js for a host that wants to reduce a large capture off the main thread. */


})();

/******/ })()
;
})();

