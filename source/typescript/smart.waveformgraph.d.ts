import  {BaseElement, Animation} from "./smart.element"

export interface WaveformGraphProperties {
  /**
   * Enables or disables the element. Disabled, the plot leaves the tab order, the legend and palette buttons are disabled, and no cursor, zoom, click, visibility or export event is raised; enabled again, all of it comes back.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the plots. Each is an object with id, label, unit, color, y (the record), t0 and dt (start and interval of a waveform) or x (the x values of an XY plot), scale (the id of the y scale it is read on), style (line, points, step or bars), lineWidth and visible. A sample that is not a number - NaN, null, an empty string - is a gap, never 0. An item that is not an object is skipped, and a dt that is not a number is taken as 1; each is said once in a console warning.
   * Default value: 
   */
  plots?: any;
  /**
   * Sets or retrieves the y scales. Each is an object with id, label, unit, min, max, autoScale, logarithmic and position (left or right). Limits alone fix a scale; empty gives one scale that follows the data. A min above max is swapped, with one console warning. An item that is not an object is skipped, with one console warning.
   * Default value: 
   */
  scales?: any;
  /**
   * Sets or retrieves how the scales are laid out: overlaid on one plot area, or stacked with a band per scale.
   * Default value: overlaid
   */
  layout?: WaveformGraphLayout | string;
  /**
   * Sets or retrieves the name of the x axis.
   * Default value: ""
   */
  xLabel?: string;
  /**
   * Sets or retrieves the unit of the x axis, used in its labels and readouts.
   * Default value: ""
   */
  xUnit?: string;
  /**
   * Sets or retrieves the start of the x axis. With xMax, fixes the axis; null follows the data. Set above xMax, the two are swapped; equal to it, or not a finite number, the axis follows the data. Each is said once in a console warning.
   * Default value: null
   */
  xMin?: number;
  /**
   * Sets or retrieves the end of the x axis. With xMin, fixes the axis; null follows the data. See xMin for limits set the wrong way round.
   * Default value: null
   */
  xMax?: number;
  /**
   * Draws the x axis on a logarithmic scale. A log axis has no zero: points at x <= 0 are not drawn, and are not dropped silently - the header and the accessible name say how many ("3 points at x ≤ 0 not shown on the log axis"), with one console warning. The axis then starts at the smallest x above zero, also when xMin or a zoom reaches zero or below, and zooming and panning work in decades.
   * Default value: false
   */
  xLogarithmic?: boolean;
  /**
   * Sets or retrieves how x values are written: si in engineering notation with the x unit, plain as a number, clock as a time of day for x values in epoch milliseconds.
   * Default value: si
   */
  xFormat?: WaveformGraphXFormat | string;
  /**
   * Sets or retrieves the cursors. Each is an object with id, label, x, y, plot (the id of the plot it is locked to, which then supplies y), color and visible. Cursors are dragged on the plot and moved with the arrow keys, which follow the x axis as drawn, left to right, also in a right-to-left layout; on a log axis a key press moves a pixel. The cursor legend reads each one and the difference between the first two. An item that is not an object is skipped, with one console warning.
   * Default value: 
   */
  cursors?: any;
  /**
   * Sets or retrieves the annotations: text at a point in data coordinates. Each is an object with x, y, text, plot (the id of a plot that supplies y) and color. An item that is not an object is skipped, with one console warning.
   * Default value: 
   */
  annotations?: any;
  /**
   * Shows the grid lines at the ticks of the axes.
   * Default value: true
   */
  showGrid?: boolean;
  /**
   * Shows the plot legend, where a plot is hidden and shown.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Shows the cursor legend under the plot.
   * Default value: true
   */
  showCursorLegend?: boolean;
  /**
   * Shows the tool palette: zoom in, zoom out, fit, auto scale and CSV export.
   * Default value: true
   */
  showPalette?: boolean;
  /**
   * Enables panning by dragging, zooming with the wheel, box zoom with Shift and drag, placing and dragging cursors, double-click to fit, and the keys of the plot area.
   * Default value: true
   */
  interactive?: boolean;
  /**
   * Sets or retrieves the title shown above the plot and used in the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the number of significant digits in readouts and axis labels. Held to 1 to 21; a value outside that, or not a number (4 is then used), is said once in a console warning.
   * Default value: 4
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves the line width of line and step plots, in pixels. A plot can carry its own.
   * Default value: 1.5
   */
  lineWidth?: number;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the element - the legend, cursor, palette and log-axis texts and the summary, with chartSummaryOne for a single plot. Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the element.
   * Default value: ""
   */
  theme?: string;
  /**
   * Reserved: the component does not apply it yet. The plot area, the plot legend and the tool palette stay in the tab order.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 WaveformGraph displays complete records against engineering axes: waveforms with a start time and a sample interval, or XY pairs. Plots share the x axis and each is read on a y scale; scales are overlaid or stacked in bands. Cursors are free or locked to a plot, with a legend that reads every cursor and the difference between the first two. Annotations are placed in data coordinates. The view pans and zooms, and the plots that are shown export as CSV, each as its whole record whatever the zoom. Records are reduced to one column per pixel with the minimum and maximum kept, so a one-sample spike still reaches its height.
*/
export interface WaveformGraph extends BaseElement, WaveformGraphProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a cursor is moved by the operator, with the pointer or the keyboard.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, x, y)
   *  id - The cursor.
   *  x - Its x position.
   *  y - Its y value: read off its plot when locked, its own when free.
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
   * This event is triggered when the plot area is clicked without dragging.
	* @param event. The custom event. Custom data event was created with: ev.detail(x, y)
   *  x - The x under the pointer.
   *  y - The y under the pointer on the first scale.
   */
  onPlotClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a plot is hidden or shown from the legend.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, visible)
   *  id - The plot.
   *  visible - Whether it is now shown.
   */
  onPlotVisibilityChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the CSV button of the palette is pressed. The application decides what to do with the text: download it, send it, or show it.
	* @param event. The custom event. Custom data event was created with: ev.detail(format, data)
   *  format - Always csv.
   *  data - The CSV text.
   */
  onExportRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Replaces one plot's record without re-assigning the plots, for an acquisition that delivers a new record per trigger.
   * @param {string} id. The plot.
   * @param {any} y. The record, as an array or a typed array.
   * @param {any} options?. Optional <em>x</em>, <em>t0</em> and <em>dt</em> to go with it.
   */
  setPlotData(id: string, y: any, options?: any): void;
  /**
   * Returns a plot's value at an x, interpolated between its samples. For a waveform it returns NaN before the first sample and from one sample interval past the last. For an XY plot, an x that no segment spans returns the y of the nearest sample, so a cursor on a scatter reads the point it sits on. An unknown plot id returns NaN.
   * @param {string} id. The plot.
   * @param {number} x. The position.
   * @returns {number}
   */
  valueAt(id: string, x: number): number;
  /**
   * Shows or hides a plot.
   * @param {string} id. The plot.
   * @param {boolean} visible?. Shown when true, hidden when false; toggled when omitted.
   */
  togglePlot(id: string, visible?: boolean): void;
  /**
   * Shows the whole record again, on every axis.
   */
  fit(): void;
  /**
   * Shows a range of x.
   * @param {number} from. The start.
   * @param {number} to. The end.
   */
  zoomTo(from: number, to: number): void;
  /**
   * Zooms about the centre of the view - the geometric centre, in decades, on a log x axis.
   * @param {number} factor. Above 1 zooms in, below 1 zooms out.
   */
  zoom(factor: number): void;
  /**
   * Returns the plots that are shown, hidden ones left out, as CSV. Each plot is exported as its whole record, whatever the zoom: one x column when the records share it, otherwise x and y columns per plot.
   * @returns {string}
   */
  toCSV(): string;
  /**
   * Returns a sentence describing what the graph shows, as used in its accessible name: the number of plots, the x range, and on a log axis how many points at x <= 0 are not shown.
   * @returns {string}
   */
  describe(): string;
  /**
   * Redraws the element from its current properties.
   */
  redraw(): void;
  /**
   * Redraws the plot on the next animation frame, so that many changes between two frames cost one draw.
   */
  invalidate(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-waveform-graph"): WaveformGraph;
        querySelector(selectors: "smart-waveform-graph"): WaveformGraph | null;
        querySelectorAll(selectors: "smart-waveform-graph"): NodeListOf<WaveformGraph>;
        getElementsByTagName(qualifiedName: "smart-waveform-graph"): HTMLCollectionOf<WaveformGraph>;
        getElementsByName(elementName: "smart-waveform-graph"): NodeListOf<WaveformGraph>;
    }
}

/**Sets or retrieves how the scales are laid out: overlaid on one plot area, or stacked with a band per scale. */
export declare type WaveformGraphLayout = 'overlaid' | 'stacked';
/**Sets or retrieves how x values are written: si in engineering notation with the x unit, plain as a number, clock as a time of day for x values in epoch milliseconds. */
export declare type WaveformGraphXFormat = 'si' | 'plain' | 'clock';
