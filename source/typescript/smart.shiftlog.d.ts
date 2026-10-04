import  {BaseElement, Animation} from "./smart.element"

export interface ShiftLogProperties {
  /**
   * Sets or retrieves the entries as [{ id, at, author, role, category, text, tag, correcting }], the shape a Scada Studio station returns from /api/shiftlog. correcting is the id of the entry an entry corrects; the corrected entry stays, marked as corrected. Assign a new array to update the component.
   * Default value: 
   */
  entries?: any;
  /**
   * Sets or retrieves the categories an entry can have, and the filters above the list. Each is named through the category-&lt;name&gt; message, so a plant's own category needs a message too.
   * Default value: note,handover,maintenance,quality,safety,production
   */
  categories?: any;
  /**
   * Sets or retrieves the heading of the log. It is also the accessible name of the group.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the current shift as { name, from, to }. Entries from before from are listed under Earlier shifts.
   * Default value: null
   */
  shift?: any;
  /**
   * Sets or retrieves the name shown as writing the next entry. It is only shown: the station stamps the author of the session that sends the entry.
   * Default value: ""
   */
  author?: string;
  /**
   * Sets or retrieves the category the list is filtered to; empty lists every entry.
   * Default value: ""
   */
  filter?: string;
  /**
   * Sets or retrieves whether the log only shows the entries. The box and the Correct buttons are removed: a supervisor's view.
   * Default value: false
   */
  readOnly?: boolean;
  /**
   * Sets or retrieves whether the application is storing an entry. The Add button waits while it is set.
   * Default value: false
   */
  busy?: boolean;
  /**
   * Sets or retrieves the reason the station refused an entry. When set, it is shown and announced, and the draft is put back into the box rather than lost - unless the operator has started another entry meanwhile, which is kept: the refused text then waits beside the reason, with a button that puts it back below what is in the box.
   * Default value: ""
   */
  errorMessage?: string;
  /**
   * Sets the reason the station refused an entry, by its earlier name: it sets errorMessage. Reading it returns the element's error-reporting method, which reads as the message where text is wanted; read errorMessage for the message.
   * Default value: ""
   */
  error?: string;
  /**
   * Sets or retrieves the longest entry, in characters.
   * Default value: 2000
   */
  maxLength?: number;
  /**
   * Sets or retrieves the words the entries shown must contain - in the text, the author, the tag or the category. The words are marked where they are found. The box above the list sets it as it is typed.
   * Default value: ""
   */
  search?: string;
  /**
   * Sets or retrieves the period shown: everything, this shift (from shift.from), the last 24 hours, the last 7 days.
   * Default value: all
   */
  range?: ShiftLogRange | string;
  /**
   * Sets or retrieves how many entries are drawn at once; the rest are a "Show more" away, so a year's log opens as fast as a day's.
   * Default value: 100
   */
  pageSize?: number;
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
 ShiftLog is the book on the control-room desk, kept where the screens are: what one shift needs the next to know that no tag says - that a filler jammed twice and was cleared by hand, that maintenance is coming at ten. Entries are append-only, by category, and each names who wrote it; an entry is never edited, it is corrected by a new entry that says which one it corrects, so the log stays a record of what was known when. Handover entries carry the accent and safety entries the warning edge. The component writes nothing: adding an entry raises entryAdd, and the application stores it on the station, which stamps the time and the author.
*/
export interface ShiftLog extends BaseElement, ShiftLogProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the operator adds an entry, with the Add button or Ctrl+Enter. The component does not store it: the application sends it to the station, which stamps the time and the author, and hands back the entries. The box is cleared; if the application then sets <em>error</em>, the text comes back.
	* @param event. The custom event. Custom data event was created with: ev.detail(text, category, tag, correcting)
   *  text - The text of the entry.
   *  category - Its category.
   *  tag - The tag it is about, when one was given.
   *  correcting - The id of the entry it corrects, when it is a correction.
   */
  onEntryAdd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered by Export CSV, with the file's text. The component then downloads it; an application that stores the file its own way calls preventDefault().
	* @param event. The custom event. Custom data event was created with: ev.detail(csv, count)
   *  csv - The CSV.
   *  count - The entries in it.
   */
  onExportRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the search is changed in the box.
	* @param event. The custom event. Custom data event was created with: ev.detail(search)
   *  search - The words searched for.
   */
  onSearchChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the operator filters the list by a category.
	* @param event. The custom event. Custom data event was created with: ev.detail(category)
   *  category - The category filtered to; empty for every entry.
   */
  onFilterChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns the entries shown - after the category, the search and the period - as CSV: time, author, category, tag, text and the entry each corrects. A cell a spreadsheet would read as a formula is written as text.
   * @returns {string}
   */
  exportCsv(): string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-shift-log"): ShiftLog;
        querySelector(selectors: "smart-shift-log"): ShiftLog | null;
        querySelectorAll(selectors: "smart-shift-log"): NodeListOf<ShiftLog>;
        getElementsByTagName(qualifiedName: "smart-shift-log"): HTMLCollectionOf<ShiftLog>;
        getElementsByName(elementName: "smart-shift-log"): NodeListOf<ShiftLog>;
    }
}

/**Sets or retrieves the period shown: everything, this shift (from shift.from), the last 24 hours, the last 7 days. */
export declare type ShiftLogRange = 'all' | 'shift' | 'day' | 'week';
