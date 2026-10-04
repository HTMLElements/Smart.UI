import  {BaseElement, Animation} from "./smart.element"

export interface FaceplateProperties {
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
   * Sets or gets whether the component can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the loop tag, shown first and used as the accessible name.
   * Default value: ""
   */
  tag?: string;
  /**
   * Sets or gets the description of the loop, shown next to the tag.
   * Default value: ""
   */
  description?: string;
  /**
   * Sets or gets the engineering unit of the process value and the setpoint.
   * Default value: ""
   */
  unit?: string;
  /**
   * Sets or gets the process value reported by the plant. The faceplate never sets this value itself. A null or non-numeric value is drawn as absent rather than as zero.
   * Default value: null
   */
  processValue?: any;
  /**
   * Sets or gets the setpoint. Use requestSetpoint to request a change and set the property when the controller confirms the new value.
   * Default value: null
   */
  setpoint?: any;
  /**
   * Sets or gets the controller output as a percentage of the output range.
   * Default value: null
   */
  output?: any;
  /**
   * Sets or gets the minimum of the process range.
   * Default value: 0
   */
  min?: number;
  /**
   * Sets or gets the maximum of the process range.
   * Default value: 100
   */
  max?: number;
  /**
   * Sets or gets the minimum of the output range.
   * Default value: 0
   */
  outputMin?: number;
  /**
   * Sets or gets the maximum of the output range.
   * Default value: 100
   */
  outputMax?: number;
  /**
   * Sets or gets the number of decimal places shown in the readouts.
   * Default value: 1
   */
  precisionDigits?: number;
  /**
   * Sets or gets the controller mode. Use requestMode to request a change and set the property when the controller confirms the new mode. The output column can be operated in manual mode only.
   * Default value: auto
   */
  mode?: FaceplateMode | string;
  /**
   * Sets or gets the modes offered by the loop. A mode that is not in the list cannot be requested.
   * Default value: auto,manual
   */
  availableModes?: any;
  /**
   * Sets or gets the four process alarm limits as an object with hiHi, hi, lo and loLo members. They are drawn as lines on the process value column, and the column takes the alarm colour when a limit is crossed. Assign a new object to update the component; object properties are compared by value.
   * Default value: null
   */
  alarmLimits?: any;
  /**
   * Sets or gets the part of the output range the operator may drive into, as an object with low and high members. A request outside it is clamped before it is reported.
   * Default value: null
   */
  outputLimits?: any;
  /**
   * Sets or gets the quality of the reading. A quality other than good is shown as a badge and included in the spoken value, so a stale value is not presented as a current one. Bad and stale readings are also drawn as not live: the process column hatched and the PV readout grey, struck through when bad and italic when stale. Requests stay possible - with a bad process value the operator may still need to drive the output in manual.
   * Default value: good
   */
  quality?: FaceplateQuality | string;
  /**
   * Determines whether requests can be made. Off by default: a read-only faceplate does not take keyboard focus, so a screen with many faceplates does not collect tab stops that do nothing.
   * Default value: false
   */
  interactive?: boolean;
  /**
   * Sets or gets the amount by which an arrow key moves the setpoint. Page Up and Page Down move ten steps; Home and End move to the ends of the range.
   * Default value: 1
   */
  setpointStep?: number;
  /**
   * Sets or gets the amount by which an arrow key moves the output.
   * Default value: 1
   */
  outputStep?: number;
  /**
   * Determines whether a small embedded trend of the process value against the setpoint is shown. The trend is a strip chart.
   * Default value: false
   */
  showTrend?: boolean;
  /**
   * Sets or gets the number of samples kept by the embedded trend.
   * Default value: 120
   */
  trendLength?: number;
  /**
   * Determines whether the trend, the description and the column captions are hidden, for a strip of loops along the bottom of an overview screen.
   * Default value: false
   */
  compact?: boolean;
  /**
   * Sets or gets the time in milliseconds a request may remain pending before it is dropped and the writeTimeout event is raised. Set it long enough for a round trip to the control system and short enough that the operator is not left waiting for a request that will not be answered. A request keeps its deadline when the faceplate is moved to another parent.
   * Default value: 5000
   */
  pendingTimeout?: number;
  /**
   * Sets or gets an object specifying the strings used in the component that can be localized. Assigning the property replaces the object, so include the existing languages when adding one.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Sets or gets the language. Used together with the property messages.
   * Default value: "en"
   */
  locale?: string;
}
/**
 Faceplate is a control loop faceplate that shows the process value, the setpoint and the controller output of a loop together with its mode. The component does not write values: requestSetpoint, requestOutput and requestMode raise events, the application sends the write to the control system, and the faceplate updates when the new value is reported. Until then the requested value is shown as pending next to the confirmed value, and if no update arrives within pendingTimeout the request is dropped and the writeTimeout event is raised. On the process-value track a drag shows where the setpoint would go and asks for it when it is let go over the track; a tap asks for nothing, and a drag that is cancelled, released away from the track, or interrupted by a change to cascade or out of service, or by the faceplate being removed, asks for nothing.
*/
export interface Faceplate extends BaseElement, FaceplateProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a new setpoint is requested. The faceplate does not change the setpoint; set the setpoint property when the control system confirms the value.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, tag)
   *  value - The requested setpoint, clamped to min and max.
   *  tag - The loop tag.
   */
  onSetpointChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a new controller output is requested.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, tag)
   *  value - The requested output, clamped to outputMin and outputMax.
   *  tag - The loop tag.
   */
  onOutputChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a change of mode is requested.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, tag)
   *  value - The requested mode.
   *  tag - The loop tag.
   */
  onModeChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the process value crosses into or out of an alarm limit.
	* @param event. The custom event. Custom data event was created with: ev.detail(state, oldState)
   *  state - The alarm limit the process value now sits beyond: hiHi, hi, lo, loLo, or normal.
   *  oldState - The state before.
   */
  onAlarmStateChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a request has been pending for <em>pendingTimeout</em> without the application writing the value back. The request is dropped and is no longer shown as pending.
	* @param event. The custom event. Custom data event was created with: ev.detail(property, value)
   *  property - Which request went unanswered: setpoint, output or mode.
   *  value - The value that was requested.
   */
  onWriteTimeout?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Requests a new setpoint. Raises the setpointChange event and returns without changing the setpoint. The value is clamped to min and max before it is reported. Does nothing unless the faceplate is interactive and enabled. The mode rules apply: nothing is raised in cascade or out of service. Asking for the setpoint already in force raises nothing, and asking again for a value already pending raises nothing until it is answered or times out.
   * @param {number} value. The requested setpoint.
   */
  requestSetpoint(value: number): void;
  /**
   * Requests a new controller output. Raises the outputChange event and returns. The value is clamped to outputLimits, then to outputMin and outputMax, before it is reported. Does nothing unless the faceplate is interactive and enabled. The mode rules apply: the output is requested only in manual. Asking for the output already in force, or again for a value already pending, raises nothing.
   * @param {number} value. The requested output.
   */
  requestOutput(value: number): void;
  /**
   * Requests a change of mode. Raises the modeChange event and returns. A mode that is not in availableModes is ignored. Does nothing unless the faceplate is interactive and enabled. Asking for the mode already in force, or again for a mode already pending, raises nothing.
   * @param {string} mode. The requested mode.
   */
  requestMode(mode: string): void;
  /**
   * Returns the alarm limit the current process value has crossed: hiHi, hi, lo, loLo or normal.
   * @returns {string}
   */
  alarmState(): string;
  /**
   * Also available as a static method of the class. Returns the alarm limit a reading has crossed, given a limits object. It has no side effects, so a banner or a tile wall can classify a reading without creating a faceplate. The most severe limit is returned: a reading above hi-hi is also above hi, and hi-hi is reported.
   * @param {number} value. The reading.
   * @param {any} limits. An object with hiHi, hi, lo and loLo members. Any absent limit is skipped.
   * @returns {string}
   */
  limitStateOf(value: number, limits: any): string;
  /**
   * Redraws the faceplate. Called automatically when a property changes.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-faceplate"): Faceplate;
        querySelector(selectors: "smart-faceplate"): Faceplate | null;
        querySelectorAll(selectors: "smart-faceplate"): NodeListOf<Faceplate>;
        getElementsByTagName(qualifiedName: "smart-faceplate"): HTMLCollectionOf<Faceplate>;
        getElementsByName(elementName: "smart-faceplate"): NodeListOf<Faceplate>;
    }
}

/**Sets or gets the controller mode. Use requestMode to request a change and set the property when the controller confirms the new mode. The output column can be operated in manual mode only. */
export declare type FaceplateMode = 'auto' | 'manual' | 'cascade' | 'outOfService';
/**Sets or gets the quality of the reading. A quality other than good is shown as a badge and included in the spoken value, so a stale value is not presented as a current one. Bad and stale readings are also drawn as not live: the process column hatched and the PV readout grey, struck through when bad and italic when stale. Requests stay possible - with a bad process value the operator may still need to drive the output in manual. */
export declare type FaceplateQuality = 'good' | 'uncertain' | 'bad' | 'stale';
