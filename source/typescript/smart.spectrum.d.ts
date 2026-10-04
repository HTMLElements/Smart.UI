import  {BaseElement, Animation} from "./smart.element"

export interface SpectrumProperties {
  /**
   * Sets or retrieves the most recent block of samples, as an array or a typed array. push sets it; an application with a complete record can assign it directly.
   * Default value: null
   */
  signal?: any;
  /**
   * Sets or retrieves the sample rate in samples per second. Every frequency on the display follows from it; the default of 1 reads frequencies in cycles per sample. A value that is not a positive number (0, negative, NaN) analyses nothing rather than computing a spectrum on a made-up rate: the header and the plot say "Sample rate 0 is not valid", the accessible name says the same, and one console warning names the value.
   * Default value: 1
   */
  sampleRate?: number;
  /**
   * Sets or retrieves the FFT size. 0 uses the next power of two above the block length. A size larger than the block zero-pads the transform, which interpolates the display but does not add resolution; the bin width is still the sample rate divided by the length of the real data. Held to 0 to 16,777,216; not a number uses 0. Either is said once in a console warning.
   * Default value: 0
   */
  size?: number;
  /**
   * Sets or retrieves the window function applied before the transform. A flat-top window reads amplitude to within 0.01 dB but spreads the peak in frequency; a rectangular window does the opposite. The amplitude is corrected for the coherent gain of the window in every case.
   * Default value: hann
   */
  window?: SpectrumWindow | string;
  /**
   * Sets or retrieves what a bin's value means: amplitude reads a sine's peak, power its square, density its power per hertz. They are not interchangeable, and the header says which one is showing.
   * Default value: amplitude
   */
  scaling?: SpectrumScaling | string;
  /**
   * Sets or retrieves whether levels are shown in decibels against reference or as linear magnitudes.
   * Default value: db
   */
  levelScale?: SpectrumLevelScale | string;
  /**
   * Sets or retrieves the level that corresponds to 0 dB. 1 gives dBV levels for a signal in volts; the full scale of a converter gives dBFS.
   * Default value: 1
   */
  reference?: number;
  /**
   * Sets or retrieves the frequency axis. A log axis starts at the first bin above DC, since it has no zero, and carries decade ticks with 2 and 5 minors.
   * Default value: linear
   */
  frequencyScale?: SpectrumFrequencyScale | string;
  /**
   * Sets or retrieves the lowest frequency shown. null follows the data: 0, or the first bin on a log axis. Set above maxFrequency, the two are swapped; a span that leaves nothing to show (equal limits, or a limit beyond the other end of the data or below the first bin on a log axis) shows the whole spectrum instead. Each is said once in a console warning.
   * Default value: null
   */
  minFrequency?: number;
  /**
   * Sets or retrieves the highest frequency shown. null follows the data to the Nyquist frequency. See minFrequency for limits set the wrong way round.
   * Default value: null
   */
  maxFrequency?: number;
  /**
   * Sets or retrieves the bottom of the level axis. null follows the data with some headroom; a fixed value keeps the trace from rescaling as the signal changes, as on an analyzer. Set above maxLevel, the two are swapped; equal limits, or one limit that leaves no room against the data, let the axis follow the data. Each is said once in a console warning.
   * Default value: null
   */
  minLevel?: number;
  /**
   * Sets or retrieves the top of the level axis. null follows the data with headroom. See minLevel for limits set the wrong way round.
   * Default value: null
   */
  maxLevel?: number;
  /**
   * Sets or retrieves the spectrum averaging mode. none draws each block as it arrives. linear averages the first averages blocks and then holds the result until clear restarts the average, like a bench analyzer. exponential weights each new block by 1/averages and continues indefinitely. Averaging is performed in the power domain regardless of the display scaling, because averaging amplitudes or decibels biases the noise floor.
   * Default value: none
   */
  averaging?: SpectrumAveraging | string;
  /**
   * Sets or retrieves how many blocks the average spans. Held to 1 to 10,000; not a number uses 8. Either is said once in a console warning.
   * Default value: 8
   */
  averages?: number;
  /**
   * Determines whether the highest level ever seen in each bin is kept as a second trace, until clear.
   * Default value: false
   */
  peakHold?: boolean;
  /**
   * Sets or retrieves how many peaks are marked on the trace and listed in the readout, strongest first. 0 marks none. Peaks are found on the displayed trace, after averaging, by prominence, not height. Held to 0 to 100.
   * Default value: 3
   */
  showPeaks?: number;
  /**
   * Sets or retrieves how far a peak must stand above its surroundings to be marked, in the level scale's own unit, decibels, or linear magnitude. It keeps one strong tone's sidelobes from being reported as three peaks. Not below 0; not a number uses 6.
   * Default value: 6
   */
  minProminence?: number;
  /**
   * Determines whether total harmonic distortion is measured against the strongest peak and shown in the readout, as a percentage and in dB. Requires amplitude scaling.
   * Default value: false
   */
  showThd?: boolean;
  /**
   * Sets or retrieves how many harmonics the THD measurement includes. Held to 1 to 100.
   * Default value: 5
   */
  harmonics?: number;
  /**
   * Sets or retrieves markers placed by the application as [{ frequency, label }], drawn as labelled vertical lines, for example at the line frequency, a shaft speed, a bearing defect frequency or a filter corner, so the peaks can be compared with the expected frequencies.
   * Default value: 
   */
  markers?: any;
  /**
   * Determines whether the grid and axis labels are drawn.
   * Default value: true
   */
  showGrid?: boolean;
  /**
   * Determines whether the peak list and the THD value are shown as text under the plot. The readout is what a screen reader and a report receive; the markers on the canvas show the same information graphically.
   * Default value: true
   */
  showReadout?: boolean;
  /**
   * Determines whether the header, sample rate, transform size, bin width, window, scaling and averaging state, is shown.
   * Default value: true
   */
  showHeader?: boolean;
  /**
   * Determines whether pushed blocks are dropped. The display holds its last spectrum.
   * Default value: false
   */
  paused?: boolean;
  /**
   * Sets or retrieves the name of the channel, shown in the header and in the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the unit of the signal, for example V, g or Pa, so that a level is shown as dBV rather than dB and a linear level carries its unit.
   * Default value: ""
   */
  unit?: string;
  /**
   * Sets or retrieves how many decimal places a level is printed with in the readout and peak labels. Held to 0 to 20.
   * Default value: 1
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves the width of the trace in pixels.
   * Default value: 1.2
   */
  lineWidth?: number;
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the header, the readout, the warnings and the accessible name. Used in conjunction with the property locale.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component. With no theme of its own the component takes the nearest themed ancestor's palette for its trace colours.
   * Default value: ""
   */
  theme?: string;
}
/**
 Spectrum is a spectrum analyzer display. Sample blocks are pushed to the component and shown as their frequency content, with a linear or logarithmic frequency axis, levels in dB against a stated reference, linear or exponential averaging, max hold, peak markers, host-defined markers and a THD readout. The FFT and window functions are provided by Smart.DSP with the correct amplitude scaling for the selected window. The spectrum is drawn to a canvas and reduced to one envelope per pixel column.
*/
export interface Spectrum extends BaseElement, SpectrumProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered after each block is analysed, with the peaks found on the displayed trace.
	* @param event. The custom event. Custom data event was created with: ev.detail(peaks, binWidth, size, invalidSamples)
   *  peaks - The marked peaks, strongest first, as [{ frequency, level, magnitude, index, prominence }].
   *  binWidth - The frequency resolution in hertz.
   *  size - The transform size.
   *  invalidSamples - How many samples of the block were not numbers and were analysed as zeros; 0 for a clean block.
   */
  onSpectrumChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Analyses the next block of samples and redraws. The block is copied, so a DAQ can pass the same buffer each time. Averaging and max hold accumulate across pushes. Samples that are not numbers (NaN, null, an infinite value) are analysed as zeros, which lowers the levels by an amount that depends on how many there were, so the block is never passed off as clean: the header shows "2 of 4096 samples were not numbers (analysed as 0)", the accessible name and <em>spectrumChange</em> carry the count, and the console says so once per run of such blocks. A block with no number in it is not analysed. Returns false when the analyzer is paused and the block was dropped.
   * @param {any} samples. The samples, as an array or a typed array.
   * @returns {boolean}
   */
  push(samples: any): boolean;
  /**
   * Clears the running average and the held maximum and restarts them from the block on screen.
   */
  clear(): void;
  /**
   * Returns the spectrum as currently shown, as <em>{ frequencies, magnitudes, levels, hold, binWidth, size, window, invalidSamples }</em>, where <em>levels</em> are in the level scale, <em>magnitudes</em> are the linear values after averaging, <em>hold</em> is the max-hold trace or null, and <em>invalidSamples</em> is how many samples of the block were not numbers. Returns null before the first signal, and while the sample rate is not a positive number.
   * @returns {any}
   */
  spectrum(): any;
  /**
   * Returns the marked peaks, strongest first, as [{ frequency, level, magnitude, index, prominence }].
   * @returns {any}
   */
  peaks(): any;
  /**
   * Rebuilds the header, readout and accessible name, and redraws the plot.
   */
  redraw(): void;
  /**
   * Redraws the plot on the next animation frame, so that many pushes between two frames cost one draw.
   */
  invalidate(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-spectrum"): Spectrum;
        querySelector(selectors: "smart-spectrum"): Spectrum | null;
        querySelectorAll(selectors: "smart-spectrum"): NodeListOf<Spectrum>;
        getElementsByTagName(qualifiedName: "smart-spectrum"): HTMLCollectionOf<Spectrum>;
        getElementsByName(elementName: "smart-spectrum"): NodeListOf<Spectrum>;
    }
}

