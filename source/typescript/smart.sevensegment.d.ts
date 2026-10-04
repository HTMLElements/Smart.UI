import  {BaseElement, Animation} from "./smart.element"

export interface SevenSegmentProperties {
  /**
   * Sets or retrieves an explicit CSS colour for the segments, overriding the theme. The component applies it as the --smart-seven-segment-color variable in its own inline style and rewrites that variable at every redraw, so set the colour through this property or in a stylesheet rule.
   * Default value: ""
   */
  color?: string;
  /**
   * Sets or retrieves how many digit positions are shown. A minus sign occupies a position, as it does on a real panel meter. The component draws 1 to 32 positions; a value outside that range is held to it, a value that is not a number draws 4, and either case writes a console warning.
   * Default value: 4
   */
  digits?: number;
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves whether unused leading digits are padded with zeros instead of left blank. A counter usually shows leading zeros; a measurement usually does not.
   * Default value: false
   */
  leadingZeros?: boolean;
  /**
   * Sets or retrieves the number of decimal places. The decimal point is drawn on the digit preceding the fraction and does not consume a digit position.
   * Default value: 0
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves whether unlit segments are drawn faintly. The default is true. Boolean attributes are presence-based, so show-off-segments="false" in markup enables the option; set the property from script to disable it.
   * Default value: true
   */
  showOffSegments?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the over-range, under-range, no-reading and blank readouts and the accessible name (5 keys: overRange, underRange, noReading, blank, readout). Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
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
  /**
   * Sets or retrieves the engineering unit rendered beside the digits.
   * Default value: ""
   */
  unit?: string;
  /**
   * Sets or retrieves the displayed value: a number or a decimal string. Null, an empty string, other text and values of other types blank the display. NaN or an infinity shows dashes, the readout of a meter with no signal.
   * Default value: null
   */
  value?: any;
}
/**
 SevenSegment is a numeric display in the style of a seven-segment LED readout, for panel meters, totalizers and counters. It is rendered as SVG, so it scales to any size, and takes its colours from the theme. Unlit segments are drawn faintly. A value that does not fit in the configured digits lights the top bar of every digit, or the bottom bar when it is negative, and NaN or an infinity shows dashes.
*/
export interface SevenSegment extends BaseElement, SevenSegmentProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Returns the characters currently shown, one per digit position: blanks for padding or no value, '-' in every position for NaN or an infinity, '‾' in every position over range and '_' in every position under range. The decimal point is not part of this string.
   * @returns {string}
   */
  displayText(): string;
  /**
   * Redraws the display.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-seven-segment"): SevenSegment;
        querySelector(selectors: "smart-seven-segment"): SevenSegment | null;
        querySelectorAll(selectors: "smart-seven-segment"): NodeListOf<SevenSegment>;
        getElementsByTagName(qualifiedName: "smart-seven-segment"): HTMLCollectionOf<SevenSegment>;
        getElementsByName(elementName: "smart-seven-segment"): NodeListOf<SevenSegment>;
    }
}

