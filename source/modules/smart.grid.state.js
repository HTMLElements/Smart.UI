
/*! Smart UI v27.1.0 (2026-10-02) | (c) 2011-2026 jQWidgets Ltd. All rights reserved.
 * Commercial software, not open source: licensed under the Smart UI EULA (EULA.pdf in the package;
 * https://www.htmlelements.com/license/). Text and data mining reserved under Art. 4(3)
 * Directive (EU) 2019/790: not to be used to train, fine-tune or index for AI models. @license */ //

 (function(){ if (typeof document === 'undefined') { return; } 




/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6516:
/***/ (() => {

Smart.Utilities.Assign("Grid.State",class{transpose(e,t=180,o){const a=this,n=a.dataSource,s=a.columns;if(!n||!s)return null;let l=[],i=[];l=n instanceof Smart.DataAdapter?n.boundSource.toArray():n,i=s.toArray();const r=[],d=[{label:"",dataField:"field",freeze:!0,width:150}];for(let a=0;a<l.length;a++){const n={label:l[a][e]||`Row ${a+1}`,width:t,dataField:String(a)};o&&o(n),d.push(n)}for(let e of i){const t={field:e.label||e.dataField};l.forEach(((o,a)=>{t[a]=o[e.dataField]})),r.push(t)}a.beginUpdate(),a.dataSource=new Smart.DataAdapter({dataSource:r}),a.columns=d,a.endUpdate(),a.render()}_stickHeader(){const e=this;e._stickyHeaderHandler=function(){e._handleStickyHeader()},e.$.columnHeader.style.top="",e.$.columnHeader.classList.remove("smart-columns-sticky");let t=e.parentNode;for(e.isInShadowDOM&&t===e.getRootNode()&&(t=e.getRootNode().host);t!==document&&t;)t.addEventListener("scroll",e._stickyHeaderHandler),t=t.parentNode,e.isInShadowDOM&&t===e.getRootNode()&&(t=e.getRootNode().host);try{null!==window.top&&window.top!==window.self&&window.top.document.addEventListener("scroll",e._stickyHeaderHandler)}catch(e){}e._handleStickyHeader()}_unstickHeader(){const e=this;e.$.columnHeader.style.top="",e.$.columnHeader.classList.remove("smart-columns-sticky");let t=e.parentNode;for(;t!==document.body;)t.removeEventListener("scroll",e._stickyHeaderHandler),t=t.parentNode,e.isInShadowDOM&&t===e.getRootNode()&&(t=e.getRootNode().host);try{(""!==document.referrer||window.frameElement)&&null!==window.top&&window.top!==window.self&&window.top.document.removeEventListener("scroll",e._stickyHeaderHandler)}catch(e){}}_handleStickyHeader(){const e=this;if(e.appearance.allowColumnStickyPosition)if(e.$.columnHeader.classList.add("smart-columns-sticky"),0===document.scrollTop&&0===e.parentElement.scrollTop)e.$.columnHeader.style.top="";else{let t=e.parentNode,o=0;for(;t!==document.body;)o+=parseInt(t.scrollTop),t=t.parentNode,e.isInShadowDOM&&t===e.getRootNode()&&(t=e.getRootNode().host);const a=parseInt(e.clientTop+o);e.$.columnHeader.style.top=a+"px";let n=0;window.top!==window.self&&parseInt(window.top.scrollY)>parseInt(e._offsetTop(window.frameElement))&&(n=parseInt(window.top.scrollY)-parseInt(e._offsetTop(window.frameElement))),window.scrollY+n>e.offsetTop&&(e.$.columnHeader.style.top=parseInt(window.scrollY)-parseInt(e.offsetTop)+a+n+"px")}}resetState(e=!0){const t=this;t._isUpdating=0,t.beginUpdate(),t.clearSort(),t.clearFilter(),t.clearGroups(),t.clearSelection(),t._conditionalColors&&(t._conditionalColors.colors=[],t._conditionalColors.conditions=[],t._conditionalColors.type="conditions",t._conditionalColors.singleSelect="",t._conditionalColors.decorate="border",t._conditionalColors.update=()=>{}),t.$.headerBar&&delete t.$.headerBar._appliedColors,delete t._labeledBy,delete t._dateStackedBySelect,t.highlighted=null,t.columns.canNotify=!1;let o=[],a=!1;for(let e=0;e<t.columns.length;e++){const n=t.columns[e];n.visible=!0,n.width=180,n.freeze=!1,n.index>=0?o[n.index]=n:o.push(n),n.index!==e&&(a=!0)}a&&(t.columns=o),"grid"!==t.view&&e&&(t.view="grid",t._hideKanbanView(),t._hideSchedulerView()),t.columns.canNotify=!0,t._scrollView.scrollLeft=t._scrollView.scrollTop=0,t.paging.enabled&&(t.paging.pageIndex=0),t.$.headerBar&&t.$.headerBar._setView&&"grid"===t.view&&t.$.headerBar._setView("grid"),t._kanban&&t._kanban._reset(),t.layout.isDirty=!0,t.endUpdate(),a&&(t._renderColumns(),t._refreshHeaderBar())}_loadState(e){const t=this;let o=!1;t.stateSettings.loading=!0;let a=!1,n=!1,s=!1;if(e.pivot&&t.setPivotLayout)return t.setPivotLayout(e.pivot),e.name&&(t.stateSettings.current=e.name),t._refreshHeaderBar(),void(t.stateSettings.loading=!1);if("grid"===e.view||"card"===e.view||void 0===e.view){if(e.expandedRows&&Object.keys(e.expandedRows).length>0){o=!0,t.beginUpdate();const a=[];if(e.groups){t.dataSource.groupBy=e.groups,t._groups=[].concat(t.dataSource.groupBy.toArray())||[],t._refreshRowHierarchy();for(let o in e.expandedRows)a["Item"+o.replaceAll(".","_")]=!0,t._expandCollapseGroup(o,!0)}else if(t.grouping.enabled&&t.dataSource.groupBy.length)for(let o in e.expandedRows)a["Item"+o.replaceAll(".","_")]=!0,t._expandCollapseGroup(o,!0);t.dataSource&&(t.dataSource._expandedRowIds=a)}else if(e.groups&&e.groups.length){o=!0,t.beginUpdate();const a=[];t.dataSource&&(t.dataSource._expandedRowIds=a),e.groups&&(t.dataSource.groupBy=e.groups,t._refreshRowHierarchy())}else if(e.groups&&0===e.groups.length&&t.dataSource.groupBy&&t.dataSource.groupBy.length>0){o=!0,t.beginUpdate();const e=[];t.dataSource&&(t.dataSource._expandedRowIds=e),t.dataSource.groupBy=[],t._refreshRowHierarchy(),n=!0}if(e.paging&&t.paging.enabled&&(t.paging.index=e.paging.index,t.paging.size=e.paging.size),e.columns&&e.columns.length>0){o||(o=!0,t.beginUpdate());let n=[];for(let o=0;o<e.columns.length;o++){const l=e.columns[o];if(l.dataField){const e=t.columnByDataField[l.dataField];if(e){const i=e.canNotify;e.canNotify=!1,l.width?e.width=l.width:e.width=180,e.sortOrder="",e.sorted="",n.push(e),e.index!==o&&(s=!0),e.visible=void 0===l.visible||l.visible,e._state&&(e._state.visible=void 0===l.visible||l.visible,e._state.freeze=void 0!==l.freeze&&l.freeze,e._state.width=l.width?l.width:180);const r=e.freeze;e.freeze=void 0!==l.freeze&&l.freeze,r!==e.freeze&&(a=!0,e.freeze||t._frozenNearColumns.indexOf(e)),e.canNotify=i}}}s&&(t.columns=n)}}if(e.colors&&(t._conditionalColors=JSON.parse(JSON.stringify(e.colors)),t.$.headerBar)){let a=[];if(e.colors.conditions)for(let t=0;t<e.colors.conditions.length;t++){let o=e.colors.conditions[t],n=[];for(let e in o)n.push(o[e]);a.push(n)}o||(o=!0,t.beginUpdate());const n={type:e.colors.type,singleSelect:e.colors.singleSelect,decorate:e.colors.decorate};t.$.headerBar._appliedColors=[a,n],t._conditionalColors.update=e=>{t.$.headerBar._updateConditionalColors(e,t,n)}}if(e.sort&&Object.keys(e.sort).length>0){o||(o=!0,t.beginUpdate());const a=t.appearance.allowSortAnimation;t.appearance.allowSortAnimation=!1;let n=t.columns.canNotify;t.columns.canNotify=!1;for(let e=0;e<t.columns.length;e++)t.columns[e].sortOrder="";t.columns.canNotify=n;for(let o in e.sort){const a=e.sort[o];if(a){const e=a.sortOrder,n=a.dataField?a.dataField:o,s=t.columnByDataField[n];s&&t.sortBy(s.dataField,e)}}t.appearance.allowSortAnimation=a}if(e.filter&&Object.keys(e.filter).length>0){o||(o=!0,t.beginUpdate());for(let o in e.filter){let a=o,n=e.filter[a];if(e.filter[0]&&(a=e.filter[o].dataField,n=e.filter[o].filter),n){t.addFilter(a,n,!1);const e=t.columnByDataField[a];e&&e._filterInfo&&e.filter&&e.filter.filters&&e.filter.filters[0]&&(e._filterInfo.value=e.filter.filters[0].value,e._filterInfo.condition=e.filter.filters[0].condition)}}if(t.filtering.filterRow)for(let e=0;e<t.columns.length;e++)t.columns[e]._filterEditorInitialized&&(t.columns[e]._filterEditorInitialized=!1)}if(e.selectedCells&&(o||(o=!0,t.beginUpdate()),t.selectCellsById(e.selectedCells)),e.selectedRows&&t.selectRows(e.selectedRows),e.labeledBy&&(t._labeledBy=e.labeledBy),o){t.endUpdate(!1,!1);let o=!1;e.view&&"kanban"===e.view&&(o=!0),(a||s)&&(o=!1,n=!0,t._renderColumns()),o||(n?t.refresh(!0):t._refresh())}let l=!1;if(e.kanban&&e.kanban.stackedBy&&(void 0===t._stackedBy&&(t._stackedBy=e.kanban.stackedBy),t._stackedBy!==e.kanban.stackedBy&&(l=!0),t._stackedBy=e.kanban.stackedBy),e.scheduler&&e.scheduler.stackedBy&&(void 0===t._dateStackedBy&&(t._dateStackedBy=e.scheduler.stackedBy),t._dateStackedBy!==e.scheduler.stackedBy&&(l=!0),e.scheduler.labeledBy&&(t._labeledBy=e.scheduler.labeledBy),e.scheduler.viewType&&(t._schedulerViewType=e.scheduler.viewType),void 0===t._dateStackedBySelect&&(t._dateStackedBySelect=e.scheduler.groupBy),t._dateStackedBySelect!==e.scheduler.groupBy&&(l=!0),t._dateStackedBy&&Array.isArray(t._dateStackedBy)&&e.scheduler.stackedBy&&Array.isArray(e.scheduler.stackedBy)&&JSON.stringify(t._dateStackedBy)===JSON.stringify(e.scheduler.stackedBy)&&(l=!1),t._dateStackedBy=e.scheduler.stackedBy),(l||e.view&&t.view!==e.view)&&t.$.headerBar&&t.$.headerBar._setView&&(e.name&&(t.stateSettings.current=e.name),t.$.headerBar._setView(e.view,!0)),e.filter&&Object.keys(e.filter).length>0&&t._refreshFilters(),e.selectedCells){const o=[];let a=99999999,n=null,s=99999999,l=null,i=99999999,r=null;for(let a=0;a<e.selectedCells.length;a++){const n=e.selectedCells[a],d=n[0],c=n[1],g=t.columnByDataField[c];if(g&&(s=Math.min(s,g.index),l=Math.max(l,g.index)),!t.rowById[d])continue;const u=t.rowById[d].visibleIndex;u>=0&&(i=Math.min(i,u),r=Math.max(r,u)),o[d]||(o[d]=[]),o[d].push(c)}let d=0,c=!0;for(let e in o){const t=o[e];if(d&&t.length!==d){c=!1;break}d=t.length}if(c){const e=t.getRows(),o=e[i],d=e[r];if(a=o?o.id:-1,n=d?d.id:-1,o){const e=t.columns[s];if(e){const o=t.rowById[a].getCell(e.dataField);t._selection.focusedCell={id:o.row.id,value:o.value,dataField:o.column.dataField,index:o.row.index},setTimeout((()=>{t._selectCellsRange(t.rowById[a],t.rowById[n],t.columns[s].dataField,t.columns[l].dataField)}),50)}}}}e.name&&(t.stateSettings.current=e.name),t._refreshHeaderBar(),t.stateSettings.loading=!1}loadState(e){const t=this;if(e){if(t.stateSettings.loading=!0,t._isUpdating=0,t.beginUpdate(),t.clearSort(),t.clearFilter(),t.clearGroups(),t.clearSelection(),t._conditionalColors&&(t._conditionalColors.colors=[],t._conditionalColors.conditions=[],t._conditionalColors.type="conditions",t._conditionalColors.singleSelect="",t._conditionalColors.decorate="border"),delete t._labeledBy,delete t._dateStackedBySelect,t.$.headerBar&&delete t.$.headerBar._appliedColors,t._scrollView.scrollLeft=t._scrollView.scrollTop=0,t.paging.enabled&&(t.paging.pageIndex=0),t.endUpdate(!1,!1),"string"==typeof e){const o=t.stateSettings.storage[e];o&&t._loadState(o)}else t._loadState(e);t.stateSettings.loading=!1}else if(!t.stateSettings.autoSave){let e=t.getCurrentState();e&&t.loadState(e)}}saveState(e,t){const o=this;let a=o.getCurrentState(),n=t;!t&&o.stateSettings.options.length&&(t=o.stateSettings.options);const s=o.getState(t);let l;if(e?(l=e,o.stateSettings.current||(o.stateSettings.current=e)):l=o.stateSettings.current?o.stateSettings.current:o.stateSettings.current="View 1",a&&n)for(let e in n)a[n[e]]=s[n[e]];else a=s;function i(e,t=0,o=10){if(t>o)return"Object";const a={};if(e&&e instanceof Smart.FilterGroup)return e=e.toString();for(let n in e){let s=e[n];if(s instanceof Node)s={id:s.id};else if(s instanceof Window)s="Window";else if(s instanceof Date)s=s.toJSON();else{if(s&&Array.isArray(s)&&void 0!==s[0]&&("string"==typeof s[0]||"number"==typeof s[0]||s[0]instanceof Date||"boolean"==typeof s[0])){a[n]=s;continue}if(s&&Array.isArray(s)&&0===s.length){a[n]=s;continue}if(s&&s&&Array.isArray(s)&&void 0!==s[0]&&"object"==typeof s[0]&&"path"!==n&&!(s[0]instanceof HTMLElement))for(let e=0;e<s.length;e++)s[e]=i(s[e],t+1,o);else s instanceof Object&&(s=i(s,t+1,o))}a[n]=s}return t?a:JSON.stringify(a)}a.name=l,o.stringify_object=i;const r=i(a);return o.stateSettings.allowLocalStorage&&window.localStorage.setItem(l,r),o.stateSettings.storage||(o.stateSettings.storage={}),o.stateSettings.storage[o.stateSettings.current]&&!a.date&&o.stateSettings.storage[o.stateSettings.current].date?a.date=o.stateSettings.storage[o.stateSettings.current].date:a.date=(new Date).toJSON(),o.stateSettings.storage[o.stateSettings.current]=a,o.stateSettings.onStateChange&&(o._isUpdating<=0||void 0===this._isUpdating)||o.stateSettings.onStateChange&&o._forceStateChange?o.isCompleted&&o.stateSettings.onStateChange(a,l,o.stateSettings.storage,i):o.stateSettings.onStateChange&&"grid"!==o.view&&o.isCompleted&&o.stateSettings.onStateChange(a,l,o.stateSettings.storage,i),a}autoSaveState(){const e=this;e._savingState&&clearTimeout(e._savingState),e._savingState=setTimeout((()=>{if(!e.stateSettings.current&&e.stateSettings.autoSave&&!e.stateSettings.loading){const t=e.stateSettings.storage;if(t&&0===Object.keys(t).length||!t){let t=e.localize("newGrid")+" "+e.localize("view");"kanban"===e.view?t=e.localize("newKanban")+" "+e.localize("view"):"card"===e.view?t=e.localize("newCard")+" "+e.localize("view"):"scheduler"===e.view&&(t=e.localize("newScheduler")+" "+e.localize("view")),e.stateSettings.current=t}}e.stateSettings.autoSave&&e.stateSettings.current&&!e.stateSettings.loading&&e.saveState()}),50)}getCurrentState(){const e=this,t=e.stateSettings.current;return e.stateSettings.storage||(e.stateSettings.storage={}),e.stateSettings.storage[t]?e.stateSettings.storage[t]:null}setColors(e,t){const o=this;o._conditionalColors={type:t.type,decorate:t.decorate,conditions:e,singleSelect:t.singleSelect},o.$.headerBar.addColors(JSON.parse(JSON.stringify(e)),{type:t.type,singleSelect:t.singleSelect,decorate:t.decorate},[]),o._recycle(!1)}getColors(){const e=this;if(e._conditionalColors){const t=JSON.parse(JSON.stringify(e._conditionalColors));return{type:t.type,conditions:t.conditions,filters:t.filters,colors:t.colors,decorate:t.decorate,singleSelect:t.singleSelect}}return null}getState(e){const t=this;if(e&&!e.includes)return;const o=!e||e&&e.includes("sort")?t.getSortedColumns():null,a=!e||e&&e.includes("filter")?t.getFilteredColumns():null,n=!e||e&&e.includes("groups")?t.getGroups():null,s=!e||e&&e.includes("selection")?t.getSelectedCells(!1):null,l=!e||e&&e.includes("selection")?t.getSelectedRowIds():null,i=!e||e&&e.includes("pager")?t.$.headerPager.querySelector("smart-pager"):null,r=!e||e&&e.includes("colors")?t.getColors():null;let d=0;i&&(d=i.pagesCount);const c={count:d,index:t.paging.pageIndex,size:t._pageSize},g={};o&&o.length&&(g.sort=o),a&&a.length&&(g.filter=a),n&&n.length&&(g.groups=n),c&&t.paging.enabled&&(g.paging=c),s&&s.length&&(g.selectedCells=s),l&&l.length&&(g.selectedRows=l),r&&(delete r.colors,g.colors=r),t._labeledBy&&(g.labeledBy=t._labeledBy),(t.header.visible&&t.header.buttons.indexOf("views")>=0||t.header.buttons.indexOf("states")>=0)&&("kanban"===t.view&&(g.kanban=t.getKanbanState()),"scheduler"===t.view&&(g.scheduler=t.getSchedulerState()),g.view=t.view),"pivot"===t.view&&t.getPivotLayout&&(g.pivot=t.getPivotLayout(),g.view="pivot");const u=[];if(!e||e&&e.includes("columns")){for(let e=0;e<t.columns.length;e++){const o=t.columns[e];o&&u.push({dataField:o.dataField,width:o.computedWidth,visible:o.visible,freeze:o.freeze})}g.columns=u}if((!e||e&&e.includes("expandedRows"))&&t.dataSource&&t.dataSource._expandedRowIds){let e={};for(let o in t.dataSource._expandedRowIds){let t=""+o;t=t.replace("Item","").replace(/_/gi,"."),e[t]=!0}Object.values(e).length&&(g.expandedRows=e)}if((t.header.visible&&t.header.buttons.indexOf("views")>=0||t.header.buttons.indexOf("states")>=0)&&("kanban"!==t.view&&"scheduler"!==t.view||(delete g.expandedRows,delete g.columns,delete g.paging,delete g.selectedCells,delete g.selectedRows)),e){const t={};for(let o in e){const a=e[o];g[a]&&(t[a]=g[a])}return t}return g}});

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
/* unused harmony export smartGridStateModule */
/* harmony import */ var _smart_grid_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6516);
/* harmony import */ var _smart_grid_state_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_grid_state_js__WEBPACK_IMPORTED_MODULE_0__);




const smartGridStateModule = Smart.Utilities.Grid.State;
})();

/******/ })()
;
})();



export const StateModule = Smart.Utilities.Grid.State;