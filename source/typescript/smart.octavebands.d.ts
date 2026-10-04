import  {BaseElement, Animation} from "./smart.element"

export interface OctaveBandsProperties {
  /**
   * Enables or disables the element. Disabled, a click on a band raises no bandClick.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the band width: whole octaves or third octaves.
   * Default value: third
   */
  resolution?: OctaveBandsResolution | string;
  /**
   * Sets or retrieves the sample rate of pushed blocks, in samples per second. A band is shown only when all of it lies below half the sample rate. A value that is not a positive number analyses nothing: push() returns false, the header says so, and one console warning names the value; assigned levels are still shown.
   * Default value: 48000
   */
  sampleRate?: number;
  /**
   * Sets or retrieves the FFT size a pushed block is analysed with. 0 uses the block's own length. Held to 16,777,216 at most.
   * Default value: 0
   */
  size?: number;
  /**
   * Sets or retrieves the centre frequency of the lowest band shown. Set above frequencyMax, the two are swapped, with one console warning, rather than leaving the chart empty.
   * Default value: 20
   */
  frequencyMin?: number;
  /**
   * Sets or retrieves the centre frequency of the highest band shown. Bands whose upper edge lies above half the sample rate are not shown whatever this says: at a sample rate of 8 kHz the 4 kHz third-octave band, which runs to 4.49 kHz, would be summed from the bins that exist and read low.
   * Default value: 20000
   */
  frequencyMax?: number;
  /**
   * Sets or retrieves the frequency weighting applied to each band and to the overall level: Z (none), A or C, per IEC 61672.
   * Default value: Z
   */
  weighting?: OctaveBandsWeighting | string;
  /**
   * Sets or retrieves what reads as 0 dB: 1 for dB re one unit of the signal, 0.00002 for dB SPL of a signal in pascal.
   * Default value: 1
   */
  reference?: number;
  /**
   * Sets or retrieves the signal's unit, so a level reads dBV or, with the 20 µPa reference, dB SPL.
   * Default value: ""
   */
  unit?: string;
  /**
   * Sets or retrieves the exponential time weighting of the bars: none, fast (125 ms) or slow (1 s), as a meter's.
   * Default value: fast
   */
  averaging?: OctaveBandsAveraging | string;
  /**
   * Keeps the highest level of each band as a marker.
   * Default value: true
   */
  peakHold?: boolean;
  /**
   * Sets or retrieves the level of each band in dB, in the order of bands(). Assigned by an application with its own filter bank, or computed by push.
   * Default value: 
   */
  levels?: any;
  /**
   * Sets or retrieves the limit the bands are checked against: a level per band in dB, or [{ frequency, level }] points interpolated across the bands on the log axis. A band above its limit is drawn in the exceeded colour and counted in the header. A null or non-numeric per-band value is no limit for that band; a point that is not an object with a frequency and a level is skipped. Either is said once in a console warning.
   * Default value: 
   */
  limit?: any;
  /**
   * Sets or retrieves the bottom of the level axis in dB. Null follows the data. With levelMax set below it, the two are swapped; set equal, the axis follows the data. Either is said once in a console warning.
   * Default value: null
   */
  levelMin?: number;
  /**
   * Sets or retrieves the top of the level axis in dB. Null follows the data. Fixes the axis together with levelMin.
   * Default value: null
   */
  levelMax?: number;
  /**
   * Shows the overall level in the header.
   * Default value: true
   */
  showOverall?: boolean;
  /**
   * Shows the grid lines at the level ticks.
   * Default value: true
   */
  showGrid?: boolean;
  /**
   * Drops pushed blocks while set.
   * Default value: false
   */
  paused?: boolean;
  /**
   * Sets or retrieves the title shown in the header and used in the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the number of decimals in levels, held to 0 to 20.
   * Default value: 1
   */
  precisionDigits?: number;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the element - the header, overall, band and warning texts. Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
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
 OctaveBands displays the level in each octave or third-octave band as a bar, with the frequency-weighted overall level and a limit curve the bands are checked against: the display of a sound level meter and of a vibration survey. Bands follow IEC 61260 and the A and C weightings follow IEC 61672. Blocks of samples pushed to the component are analysed with the FFT of Smart.DSP, the power of the bins inside each band summed; an application with a real filter bank assigns the levels directly. Fast or slow averaging settles the bars, and peak hold keeps the highest level of each band. The class carries two static methods usable without an element: weighting(weighting, frequency), the A, C or Z weighting in dB at a frequency per IEC 61672, and nominal(centre), the nominal frequency a band is named by.
*/
export interface OctaveBands extends BaseElement, OctaveBandsProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered after a pushed block has been analysed.
	* @param event. The custom event. Custom data event was created with: ev.detail(levels, overall, invalidSamples)
   *  levels - The level of each band, in dB.
   *  overall - The overall level, in dB.
   *  invalidSamples - How many samples of the block were not numbers and were analysed as zeros; 0 for a clean block.
   */
  onLevelsChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a band is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, centre, label, level, peak)
   *  index - The band.
   *  centre - Its centre frequency.
   *  label - Its nominal frequency.
   *  level - Its level.
   *  peak - Its held peak.
   */
  onBandClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Analyses a block of samples into band levels and shows them, with averaging and peak hold applied. Samples that are not numbers are analysed as zeros, and never passed off as clean: the header shows how many, <em>levelsChange</em> carries the count, and the console says so once per run of such blocks. Returns false, and analyses nothing, when the analyser is paused, when Smart.DSP is not loaded, when the block is not an array of at least two samples or has no number in it, or when the sample rate is not a positive number.
   * @param {any} block. The samples, as an array or a typed array.
   * @returns {boolean}
   */
  push(block: any): boolean;
  /**
   * Returns the bands shown: [{ centre, low, high, label, index }], centres on the IEC 61260 base-10 series, between frequencyMin and frequencyMax, and only bands whose upper edge lies below half the sample rate.
   * @returns {any}
   */
  bands(): any;
  /**
   * Returns the overall level: the levels of the bands summed on energy, in dB, or NaN with no levels.
   * @returns {number}
   */
  overall(): number;
  /**
   * Clears the levels and the peaks.
   */
  clear(): void;
  /**
   * Drops the held peaks.
   */
  resetPeaks(): void;
  /**
   * Returns a sentence describing what the analyser shows, as used in its accessible name: the bands, the overall level, the highest band and the number above the limit (<em>exceededSummaryOne</em> for one).
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
        createElement(tagName: "smart-octave-bands"): OctaveBands;
        querySelector(selectors: "smart-octave-bands"): OctaveBands | null;
        querySelectorAll(selectors: "smart-octave-bands"): NodeListOf<OctaveBands>;
        getElementsByTagName(qualifiedName: "smart-octave-bands"): HTMLCollectionOf<OctaveBands>;
        getElementsByName(elementName: "smart-octave-bands"): NodeListOf<OctaveBands>;
    }
}

/**Sets or retrieves the band width: whole octaves or third octaves. */
export declare type OctaveBandsResolution = 'octave' | 'third';
/**Sets or retrieves the frequency weighting applied to each band and to the overall level: Z (none), A or C, per IEC 61672. */
export declare type OctaveBandsWeighting = 'Z' | 'A' | 'C';
/**Sets or retrieves the exponential time weighting of the bars: none, fast (125 ms) or slow (1 s), as a meter's. */
export declare type OctaveBandsAveraging = 'none' | 'fast' | 'slow';
