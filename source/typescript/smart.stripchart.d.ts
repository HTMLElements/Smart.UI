import  {BaseElement, Animation} from "./smart.element"

export interface StripChartProperties {
  /**
   * Sets or retrieves how the vertical range is chosen.
   * Default value: none
   */
  autoScale?: StripChartAutoScale | string;
  /**
   * Enables or disables the component. While disabled the legend takes no pointer or keyboard input and leaves the tab order; it returns when the component is enabled again.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves how many vertical divisions the graticule has, from 1 to 100. A larger value draws 100; NaN, Infinity or a negative value draws the default 6. Either is reported once in a console warning.
   * Default value: 6
   */
  gridColumns?: number;
  /**
   * Sets or retrieves how many horizontal divisions the graticule has, from 1 to 100. A larger value draws 100; NaN, Infinity or a negative value draws the default 4. Either is reported once in a console warning.
   * Default value: 4
   */
  gridRows?: number;
  /**
   * Sets or retrieves the number of samples the ring buffer holds, from 2 to 1 000 000. A larger value (Infinity included) holds 1 000 000; NaN or a negative value is ignored with a console warning and the buffer is kept. Changing it to another size creates a new buffer and discards the samples held.
   * Default value: 1000
   */
  historyLength?: number;
  /**
   * Sets or retrieves the trace width in pixels.
   * Default value: 1.5
   */
  lineWidth?: number;
  /**
   * Sets or retrieves the top of the vertical range, for pens that do not set their own. Ignored unless autoScale is none.
   * Default value: 100
   */
  max?: number;
  /**
   * Sets or retrieves the bottom of the vertical range, for pens that do not set their own. Ignored unless autoScale is none.
   * Default value: 0
   */
  min?: number;
  /**
   * Sets or retrieves how new samples move across the display.
   * Default value: scroll
   */
  mode?: StripChartMode | string;
  /**
   * Sets or retrieves whether the chart is frozen. A paused chart keeps what it holds and drops anything pushed at it, and push returns false so the application knows the sample was not taken.
   * Default value: false
   */
  paused?: boolean;
  /**
   * Sets or retrieves the channels to draw as [{ field, label, unit, color, min, max, visible }]. field is the key under which each sample carries the value; the other members are presentation. With autoScale none, min and max are the pen's scale: a reading beyond them is kept as it is in the digital display, flagged OVER or UNDER beside it and in the chart's accessible name, and its trace is pinned to the edge it left by. An item that is not an object (null, for example) is skipped with a console warning. Assign a new array to update the component; an array modified in place is deep-equal to the current one and does not trigger a redraw.
   * Default value: 
   */
  pens?: any;
  /**
   * Sets or retrieves how many decimal places the digital readout shows, from 0 to 20; a value outside that is clamped, and one that is not a number shows 2.
   * Default value: 2
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves whether the latest value of each pen is shown as a number above the legend. A sample with no reading for a pen - a missing, null, empty, non-numeric or infinite value - shows "--" (said as "no reading"), never 0; a reading off a fixed scale shows its real value with an OVER or UNDER flag.
   * Default value: false
   */
  showDigitalDisplay?: boolean;
  /**
   * Sets or retrieves whether the grid is drawn. Boolean attributes are presence-based, so set the property from script to turn it off.
   * Default value: true
   */
  showGrid?: boolean;
  /**
   * Sets or retrieves whether the scales are drawn: a y scale down the left of the plot with a label at every grid row, read on the first pen's range (the shared range, or min and max; with perPen scaling among several pens the labels take the first pen's colour), and an x scale along the bottom with a label at every grid column - seconds before now on a time axis, sample numbers otherwise. A classic waveform chart has both; the plot gives up the margins they take and is clipped to them.
   * Default value: false
   */
  showScales?: boolean;
  /**
   * Sets or retrieves whether the pen legend is shown. The legend is a composite widget: it is one tab stop for the whole group, arrowed between, with Enter or Space showing and hiding a pen.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. Readings and scale labels use the locale's decimal separator (4,72 in German); en is unchanged.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the paused state, the legend, the pen names, the readings and the accessible names (14 keys: paused, noPens, chartLabel, chartLabelWithPens, legendLabel, penLabel, penHidden, penInUnit, samples, noReading, overRange, underRange, overRangeFlag, underRangeFlag). Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or retrieves which key on a sample carries its timestamp, when xAxisMode is time. A sample that arrives without one is stamped on arrival.
   * Default value: "timestamp"
   */
  timeField?: string;
  /**
   * Sets or retrieves how much time the width covers, in milliseconds, when xAxisMode is time. A value that is not a positive number draws 60 000.
   * Default value: 60000
   */
  timeSpan?: number;
  /**
   * If is set to true, the component cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or retrieves what the horizontal axis represents: the sample index or the sample time.
   * Default value: sample
   */
  xAxisMode?: StripChartXAxisMode | string;
}
/**
 StripChart is a real-time chart for continuously acquired samples: the newest sample is drawn at the right and the oldest leaves at the left. Samples are pushed into a ring buffer and drawing is batched per animation frame, so the chart can accept samples at high rates. It is intended for data acquisition from a WebSocket, an OPC UA subscription or a DAQ callback. For historian data at low rates, use the Trend component.
*/
export interface StripChart extends BaseElement, StripChartProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered once per overflow episode: when the ring buffer is full and the first samples are overwritten. It is raised again only after the buffer has been emptied - by clear() or a historyLength change - and has filled again, not on every push while the buffer stays full.
	* @param event. The custom event. Custom data event was created with: ev.detail(dropped, capacity)
   *  dropped - How many samples the push that started the episode overwrote.
   *  capacity - The buffer's size.
   */
  onOverflow?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a pen is shown or hidden, whether from the legend or from togglePen.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, field, visible)
   *  index - The pen's position in the pens array.
   *  field - The pen's field.
   *  visible - Whether the pen is now drawn.
   */
  onPenVisibilityChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when samples are appended.
	* @param event. The custom event. Custom data event was created with: ev.detail(appended, length, written)
   *  appended - How many samples were taken.
   *  length - How many the buffer now holds.
   *  written - How many have been written since the buffer was created, which keeps counting past the buffer's capacity.
   */
  onPointsAppended?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Empties the buffer and redraws. The next time the buffer fills, overflow is raised again.
   */
  clear(): void;
  /**
   * Marks the chart as needing a redraw and redraws it on the next animation frame, so that many pushes between two frames cost one draw. The method is called by push, so an application rarely needs to call it.
   */
  invalidate(): void;
  /**
   * Appends one sample and schedules a redraw. A pen whose field is missing, null, empty, non-numeric or infinite has no reading at that sample: its trace has a gap there and the digital display shows "--", never 0. Returns false if the chart is paused, or the sample is not an object, and the sample was dropped.
   * @param {any} sample. Values keyed by pen field, for example { ai0: 4.72, ai1: -1.03 }. In time mode a sample without a timestamp is stamped on arrival.
   * @returns {boolean}
   */
  push(sample: any): boolean;
  /**
   * Appends a batch of samples with one redraw for the whole batch, so a block read from a DAQ card costs the same as one sample. Items that are not objects (null, for example) are skipped. Returns false when the chart is paused, or no item was a sample, and the batch was dropped.
   * @param {any} samples. The samples, oldest first.
   * @returns {boolean}
   */
  pushMany(samples: any): boolean;
  /**
   * Rebuilds the legend and readout, resizes the canvas and redraws immediately.
   */
  redraw(): void;
  /**
   * Returns the samples in the buffer, oldest first, as a new array. The array is a copy, so it can be passed to an exporter or kept without being changed by later pushes.
   * @returns {any}
   */
  snapshot(): any;
  /**
   * Shows or hides one pen.
   * @param {number} index. Which pen, by its position in the pens array.
   * @param {boolean} visible?. Force a state instead of toggling.
   */
  togglePen(index: number, visible?: boolean): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-strip-chart"): StripChart;
        querySelector(selectors: "smart-strip-chart"): StripChart | null;
        querySelectorAll(selectors: "smart-strip-chart"): NodeListOf<StripChart>;
        getElementsByTagName(qualifiedName: "smart-strip-chart"): HTMLCollectionOf<StripChart>;
        getElementsByName(elementName: "smart-strip-chart"): NodeListOf<StripChart>;
    }
}

/**Sets or retrieves how the vertical range is chosen. */
export declare type StripChartAutoScale = 'none' | 'perPen' | 'shared';
/**Sets or retrieves how new samples move across the display. */
export declare type StripChartMode = 'scroll' | 'sweep' | 'scope';
/**Sets or retrieves what the horizontal axis represents: the sample index or the sample time. */
export declare type StripChartXAxisMode = 'sample' | 'time';
