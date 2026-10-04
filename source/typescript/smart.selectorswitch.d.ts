import  {BaseElement, Animation} from "./smart.element"

export interface SelectorSwitchProperties {
  /**
   * Sets or retrieves the positions, as [{ id, label, description }]. Empty shows Hand. Off. Auto, localized.
   * Default value: 
   */
  positions?: any;
  /**
   * Sets or retrieves the id of the current position, as reported by the plant. Setting it clears a pending request, whether or not it is the requested position, and raises the change event.
   * Default value: ""
   */
  value?: string;
  /**
   * Sets or retrieves how the positions are drawn: a joined row of segments; a knob with a pointer over the segments; or, above the segments, the switch a panel would carry: a toggle lever that leans to its position, a rocker whose pressed face is lit, or a slide whose knob sits at its position. The segments stay the part that is pressed and read. While a request is pending the pointer, lever, lamp or knob shows it halfway or in the pending colour.
   * Default value: segmented
   */
  appearance?: SelectorSwitchAppearance | string;
  /**
   * Determines whether a position has to be pressed twice to request it. The first press arms the position and shows it as armed; a press on a different position arms that one instead. The second press has to be a separate decision: the second click of a double-click, a press within 300 ms of the first and the repeat of a held key do not send the request. The second press has to be a second decision: the second click of a double-click or a double tap, a press within 300 ms of the first and a held key do not confirm.
   * Default value: false
   */
  confirm?: boolean;
  /**
   * Sets or retrieves how long an armed position waits for its second press, in milliseconds.
   * Default value: 5000
   */
  confirmTimeout?: number;
  /**
   * Sets or retrieves how long a request stays shown as pending before it is dropped as unanswered, in milliseconds. When it runs out the switch raises requestTimeout and says under the switch that the plant did not confirm the position.
   * Default value: 10000
   */
  pendingTimeout?: number;
  /**
   * Determines whether the switch is interlocked. An interlocked switch stays readable, shows interlockReason, drops any pending request, and raises blocked instead of positionRequest.
   * Default value: false
   */
  interlocked?: boolean;
  /**
   * Sets or retrieves why the switch will not act, shown under it while interlocked and read out when pressed.
   * Default value: ""
   */
  interlockReason?: string;
  /**
   * Sets or retrieves whether the switch is read-only. A read-only switch shows the position in force, stays focusable and readable, and takes no request.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or retrieves the name of the device the switch controls, shown above the positions and used in the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the target size. touch makes each position 52px high for a gloved hand.
   * Default value: normal
   */
  density?: SelectorSwitchDensity | string;
  /**
   * Enables or disables the component. Prefer interlocked for a switch that must not act right now, it shows the reason.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the default position names, the accessible names, the hints and the blocked message. Used in conjunction with the property locale.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
}
/**
 SelectorSwitch is a switch with a set of named positions, such as a Hand-Off-Auto selector, a duty/standby selector or a local/remote switch. The positions can be displayed as a row of segments or as a rotary knob. The current position is set by the application through the value property; pressing another position raises the positionRequest event and shows the position as pending until the application updates the value or pendingTimeout elapses. The confirm property requires a second press, and an interlocked switch shows the reason and raises the blocked event. Arrow keys move between positions and Enter or Space requests the focused one.
*/
export interface SelectorSwitch extends BaseElement, SelectorSwitchProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a position is requested. The application writes it to the plant and reports the answer through value.
	* @param event. The custom event. Custom data event was created with: ev.detail(position, from)
   *  position - The id of the position requested.
   *  from - The id of the position in force.
   */
  onPositionRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a requested position was not confirmed by the plant within pendingTimeout. The request is dropped and the switch says so.
	* @param event. The custom event. Custom data event was created with: ev.detail(position, value)
   *  position - The id of the position that was requested.
   *  value - The id of the position the plant still reports.
   */
  onRequestTimeout?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when value changes, when the plant reports a position.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, previousValue)
   *  value - The id of the position now in force.
   *  previousValue - The id of the position before.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when an interlocked switch is pressed. Nothing is requested.
	* @param event. The custom event. Custom data event was created with: ev.detail(position, reason)
   *  position - The id of the position that was pressed.
   *  reason - The interlockReason.
   */
  onBlocked?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Requests a position, as a press does. With confirm enabled, the first call arms the position and a second call within confirmTimeout sends the request. The value does not change until the application reports the new position. One request per intent: the position in force and the position already requested and not yet answered are not requested again, and false is returned. Nothing is requested while the switch is disabled, read-only or interlocked.
   * @param {string} id. The id of the position.
   * @returns {boolean}
   */
  request(id: string): boolean;
  /**
   * Returns the id of the requested position not yet confirmed by the plant, or null.
   * @returns {string}
   */
  pending(): string;
  /**
   * Rebuilds the switch from its properties.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-selector-switch"): SelectorSwitch;
        querySelector(selectors: "smart-selector-switch"): SelectorSwitch | null;
        querySelectorAll(selectors: "smart-selector-switch"): NodeListOf<SelectorSwitch>;
        getElementsByTagName(qualifiedName: "smart-selector-switch"): HTMLCollectionOf<SelectorSwitch>;
        getElementsByName(elementName: "smart-selector-switch"): NodeListOf<SelectorSwitch>;
    }
}

/**Sets or retrieves how the positions are drawn: a joined row of segments; a knob with a pointer over the segments; or, above the segments, the switch a panel would carry: a toggle lever that leans to its position, a rocker whose pressed face is lit, or a slide whose knob sits at its position. The segments stay the part that is pressed and read. While a request is pending the pointer, lever, lamp or knob shows it halfway or in the pending colour. */
export declare type SelectorSwitchAppearance = 'segmented' | 'rotary' | 'toggle' | 'rocker' | 'slide';
/**Sets or retrieves the target size. touch makes each position 52px high for a gloved hand. */
export declare type SelectorSwitchDensity = 'normal' | 'touch';
