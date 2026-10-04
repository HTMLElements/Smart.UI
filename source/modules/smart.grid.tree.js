
/*! Smart UI v27.1.0 (2026-10-02) | (c) 2011-2026 jQWidgets Ltd. All rights reserved.
 * Commercial software, not open source: licensed under the Smart UI EULA (EULA.pdf in the package;
 * https://www.htmlelements.com/license/). Text and data mining reserved under Art. 4(3)
 * Directive (EU) 2019/790: not to be used to train, fine-tune or index for AI models. @license */ //

 (function(){ if (typeof document === 'undefined') { return; } 




/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3225:
/***/ (() => {

(()=>{"use strict";
class e{_setRowProperty(e,t,a){const r=this,d=r.rowById[e];if(!d)return;d[t]=a;const o=r._recyclingRows;for(let d=0;d<o.length;d++){const s=o[d];if(s.id===e){s[t]=a,"expanded"===t&&r.dataSource&&(a?r.dataSource._expandedRowIds[s.data.$.id]=!0:delete r.dataSource._expandedRowIds[s.data.$.id]),s.data&&void 0!==s.data[t]&&(s.data[t]=a),r.refresh();break}}r.stateSettings.autoSave&&r.stateSettings.current&&!r.stateSettings.loading&&r.saveState()}_setRowsProperty(e,t,a){const r=this;r._refreshLayout(),r._refreshRowHierarchy(!0);const d=r._recyclingRows;r.rows.canNotify=!1;for(let o=0;o<d.length;o++){const s=d[o];a&&-1===a.indexOf(s.id)||(s[e]=t,"expanded"===e&&r.dataSource&&(t?r.dataSource._expandedRowIds[s.data.$.id]=!0:delete r.dataSource._expandedRowIds[s.data.$.id]),s.data&&void 0!==s.data[e]&&(s.data[e]=t))}r.rows.canNotify=!0,r.refresh()}expandRowsToGroupLevel(e){this._expandCollapseGroupsToLevel(!0,e)}_expandCollapseGroupsToLevel(e,t){const a=this;a._refreshLayout(),a._refreshRowHierarchy(!0);const r=a._recyclingRows;a.rows.canNotify=!1;for(let d=0;d<r.length;d++){const o=r[d];o.data.level<t&&(o.expanded=o.data.expanded=e,a.dataSource&&(e?a.dataSource._expandedRowIds[o.data.$.id]=!0:delete a.dataSource._expandedRowIds[o.data.$.id]))}a.rows.canNotify=!0,a.refresh()}_applyThreeStates(e){const t=this,a=e!==t.rowHierarchy;if(!t.rowHierarchy)return;const r=a?e.children:t.rowHierarchy.filter((e=>{if(0===e.level)return e}));let d=0,o=0;for(let s=0;s<r.length;s++){const n=r[s];e.checked&&(n.checked=!0),!1===n.leaf&&t._applyThreeStates(n),a&&(n.checked?d++:null===n.checked&&o++)}a&&(d===e.children.length?e.checked=!0:0===d&&0===o?e.checked=!1:t.checkBoxes.hasThreeStates?e.checked=null:e.checked=!1)}_hasThreeStates(e,t){const a=this;let r=e;for(e!==t&&(e.checked?e.checked=!1:e.checked=!0);r.parent;){const e=r.parent,t=e.children;let d=0,o=0;for(let e=0;e<t.length;e++)t[e].checked?d++:a.checkBoxes.hasThreeStates&&null===t[e].checked&&o++;d===e.children.length?e.checked=!0:0===d&&0===o?e.checked=!1:a.checkBoxes.hasThreeStates?e.checked=null:e.checked=!1,r=e}e.leaf||function e(t,a){const r=t.children;for(let t=0;t<r.length;t++){const d=r[t];d.checked=a,!1===d.leaf&&e(d,a)}}(e,e.checked)}_expandCollapseGroup(e,t){const a=this;if(!a.grouping.enabled||!a.rowHierarchy)return;e&&e.indexOf&&e.indexOf("Item")>=0&&(e=e.replace("Item",""));const r=(""+e).split(".");let d=a.rowHierarchy[r[0]];if(!d)return;const o=a.rows.canNotify;a.rows.canNotify=!1,null===t&&(t=!d.expanded),d.expanded=d.data.expanded=t,a._saveRowState(d.id,!d.expanded);for(let e=1;e<r.length&&(d=d.children[r[e]],d&&!d.leaf);e++)d.expanded=d.data.expanded=t;a.rows.canNotify=o,a._refresh(),a.stateSettings.autoSave&&a.stateSettings.current&&!a.stateSettings.loading&&a.saveState()}_saveRowState(e,t=!1){const a=this,r=a.rowById[e];if(r&&a.dataSource){if(t)return void delete a.dataSource._expandedRowIds[r.data.$.id];a.dataSource._expandedRowIds[r.data.$.id]=!0}}expandRow(e){const t=this;t.grouping.enabled?t._expandCollapseGroup(e,!0):e&&Array.isArray(e)?t._setRowsProperty("expanded",!0,e):(t._setRowProperty(e,"expanded",!0),t._saveRowState(e))}expandAllRows(){const e=this;e.grouping.enabled?e._expandCollapseGroupsToLevel(!0,99):e._setRowsProperty("expanded",!0)}collapseAllRows(){const e=this;e.grouping.enabled?e._expandCollapseGroupsToLevel(!1,99):e._setRowsProperty("expanded",!1)}addChildRow(e,t){const a=this;e&&e[0]&&(e[0][a.dataSource.parentDataField]=t),a.addSiblingRow(e,t,null)}addSiblingRow(e,t,a=!0){const r=this;if(r.dataSource){if(Array.isArray(e)){for(let t=0;t<e.length;t++)if(r.dataSource.id&&(null===e[t][r.dataSource.id]||void 0===e[t][r.dataSource.id])){const a=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};e[t][r.dataSource.id]=a()}}else if(r.dataSource.id&&(null===e[r.dataSource.id]||void 0===e[r.dataSource.id])){const t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};e[r.dataSource.id]=t()}const d=e=>{Array.isArray(e)||(e=[e]);for(let t=0;t<e.length;t++){const a=e[t];r.dataSource.remove(a),a.children&&a.children.length>0&&d(a.children)}};d(e),a?r.dataSource.insertBefore(e,t):r.dataSource.insertAfter(e,t),r.refresh(!0)}}toggleRow(e){const t=this;if(t.grouping.enabled)return void t._expandCollapseGroup(e,null);const a=t.rowById[e];a&&(a.expanded?a.expanded=!1:a.expanded=!0)}collapseRow(e){const t=this;t.grouping.enabled?t._expandCollapseGroup(e,!1):e&&Array.isArray(e)?t._setRowsProperty("expanded",!1,e):(t._setRowProperty(e,"expanded",!1),t._saveRowState(e,!0))}checkRow(e){const t=this;e&&Array.isArray(e)?t._setRowsProperty("checked",!0,e):t._setRowProperty(e,"checked",!0)}uncheckRow(e){const t=this;e&&Array.isArray(e)?t._setRowsProperty("checked",!1,e):t._setRowProperty(e,"checked",!1)}checkAllRows(){this._setRowsProperty("checked",!0)}uncheckAllRows(){this._setRowsProperty("checked",!1)}}Smart.Utilities.Grid.Tree=e})();

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
/* unused harmony export smartGridTreeModule */
/* harmony import */ var _smart_grid_tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3225);
/* harmony import */ var _smart_grid_tree_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_grid_tree_js__WEBPACK_IMPORTED_MODULE_0__);




const smartGridTreeModule = Smart.Utilities.Grid.Tree;

})();

/******/ })()
;
})();



export const TreeModule = Smart.Utilities.Grid.Tree;
