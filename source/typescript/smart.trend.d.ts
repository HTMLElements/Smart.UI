import  {BaseElement, Animation} from "./smart.element"

export interface TrendProperties {
  /**
   * Sets or retrieves the pens as [{ field, label, unit, min, max, color, visible, precision, quality, qualityField }]. field is the key under which each record carries the value; min and max are the engineering range the pen is scaled against, and a pen without them is scaled to the data on screen. quality is the tag's current quality - good, uncertain, bad or stale, or an OPC UA status code - and applies to the latest reading; qualityField names the record field that carries each sample's own quality (a word or a status code), read at the cursor too. A reading whose quality is not good says so beside the value, in the readout and in the accessible names. Items that are not objects, or have no field, are skipped. Assign a new array to update the component.
   * Default value: 
   */
  pens?: any;
  /**
   * Sets or retrieves the records held by the trend as { timestamp, field: value, .. }, in time order. Assigning the property replaces the records; push and pushMany add to them. A record without a timestamp is stamped with the current time.
   * Default value: 
   */
  data?: any;
  /**
   * Sets or retrieves the key a record carries its time under, a timestamp in milliseconds or a Date.
   * Default value: "timestamp"
   */
  timeField?: string;
  /**
   * Sets or retrieves the prediction bands, one per pen, as [{ field, label, confidence, color, records }], where records is [{ timestamp, expected, lower, upper }] in time order and confidence is the confidence level as a fraction (0.95 for a 95% interval). A band is drawn under its pen and scaled against the pen's range, and the readout shows the expected value and the interval at the cursor. The model that produces the band is part of the application. Assign a new array to update the component.
   * Default value: 
   */
  bands?: any;
  /**
   * Sets or retrieves the anomaly markers as [{ id, field, timestamp, timestampEnd, severity, score, label, description }]. severity is advisory, warning or critical (other values are treated as warning) and score is the model's confidence from 0 to 1, shown with the marker. A marker with a field is placed on that pen's line; a marker without a field spans the plot. A marker with a timestampEnd is an interval and is drawn as a band of time. Markers can be stepped through with N and P, are read out at the cursor, and are reported by the markerClick event. Assign a new array to update the component. Items that are not objects (null, for example) are skipped with a console warning.
   * Default value: 
   */
  markers?: any;
  /**
   * Determines whether the prediction bands are drawn and read out. The bands are kept either way.
   * Default value: true
   */
  showBands?: boolean;
  /**
   * Determines whether the anomaly markers are drawn, read out and stepped through. The markers are kept either way.
   * Default value: true
   */
  showMarkers?: boolean;
  /**
   * Sets or retrieves the window's width in milliseconds.
   * Default value: 900000
   */
  timeSpan?: number;
  /**
   * Sets or retrieves the right edge of the window as a timestamp, while the trend is not live. The value is clamped to the newest sample, so the window cannot be moved into the future.
   * Default value: null
   */
  end?: number;
  /**
   * Determines whether the window follows the newest sample. Dragging, zooming, setWindow and pan turn it off; goLive turns it back on.
   * Default value: true
   */
  live?: boolean;
  /**
   * Sets or retrieves how the pens share the plot. percent draws every pen from 0 to 100% of its own range, as a historian does, which compares signals by shape; value draws all pens on one axis in engineering units, from min to max or from the data, for pens that share a unit.
   * Default value: percent
   */
  scaleMode?: TrendScaleMode | string;
  /**
   * Sets or retrieves the bottom of the shared value axis in value mode. null follows the data.
   * Default value: null
   */
  min?: number;
  /**
   * Sets or retrieves the top of the shared value axis in value mode. null follows the data.
   * Default value: null
   */
  max?: number;
  /**
   * Sets or retrieves the maximum interval between two samples, in milliseconds, before the line is broken between them and valueAt returns NaN inside the gap. null (the default) works it out from the data: five times the median interval between records, so a late or missed poll is still joined and an outage is a gap, not a slope. 0 never breaks the line. With historian data that is stored on change (compressed), where long intervals are normal, set it to the longest interval that is not an outage, or 0. NaN or a negative value is ignored with a console warning and the interval is worked out from the data.
   * Default value: null
   */
  gapAfter?: number;
  /**
   * Sets or retrieves the number of records kept, 100 000 by default; the oldest records are dropped beyond it, but never a record inside the window on screen (or the one just before it), so a window wider than the bound keeps everything it shows. 0 keeps every record. When records assigned through data are dropped, a console warning says how many. NaN or a negative value keeps 100 000.
   * Default value: 100000
   */
  historyLength?: number;
  /**
   * Sets or retrieves how long, in milliseconds, a pen may go without a new sample while the trend is live before its latest reading is marked stale - in the pens panel, the readout and their accessible names. null (the default) uses the gap interval (gapAfter, or the one worked out from the data), and never less than 2 s. 0 never marks a pen stale. The time is counted from when a sample arrived through push(), pushMany() or data, so a source clock that is off does not matter; history pages older than the newest sample held do not count as new.
   * Default value: null
   */
  staleAfter?: number;
  /**
   * Sets or retrieves the cursor as a timestamp. null hides it. With a cursor, the readout and the pens panel show the interpolated value of every pen at that time; without a cursor they show the newest values.
   * Default value: null
   */
  cursor?: number;
  /**
   * Determines whether the pens panel is shown next to the plot. The panel has one button per pen with its label, range and value, which shows or hides the pen.
   * Default value: true
   */
  showPens?: boolean;
  /**
   * Determines whether the readout under the plot, the instant and every visible pen's value at it, is shown.
   * Default value: true
   */
  showReadout?: boolean;
  /**
   * Determines whether grid lines are drawn at the value and time ticks.
   * Default value: true
   */
  showGrid?: boolean;
  /**
   * Determines whether the time axis is labelled under the plot, seconds on a short window, minutes on an hour, the date on a day.
   * Default value: true
   */
  showTimeAxis?: boolean;
  /**
   * Determines whether the plot responds to the pointer and keyboard: drag pans, wheel zooms around the pointer, click places the cursor, double-click returns to live, and with focus the arrow keys move the cursor, plus and minus zoom, L returns to live and Escape clears the cursor. Off for a trend embedded in a scrolling page. The plot is then role="application" with a focusable tab stop and announces what the cursor reads; with interactive off it is role="img" and not a tab stop.
   * Default value: true
   */
  interactive?: boolean;
  /**
   * Sets or retrieves the trend's name, shown in the header and in the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves how many decimal places a value is printed with, for pens that do not set their own. Clamped to 0-20 when formatting.
   * Default value: 2
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves the width of a pen in pixels.
   * Default value: 1.5
   */
  lineWidth?: number;
  /**
   * Enables or disables the component. While disabled the plot and the pens panel take no pointer or keyboard input - no cursor, zoom, pan or live change - and leave the tab order; they return when the component is enabled again.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. Values in the pens panel, the readout, the accessible names and the value axis use the locale's number format (84,20 in German); en is unchanged, and toCSV() stays machine-readable.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the header, the state words, the pens panel, the readout and the accessible names, including noReading, qualityUncertain, qualityBad, qualityStale and plotRole (the plot's role description). Used in conjunction with the property locale.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component. With no theme of its own the component takes the nearest themed ancestor's palette for its pen colours.
   * Default value: ""
   */
  theme?: string;
}
/**
 Trend is a historian trend chart for process data. Pens are drawn against their own engineering ranges, the time axis can be panned and zoomed, a cursor reads the value of every pen at one instant, and live mode follows the newest sample. The component draws model outputs on the same axes: prediction bands with a confidence interval and anomaly markers with a severity and a score. History is supplied by the application; the historyRequest event is raised for time ranges the trend does not have, and Smart.Industrial.Connect.trend can answer it from a data session. Records are reduced to one column per pixel before drawing, and gaps longer than gapAfter are drawn as gaps.
*/
export interface Trend extends BaseElement, TrendProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the interval on screen changes, by a drag, a zoom, a pan, setWindow, goLive, or a new sample while live.
	* @param event. The custom event. Custom data event was created with: ev.detail(from, to, live)
   *  from - The window's start, as a timestamp.
   *  to - The window's end, as a timestamp.
   *  live - Whether the window follows the newest sample.
   */
  onWindowChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the window reaches a time before the earliest record held, once per interval rather than once per pixel of a drag. The application responds with pushMany; Smart.Industrial.Connect.trend responds from the history of a session.
	* @param event. The custom event. Custom data event was created with: ev.detail(from, to, fields)
   *  from - The start of the interval needed, as a timestamp.
   *  to - The end of the interval needed, the earliest record held, or the window's end.
   *  fields - The pens' fields.
   */
  onHistoryRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the cursor is placed, moved or cleared through the pointer or keyboard.
	* @param event. The custom event. Custom data event was created with: ev.detail(time, values)
   *  time - The cursor's timestamp, or null when cleared.
   *  values - Every pen's value at the cursor, keyed by field; NaN where there is none.
   */
  onCursorChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a marker is clicked, or Enter is pressed with the cursor on one. The cursor has already moved to the marker. A host that wants the operator's verdict on the model, a true or a false positive, asks for it here.
	* @param event. The custom event. Custom data event was created with: ev.detail(marker, time)
   *  marker - The marker, as it was given.
   *  time - The time under the pointer or cursor.
   */
  onMarkerClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a pen is shown or hidden from the pens panel or through togglePen.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, field, visible)
   *  index - Which pen.
   *  field - The pen's field.
   *  visible - Whether it is now drawn.
   */
  onPenVisibilityChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Appends one record and redraws. Returns false when there was nothing to add.
   * @param {any} record. { timestamp, field: value, .. }. A record without a timestamp is stamped on arrival.
   * @returns {boolean}
   */
  push(record: any): boolean;
  /**
   * Appends a batch of records, either live samples or a page of history, merged in time order, so that history arriving after live samples is placed correctly. Returns false when there was nothing to add.
   * @param {any} records. The records.
   * @returns {boolean}
   */
  pushMany(records: any): boolean;
  /**
   * Removes every record.
   */
  clear(): void;
  /**
   * Returns a copy of the records held, oldest first.
   * @returns {any}
   */
  snapshot(): any;
  /**
   * Returns a pen's value at an instant, interpolated between the samples either side, or NaN outside the record, inside a gap (two samples further apart than gapAfter, or than the interval worked out from the data when gapAfter is null), next to a sample with no reading, or for a pen with no samples.
   * @param {string} field. The pen's field.
   * @param {number} time. A timestamp.
   * @returns {number}
   */
  valueAt(field: string, time: number): number;
  /**
   * Returns the expected value and interval of a band for a pen at a time, interpolated between the two band records on either side, as <em>{ expected, lower, upper, confidence, label }</em>, or null when the pen has no band at that time.
   * @param {string} field. The pen's field.
   * @param {number} time. A timestamp.
   * @returns {any}
   */
  bandAt(field: string, time: number): any;
  /**
   * Returns the markers at a time: an interval marker that contains the time, or an instant marker within one pixel column of it, so that a cursor placed with the pointer selects the marker.
   * @param {number} time. A timestamp.
   * @returns {any}
   */
  markersAt(time: number): any;
  /**
   * Moves the cursor to the next marker on screen after the cursor (or to the first marker when there is no cursor or the cursor is past the last one), announces it and returns it. Returns null when there are no markers on screen.
   * @returns {any}
   */
  nextMarker(): any;
  /**
   * Moves the cursor to the previous marker on screen, wrapping to the last one, announces it and returns it. Returns null when there are no markers on screen.
   * @returns {any}
   */
  previousMarker(): any;
  /**
   * Returns the visible window as CSV, an ISO timestamp column and one column per visible pen, for a spreadsheet.
   * @returns {string}
   */
  toCSV(): string;
  /**
   * Returns to live mode and follows the newest sample.
   */
  goLive(): void;
  /**
   * Shows the given time interval and leaves live mode.
   * @param {number} from. A timestamp.
   * @param {number} to. A timestamp.
   */
  setWindow(from: number, to: number): void;
  /**
   * Zooms the window by a factor, keeping one time in place, and leaves live mode.
   * @param {number} factor. Above 1 zooms in, below 1 zooms out.
   * @param {number} around?. A timestamp to keep in place; defaults to the window's centre.
   */
  zoom(factor: number, around?: number): void;
  /**
   * Moves the window by a time interval and leaves live mode. The window stops at the newest sample.
   * @param {number} delta. Milliseconds; negative moves back into the record.
   */
  pan(delta: number): void;
  /**
   * Shows or hides one pen and raises the penVisibilityChange event.
   * @param {number} index. Which pen.
   * @param {boolean} visible?. Force a state instead of toggling.
   */
  togglePen(index: number, visible?: boolean): void;
  /**
   * Rebuilds the header, pens panel, readout and accessible names, and redraws the plot.
   */
  redraw(): void;
  /**
   * Redraws the plot on the next animation frame, so that many pushes between two frames cost one draw.
   */
  invalidate(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-trend"): Trend;
        querySelector(selectors: "smart-trend"): Trend | null;
        querySelectorAll(selectors: "smart-trend"): NodeListOf<Trend>;
        getElementsByTagName(qualifiedName: "smart-trend"): HTMLCollectionOf<Trend>;
        getElementsByName(elementName: "smart-trend"): NodeListOf<Trend>;
    }
}

/**Sets or retrieves how the pens share the plot. percent draws every pen from 0 to 100% of its own range, as a historian does, which compares signals by shape; value draws all pens on one axis in engineering units, from min to max or from the data, for pens that share a unit. */
export declare type TrendScaleMode = 'percent' | 'value';
