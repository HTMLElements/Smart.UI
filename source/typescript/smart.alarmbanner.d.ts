import  {BaseElement, Animation} from "./smart.element"

export interface AlarmBannerProperties {
  /**
   * Sets or retrieves the caption of the acknowledge button. It is empty by default, so the caption comes from the acknowledge message ("Ack" in English) and follows the locale. A value set here takes precedence over the message.
   * Default value: ""
   */
  acknowledgeLabel?: string;
  /**
   * Sets or retrieves the alarms. Each entry is an object with: id - the identifier of the alarm, returned in the events; tag - the instrument or point tag; message - the alarm text; priority - a number, or a number written as text, as in ISA-18.2: 0 and 1 critical, 2 warning, 3 and above advisory; severity - critical, warning or advisory (any case), which overrides the priority mapping and, for a record without a priority, sets its place in the order; timestamp - a Date, epoch milliseconds or a value Date can parse, shown as the time, or the date and time when it is not today; acknowledged - whether an operator has acknowledged the alarm; active - false once the condition has cleared (absent means active), so an unacknowledged alarm with active false is shown as returned to normal; shelvedUntil, suppressed, outOfService - an alarm shelved into the future, suppressed or out of service is not shown. Flags written as the text "false", "0", "no" or "off" are false. Assign a new array to update the component, or call redraw after modifying the array in place; an array that is deep-equal to the current one does not trigger a redraw.
   * Default value: 
   */
  alarms?: any;
  /**
   * Enables or disables the component. A disabled banner disables its acknowledge buttons, which leaves them out of the tab order, and raises no acknowledge event.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the text shown when there are no alarms to display. It is empty by default, so the text comes from the empty message ("No active alarms" in English) and follows the locale. A value set here takes precedence over the message.
   * Default value: ""
   */
  emptyMessage?: string;
  /**
   * Sets or retrieves the number of alarms shown at once. One row is usual for an operator screen; a larger stack suits a wall display that covers several areas.
   * Default value: 1
   */
  maxVisible?: number;
  /**
   * Sets or retrieves whether an acknowledge button is shown on unacknowledged alarms. The default is true. Boolean attributes are presence-based, so show-acknowledge="false" in markup enables the button; set the property from script to disable it.
   * Default value: true
   */
  showAcknowledge?: boolean;
  /**
   * Sets or retrieves whether the alarm timestamp is rendered. Same attribute caveat as showAcknowledge: set the property from script to turn it off.
   * Default value: true
   */
  showTimestamps?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the priority words, the acknowledge control, the returned-to-normal marker, the empty state and the accessible names (8 keys: critical, warning, advisory, acknowledge, empty, bannerLabel, acknowledgeAlarm, returned). Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
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
 AlarmBanner shows the alarms an operator should deal with next. From the alarm list it selects the alarms to display: active unacknowledged alarms first, then alarms that returned to normal before they were acknowledged, then acknowledged ones; within each, by priority, then severity, then the oldest. Shelved, suppressed and out-of-service alarms, and alarms that returned to normal and were acknowledged, are not shown (ISA-18.2). Priority 0 and 1 are critical, 2 warning, 3 and above advisory - the reading ${namespace.toLowerCase()}-hmi-shell and jqx-alarm-grid use too - and an active unacknowledged critical alarm blinks until it is acknowledged. The component raises the acknowledge event and does not modify the alarm list itself.
*/
export interface AlarmBanner extends BaseElement, AlarmBannerProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when an operator acknowledges an alarm, either from its acknowledge button or through acknowledgeAll. One press raises one event: the repeats of a held Enter or Space are ignored, and the same alarm acknowledged again within 600 ms (a double click) is not raised twice.
	* @param event. The custom event. Custom data event was created with: ev.detail(alarm)
   *  alarm - The alarm being acknowledged.
   */
  onAcknowledge?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an alarm row is clicked anywhere other than its acknowledge button, typically used to open the alarm's detail.
	* @param event. The custom event. Custom data event was created with: ev.detail(alarm)
   *  alarm - The alarm that was clicked.
   */
  onAlarmClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Raises the acknowledge event once for every unacknowledged alarm the banner would show, including alarms that returned to normal unacknowledged; shelved, suppressed and out-of-service alarms are left alone. Nothing is raised while the banner is disabled. The component does not change the alarms; the application applies the acknowledgements and returns an updated list.
   */
  acknowledgeAll(): void;
  /**
   * Redraws the banner. Only needed after the alarms array has been modified in place instead of replaced.
   */
  redraw(): void;
  /**
   * Returns the alarms the banner is currently showing, in the order shown: active unacknowledged, returned to normal unacknowledged, acknowledged; then priority, severity and age.
   * @returns {any}
   */
  visibleAlarms(): any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-alarm-banner"): AlarmBanner;
        querySelector(selectors: "smart-alarm-banner"): AlarmBanner | null;
        querySelectorAll(selectors: "smart-alarm-banner"): NodeListOf<AlarmBanner>;
        getElementsByTagName(qualifiedName: "smart-alarm-banner"): HTMLCollectionOf<AlarmBanner>;
        getElementsByName(elementName: "smart-alarm-banner"): NodeListOf<AlarmBanner>;
    }
}

