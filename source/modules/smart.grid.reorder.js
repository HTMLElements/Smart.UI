
/*! Smart UI v27.1.0 (2026-10-02) | (c) 2011-2026 jQWidgets Ltd. All rights reserved.
 * Commercial software, not open source: licensed under the Smart UI EULA (EULA.pdf in the package;
 * https://www.htmlelements.com/license/). Text and data mining reserved under Art. 4(3)
 * Directive (EU) 2019/790: not to be used to train, fine-tune or index for AI models. @license */ //

 (function(){ if (typeof document === 'undefined') { return; } 




/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7343:
/***/ (() => {

Smart.Utilities.Assign("Grid.Reorder",class{reorderColumns(e,r,t=!1){const o=this;if(void 0===e||void 0===r)return;let a=o.columnByDataField[e];const n=o.columnByDataField[r],d="string"==typeof e?o.columns.indexOf(a):e,i="string"==typeof r?o.columns.indexOf(n):r;"string"==typeof e&&"string"===r?a.columnGroup=n.columnGroup:(a=o.columns[d],a.columnGroup=o.columns[i].columnGroup);const l=a.sortIndex,s=a.sortOrder,c=a.filter;t&&i+1<=o.columns.length?o.columns.move(d,i):o.columns.move(d,i-1),a.sortOrder=s,a.sortIndex=l,a.filter=c}swapColumns(e,r){const t=this;if(void 0===e||void 0===r)return;const o=t.columnByDataField[e],a=t.columnByDataField[r],n="string"==typeof e?t.columns.indexOf(o):e,d="string"==typeof r?t.columns.indexOf(a):r,i="string"==typeof e?o.columnGroup:t.columns[n].columnGroup;"string"==typeof e&&"string"===r?o.columnGroup=a.columnGroup:t.columns[n].columnGroup=t.columns[d].columnGroup;const l=o.sortIndex,s=o.sortOrder,c=o.filter;t.columns.move(n,d),"string"==typeof e&&"string"===r?a.columnGroup=i:t.columns[d-1].columnGroup=i,t.columns.move(d-1,n),o.sortOrder=s,o.sortIndex=l,o.filter=c}_createLine(e){const r=this;return e.classList.contains("smart-breadcrumb-item")||e.column?function(){const t=document.createElement("div"),o=r.getBoundingRect(e),a=r.getBoundingRect(r.$.columnHeader),n=r.getBoundingRect(r),d=r.$.content.offsetHeight-7-r._scrollView.hScrollBar.offsetHeight-o.top+n.top;return t.classList.add("smart-grid-drag-line"),r.rightToLeft?t.style.left=-a.left+o.left+"px":t.style.left=-a.left+o.right+"px",t.style.top=o.top-n.top+"px",t.style.height=d+"px",t.style.opacity=0,t}():function(){const t=document.createElement("div"),o=r.getBoundingRect(e);return t.classList.add("smart-grid-drag-line","row"),t.style.width=r.$.scrollView.offsetWidth-e.offsetLeft-e.row.header.offsetWidth-r._scrollView.vScrollBar.offsetWidth+"px",t.style.left=e.row.header.offsetWidth+"px",t.style.top=o.bottom-r.offsetTop+"px",t.style.opacity=0,t}()}_drag(e){const r=this,t=e.originalEvent;if(r._dialogDragDetails&&r._dragDialog(e,"both"),!r._dragDrop)return;const o=r._dragDrop.dragDetails;if(!o)return;let a=o.feedback;if(!a&&r._dragDrop.showFeedback){if(a=r._dragDrop.createFeedback(t),!a)return void(Smart.Utilities.Core.isMobile&&(t.preventDefault(),t.stopPropagation()));if(r._overlay=document.createElement("div"),r._overlay.classList.add("smart-grid-overlay"),r._overlay.style.cursor="",r.$.root.appendChild(r._overlay),r._dragDrop.column)r._dragLine=r._createLine(r._dragDrop.column.element),r.$.root.appendChild(r._dragLine),requestAnimationFrame((()=>{r._dragLine&&(r._dragLine.style.opacity=1)})),r._dragDrop.feedbackLine=r._dragLine,a.classList.add("smart-grid-column-drag-feedback");else{const e=r._dragDrop.row;let t="<table>";for(let o=0;o<r.columns.length;o++){const a=r.columns[o];let n=e.data[a.dataField];a.cellsFormat&&(n=new Smart.Grid.Cell(r.rows[0],a).getFormattedValue(n,a.cellsFormat)),t+=`<tr><td>${a.label}</td><td>${n}</td></tr>`}r._dragDrop.items=r._rowElements,r._dragDrop.getItemCoordinates(r._rowElements),t+="</table>",a.innerHTML=t,r._dragLine=r._createLine(r._dragDrop.row.element),r.$.root.appendChild(r._dragLine),requestAnimationFrame((()=>{r._dragLine&&(r._dragLine.style.opacity=1)})),a.classList.add("smart-grid-row-drag-feedback"),r._dragDrop.feedbackLine=r._dragLine}}r._dragDrop.drag(e),r._dragDrop.column?r._dragColumn(e):r._dragRow(e),t.preventDefault(),Smart.Utilities.Core.isMobile&&t.stopPropagation()}_dragRow(e){const r=this,t=r._dragDrop.dragDetails,o=r._dragLine,a=e.originalEvent,n=r.getBoundingRect(r);if(e.pageY<n.top||e.pageY>n.bottom||e.pageX<n.left||e.pageX>n.right||t.target&&!t.target.row||!t.target)r._dragDrop.error(),o&&(o.style.opacity=0);else{r._dragDrop.getItemCoordinates(r._dragDrop.items);for(let o=0;o<r._dragDrop._itemCoordinates.coordinates.length;o++){const a=r._dragDrop._itemCoordinates.coordinates[o];if(Array.isArray(a))for(let o=0;o<a.length;o++){let n=a[o];if(e.pageY>=n.rect.top&&e.pageY<n.rect.bottom&&e.pageX>=n.rect.left&&e.pageX<n.rect.right){t.target=r._dragDrop.items[n.index];const e=t.target.row.data,o=r._dragDrop.row.data;if(e===o)return void(t.target=null);if(o.children&&o.children.length>0){let r=o=>{for(let a=0;a<o.length;a++){if(o[a]===e)return void(t.target=null);o[a].children&&o[a].children.length>0&&r(o[a].children)}};r(o.children)}t.before=!0}}}if(o&&(o.style.opacity=1),r._dragDrop.success(),!t.target)return;let a=r.getBoundingRect(t.target);o&&(o.style.width=r.$.scrollView.offsetWidth-r._dragDrop.row.offsetLeft-r._dragDrop.row.header.offsetWidth-r._scrollView.vScrollBar.offsetWidth+"px",o.style.left=r._dragDrop.row.header.offsetWidth+"px");const d=r.offset(r).top;let i=a.top-d-r.scrollTop;r._recyclingRows[r._recyclingRows.length-1].element===t.target&&e.pageY>n.bottom-10&&(t.before=!1),e.pageY>i+d+a.height-7&&(t.before=!1),r.hasAttribute("tree")?(t.before=null,e.pageY>i+d&&e.pageY<i+d+a.height/3?t.before=!0:e.pageY>i+d+2*a.height/3&&(t.before=!1),o&&null===t.before?o.style.top=i+a.height/2+"px":o&&(o.style.top=t.before?i+"px":i+a.height+"px")):o&&(o.style.top=t.before?i+"px":i+a.height-7+"px")}r.$.fireEvent("rowDragging",{row:r._dragDrop.row,id:r._dragDrop.row.id,index:r._dragDrop.visibleIndex,data:r._dragDrop,originalEvent:a})}_dragColumn(e){const r=this,t=r._dragDrop.dragDetails,o=r.getBoundingRect(r),a=e.originalEvent;e.pageY<o.top||e.pageY>o.bottom||e.pageX<o.left||e.pageX>o.right?(r._dragDrop.error(),r._dragLine.style.opacity=0):r._dragLine.style.opacity=1;const n=r.$.groupHeader.getBoundingClientRect();if(e.pageY>=n.top&&e.pageY<n.bottom&&e.pageX>=n.left&&e.pageX<n.right&&(!1===r._dragDrop.column.allowGroup?(r._dragLine.style.opacity=0,r._dragDrop.error()):(t.feedback.classList.remove("freeze"),t.feedback.classList.remove("error"))),t.target&&r._dragDrop.feedback&&!r._dragDrop.feedback.classList.contains("error")){r._dragDrop.getItemCoordinates(r._dragDrop.items);for(let o=0;o<r._dragDrop._itemCoordinates.coordinates.length;o++){const a=r._dragDrop._itemCoordinates.coordinates[o];if(Array.isArray(a))for(let o=0;o<a.length;o++){let n=a[o];e.pageY>=n.rect.top&&e.pageY<n.rect.bottom&&e.pageX>=n.rect.left&&e.pageX<n.rect.right&&(t.target=r._dragDrop.items[n.index],t.before=!0)}}const a=r.getBoundingRect(t.target),n=r.getBoundingRect(r.$.content);if(r._dragDrop.column){r._dragLine.style.opacity=1;const d=r.appearance.showViewBar&&!r.appearance.showViewBarAsDropdown?r.layout.viewBarWidth:0;if(!1===t.before?r._dragLine.style.left=d+a.right-n.left+"px":r._dragLine.style.left=d+a.left-n.left+"px",r.behavior.allowColumnFreeze&&r.dataSource&&0===r.dataSource.groupBy.length){const o=r._dragDrop._itemCoordinates.coordinates[0][0].rect;r._dragDrop.column.allowFreeze&&(e.pageX>=o.left&&e.pageX<=o.left+10?t.feedback.classList.add("freeze"):t.feedback.classList.remove("freeze"),t.target&&t.target.hasAttribute("freeze")&&t.feedback.classList.add("freeze"),t.item.column.freeze&&!t.target.hasAttribute("freeze")?t.feedback.classList.add("unfreeze"):t.feedback.classList.remove("unfreeze"))}if(t.target.classList.contains("smart-breadcrumb-item"))r._dragLine.style.top=a.top-o.top-r.scrollTop+"px",r._dragLine.style.height=a.height+"px",r.$.breadcrumb.dataSource.forEach((e=>{e.value===t.item.column.dataField&&(r._dragLine.style.opacity=0,r._dragDrop.error())}));else{r._dragLine.style.top=a.top-o.top-r.scrollTop+"px";const e=r.$.content.offsetHeight-7-r._scrollView.hScrollBar.offsetHeight-a.top+n.top;r._dragLine.style.height=e+"px"}parseInt(r._dragLine.style.left)<3?r._dragLine.style.left="3px":parseInt(r._dragLine.style.left)>=r.offsetWidth-3&&(r._dragLine.style.left=r.offsetWidth-7+"px")}}else r._dragLine.style.opacity=0;r.$.fireEvent("columnDragging",{column:r._dragDrop.column,dataField:r._dragDrop.column.dataField,index:r.columns.indexOf(r._dragDrop.column),data:r._dragDrop,originalEvent:a})}_beginRowDrag(e,r){const t=this;let o=!1;t.behavior.allowRowReorder&&r.allowReorder&&(o=!0),o&&(t.$.fireEvent("rowDragStart",{row:r,id:r.id,index:r.visibleIndex,data:null,originalEvent:e.originalEvent}).defaultPrevented||(t._dragDrop=new Smart.Utilities.DragDrop(t),t._dragDrop.capture(r.element,e),t._dragDrop.row=r,t._recycle(!1),t._dragInterval&&clearInterval(t._dragInterval),t._dragInterval=setInterval((function(){const e=t._dragDrop.dragDetails;if(!e)return void clearInterval(t._dragInterval);if(!e.feedback)return;const r=parseInt(e.feedback.style.left),o=parseInt(e.feedback.style.top),a=t.getBoundingClientRect();t._dragLine&&a.left<=r&&a.left+a.width>=r&&(o>=a.top&&o<=a.top+20?t.scrollTop-=5:o>=a.top+a.height+5&&o<=a.top+a.height+20&&(t.scrollTop+=5))}),10)))}_beginDrag(e,r){const t=this;if(!r.dataField)return void t._beginRowDrag(e,r);const o=r;if(t.behavior.allowColumnReorder&&o.allowReorder&&!o.autoGenerated){if(t.appearance.showColumnHeaderDragIcon&&!e.originalEvent.target.classList.contains("smart-drag-handle"))return;if(!t.$.fireEvent("columnDragStart",{column:o,dataField:o.dataField,index:t.columns.indexOf(o),data:null,originalEvent:e.originalEvent}).defaultPrevented){t._dragDrop=new Smart.Utilities.DragDrop(t),t._dragDrop.capture(o.element,e),t._dragDrop.column=o;const r=()=>{let e=t.columns.map((e=>e.element));t.behavior.allowColumnFreeze||(e=t.columns.filter((e=>!e.freeze)).map((e=>e.element))),t.grouping.enabled&&"multipleColumns"===t.grouping.renderMode&&t.dataSource&&-1===t.dataSource.groupBy.indexOf(o.dataField)&&(e=t.columns.filter((e=>{if(t.dataSource&&-1===t.dataSource.groupBy.indexOf(e.dataField))return!0})).map((e=>e.element))),e=e.filter((e=>!e.classList.contains("smart-visibility-hidden"))),t.$.breadcrumb?t._dragDrop.items=e.concat(t.$.breadcrumb._items):t._dragDrop.items=e};r(),t._dragInterval&&clearInterval(t._dragInterval),t._dragInterval=setInterval((function(){const e=t._dragDrop.dragDetails;if(!e)return void clearInterval(t._dragInterval);if(!e.feedback)return;r();const o=parseInt(e.feedback.style.left),a=t.getBoundingClientRect();t._dragLine&&a.left<=o&&a.left+a.width>=o&&(o>=a.left&&o<=a.left+20?t.scrollLeft-=5:o>=a.left+a.width-20&&o<=a.left+a.width&&(t.scrollLeft+=5))}),3)}}}_cancelDrag(){const e=this;e._dragLine&&(e._dragLine.parentNode&&e._dragLine.parentNode.removeChild(e._dragLine),e._dragLine=null),e._dragDrop&&(e._dragDrop.removeFeedback(),e._dragDrop=null),e._dragInterval&&clearInterval(e._dragInterval),e._recycle()}_endDrag(e){const r=this;if(r._dialogDragDetails&&(r._dialogDragDetails.started=!1),r._dragDrop){const t=r._dragDrop.dragDetails;if(!t)return void r._cancelDrag();if(!t.feedback||t.feedback&&t.feedback.classList.contains("error")&&!t.feedback.classList.contains("data"))return void r._cancelDrag();if(e.key&&"Escape"===e.key)return r._dragDrop.column?r.$.fireEvent("columnDragCancel",{column:t.item.column,dataField:t.item.column.dataField,index:r.columns.indexOf(r._dragDrop.column),data:r._dragDrop}):r._dragDrop.row&&r.$.fireEvent("rowDragCancel",{row:r._dragDrop.row,id:r._dragDrop.row.id,index:r._dragDrop.row.visibleIndex,data:r._dragDrop}),void r._cancelDrag();r.beginUpdate();let o=t.target;const a=t.before;if(r._dragDrop.column){if(r.filtering.filterRow&&r.filtering.filterRow.visible)for(let e=0;e<r.columns.length;e++)r.columns[e]._filterEditorInitialized=!1;if(o&&o.column&&"Escape"!==e.key&&!t.feedback.classList.contains("data")){r.columns.indexOf(r._dragDrop.column);let t=r.columns.indexOf(o.column);if(t+=a?0:1,!r.$.fireEvent("columnDragEnd",{column:r._dragDrop.column,dataField:r._dragDrop.column.dataField,index:r.columns.indexOf(r._dragDrop.column),newIndex:t,data:r._dragDrop,originalEvent:e.originalEvent}).defaultPrevented){const t=r.columns.indexOf(r._dragDrop.column);let n=r.columns.indexOf(o.column);r._dragDrop.column.freeze,n+=a?0:1,r._dragDrop.column.columnGroup=o.column.columnGroup,r._dragDrop.column.freeze=o.column.freeze,r.behavior.allowColumnFreeze&&(r._dragDrop.feedback.classList.contains("freeze")&&(r._dragDrop.column.freeze=!0),r._dragDrop.feedback.classList.contains("unfreeze")&&(r._dragDrop.column.freeze=!1)),t<n&&n--;const d=r._dragDrop.column,i=d.sortIndex,l=d.sortOrder,s=d.filter,c=r.columns.canNotify;r.columns.canNotify=!1,r.columns.move(t,n),r.columns.canNotify=c;const g=r.context;r.context=document,d.sortOrder=l,d.sortIndex=i,d.filter=s,r.context=g,r._renderColumns(),r.$.fireEvent("columnReorder",{column:r._dragDrop.column,dataField:r._dragDrop.column.dataField,index:t,newIndex:n,data:r._dragDrop,originalEvent:e.originalEvent}),r.autoSaveState()}}else r.$.fireEvent("columnDragEnd",{column:r._dragDrop.column,dataField:r._dragDrop.column.dataField,index:r.columns.indexOf(r._dragDrop.column),newIndex:-1,data:r._dragDrop,originalEvent:e.originalEvent});if("Escape"!==e.key&&r.$.breadcrumb&&r._dragDrop.column.allowGroup){const t=r.getBoundingRect(r.$.breadcrumb);if(e.originalEvent.pageY>=t.top-r.scrollTop&&e.originalEvent.pageY<=t.bottom-r.scrollTop){const e=r.$.breadcrumb._items.indexOf(o),t=r._dragDrop.dragDetails.item.column,n=r.$.breadcrumb.dataSource.slice(0);n.splice(Math.max(0,e+(a?0:1)),0,{label:t.label,value:t.dataField}),r.$.breadcrumb.dataSource=n;const d=r.$.breadcrumb.dataSource.map((e=>e.value));r.dataSource.groupBy=d,r.refreshFilters(),r.$.fireEvent("group",{groups:r.dataSource.groupBy}),r.autoSaveState()}}}else if(r._dragDrop.row)if(o&&o.row&&"Escape"!==e.key&&!t.feedback.classList.contains("data")){if(!r.$.fireEvent("rowDragEnd",{row:r._dragDrop.row,id:r._dragDrop.row.id,index:r._dragDrop.row.visibleIndex,newIndex:o.row.visibleIndex,data:r._dragDrop,originalEvent:e.originalEvent}).defaultPrevented){const a=r._dragDrop.row.visibleIndex;let n=o.row.visibleIndex;if(t.before||n++,a<n&&n--,r.hasAttribute("tree")){const e=r._dragDrop.row.data,a=o.row.data,n=[],d=(e,t=null)=>{const o={};for(let t=0;t<r.dataSource.dataFields.length;t++){const a=r.dataSource.dataFields[t];o[a.name]=e[a.name]}delete o[r.dataSource.parentDataField],delete o[r.dataSource.id],delete o[r.dataSource.keyDataField],o[r.dataSource.parentDataField]=t;const a=o[r.dataSource.id]=e[r.dataSource.id];return n.push(o),e.children&&e.children.length>0&&(o.children=e.children.map((e=>d(e,a)))),void 0!==e.expanded&&(o.expanded=e.expanded),o};if(d(e,a[r.dataSource.parentDataField]),null===t.before){if((n[0]?n[0].id||n[0][r.dataSource.id]:-1)!==a.$.id){const e=r.dataSource._expandedRowIds;r.addChildRow(n,a.$.id);for(let t in e)r.getRowById(t).expanded=!0}}else{const e=r.dataSource._expandedRowIds;r.addSiblingRow(n,a.$.id,t.before);for(let t in e)r.getRowById(t).expanded=!0}}else r.rows.move(a,n);r.$.fireEvent("rowReorder",{row:r._dragDrop.row,id:r._dragDrop.row.id,index:a,newIndex:n,data:r._dragDrop,originalEvent:e.originalEvent})}}else r.$.fireEvent("rowDragEnd",{row:r._dragDrop.row,id:r._dragDrop.row.id,index:r._dragDrop.row.visibleIndex,newIndex:-1,data:r._dragDrop,originalEvent:e.originalEvent});r._cancelDrag();const n=r.columnGroups&&r.columnGroups.length>0;r.endUpdate(!n),n&&r._renderColumns(!0),r.paging.enabled&&r.grouping.enabled&&r._refreshPagesCount(),r.filtering.enabled&&r.filtering.filterRow.visible&&(r._refreshFilterRowEditors(),r._recycle())}}});

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
/* unused harmony export smartGridReorderModule */
/* harmony import */ var _smart_grid_reorder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7343);
/* harmony import */ var _smart_grid_reorder_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_grid_reorder_js__WEBPACK_IMPORTED_MODULE_0__);




const smartGridReorderModule = Smart.Utilities.Grid.Reorder;

})();

/******/ })()
;
})();



export const ReorderModule = Smart.Utilities.Grid.Reorder;