/**Sets or retrieves the window function applied before the transform. A flat-top window reads amplitude to within 0.01 dB but spreads the peak in frequency; a rectangular window does the opposite. The amplitude is corrected for the coherent gain of the window in every case. */
export declare type SpectrumWindow = 'rectangular' | 'hann' | 'hamming' | 'blackman' | 'blackman-harris' | 'flat-top';
/**Sets or retrieves what a bin's value means: amplitude reads a sine's peak, power its square, density its power per hertz. They are not interchangeable, and the header says which one is showing. */
export declare type SpectrumScaling = 'amplitude' | 'power' | 'density';
/**Sets or retrieves whether levels are shown in decibels against reference or as linear magnitudes. */
export declare type SpectrumLevelScale = 'db' | 'linear';
/**Sets or retrieves the frequency axis. A log axis starts at the first bin above DC, since it has no zero, and carries decade ticks with 2 and 5 minors. */
export declare type SpectrumFrequencyScale = 'linear' | 'log';
/**Sets or retrieves the spectrum averaging mode. none draws each block as it arrives. linear averages the first averages blocks and then holds the result until clear restarts the average, like a bench analyzer. exponential weights each new block by 1/averages and continues indefinitely. Averaging is performed in the power domain regardless of the display scaling, because averaging amplitudes or decibels biases the noise floor. */
export declare type SpectrumAveraging = 'none' | 'linear' | 'exponential';
