import  {BaseElement, Animation} from "./smart.element"

export interface StatusTileProperties {
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
   * Sets or gets the name of the reading, shown above the value, for example 'OEE', 'Feed pressure' or 'Open alarms'.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the reading. The value is not limited to numbers: 'PASS', 'Running' or a batch identifier are valid readings, and a tile holding text is sized so that the text fits. A reading that failed - NaN or an infinity, as a number or as the text 'NaN' or 'Infinity', or an object when no formatFunction is set - is shown as -- and read out as no reading, never as the words NaN, Infinity or [object Object].
   * Default value: null
   */
  value?: any;
  /**
   * Sets or gets the engineering unit, shown next to the value and included in the accessible name.
   * Default value: ""
   */
  unit?: string;
  /**
   * Sets or gets the state of the reading. The state is drawn as a marker along the leading edge rather than as a fill across the tile, so that a wall of tiles stays readable and colour is used only where it has a meaning. The static stateFor method derives the state from thresholds.
   * Default value: neutral
   */
  state?: StatusTileState | string;
  /**
   * Sets or gets the direction of the reading. The direction is written as a word in addition to the arrow, because an arrow glyph is not read correctly by screen readers.
   * Default value: none
   */
  trend?: StatusTileTrend | string;
  /**
   * Sets or gets the amount by which the reading changed, shown next to the direction with the unit after a space, for example "down 0.06 bar". Optional; an amount that is NaN, an infinity or an object is left out and only the direction is shown.
   * Default value: null
   */
  trendValue?: any;
  /**
   * Sets or gets which direction is good: a rising yield and a rising scrap rate have the same arrow and opposite meanings. Without this property the tile can show a direction but not judge it. Use neutral for a reading that is neither, such as an ambient temperature.
   * Default value: neutral
   */
  trendPolarity?: StatusTileTrendPolarity | string;
  /**
   * Sets or gets the target value of the reading, shown next to the trend. A target that is NaN, an infinity or an object is not shown.
   * Default value: null
   */
  target?: any;
  /**
   * Sets or gets a short line under the reading, for example the source, the time window or what pressing the tile does.
   * Default value: ""
   */
  footnote?: string;
  /**
   * Sets or gets the number of decimal places of a numeric reading. Values outside 0 to 20 are held to that range. Ignored when formatFunction is set and when the value is text.
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * Sets or gets a function that takes the raw value and returns the text to display. Smart.Industrial.siFormat can be used directly, so that a tile shows 4.7 kW instead of 4700.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Sets or retrieves recent history for a small chart under the reading, as an array of numbers. The series is scaled before it is drawn; the sparkline shows the shape of the history and the value of the tile shows the magnitude.
   * Default value: 
   */
  sparkline?: any;
  /**
   * Determines whether the tile is a button that can be reached with Tab, activated with Enter or Space and is announced as a button. Off by default, so that a tile that does nothing is not a tab stop.
   * Default value: false
   */
  interactive?: boolean;
  /**
   * Determines whether a change of state is announced through the shared live region. Off by default, because a wall of tiles announcing every change would not be usable; enable it for the tiles that carry an alarm.
   * Default value: false
   */
  announceChanges?: boolean;
  /**
   * Sets or gets an object specifying the strings used in the component that can be localized. Assigning the property replaces the object, so include the existing languages when adding one.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Sets or gets the language. Used together with the property messages. A numeric reading, trend amount and target are written with the decimal separator of the locale (78,4 for de, fr and es), without digit grouping; a formatFunction formats for itself.
   * Default value: "en"
   */
  locale?: string;
}
/**
 StatusTile displays one process value with its label, unit, state and trend direction, for status walls and plant overview screens. The state (ok, advisory, warning, critical or unknown) sets the colour of the tile and is included in the accessible name, so it is available to screen readers as well as visually. The value is formatted with precisionDigits.
*/
export interface StatusTile extends BaseElement, StatusTileProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when an interactive tile is pressed with the pointer or with Enter or Space. It is not raised when interactive is off.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, value, state)
   *  label - The tile's label.
   *  value - The reading.
   *  state - The tile's state.
   */
  onActivate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the state changes. The event detail contains the new state and the previous state.
	* @param event. The custom event. Custom data event was created with: ev.detail(state, oldState)
   *  state - The new state.
   *  oldState - The state before.
   */
  onStateChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Maps a reading to a state against a set of thresholds, so a screen can classify a value without a tile. Available as a static method and on the element. The thresholds are given as an object with advisory, warning and critical members and an optional direction: 'above' (the default) when a higher reading is worse, or 'below' for readings such as capability indices and yields where a lower reading is worse. The reading must be a finite number or a decimal string: null, an empty or blank string, NaN, an infinity, true or a hex string such as '0x1F' returns 'unknown', as does a missing thresholds object.
   * @param {number} value. The reading to classify.
   * @param {any} thresholds. An object of the form { advisory, warning, critical, direction }. Any threshold that is absent is skipped.
   * @returns {string}
   */
  stateFor(value: number, thresholds: any): string;
  /**
   * Redraws the tile. The tile is redrawn automatically when a property changes; call this method after modifying the sparkline array in place.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-status-tile"): StatusTile;
        querySelector(selectors: "smart-status-tile"): StatusTile | null;
        querySelectorAll(selectors: "smart-status-tile"): NodeListOf<StatusTile>;
        getElementsByTagName(qualifiedName: "smart-status-tile"): HTMLCollectionOf<StatusTile>;
        getElementsByName(elementName: "smart-status-tile"): NodeListOf<StatusTile>;
    }
}

/**Sets or gets the state of the reading. The state is drawn as a marker along the leading edge rather than as a fill across the tile, so that a wall of tiles stays readable and colour is used only where it has a meaning. The static stateFor method derives the state from thresholds. */
export declare type StatusTileState = 'neutral' | 'ok' | 'advisory' | 'warning' | 'critical' | 'unknown';
/**Sets or gets the direction of the reading. The direction is written as a word in addition to the arrow, because an arrow glyph is not read correctly by screen readers. */
export declare type StatusTileTrend = 'none' | 'up' | 'down' | 'flat';
/**Sets or gets which direction is good: a rising yield and a rising scrap rate have the same arrow and opposite meanings. Without this property the tile can show a direction but not judge it. Use neutral for a reading that is neither, such as an ambient temperature. */
export declare type StatusTileTrendPolarity = 'neutral' | 'higherIsBetter' | 'lowerIsBetter';
