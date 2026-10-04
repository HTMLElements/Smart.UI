import  {BaseElement, Animation} from "./smart.element"

export interface DowntimeLogProperties {
  /**
   * Sets or retrieves the stops as [{ id, machine, machineName, from, to, seconds, short, reason, comment, classifiedBy }], the shape a Scada Studio station returns from /api/downtime. to is null while the machine is still stopped. Assign a new array to update the component.
   * Default value: 
   */
  stops?: any;
  /**
   * Sets or retrieves the plant's reasons as [{ code, label, group }]. The picker shows them as large tiles, by group, in the order given.
   * Default value: 
   */
  reasons?: any;
  /**
   * Sets or retrieves the heading of the log. It is also the accessible name of the group.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves which stops are listed: the ones waiting for a reason, or all of them.
   * Default value: unclassified
   */
  view?: DowntimeLogView | string;
  /**
   * Sets or retrieves whether the stops shorter than their machine's threshold are listed and counted.
   * Default value: false
   */
  showShort?: boolean;
  /**
   * Sets or retrieves the column the stops are ordered by. The column headers set it: a second press turns the order round.
   * Default value: from
   */
  sortBy?: DowntimeLogSortBy | string;
  /**
   * Sets or retrieves which way: newest, longest or last first, or the other way.
   * Default value: desc
   */
  sortOrder?: DowntimeLogSortOrder | string;
  /**
   * Sets or retrieves how many stops are drawn at once; the rest are a "Show more" away.
   * Default value: 100
   */
  pageSize?: number;
  /**
   * Sets or retrieves whether the log only shows the stops and their reasons, with who gave them. Every button is removed.
   * Default value: false
   */
  readOnly?: boolean;
  /**
   * Sets or retrieves the id of the stop the application is recording a reason for. Its Save button waits.
   * Default value: ""
   */
  busy?: string;
  /**
   * Sets or retrieves the reason the station refused a reason. It is shown as an alert above the list and announced; the stop stays waiting for a reason. This property was called error, which is also the name of every element's logging method, so an invalid value given to any other property threw "that.error is not a function" instead of being reported. Assigning error still sets errorMessage; reading error returns the logging method, as on every other element.
   * Default value: ""
   */
  errorMessage?: string;
  /**
   * Sets or retrieves whether the log is disabled.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves whether the log can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 DowntimeLog lists every stop of a line and asks the person who was there why it stopped. The station knows when a machine stopped - its running signal went false - and only the operator knows why; the reasons come from a list the plant chose, grouped as planned and unplanned, so OEE losses have causes that add up. The stops still waiting for a reason come first and the header counts them; a stop still going counts up; stops shorter than a machine's threshold are listed only when asked for, because asking a reason for every hiccup teaches operators to pick Other. The component writes nothing: a reason raises stopClassify, and the application records it on the station with who gave it.
*/
export interface DowntimeLog extends BaseElement, DowntimeLogProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the operator gives a stop its reason. The list is not changed: the application records the reason on the station, which notes who gave it, and hands back the stops.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, reason, comment)
   *  id - The id of the stop.
   *  reason - The code of the reason.
   *  comment - What the operator added, or an empty string.
   */
  onStopClassify?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered by Export CSV, with the file's text. The component then downloads it; an application that stores the file its own way calls preventDefault().
	* @param event. The custom event. Custom data event was created with: ev.detail(csv)
   *  csv - The CSV.
   */
  onExportRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the stops are ordered by a column header.
	* @param event. The custom event. Custom data event was created with: ev.detail(sortBy, sortOrder)
   *  sortBy - The column.
   *  sortOrder - asc or desc.
   */
  onSortChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns the stops shown as CSV: machine, stopped, restarted, seconds, reason, comment and who gave it. A cell a spreadsheet would read as a formula is written as text.
   * @returns {string}
   */
  exportCsv(): string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-downtime-log"): DowntimeLog;
        querySelector(selectors: "smart-downtime-log"): DowntimeLog | null;
        querySelectorAll(selectors: "smart-downtime-log"): NodeListOf<DowntimeLog>;
        getElementsByTagName(qualifiedName: "smart-downtime-log"): HTMLCollectionOf<DowntimeLog>;
        getElementsByName(elementName: "smart-downtime-log"): NodeListOf<DowntimeLog>;
    }
}

/**Sets or retrieves which stops are listed: the ones waiting for a reason, or all of them. */
export declare type DowntimeLogView = 'unclassified' | 'all';
/**Sets or retrieves the column the stops are ordered by. The column headers set it: a second press turns the order round. */
export declare type DowntimeLogSortBy = 'from' | 'machine' | 'length' | 'reason';
/**Sets or retrieves which way: newest, longest or last first, or the other way. */
export declare type DowntimeLogSortOrder = 'asc' | 'desc';
