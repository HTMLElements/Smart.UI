import  {BaseElement, Animation} from "./smart.element"

export interface AuditTrailProperties {
  /**
   * Sets or retrieves the entries, as { seq, id, at, system, user, userName, action, record, field, oldValue, newValue, reason, signature, previousHash, hash }, in sequence. For a running feed use addEntry(), which verifies only the entry it adds.
   * Default value: 
   */
  entries?: any;
  /**
   * Sets or retrieves the columns shown, in order, from seq, at, user, action, record, field, oldValue, newValue, reason, signature and system. Empty shows all but system.
   * Default value: 
   */
  columns?: any;
  /**
   * Sets or retrieves the order by sequence: newest first, or oldest first. The Time header toggles it.
   * Default value: desc
   */
  sortDirection?: AuditTrailSortDirection | string;
  /**
   * Sets or retrieves the filter as { text, user, action, from, to }. text is searched across the entry, user and action are matched exactly, and from and to are ISO strings or epoch milliseconds. The toolbar edits the filter and raises the filterChange event.
   * Default value: [object Object]
   */
  filter?: AuditTrailFilter;
  /**
   * Determines whether the search, filters, integrity badge and export buttons are shown.
   * Default value: true
   */
  showToolbar?: boolean;
  /**
   * Determines whether the hash chain is verified and its verdict shown.
   * Default value: true
   */
  showIntegrity?: boolean;
  /**
   * Sets or retrieves the previousHash the first entry must carry, when the chain did not start at ''.
   * Default value: ""
   */
  genesis?: string;
  /**
   * Sets or retrieves the hash of an entry known to have been written - an anchor kept outside the trail, for example by the server. A hash chain verifies from its first entry to its last, so a copy with its newest entries removed is a shorter chain that is still intact; with an anchor the verdict fails when the chain does not contain this hash. Entries added after the anchor was taken do not fail it. Empty does not check.
   * Default value: ""
   */
  expectedHead?: string;
  /**
   * Sets or retrieves how many entries the trail is known to have held - an anchor kept outside the trail. The verdict fails when fewer entries are given, so removing the newest entries is detected. More entries are fine. 0 does not check.
   * Default value: 0
   */
  expectedCount?: number;
  /**
   * Determines whether entries that carry no hash at all are a failure. On (the default), a list without hashes - never chained, or with its hashes stripped - is shown as 'No hash chain - N entries cannot be verified' and integrity() returns { ok: false, reason: 'unchained' }. Off, it is shown as information and integrity() returns null, for an application whose log was never chained.
   * Default value: true
   */
  requireChain?: boolean;
  /**
   * Sets or retrieves the maximum number of rows rendered. The footer shows how many entries are not rendered; they can be reached by narrowing the filter or by exporting.
   * Default value: 500
   */
  maxRows?: number;
  /**
   * Determines whether the time column shows milliseconds.
   * Default value: false
   */
  showMilliseconds?: boolean;
  /**
   * Determines whether a 'Mark reviewed' button is shown. The button raises the reviewRequest event with the entries shown; the application records the review, with a signature if required.
   * Default value: false
   */
  showReview?: boolean;
  /**
   * Sets or retrieves the id of the selected entry, or ''.
   * Default value: ""
   */
  selected?: string;
  /**
   * Sets or retrieves the base name of a downloaded export.
   * Default value: "audit-trail"
   */
  fileName?: string;
  /**
   * Sets or retrieves the table's caption and the accessible name. Empty shows 'Audit trail'.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the target size of the toolbar controls.
   * Default value: normal
   */
  density?: AuditTrailDensity | string;
  /**
   * Enables or disables the component. A disabled viewer disables its search, filters, export and sort buttons and takes its rows out of the tab order; nothing it shows changes and it raises no event.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the column names, the action names, the verdicts, the toolbar. Used in conjunction with the property locale.
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
 AuditTrail displays audit trail entries for review, as required by 21 CFR Part 11 §11.10(e). Each entry shows the user, the timestamp with its UTC offset, the action, and for a change both the previous and the new value. The entries can be searched, filtered by user, action and time range, and exported as CSV or JSON including their hashes. When the entries carry a hash chain, the component verifies it and reports the result. The component is read-only: it does not create, edit, delete or reorder entries.
*/
export interface AuditTrail extends BaseElement, AuditTrailProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when an entry is selected by click, Enter or select().
	* @param event. The custom event. Custom data event was created with: ev.detail(entry)
   *  entry - The entry.
   */
  onEntrySelect?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the toolbar changes the filter.
	* @param event. The custom event. Custom data event was created with: ev.detail(filter)
   *  filter - { text, user, action, from, to } as applied.
   */
  onFilterChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the chain verdict changes, an intact trail replaced by a copy that breaks, or the reverse.
	* @param event. The custom event. Custom data event was created with: ev.detail(integrity, state)
   *  integrity - { ok, count, brokenAt, reason }, or null.
   *  state - 'intact', 'broken' or 'none'.
   */
  onIntegrityChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an export is downloaded. An export is itself an action that can be recorded in the audit trail.
	* @param event. The custom event. Custom data event was created with: ev.detail(format, count, fileName)
   *  format - 'csv' or 'json'.
   *  count - How many entries were exported.
   *  fileName - The file name offered.
   */
  onExport?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered by the 'Mark reviewed' button. The application records the review.
	* @param event. The custom event. Custom data event was created with: ev.detail(entries, count, filter)
   *  entries - The entries shown.
   *  count - How many.
   *  filter - The filter in force.
   */
  onReviewRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds an entry, for example from a Trail subscription that keeps the viewer up to date.
   * @param {any} entry. The entry.
   */
  addEntry(entry: any): void;
  /**
   * Returns the entries the filter lets through, in display order.
   * @returns {any}
   */
  visible(): any;
  /**
   * Returns how many entries are held, filtered or not.
   * @returns {number}
   */
  count(): number;
  /**
   * Returns the chain verification as { ok, count, brokenAt, reason }, or null when integrity is not shown, when there are no entries and no anchor, or when no entry carries a hash and requireChain is off. reason is 'link', 'hash', 'sequence' or 'missing' at the first entry that fails, 'unchained' when no entry carries a hash, 'count' when fewer entries than expectedCount are given, or 'head' when the chain does not contain expectedHead. The verdict is kept between refreshes: filtering and sorting do not re-verify, and addEntry() verifies only the entry it adds.
   * @returns {any}
   */
  integrity(): any;
  /**
   * Returns the complete trail as text, with every entry and every hash, regardless of the current filter. In CSV, a text value that a spreadsheet would run as a formula (starting with =, +, -, @, a tab or a carriage return) is prefixed with an apostrophe; numbers are written as they are. The JSON export is the exact copy that verifies.
   * @param {string} format. 'csv' or 'json'.
   * @param {any} options?. { filtered: true } for what is on screen instead.
   * @returns {string}
   */
  export(format: string, options?: any): string;
  /**
   * Downloads the export as a file and raises the export event.
   * @param {string} format. 'csv' or 'json'.
   * @param {any} options?. { filtered: true } for what is on screen instead.
   */
  download(format: string, options?: any): void;
  /**
   * Selects an entry by id and raises the entrySelect event. Pass an empty string to clear the selection.
   * @param {string} id. The entry id.
   */
  select(id: string): void;
  /**
   * Rebuilds the viewer from its properties.
   */
  redraw(): void;
}

/**Sets or retrieves the filter as <em>{ text, user, action, from, to }</em>. <em>text</em> is searched across the entry, <em>user</em> and <em>action</em> are matched exactly, and <em>from</em> and <em>to</em> are ISO strings or epoch milliseconds. The toolbar edits the filter and raises the filterChange event. */
export interface AuditTrailFilter {
}

declare global {
    interface Document {
        createElement(tagName: "smart-audit-trail"): AuditTrail;
        querySelector(selectors: "smart-audit-trail"): AuditTrail | null;
        querySelectorAll(selectors: "smart-audit-trail"): NodeListOf<AuditTrail>;
        getElementsByTagName(qualifiedName: "smart-audit-trail"): HTMLCollectionOf<AuditTrail>;
        getElementsByName(elementName: "smart-audit-trail"): NodeListOf<AuditTrail>;
    }
}

/**Sets or retrieves the order by sequence: newest first, or oldest first. The Time header toggles it. */
export declare type AuditTrailSortDirection = 'asc' | 'desc';
/**Sets or retrieves the target size of the toolbar controls. */
export declare type AuditTrailDensity = 'normal' | 'touch';
