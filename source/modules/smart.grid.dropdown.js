
/*! Smart UI v27.1.0 (2026-10-02) | (c) 2011-2026 jQWidgets Ltd. All rights reserved.
 * Commercial software, not open source: licensed under the Smart UI EULA (EULA.pdf in the package;
 * https://www.htmlelements.com/license/). Text and data mining reserved under Art. 4(3)
 * Directive (EU) 2019/790: not to be used to train, fine-tune or index for AI models. @license */ //

 (function(){ if (typeof document === 'undefined') { return; } 




/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5495:
/***/ (() => {

Smart.Utilities.Assign("Grid.DropDown",class{setDropDownLabel(e){const t=this;t.$.dropDownElement&&(t.dropDownModeInput?t.$.dropDownElement.querySelector(".smart-action-button smart-input").value=e:t.$.dropDownElement.querySelector(".smart-action-button").innerHTML=e)}openDropDown(){const e=this;if(!e.dropDownMode)return;if(!e.$.dropDownPopup)return;const t=e.$.dropDownPopup,o=e.$.dropDownElement;o.setAttribute("active",""),o.querySelector(".smart-drop-down-button").setAttribute("active",""),(()=>{const n=0,r=0;if(e.layout.isDirty=!0,window.screen.availWidth<400)return t.open("left","top"),t.style.width=e.offsetWidth+"px",void(t.style.height=e.offsetHeight+"px");{const o={width:e.layout.dropDownWidth,height:e.layout.dropDownHeight};t.style.width="auto"===o.width?o.width:o.width+"px",t.style.height="auto"===o.height?o.height:o.height+"px"}const i=o;if(i){const o=e.offset(i),s=o.left-n,l=n,a=Math.max(l,s);t.open(a,o.top+i.offsetHeight-r)}else t.classList.add("center"),t.open("center","center");e.style.display=""})()}isDropDownOpened(){return!!this.$.dropDownElement.hasAttribute("active")}closeDropDown(){const e=this;e.dropDownMode&&e.$.dropDownPopup&&(e.$.dropDownElement.removeAttribute("active"),e.$.dropDownElement.querySelector(".smart-drop-down-button").removeAttribute("active"),e.$.dropDownPopup.close())}_renderInDropDown(){const e=this;if(e.dropDownMode&&(e.dropDownMode&&(e.style.display="none"),e.dropDownMode&&void 0===e._dropDownMode)){e._dropDownMode=!0;const t=document.createElement("div"),o=e._createPopup();if(o.allowDrag=!1,o.classList.add("smart-grid-drop-down-popup"),e.$.dropDownElement=t,e.$.dropDownPopup=o,t.onmouseenter=()=>{t.hasAttribute("active")||t.setAttribute("hover","")},t.onmouseleave=()=>{t.removeAttribute("hover")},t.classList.add("smart-grid-drop-down-button","smart-drop-down-box"),e.parentNode.insertBefore(t,e),t.innerHTML=`<div class="smart-container" role="presentation">\n                <div class="smart-content" role="presentation">\n                    <div class="smart-buttons-container" role="presentation">\n                        <span class="smart-action-button">${e.localize("dropDownPlaceholder")}</span>\n                        <span class="smart-drop-down-button">\n                            <span class="smart-drop-down-button-icon" id="arrow" aria-hidden="true"></span>\n                        </span>\n                    </div>\n                </div>\n            </div>`,e.dropDownModeInput){const o=t.querySelector(".smart-action-button");o.innerHTML='<smart-input style="color: var(--smart-background-color); background: var(--smart-background); border-radius: 0px; width: calc(100% - 6px); height: calc(100% - 6px);"></smart-input>';const n=o.firstElementChild;n.onpointerdown=n.onclick=n.onpointerup=e=>{e.stopPropagation()},n.oninput=n.onchange=n.onkeyup=t=>{const o=e.rows||e.dataSource;clearTimeout(e._dropDownInputTimer),e._dropDownInputTimer=setTimeout((()=>{if(n.value.length>=2)for(let r=0;r<o.length;r++){const i=o[r],s=(""+(i.data?i.data:i)[e.dropDownModeDataField]).toLowerCase(),l=(""+n.value).toLowerCase();if(s.indexOf(l)>=0){"Enter"===t.key&&(n.value=s),e.selection.enabled&&(e.isDropDownOpened()||e.openDropDown(),e.rows&&(e.clearSelection(),e.selection.allowCellSelection?e.selectCell(i.id,e.dropDownModeDataField):e.selectRow(i.id),e.ensureVisible(i.id)));break}}}),300)}}if(t.onclick=()=>{o.classList.contains("open")?e.closeDropDown():e.openDropDown()},e.style.height="100%",e.style.width="100%",o.content.appendChild(e),e._cellsMerge=[],e._cellStyles=[],!e._popupDropDown){e._popupDropDown=o,o._refreshPosition=()=>{const n=e.offset(t),r=t.offsetHeight,i=e.offset(e);if(o.style.maxHeight="",o.style.minHeight="",n.top+r+o.offsetHeight>window.innerHeight-i.top){const e=r+n.top+o.offsetHeight-window.innerHeight+i.top;o.style.maxHeight=Math.max(250,o.offsetHeight-e)+"px",o.style.minHeight="250px"}else o.style.maxHeight="",o.style.minHeight=""};const n=()=>{if(e.selection.enabled){const o=e._selection.focusedCell;if(o){const n=e.getCellValue(o.id,o.dataField);if(e.dropDownModeInput?t.querySelector(".smart-action-button smart-input").value=n:t.querySelector(".smart-action-button").innerHTML=n,e.selection.enabled&&e.selection.allowCellSelection){const n=e.getCellValue(o.id,e.dropDownModeDataField);e.dropDownModeInput?t.querySelector(".smart-action-button smart-input").value=n:t.querySelector(".smart-action-button").innerHTML=n}}}};o.onOpen=function(){e._popupDropDown._refreshPosition(),e.$.fireEvent("dropDownGridOpen"),e.$.listen("cellClick",n)},o.onClose=function(){if(e.$.unlisten("cellClick"),e.selection.enabled){const o=e._selection.focusedCell;if(o){const n=e.getCellValue(o.id,o.dataField);if(e.dropDownModeInput?t.querySelector(".smart-action-button smart-input").value=n:t.querySelector(".smart-action-button").innerHTML=n,e.selection.enabled&&e.selection.allowCellSelection){const n=e.getCellValue(o.id,e.dropDownModeDataField);e.dropDownModeInput?t.querySelector(".smart-action-button smart-input").value=n:t.querySelector(".smart-action-button").innerHTML=n}}}e.$.fireEvent("dropDownGridClose")},o.onkeydown=function(e){"Escape"===e.key&&(o.result=!1,o.close())}}}}});

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
/* unused harmony export smartGridDropdownModule */
/* harmony import */ var _smart_grid_dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5495);
/* harmony import */ var _smart_grid_dropdown_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_grid_dropdown_js__WEBPACK_IMPORTED_MODULE_0__);




const smartGridDropdownModule = Smart.Utilities.Grid.Dropdown;

})();

/******/ })()
;
})();



export const DropdownModule = Smart.Utilities.Grid.Dropdown;
