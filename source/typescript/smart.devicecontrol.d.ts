import  {BaseElement, Animation} from "./smart.element"

export interface DeviceControlProperties {
  /**
   * Enables or disables the component. A disabled faceplate takes no focus and raises nothing: its buttons are disabled and requestCommand, requestMode and requestReset do nothing.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the device tag, the first word of the accessible name and of every event.
   * Default value: ""
   */
  tag?: string;
  /**
   * Sets or gets the description shown beside the tag.
   * Default value: ""
   */
  description?: string;
  /**
   * Sets or gets the device type: motor, pump or generic devices are started and stopped, a valve is opened and closed.
   * Default value: motor
   */
  kind?: DeviceControlKind | string;
  /**
   * Sets or gets the device feedback as reported by the plant: running, stopped, starting, stopping, open, closed, opening, closing, fault or unknown. Feedback that matches the pending request completes the request. A fault is announced to assistive technology.
   * Default value: unknown
   */
  state?: DeviceControlState | string;
  /**
   * Sets or gets the last command reported by the plant (start, stop, open or close), shown as the filled command button. A command reported by the plant replaces a pending request from the screen.
   * Default value: ""
   */
  commanded?: string;
  /**
   * Sets or gets who commands the device: auto (the sequence), manual (the operator), local (a field switch; the screen can request stop or close only) or outOfService. Set by the application in response to the modeRequest event.
   * Default value: auto
   */
  mode?: DeviceControlMode | string;
  /**
   * Sets or gets the modes the operator may ask for, shown as buttons. An entry that is not a string is skipped.
   * Default value: auto,manual
   */
  availableModes?: any;
  /**
   * Sets or gets the quality of the feedback: good, uncertain, bad or stale. Anything but good is shown as a badge and read out. Start and open are refused while the quality is bad or stale. Bad or stale feedback is drawn as not live: the lamp hollow and dashed, the state word grey and italic.
   * Default value: good
   */
  quality?: DeviceControlQuality | string;
  /**
   * Sets or gets whether an interlock holds the device: start and open are refused while it does, and the reason is shown.
   * Default value: false
   */
  interlocked?: boolean;
  /**
   * Sets or gets the interlock's reason, in plain language.
   * Default value: ""
   */
  interlockReason?: string;
  /**
   * Sets or gets the start permissives as [{ label, met }]. Start and open are refused while one is not met, naming it. A permissive is met only when met is true, a non-zero number, or one of the strings 'true', '1', 'yes', 'on' or 'met'; 'false', 0, 'off', null and anything else are not met. An entry that is not an object is skipped.
   * Default value: 
   */
  permissives?: any;
  /**
   * Sets or gets the application's finding that the feedback disagrees with the command, started, still stopped, shown as an alarm on the faceplate.
   * Default value: false
   */
  discrepancy?: boolean;
  /**
   * Sets or gets the fault's text, shown and announced with the fault state.
   * Default value: ""
   */
  faultText?: string;
  /**
   * Sets or gets the device's run hours, shown as a counter when given.
   * Default value: null
   */
  runHours?: number;
  /**
   * Sets or gets the number of starts, shown as a counter when given.
   * Default value: null
   */
  startCount?: number;
  /**
   * Sets or gets whether the screen may command the device at all. Off by default: a command requested from a faceplate the application has not enabled is refused with a reason.
   * Default value: false
   */
  interactive?: boolean;
  /**
   * Sets or gets how long a request is shown as on its way before it is dropped and writeTimeout fires, in milliseconds. A pending request keeps its deadline when the element is moved to another parent.
   * Default value: 5000
   */
  pendingTimeout?: number;
  /**
   * Sets or gets whether the permissives are listed on the faceplate.
   * Default value: true
   */
  showPermissives?: boolean;
  /**
   * Sets or gets the compact form, for a strip of devices along an overview. It hides the description, the commanded text, the permissives and the counters, and keeps the tag, the quality badge, the mode chip, the lamp, the state, the notice, the commands (with Reset while faulted) and the mode buttons.
   * Default value: false
   */
  compact?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the state and mode words, the command names, the notices for a pending, refused, timed-out or blocked request, the interlock, the discrepancy, the permissives, the quality words and the counters. Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
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
}
/**
 DeviceControl is a faceplate for a discrete device such as a motor, a pump or an on/off valve. It shows the device feedback state next to the commanded state, the operating mode (auto, manual, local or out of service), the interlock, the start permissives, the run hours and the start count. Commands are requests: requestCommand raises the commandRequest event and shows the command as pending until the application updates the state, refuses the request, or pendingTimeout elapses. An interactive faceplate can request stop or close in any mode. Start and open also require manual mode, live feedback (quality not bad or stale), no active interlock and all permissives met. A command that does not meet these conditions raises the blocked event with the reason.
*/
export interface DeviceControl extends BaseElement, DeviceControlProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a command is requested. The application writes the command to the plant and reports the feedback through the state property; until then the faceplate shows the command as pending.
	* @param event. The custom event. Custom data event was created with: ev.detail(tag, command)
   *  tag - The device tag.
   *  command - start, stop, open or close.
   */
  onCommandRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a mode is requested. The application answers by setting mode.
	* @param event. The custom event. Custom data event was created with: ev.detail(tag, mode)
   *  tag - The device tag.
   *  mode - The requested mode.
   */
  onModeRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a fault reset is requested.
	* @param event. The custom event. Custom data event was created with: ev.detail(tag)
   *  tag - The device tag.
   */
  onResetRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a start, stop, open or close command could not be requested: the screen is not interactive, or, for start and open, the device is not in manual or is under local control, the feedback is bad or stale, an interlock holds it, or a permissive is not met.
	* @param event. The custom event. Custom data event was created with: ev.detail(tag, command, reason)
   *  tag - The device tag.
   *  command - The command.
   *  reason - Why, in plain language.
   */
  onBlocked?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a pending request got no feedback within pendingTimeout and was dropped.
	* @param event. The custom event. Custom data event was created with: ev.detail(tag, command)
   *  tag - The device tag.
   *  command - The command that was pending.
   */
  onWriteTimeout?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the feedback state changes.
	* @param event. The custom event. Custom data event was created with: ev.detail(tag, state, oldState)
   *  tag - The device tag.
   *  state - The new state.
   *  oldState - The previous state.
   */
  onStateChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Requests a command: start or stop, open or close. Raises the commandRequest event and shows the command as pending, or raises the blocked event with the reason when the command cannot be requested. A command the device kind does not take, such as open on a pump, is ignored without an event. The same command requested again within one second, or a start or open that is already pending, is dropped. A command the feedback already reports, such as start on a running pump, raises commandRequest without being shown as pending. Does nothing while the faceplate is disabled.
   * @param {string} command. The command.
   */
  requestCommand(command: string): void;
  /**
   * Requests a change of mode by raising the modeRequest event. The application responds by setting the mode property. Does nothing when the faceplate is not interactive or is disabled, when the mode is not in availableModes, or when it is already the current mode.
   * @param {string} mode. One of the availableModes.
   */
  requestMode(mode: string): void;
  /**
   * Requests a fault reset by raising the resetRequest event, while the state is fault. Does nothing when the faceplate is not interactive or is disabled.
   */
  requestReset(): void;
  /**
   * Called by the application when it does not carry out the pending request. The request is no longer shown as pending and the reason is shown instead.
   * @param {string} reason. Why, in plain language.
   */
  refuse(reason: string): void;
  /**
   * Returns the command shown as pending, or null.
   * @returns {string}
   */
  pendingCommand(): string;
  /**
   * Returns whether a command could be requested now. Stop and close need an interactive, enabled faceplate, in any mode. Start and open also need manual mode, live feedback (quality not bad or stale), no interlock and every permissive met. Returns false for a command the device kind does not take.
   * @param {string} command. The command.
   * @returns {boolean}
   */
  canRequest(command: string): boolean;
  /**
   * Redraws the component from its current properties.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-device-control"): DeviceControl;
        querySelector(selectors: "smart-device-control"): DeviceControl | null;
        querySelectorAll(selectors: "smart-device-control"): NodeListOf<DeviceControl>;
        getElementsByTagName(qualifiedName: "smart-device-control"): HTMLCollectionOf<DeviceControl>;
        getElementsByName(elementName: "smart-device-control"): NodeListOf<DeviceControl>;
    }
}

/**Sets or gets the device type: motor, pump or generic devices are started and stopped, a valve is opened and closed. */
export declare type DeviceControlKind = 'motor' | 'pump' | 'valve' | 'generic';
/**Sets or gets the device feedback as reported by the plant: running, stopped, starting, stopping, open, closed, opening, closing, fault or unknown. Feedback that matches the pending request completes the request. A fault is announced to assistive technology. */
export declare type DeviceControlState = 'running' | 'stopped' | 'starting' | 'stopping' | 'open' | 'closed' | 'opening' | 'closing' | 'fault' | 'unknown';
/**Sets or gets who commands the device: auto (the sequence), manual (the operator), local (a field switch; the screen can request stop or close only) or outOfService. Set by the application in response to the modeRequest event. */
export declare type DeviceControlMode = 'auto' | 'manual' | 'local' | 'outOfService';
/**Sets or gets the quality of the feedback: good, uncertain, bad or stale. Anything but good is shown as a badge and read out. Start and open are refused while the quality is bad or stale. Bad or stale feedback is drawn as not live: the lamp hollow and dashed, the state word grey and italic. */
export declare type DeviceControlQuality = 'good' | 'uncertain' | 'bad' | 'stale';
