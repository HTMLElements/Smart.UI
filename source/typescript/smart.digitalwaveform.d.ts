import  {BaseElement, Animation} from "./smart.element"

export interface DigitalWaveformProperties {
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the lines. Each is an object with id, label, color, visible and either samples (0/1 or booleans on a fixed interval, with t0 and dt) or edges (an array of [time, level] pairs, with end for the end of the record). A sample holds its level for dt, so a sampled record runs from t0 to t0 + samples.length × dt and the last sample is drawn and read. A level may also be 'x' (unknown, drawn as a band across both levels) or 'z' (high impedance, drawn between them).
   * Default value: 
   */
  signals?: any;
  /**
   * Sets or retrieves the buses. Each is an object with id, label, lines (the ids of its signals, most significant first), format (hex, bin or dec), color and visible. A bus is drawn as a row of stable words with a transition wherever the word changes. Any number of lines is exact: a bus of more than 53 lines is read as a BigInt. The word reads X while any line is unknown and Z while any line is high impedance.
   * Default value: 
   */
  buses?: any;
  /**
   * Sets or retrieves the name of the time axis.
   * Default value: ""
   */
  xLabel?: string;
  /**
   * Sets or retrieves the unit of the time axis, written in engineering notation.
   * Default value: "s"
   */
  xUnit?: string;
  /**
   * Sets or retrieves the start of the time axis. With xMax, fixes the axis; null follows the data.
   * Default value: null
   */
  xMin?: number;
  /**
   * Sets or retrieves the end of the time axis. With xMin, fixes the axis; null follows the data.
   * Default value: null
   */
  xMax?: number;
  /**
   * Sets or retrieves the cursors. Each is an object with id, label, x, color and visible. The cursor legend reads every line and bus at each cursor and the time between the first two.
   * Default value: 
   */
  cursors?: any;
  /**
   * Sets or retrieves the height of a row in pixels. The plot is as tall as its rows.
   * Default value: 26
   */
  rowHeight?: number;
  /**
   * Sets or retrieves the width of the names column in pixels.
   * Default value: 110
   */
  labelWidth?: number;
  /**
   * Shows the time grid and the row separators.
   * Default value: true
   */
  showGrid?: boolean;
  /**
   * Shows the cursor legend under the plot.
   * Default value: true
   */
  showCursorLegend?: boolean;
  /**
   * Shows the lines of a bus under its row. When false, a bus is one row and its lines are left out.
   * Default value: true
   */
  showLines?: boolean;
  /**
   * Enables panning by dragging, zooming with the wheel, box zoom with Shift and drag, and placing and dragging cursors.
   * Default value: true
   */
  interactive?: boolean;
  /**
   * Sets or retrieves the title shown above the plot and used in the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the number of significant digits in times.
   * Default value: 4
   */
  precisionDigits?: number;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the element - the level names, cursor and status texts. Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the element.
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 DigitalWaveform displays digital lines against time, one row per line, with lines grouped into buses whose words are written in hex, binary or decimal: the view of a logic analyser. A line is given as samples on a fixed interval or as a list of edges. The view pans and zooms, cursors read every line and every bus at two instants and the time between them, and where more transitions land on a pixel column than it can show, the column is drawn as a block. The plot is as tall as its rows.
*/
export interface DigitalWaveform extends BaseElement, DigitalWaveformProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a cursor is moved by the operator, with the pointer or the keyboard.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, x)
   *  id - The cursor.
   *  x - Its time.
   */
  onCursorChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the view changes: a zoom, a pan, a box zoom or a fit.
	* @param event. The custom event. Custom data event was created with: ev.detail(xMin, xMax, fitted)
   *  xMin - The start of the view.
   *  xMax - The end of the view.
   *  fitted - True when the view shows the whole record.
   */
  onZoom?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a row is clicked without dragging.
	* @param event. The custom event. Custom data event was created with: ev.detail(time, id, kind)
   *  time - The time under the pointer.
   *  id - The line or bus clicked, or null below the rows.
   *  kind - line or bus.
   */
  onRowClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns a line's level at a time: 1, 0, 'x' (unknown), 'z' (high impedance), or NaN outside the record.
   * @param {string} id. The signal.
   * @param {number} time. The time.
   * @returns {any}
   */
  valueAt(id: string, time: number): any;
  /**
   * Returns a bus's word at a time, most significant line first: a number, or a BigInt for a bus of more than 53 lines, which a number cannot hold exactly; 'x' when any line is unknown, 'z' when any line is high impedance, or NaN where any line is outside its record.
   * @param {string} id. The bus.
   * @param {number} time. The time.
   * @returns {any}
   */
  busValueAt(id: string, time: number): any;
  /**
   * Shows the whole record again.
   */
  fit(): void;
  /**
   * Shows a range of time.
   * @param {number} from. The start.
   * @param {number} to. The end.
   */
  zoomTo(from: number, to: number): void;
  /**
   * Zooms about the centre of the view.
   * @param {number} factor. Above 1 zooms in, below 1 zooms out.
   */
  zoom(factor: number): void;
  /**
   * Returns a sentence describing what the graph shows, as used in its accessible name.
   * @returns {string}
   */
  describe(): string;
  /**
   * Redraws the element from its current properties.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-digital-waveform"): DigitalWaveform;
        querySelector(selectors: "smart-digital-waveform"): DigitalWaveform | null;
        querySelectorAll(selectors: "smart-digital-waveform"): NodeListOf<DigitalWaveform>;
        getElementsByTagName(qualifiedName: "smart-digital-waveform"): HTMLCollectionOf<DigitalWaveform>;
        getElementsByName(elementName: "smart-digital-waveform"): NodeListOf<DigitalWaveform>;
    }
}

