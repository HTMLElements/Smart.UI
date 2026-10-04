import  {BaseElement, Animation} from "./smart.element"

export interface MimicProperties {
  /**
   * Sets or retrieves the connections between symbols as [{ from, to, flowing, reverse, className, waypoints }]. from and to are symbol ids. A connection that names a symbol which is not on the diagram is skipped. waypoints overrides the automatic orthogonal routing.
   * Default value: 
   */
  connections?: any;
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves whether symbols can be dragged to new positions. Panning and zooming work either way.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Sets or gets the spacing of the background grid and the step used when snapToGrid is enabled.
   * Default value: 20
   */
  gridSize?: number;
  /**
   * Sets or gets the maximum zoom of the viewport. The zoom is clamped when it is assigned.
   * Default value: 4
   */
  maxZoom?: number;
  /**
   * Sets or gets the minimum zoom of the viewport.
   * Default value: 0.25
   */
  minZoom?: number;
  /**
   * Sets or gets the horizontal pan of the stage in pixels.
   * Default value: 0
   */
  panX?: number;
  /**
   * Sets or gets the vertical pan of the stage in pixels.
   * Default value: 0
   */
  panY?: number;
  /**
   * Sets or retrieves the id of the selected symbol, or null.
   * Default value: null
   */
  selection?: any;
  /**
   * Sets or retrieves whether a background grid is drawn. The grid scales with the zoom, so it moves with the diagram.
   * Default value: false
   */
  showGrid?: boolean;
  /**
   * Sets or retrieves whether dragged symbols snap to the grid.
   * Default value: false
   */
  snapToGrid?: boolean;
  /**
   * Sets or gets the default size of a symbol in pixels. A symbol can override it with its own size.
   * Default value: 56
   */
  symbolSize?: number;
  /**
   * Sets or retrieves the equipment on the diagram as [{ id, symbol, x, y, label, state, quality, value, rotate, level, size, stubs }]. Positions are numbers in stage coordinates, so a layout can be serialised. The symbol elements are updated rather than rebuilt when the property changes, and only what changed is written - a reading that moved patches that symbol's text, and the connections are redrawn only when a symbol moves - so keyboard focus and the selection are kept and a large diagram stays responsive. A number given as value is shown as text; a null entry is skipped. Assign a new array to update the component.
   * Default value: 
   */
  symbols?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the accessible name of the canvas and the empty state (2 keys: mimicLabel, empty). Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the component cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or retrieves the zoom factor. Clamped to minZoom and maxZoom on assignment - 0 or less is minZoom, the furthest out the diagram goes - so the property never reports a value the diagram is not at. A number written as text, such as '2' from an attribute, is taken as that number; a value that is not a number is refused.
   * Default value: 1
   */
  zoom?: number;
}
/**
 Mimic is a process diagram canvas. Equipment is placed on the canvas as MimicSymbol elements, connected with orthogonal routed lines, and the diagram can be panned and zoomed. Each symbol keeps its tag, state and reading and reports its own clicks. The layout of the diagram can be saved and restored. The canvas is one tab stop - the current symbol - arrowed between symbols; the viewport itself is not a tab stop. A disabled diagram raises no events and does not pan or zoom.
*/
export interface Mimic extends BaseElement, MimicProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a symbol has been dragged to a new position. Handle it to persist the layout.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, layout)
   *  id - The symbol that moved.
   *  layout - The whole layout after the move.
   */
  onLayoutChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the selected symbol changes.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, symbol)
   *  id - The newly selected id, or null.
   *  symbol - Its specification.
   */
  onSelectionChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a symbol is chosen, by pointer or keyboard, typically used to open its detail.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, symbol)
   *  id - The symbol id.
   *  symbol - Its specification.
   */
  onSymbolClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Fits the whole diagram into the viewport, so an operator who has zoomed into a unit can return to the plant view with one action.
   * @param {number} padding?. Margin in pixels. Defaults to 24.
   */
  fit(padding?: number): void;
  /**
   * Gets or sets the whole diagram (symbols, connections and viewport) as a plain object. Call the method without an argument to read the layout, or pass a saved layout to restore it. Returns copies, so a saved layout is not affected by later edits. Can be combined with the autoSaveState property of DockingLayout for the panels around the diagram.
   * @param {any} value?. A layout to restore. Omit to read the current one.
   * @returns {any}
   */
  layout(value?: any): any;
  /**
   * Rebuilds the diagram.
   */
  redraw(): void;
  /**
   * Selects a symbol by id, or clears the selection with null. Raises selectionChange only when the selection actually changes.
   * @param {string | number} id. The symbol id, or null.
   */
  select(id: string | number): void;
  /**
   * Returns the symbol at a point in stage coordinates, or null. When two symbols overlap, the topmost one is returned, as for a click.
   * @param {number} x. Stage x.
   * @param {number} y. Stage y.
   * @returns {any}
   */
  symbolAt(x: number, y: number): any;
  /**
   * Zooms around a point in the viewport. Zooming around the pointer keeps the point under the pointer in place, which is the expected behaviour of wheel zoom.
   * @param {number} x. Viewport x.
   * @param {number} y. Viewport y.
   * @param {number} factor. Multiplier, for example 1.1 to zoom in.
   */
  zoomAt(x: number, y: number, factor: number): void;
  /**
   * Zooms around the centre of the viewport.
   * @param {number} factor. Multiplier.
   */
  zoomBy(factor: number): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-mimic"): Mimic;
        querySelector(selectors: "smart-mimic"): Mimic | null;
        querySelectorAll(selectors: "smart-mimic"): NodeListOf<Mimic>;
        getElementsByTagName(qualifiedName: "smart-mimic"): HTMLCollectionOf<Mimic>;
        getElementsByName(elementName: "smart-mimic"): NodeListOf<Mimic>;
    }
}

