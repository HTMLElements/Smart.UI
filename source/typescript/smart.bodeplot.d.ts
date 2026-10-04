import  {BaseElement, Animation} from "./smart.element"

export interface BodePlotProperties {
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the responses. Each is an object with id, label, color, lineWidth, visible and either frequencies, magnitude and phase (measured points, magnitude in dB or linear per magnitudeUnit, phase in degrees) or transferFunction ({ numerator, denominator } as polynomial coefficients in s, highest power first).
   * Default value: 
   */
  plots?: any;
  /**
   * Sets or retrieves the start of the frequency axis. With frequencyMax, fixes the axis and the range a transfer function is evaluated over; null follows the measured points.
   * Default value: null
   */
  frequencyMin?: number;
  /**
   * Sets or retrieves the end of the frequency axis.
   * Default value: null
   */
  frequencyMax?: number;
  /**
   * Sets or retrieves the unit of the frequency axis. A transfer function is evaluated at s = jω with ω in rad/s either way.
   * Default value: Hz
   */
  frequencyUnit?: BodePlotFrequencyUnit | string;
  /**
   * Sets or retrieves how measured magnitude is given. Linear values are converted to dB; the plot always shows dB.
   * Default value: dB
   */
  magnitudeUnit?: BodePlotMagnitudeUnit | string;
  /**
   * Sets or retrieves the bottom of the magnitude band in dB. Null follows the data.
   * Default value: null
   */
  magnitudeMin?: number;
  /**
   * Sets or retrieves the top of the magnitude band in dB. Null follows the data.
   * Default value: null
   */
  magnitudeMax?: number;
  /**
   * Sets or retrieves the bottom of the phase band in degrees. Null follows the data.
   * Default value: null
   */
  phaseMin?: number;
  /**
   * Sets or retrieves the top of the phase band in degrees. Null follows the data.
   * Default value: null
   */
  phaseMax?: number;
  /**
   * Marks the gain and phase margins of the first visible response on both bands and writes them out under the plot. A margin at or below zero is marked as failing. The phase margin is measured to the nearest -180° + k·360° line, so it lies between -180° and 180° and is negative for an unstable loop. With several crossings the smallest phase margin and the gain margin closest to 0 dB are shown; margins() lists every crossing.
   * Default value: false
   */
  showMargins?: boolean;
  /**
   * Shows the phase band under the magnitude band.
   * Default value: true
   */
  showPhase?: boolean;
  /**
   * Shows the grid lines at the decades and the ticks.
   * Default value: true
   */
  showGrid?: boolean;
  /**
   * Shows the legend, where a response is hidden and shown.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Sets or retrieves the frequency of the cursor, which reads every response. Null hides it. The cursor is placed by clicking the plot, moved with the arrow keys (Shift for larger steps, Home and End for the ends) and cleared with Escape.
   * Default value: null
   */
  cursor?: number;
  /**
   * Enables placing and moving the cursor with the pointer and the keyboard.
   * Default value: true
   */
  interactive?: boolean;
  /**
   * Sets or retrieves the title shown above the plot and used in the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the number of significant digits in frequencies.
   * Default value: 4
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves the line width of the responses, in pixels. A response can carry its own.
   * Default value: 1.6
   */
  lineWidth?: number;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the element - the axis names, margin and cursor texts. Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
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
 BodePlot displays magnitude and phase against a logarithmic frequency axis, one band above the other. A response is given as measured points or as a transfer function in s that the component evaluates across the frequency range, so a model and a measurement sit on the same axes. The gain and phase margins are read off an open-loop response, marked on both bands and written out. A transfer function's phase is followed continuously from its low-frequency asymptote (-90° for each integrator), so a double integrator with a lag reads from about -180° downwards; measured phase is unwrapped along the frequency axis from its first point, and points may be given in either frequency order. A cursor reads every response at one frequency.
*/
export interface BodePlot extends BaseElement, BodePlotProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the cursor is placed or moved by the operator.
	* @param event. The custom event. Custom data event was created with: ev.detail(frequency)
   *  frequency - The cursor frequency.
   */
  onCursorChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a response is hidden or shown from the legend.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, visible)
   *  id - The response.
   *  visible - Whether it is now shown.
   */
  onPlotVisibilityChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns a response at a frequency as { magnitude, phase } in dB and degrees, interpolated on the log axis, or NaN outside the record.
   * @param {string} id. The response.
   * @param {number} frequency. The frequency.
   * @returns {any}
   */
  valueAt(id: string, frequency: number): any;
  /**
   * Returns the stability margins of a response as { gainMargin, gainMarginFrequency, phaseMargin, phaseMarginFrequency, gainMargins, phaseMargins }, NaN where there is no crossing. The phase margin at a gain crossover is measured to the nearest -180° + k·360° line (between -180° and 180°, negative when the loop is unstable there); the gain margin is read at every frequency where the phase crosses -180° + k·360°. With several crossings, phaseMargin is the smallest phase margin and gainMargin the one closest to 0 dB; gainMargins and phaseMargins list every crossing as { margin, frequency } in ascending frequency.
   * @param {string} id?. The response; the first visible one when omitted.
   * @returns {any}
   */
  margins(id?: string): any;
  /**
   * Evaluates a transfer function at a frequency and returns { magnitude, phase } in dB and degrees. The phase is the continuous phase of the response, anchored at its low-frequency asymptote (-90° for each integrator, +90° for each differentiator, -180° more for a negative gain), not an angle folded into -180°..180°.
   * @param {any} transferFunction. { numerator, denominator } as coefficients in s, highest power first.
   * @param {number} frequency. In the element's frequency unit.
   * @returns {any}
   */
  evaluate(transferFunction: any, frequency: number): any;
  /**
   * Shows or hides a response.
   * @param {string} id. The response.
   * @param {boolean} visible?. Shown when true, hidden when false; toggled when omitted.
   */
  togglePlot(id: string, visible?: boolean): void;
  /**
   * Returns a sentence describing what the plot shows, as used in its accessible name, with the margins when they are shown.
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
        createElement(tagName: "smart-bode-plot"): BodePlot;
        querySelector(selectors: "smart-bode-plot"): BodePlot | null;
        querySelectorAll(selectors: "smart-bode-plot"): NodeListOf<BodePlot>;
        getElementsByTagName(qualifiedName: "smart-bode-plot"): HTMLCollectionOf<BodePlot>;
        getElementsByName(elementName: "smart-bode-plot"): NodeListOf<BodePlot>;
    }
}

/**Sets or retrieves the unit of the frequency axis. A transfer function is evaluated at s = jω with ω in rad/s either way. */
export declare type BodePlotFrequencyUnit = 'Hz' | 'rad/s';
/**Sets or retrieves how measured magnitude is given. Linear values are converted to dB; the plot always shows dB. */
export declare type BodePlotMagnitudeUnit = 'dB' | 'linear';
