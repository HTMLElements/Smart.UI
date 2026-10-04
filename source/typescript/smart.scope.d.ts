import  {BaseElement, Animation} from "./smart.element"

export interface ScopeProperties {
  /**
   * Sets or retrieves the channels as [{ field, label, unit, color, voltsPerDivision, offset, visible }]. field is the key under which a pushed block carries the samples of the channel. A voltsPerDivision of null autoscales the channel; offset is in divisions from the centre line. Assign a new array to update the component.
   * Default value: 
   */
  channels?: any;
  /**
   * Sets or retrieves the sample rate in samples per second. The timebase, the trigger's holdoff and every measurement follow from it. A value that is not a positive, finite number is taken as 1, with one console warning.
   * Default value: 1
   */
  sampleRate?: number;
  /**
   * Sets or retrieves the timebase in seconds per horizontal division. One screen is this times horizontalDivisions. A value that is not a positive, finite number is taken as 1 ms, with one console warning. A screen holds at most 2 000 000 samples; a longer timebase at the sample rate is shortened to fit, and the header shows the timebase drawn.
   * Default value: 0.001
   */
  timePerDivision?: number;
  /**
   * Sets or retrieves how many divisions the graticule has across. From 1 to 100: a larger value draws 100, and NaN, Infinity or a value below 1 draws the default 10, with one console warning.
   * Default value: 10
   */
  horizontalDivisions?: number;
  /**
   * Sets or retrieves how many divisions the graticule has down. From 1 to 100: a larger value draws 100, and NaN, Infinity or a value below 1 draws the default 8, with one console warning.
   * Default value: 8
   */
  verticalDivisions?: number;
  /**
   * Sets or retrieves the field the trigger watches. Empty triggers on the first channel.
   * Default value: ""
   */
  triggerSource?: string;
  /**
   * Sets or retrieves the level the source has to cross, in the source's units. Drawn as an arrow at the right edge and a dotted line.
   * Default value: 0
   */
  triggerLevel?: number;
  /**
   * Sets or retrieves which way the source has to cross the level.
   * Default value: rising
   */
  triggerEdge?: ScopeTriggerEdge | string;
  /**
   * Sets or retrieves the behaviour without a trigger. auto free-runs and captures the newest screen when nothing has triggered for about two screens; normal keeps the last capture until the next trigger; single captures once and stops until run or single arms the trigger again.
   * Default value: auto
   */
  triggerMode?: ScopeTriggerMode | string;
  /**
   * Sets or retrieves the horizontal position of the trigger point on the screen, from 0 at the left edge to 1 at the right edge. 0.1 leaves one division of pre-trigger data, which shows what happened before the edge.
   * Default value: 0.1
   */
  triggerPosition?: number;
  /**
   * Sets or retrieves how long after a trigger, in seconds, another is ignored, for a burst or a pulse train where only the first edge should trigger.
   * Default value: 0
   */
  holdoff?: number;
  /**
   * Sets or retrieves how far past the level, in the source's units, the signal has to have been on the near side and has to reach on the far side for a crossing to count. A spike that pokes through the level and falls back is not an edge. The trigger point stays at the level crossing.
   * Default value: 0
   */
  triggerHysteresis?: number;
  /**
   * Sets or retrieves how many samples each channel's ring keeps. 0 keeps four screens' worth. A block larger than the ring keeps only its newest samples. At most 8 000 000 samples per channel; a larger value (Infinity included) holds 8 000 000.
   * Default value: 0
   */
  historyLength?: number;
  /**
   * Sets or retrieves the display mode. yt draws every channel against time; xy draws the second channel against the first, for Lissajous figures and I-V curves.
   * Default value: yt
   */
  mode?: ScopeMode | string;
  /**
   * Sets or retrieves the first time cursor, in seconds from the trigger. null hides it. With both cursors set the readout shows their interval, its reciprocal, and each channel's value at each cursor.
   * Default value: null
   */
  cursorA?: number;
  /**
   * Sets or retrieves the second time cursor, in seconds from the trigger. null hides it.
   * Default value: null
   */
  cursorB?: number;
  /**
   * Sets or retrieves the automatic measurements shown in the readout for each visible channel: vpp, vrms, vmean, vmax, vmin, frequency, period, riseTime, fallTime and dutyCycle. The frequency is measured from mid-level crossings with hysteresis, averaged over every full period in the record; rise and fall times are measured from 10% to 90% on the first edge.
   * Default value: vpp,vrms,frequency
   */
  measurements?: any;
  /**
   * Determines whether the graticule is drawn.
   * Default value: true
   */
  showGrid?: boolean;
  /**
   * Determines whether the channel legend is shown. The legend has one button per channel with its scale, which shows or hides the channel.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Determines whether the measurement readout is shown.
   * Default value: true
   */
  showMeasurements?: boolean;
  /**
   * Determines whether the trigger level and trigger time are marked on the graticule.
   * Default value: true
   */
  showTriggerMarkers?: boolean;
  /**
   * Determines whether pushed blocks are dropped. The display holds its last capture.
   * Default value: false
   */
  paused?: boolean;
  /**
   * Sets or retrieves the scope's name, shown in the header and in the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves how many significant figures a value is printed with in the readouts. Clamped to 1-21 when formatting; a value that is not a number shows 3.
   * Default value: 3
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves the width of a trace in pixels.
   * Default value: 1.4
   */
  lineWidth?: number;
  /**
   * Enables or disables the component. While disabled the channel legend takes no pointer or keyboard input and leaves the tab order; it returns when the component is enabled again.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. Values in the header, legend, cursor and measurement readouts use the locale's decimal separator (1,41 V in German); en is unchanged.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the header, the acquisition states, the measurement names and the accessible name, including noReading, which is said where a measurement shows "--". Used in conjunction with the property locale.
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
 Scope is an oscilloscope display for time-domain signals. It provides an edge trigger with level, hysteresis, holdoff and pre-trigger position in auto, normal and single modes, a graticule with a timebase in seconds per division and a vertical scale in units per division for each channel, time cursors, and automatic measurements such as peak to peak, RMS, mean, frequency, period, rise time, fall time and duty cycle. Samples are pushed in blocks into a ring buffer per channel. An XY mode draws one channel against another.
*/
export interface Scope extends BaseElement, ScopeProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered on every capture, on a trigger, or on an auto free-run.
	* @param event. The custom event. Custom data event was created with: ev.detail(triggered, source, level, time)
   *  triggered - True for a real trigger, false for an auto free-run capture.
   *  source - The field triggered on.
   *  level - The trigger level.
   *  time - The record's start relative to the trigger, in seconds.
   */
  onTrigger?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a channel is shown or hidden from the legend or through toggleChannel.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, field, visible)
   *  index - Which channel.
   *  field - The channel's field.
   *  visible - Whether it is now drawn.
   */
  onChannelVisibilityChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Appends a block of samples per channel and runs the trigger over it. Returns false when the scope is paused, has no channels, or the block is empty. A null, empty, non-numeric or infinite sample is no reading: a gap in the trace and in every measurement, never 0.
   * @param {any} block. { field: samples, .. } with an array or typed array per channel, or a plain array for a single-channel scope, which goes to the first channel.
   * @returns {boolean}
   */
  push(block: any): boolean;
  /**
   * Removes every sample and the capture.
   */
  clear(): void;
  /**
   * Re-arms the trigger and resumes after stop or a single capture.
   */
  run(): void;
  /**
   * Stops capturing until run or single is called.
   */
  stop(): void;
  /**
   * Arms the trigger for one capture and then stops.
   */
  single(): void;
  /**
   * Captures the newest screen regardless of the trigger. Returns false when there is nothing to capture.
   * @returns {boolean}
   */
  forceTrigger(): boolean;
  /**
   * Sets the timebase to show two or three cycles of the trigger source and the scale of every channel to fill about six divisions, based on the record on screen. This is the Auto Set function of an oscilloscope. The timebase is set only from a frequency measure() accepts, on the source's new scale - from the screen, or else from the whole ring; with none (DC, noise, a single transient) the timebase is left unchanged.
   */
  autoSet(): void;
  /**
   * Returns the record on screen as <em>{ time, sampleRate, triggerIndex, triggered, channels }</em>, where <em>channels</em> maps each field to a copy of its samples and <em>time</em> is the start of the record relative to the trigger, in seconds. Returns null before the first capture.
   * @returns {any}
   */
  capture(): any;
  /**
   * Returns the automatic measurements of the captured record for one channel as <em>{ vmax, vmin, vpp, vmean, vrms, frequency, period, riseTime, fallTime, dutyCycle }</em>, with NaN where a measurement is undefined. Frequency, period and duty cycle are measured from rising mid-level crossings with hysteresis and are NaN (shown as "--") unless the swing is at least a fifth of a division on the channel's scale, the record holds at least two full periods, and the periods agree within 25 % - so DC, noise and a single transient have no frequency. The duty cycle is taken over the whole periods. Rise and fall time are NaN when the swing is too small to have edges. Returns null before any capture.
   * @param {string} field?. The channel's field. Defaults to the trigger source.
   * @returns {any}
   */
  measure(field?: string): any;
  /**
   * Shows or hides one channel and raises the channelVisibilityChange event.
   * @param {number} index. Which channel.
   * @param {boolean} visible?. Force a state instead of toggling.
   */
  toggleChannel(index: number, visible?: boolean): void;
  /**
   * Rebuilds the header, legend, readouts and accessible name, and redraws the plot.
   */
  redraw(): void;
  /**
   * Redraws the plot on the next animation frame, so that many pushes between two frames cost one draw.
   */
  invalidate(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-scope"): Scope;
        querySelector(selectors: "smart-scope"): Scope | null;
        querySelectorAll(selectors: "smart-scope"): NodeListOf<Scope>;
        getElementsByTagName(qualifiedName: "smart-scope"): HTMLCollectionOf<Scope>;
        getElementsByName(elementName: "smart-scope"): NodeListOf<Scope>;
    }
}

/**Sets or retrieves which way the source has to cross the level. */
export declare type ScopeTriggerEdge = 'rising' | 'falling';
/**Sets or retrieves the behaviour without a trigger. auto free-runs and captures the newest screen when nothing has triggered for about two screens; normal keeps the last capture until the next trigger; single captures once and stops until run or single arms the trigger again. */
export declare type ScopeTriggerMode = 'auto' | 'normal' | 'single';
/**Sets or retrieves the display mode. yt draws every channel against time; xy draws the second channel against the first, for Lissajous figures and I-V curves. */
export declare type ScopeMode = 'yt' | 'xy';
