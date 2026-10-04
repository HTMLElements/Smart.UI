import  {BaseElement, Animation} from "./smart.element"

export interface AlarmGridProperties {
  /**
   * Sets or retrieves the alarm records as [{ id, tag, area, message, priority, active, acknowledged, shelvedUntil, suppressed, outOfService, timestamp }]. Only id is required. The alarm state is derived from the record, so the application updates active and acknowledged and the summary derives the state. timestamp and shelvedUntil may be epoch milliseconds, a Date or ISO 8601 text; priority may be a number or a number written as text. Flags written as the text "false", "0", "no" or "off" are false. A shelved alarm returns by itself when shelvedUntil passes - the grid sets a timer for the nearest expiry, cleared when it leaves the page. Entries that are not objects are ignored. Assign a new array to update the component; an array modified in place is deep-equal to the current one and does not trigger a redraw. When the update keeps the same alarms in the same order, the rows are patched in place, so the keyboard stays where it was; otherwise the table is rebuilt and the keyboard returns to the same alarm.
   * Default value: 
   */
  alarms?: any;
  /**
   * Sets or retrieves the order rows are presented in.
   * Default value: priority-then-time
   */
  defaultSort?: AlarmGridDefaultSort | string;
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves which alarms are shown, as { state, priority, area, tag }. state is one state name or an array of names; priority is the largest priority number to include, so 2 shows priorities 1 and 2; area is matched exactly; tag is matched as a case-insensitive substring. Filters change the rows but not counts(), which still returns the totals for the whole alarm list.
   * Default value: [object Object]
   */
  filters?: AlarmGridFilters;
  /**
   * Sets or retrieves the default duration in milliseconds for which shelve shelves an alarm. A shelved alarm returns by itself when its shelvedUntil passes, without an update from the application.
   * Default value: 1800000
   */
  shelveDuration?: number;
  /**
   * Sets or retrieves whether the counts strip is shown above the rows: the number of alarms in each state for the whole list, not the filtered view - unacknowledged always, and the returned-to-normal, acknowledged, shelved, suppressed and out-of-service counts when there are any. With no alarms it shows the empty message. The same numbers are returned by counts().
   * Default value: true
   */
  showCounts?: boolean;
  /**
   * Sets or retrieves whether the derived state has its own column. The property is read when the default columns are built, so set it before the component is initialized.
   * Default value: true
   */
  showStateColumn?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the ISA-18.2 state words (also used by the counts strip), the column headers, the new-alarm announcement, the empty list and the accessible name (17 keys: unacknowledged, acknowledged, rtnUnacknowledged, shelved, suppressed, outOfService, ..). The countsSummary key is reserved: the component does not show it. A change of locale also updates the inherited table text, such as the pager. Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or retrieves how the alarm time is written.
   * Default value: time
   */
  timestampFormat?: AlarmGridTimestampFormat | string;
  /**
   * If is set to true, the component cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 AlarmGrid is an ISA-18.2 alarm summary. It extends Table, so sorting, filtering, virtualization, column resizing and reordering, state persistence and export are inherited. Each alarm is placed in one of seven states from its condition and the operator actions, including the returned-to-normal-unacknowledged state for alarms that cleared before they were acknowledged. The priority cell carries a marker that tells priorities apart by shape as well as colour - a square for 1 (and 0), a triangle for 2, a diamond for 3, a ring for 4 and above - drawn in its priority colour only while the alarm is abnormal (ISA-101); unacknowledged rows take the text colour of their priority. Below 820 px the default columns take compact widths and the state wraps, so the message keeps its width. A new outstanding alarm is announced to assistive technology - assertively for priority 1 - with the number of new ones. Acknowledging an alarm raises an event; the alarm record is updated by the application.
*/
export interface AlarmGrid extends BaseElement, AlarmGridProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when <em>acknowledge</em> or <em>acknowledgeAll</em> is called. The grid has no acknowledge control of its own, so the application provides the button that calls them. The record is not changed: handle this event and write the acknowledgement back through the alarms property once the control system has confirmed it.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, alarm)
   *  id - The alarm's id.
   *  alarm - The alarm record.
   */
  onAcknowledge?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an alarm is taken out of or put back into service.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, outOfService)
   *  id - The alarm's id.
   *  outOfService - The requested state.
   */
  onOutOfService?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an alarm is shelved.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, shelvedUntil, duration)
   *  id - The alarm's id.
   *  shelvedUntil - When the shelf expires, as a timestamp.
   *  duration - How long the shelf is, in milliseconds.
   */
  onShelve?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered together with the event of <em>acknowledge</em>, <em>shelve</em>, <em>unshelve</em>, <em>suppress</em> and <em>outOfService</em>, so that an application can log these actions in one handler. <em>acknowledgeAll</em> raises only <em>acknowledge</em> events.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, action, state, alarm)
   *  id - The alarm's id.
   *  action - Which action was taken.
   *  state - The alarm's state at the time of the action.
   *  alarm - The alarm whose state changed.
   */
  onStateChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an alarm is suppressed by design.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, suppressed)
   *  id - The alarm's id.
   *  suppressed - The requested state.
   */
  onSuppress?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an alarm is taken back off the shelf.
	* @param event. The custom event. Custom data event was created with: ev.detail(id)
   *  id - The alarm's id.
   */
  onUnshelve?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Reports that an alarm was acknowledged. Raises the event and does not change the record; the application writes the acknowledgement to the control system.
   * @param {string | number} id. The alarm's id.
   */
  acknowledge(id: string | number): void;
  /**
   * Reports every outstanding alarm as acknowledged, with one event per alarm. Only the two unacknowledged states are outstanding; shelved, suppressed and out-of-service alarms are not affected.
   */
  acknowledgeAll(): void;
  /**
   * Returns the alarm record with the given id. Look up alarms by id rather than by row index, because the grid is sorted and filtered and a row index changes when either changes.
   * @param {string | number} id. The alarm's id.
   * @returns {any}
   */
  alarmById(id: string | number): any;
  /**
   * Returns the alarm records whose rows are selected (with selection on). Use it rather than getSelection(), which returns the table's own row keys, not the alarm ids: pass each record's id to acknowledge() or shelve().
   * @returns {any}
   */
  selectedAlarms(): any;
  /**
   * Returns the number of alarms in each state, before filtering, plus <em>outstanding</em> and <em>total</em>. The counts describe the whole alarm list, not the current view.
   * @returns {any}
   */
  counts(): any;
  /**
   * Reports that an alarm should be taken out of service or returned to service. Out of service is a maintenance decision and takes precedence over every other state.
   * @param {string | number} id. The alarm's id.
   * @param {boolean} outOfService?. Defaults to true.
   */
  outOfService(id: string | number, outOfService?: boolean): void;
  /**
   * Reports that an alarm should be shelved until a given time. Shelving is an operator decision with an expiry; suppression is a design decision without one.
   * @param {string | number} id. The alarm's id.
   * @param {number} duration?. How long, in milliseconds. Defaults to shelveDuration.
   */
  shelve(id: string | number, duration?: number): void;
  /**
   * Reports that an alarm should be suppressed by design, for a plant state in which it is not meaningful.
   * @param {string | number} id. The alarm's id.
   * @param {boolean} suppressed?. Defaults to true.
   */
  suppress(id: string | number, suppressed?: boolean): void;
  /**
   * Reports that a shelved alarm should be returned before its shelf expires.
   * @param {string | number} id. The alarm's id.
   */
  unshelve(id: string | number): void;
}

