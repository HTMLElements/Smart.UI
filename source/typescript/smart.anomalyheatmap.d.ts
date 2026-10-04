import  {BaseElement, Animation} from "./smart.element"

export interface AnomalyHeatmapProperties {
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
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
   * Sets or retrieves the rows as [{ id, label }] or as plain ids. The id is the value a sample carries in its series field. Assign a new array to update the component.
   * Default value: 
   */
  series?: any;
  /**
   * Sets or retrieves the samples as [{ series, timestamp, score }], where score is between 0 and 1. A cell shows the highest score of the samples in its interval; a sample without a series or a score is dropped. Assigning the property replaces the samples; push adds to them.
   * Default value: 
   */
  data?: any;
  /**
   * Sets or retrieves the width of the time axis, in milliseconds. A day by default.
   * Default value: 86400000
   */
  timeSpan?: number;
  /**
   * Sets or retrieves one column's width in time, in milliseconds. Fifteen minutes by default. The column count is timeSpan divided by bucket.
   * Default value: 900000
   */
  bucket?: number;
  /**
   * Sets or retrieves the right edge of the time axis as a timestamp; the columns cover the time span up to it. null follows the data: the axis ends at the end of the interval that contains the newest sample, or at the current time when there are no samples, aligned to an interval boundary.
   * Default value: null
   */
  end?: number;
  /**
   * Sets or retrieves how far ahead of this computer's clock, in milliseconds, a pushed sample may be stamped. A sample stamped later than that and more than one interval after the newest sample held is ignored: push returns false and a warning is written to the console once per series. Without it, one sample from a device whose clock is a year out - or seconds read as milliseconds - moved the axis to that time and dropped every real sample off it. A feed that runs ahead of the clock one interval at a time, such as a simulation or a replay, is still followed. null takes every timestamp as given. Samples assigned through data are taken as given.
   * Default value: 300000
   */
  maxClockSkew?: number;
  /**
   * Sets or retrieves the start of each band as { advisory, warning, critical }. A score below the advisory threshold is drawn in a neutral colour whose intensity follows the score; from each threshold up, a cell takes the alarm colour of its band.
   * Default value: [object Object]
   */
  thresholds?: AnomalyHeatmapThresholds;
  /**
   * Sets or retrieves the selected cell, as { series, timestamp }, or null. Focusing or clicking a cell selects it.
   * Default value: null
   */
  selected?: any;
  /**
   * Determines whether each cell prints its score. Off by default: at the default cell size the number does not fit, and the colour and the label carry it.
   * Default value: false
   */
  showValues?: boolean;
  /**
   * Determines whether the legend of bands is shown under the grid.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Determines whether the time labels are shown along the top.
   * Default value: true
   */
  showTimeAxis?: boolean;
  /**
   * Sets or retrieves the decimals scores are shown with.
   * Default value: 2
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves a name for the heatmap, spoken as part of the grid's label.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the language-specific strings the component shows, keyed by locale then by message. Used with the locale property.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Sets or gets the locale, which selects a block of messages. The time labels and the scores are written in this locale.
   * Default value: "en"
   */
  locale?: string;
}
/**
 AnomalyHeatmap displays anomaly scores as a heatmap with one row per tag or asset and one column per time interval. Each cell shows the highest score reported in the interval; cells below the first threshold use a neutral scale and cells above the advisory, warning and critical thresholds use the alarm colours. The component supports keyboard navigation and selection, and raises events when a cell is selected or activated so the application can open the related trend. In a narrow container the grid opens scrolled to the newest interval and stays there as data arrives, until the operator scrolls back; in right-to-left the grid is mirrored, newest on the left, and the arrow keys follow it. Times are written in the element's locale on the 24-hour clock.
*/
export interface AnomalyHeatmap extends BaseElement, AnomalyHeatmapProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a cell is selected, by focus or by a click.
	* @param event. The custom event. Custom data event was created with: ev.detail(series, timestamp, score, severity)
   *  series - The series id.
   *  timestamp - The start of the cell's interval.
   *  score - The cell's score, or NaN when it has none.
   *  severity - The cell's band: normal, advisory, warning or critical.
   */
  onSelectionChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a cell is activated, clicked, or Enter or Space pressed on it. A host opens the trend behind the cell here, or asks the operator whether the model was right.
	* @param event. The custom event. Custom data event was created with: ev.detail(series, timestamp, score, severity)
   *  series - The series id.
   *  timestamp - The start of the cell's interval.
   *  score - The cell's score, or NaN when it has none.
   *  severity - The cell's band: normal, advisory, warning or critical.
   */
  onCellClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds one sample and redraws the cell it lands in; the grid is rebuilt only when the axis moves on to a new interval, so a unit of fifty series over a day takes a sample in a few milliseconds. A sample without a timestamp is stamped with the current time. Returns false when the sample has no series or no score, or is stamped too far ahead of the clock (see <em>maxClockSkew</em>).
   * @param {any} sample. { series, timestamp, score }
   * @returns {boolean}
   */
  push(sample: any): boolean;
  /**
   * Returns the worst score in the bucket that holds a time, for a series, or NaN when nothing landed there.
   * @param {string} series. The series id.
   * @param {number} time. A timestamp.
   * @returns {number}
   */
  scoreAt(series: string, time: number): number;
  /**
   * Returns the band a score falls in: advisory, warning, critical, or normal below the first threshold.
   * @param {number} score. A score, 0 to 1.
   * @returns {string}
   */
  severityOf(score: number): string;
  /**
   * Returns the cells at or above a severity, highest score first, as <em>[{ series, timestamp, score, severity }]</em>.
   * @param {string} severity?. advisory, warning or critical. advisory when omitted.
   * @returns {any}
   */
  hotspots(severity?: string): any;
  /**
   * Rebuilds the component from its properties.
   */
  redraw(): void;
}

/**Sets or retrieves the start of each band as <em>{ advisory, warning, critical }</em>. A score below the advisory threshold is drawn in a neutral colour whose intensity follows the score; from each threshold up, a cell takes the alarm colour of its band. */
export interface AnomalyHeatmapThresholds {
  /**
   * 
   * Default value: undefined
   */
  advisory?: any;
  /**
   * 
   * Default value: undefined
   */
  warning?: any;
  /**
   * 
   * Default value: undefined
   */
  critical?: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-anomaly-heatmap"): AnomalyHeatmap;
        querySelector(selectors: "smart-anomaly-heatmap"): AnomalyHeatmap | null;
        querySelectorAll(selectors: "smart-anomaly-heatmap"): NodeListOf<AnomalyHeatmap>;
        getElementsByTagName(qualifiedName: "smart-anomaly-heatmap"): HTMLCollectionOf<AnomalyHeatmap>;
        getElementsByName(elementName: "smart-anomaly-heatmap"): NodeListOf<AnomalyHeatmap>;
    }
}

