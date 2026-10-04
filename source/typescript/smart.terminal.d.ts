import  {BaseElement, Animation} from "./smart.element"

export interface TerminalProperties {
  /**
   * Sets or retrieves whether new lines are announced to assistive technology. Off by default and rate-limited when on. Errors are announced immediately; other lines are announced at most once every few seconds.
   * Default value: false
   */
  announce?: boolean;
  /**
   * Sets or retrieves whether ANSI SGR escape codes are rendered as colours. The eight basic foreground colours, bold and reset are supported, which is what bench instruments and serial devices emit. When disabled, the colour codes are removed. Other escape sequences - erase line, cursor moves and visibility, window titles - and control characters such as NUL and BEL are always removed, and a carriage return goes back to the start of the line, so a progress line written over itself reads as its last state.
   * Default value: false
   */
  ansiColors?: boolean;
  /**
   * Sets or retrieves whether the view follows the newest line. The view follows only while it is already scrolled to the bottom. Boolean attributes are presence-based, so set the property from script to turn it off.
   * Default value: true
   */
  autoScroll?: boolean;
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves a filter, either as plain text matched case-insensitively or as a /regex/. The filter affects the view only: a filtered-out line stays in the buffer, so clearing the filter restores the history. An incomplete regular expression falls back to a substring match while it is being typed. Lines that leave the buffer leave the view by which lines they are, so a filtered view keeps every matching line still in the buffer.
   * Default value: ""
   */
  filter?: string;
  /**
   * Sets or retrieves whether a command line is shown. Pressing Enter echoes the command as a transcript line and raises the command event. The application appends the response, because the component does not know what is connected.
   * Default value: false
   */
  interactive?: boolean;
  /**
   * Sets or retrieves how many lines the ring buffer holds. Lowering it trims the oldest immediately. Never goes below one.
   * Default value: 500
   */
  maxLines?: number;
  /**
   * Sets or retrieves whether the terminal is frozen. A paused terminal keeps what it holds and drops anything appended, and write returns false so the application knows the line was not taken. While paused the command line sends nothing: the line stays in the box, the box says why, and Enter sends it once the terminal is resumed.
   * Default value: false
   */
  paused?: boolean;
  /**
   * Sets or retrieves the prompt of the command line, which is also used as the prefix when a command is echoed.
   * Default value: "> "
   */
  prompt?: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the accessible names, the paused state and the hidden-lines note (4 keys: terminalLabel, inputLabel, paused, linesHidden). Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or retrieves how each line is stamped.
   * Default value: none
   */
  timestampFormat?: TerminalTimestampFormat | string;
  /**
   * If is set to true, the component cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Terminal displays a stream of lines, such as an instrument session or an event log, at a high rate. Lines are appended without re-rendering the existing content and kept in a ring buffer of a fixed length, so the DOM does not grow. Auto-scroll pauses while the user scrolls up to read and resumes when they scroll back to the end. ANSI colour codes are supported.
*/
export interface Terminal extends BaseElement, TerminalProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a command is entered on the command line. The component echoes the command; the application appends the response. It is not raised while the terminal is disabled or paused, nor by the Enter that ends an IME composition. Up and Down on the command line bring back the last 50 commands sent.
	* @param event. The custom event. Custom data event was created with: ev.detail(command)
   *  command - What was typed, without the prompt.
   */
  onCommand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a line is appended.
	* @param event. The custom event. Custom data event was created with: ev.detail(line, length)
   *  line - The line: { id, text, level, at }.
   *  length - How many lines the buffer now holds.
   */
  onLineAppended?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Appends one line. Returns false when the terminal is paused and the line was dropped. The text is escaped, so device output cannot inject markup.
   * @param {string} text. The line.
   * @param {string} level?. info, warn, error, success, command or response. Drives the colour. Defaults to info.
   * @returns {boolean}
   */
  write(text: string, level?: string): boolean;
  /**
   * Appends several lines with one scroll and one announcement. Accepts strings or <em>{ text, level }</em> objects.
   * @param {any} lines. The lines, oldest first.
   * @param {string} level?. Applied to any entry given as a bare string.
   * @returns {boolean}
   */
  writeMany(lines: any, level?: string): boolean;
  /**
   * Empties the buffer and the view.
   */
  clear(): void;
  /**
   * Rebuilds the whole view. Only needed after a filter or format change; appending a line does not rebuild the view.
   */
  redraw(): void;
  /**
   * Scrolls to the newest line and resumes following new lines. Intended for a "jump to end" control.
   */
  scrollToEnd(): void;
  /**
   * Returns the lines in the buffer, oldest first, as a copy that is not changed by later writes.
   * @returns {any}
   */
  snapshot(): any;
  /**
   * Returns the buffer as plain text, oldest first, including the timestamps when they are enabled, for export, a report or the clipboard.
   * @param {boolean} filtered?. Only the lines the filter currently admits.
   * @returns {string}
   */
  toText(filtered?: boolean): string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-terminal"): Terminal;
        querySelector(selectors: "smart-terminal"): Terminal | null;
        querySelectorAll(selectors: "smart-terminal"): NodeListOf<Terminal>;
        getElementsByTagName(qualifiedName: "smart-terminal"): HTMLCollectionOf<Terminal>;
        getElementsByName(elementName: "smart-terminal"): NodeListOf<Terminal>;
    }
}

/**Sets or retrieves how each line is stamped. */
export declare type TerminalTimestampFormat = 'none' | 'time' | 'datetime' | 'elapsed';