/**Sets or retrieves which alarms are shown, as <em>{ state, priority, area, tag }</em>. <em>state</em> is one state name or an array of names; <em>priority</em> is the largest priority number to include, so 2 shows priorities 1 and 2; <em>area</em> is matched exactly; <em>tag</em> is matched as a case-insensitive substring. Filters change the rows but not <em>counts()</em>, which still returns the totals for the whole alarm list. */
export interface AlarmGridFilters {
}

declare global {
    interface Document {
        createElement(tagName: "smart-alarm-grid"): AlarmGrid;
        querySelector(selectors: "smart-alarm-grid"): AlarmGrid | null;
        querySelectorAll(selectors: "smart-alarm-grid"): NodeListOf<AlarmGrid>;
        getElementsByTagName(qualifiedName: "smart-alarm-grid"): HTMLCollectionOf<AlarmGrid>;
        getElementsByName(elementName: "smart-alarm-grid"): NodeListOf<AlarmGrid>;
    }
}

/**Sets or retrieves the order rows are presented in. */
export declare type AlarmGridDefaultSort = 'priority-then-time' | 'time' | 'tag' | 'none';
/**Sets or retrieves how the alarm time is written. */
export declare type AlarmGridTimestampFormat = 'time' | 'datetime' | 'iso' | 'relative';
