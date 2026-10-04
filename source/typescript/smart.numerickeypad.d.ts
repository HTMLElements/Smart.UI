import  {BaseElement, Animation} from "./smart.element"

export interface NumericKeypadProperties {
  /**
   * Sets or retrieves the last accepted value, or the value the keypad was opened with. It is shown as the current value while a new value is typed.
   * Default value: null
   */
  value?: number;
  /**
   * Sets or retrieves the lowest value accepted. null sets no floor.
   * Default value: null
   */
  min?: number;
  /**
   * Sets or retrieves the highest value accepted. null sets no ceiling.
   * Default value: null
   */
  max?: number;
  /**
   * Sets or retrieves the maximum number of decimal places of the entry. null allows any number of decimals; 0 makes the keypad integer-only and replaces the decimal key with a clear key. A key that would exceed the precision is ignored. Values above 15 are taken as 15, the most decimal places a number holds. A step key finer than the precision moves the entry by at least one decimal place in its direction.
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves the engineering unit, shown next to the entry, the current value and the limits.
   * Default value: ""
   */
  unit?: string;
  /**
   * Sets or retrieves what is being entered, the tag and the quantity, shown above the entry and in its accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines whether the sign key is offered. Off, the key becomes a clear key.
   * Default value: true
   */
  allowNegative?: boolean;
  /**
   * Sets or retrieves the digit layout. calculator places 7 8 9 on the top row, as on an HMI keypad; phone places 1 2 3 there.
   * Default value: calculator
   */
  layout?: NumericKeypadLayout | string;
  /**
   * Determines whether the limits are shown under the entry.
   * Default value: true
   */
  showLimits?: boolean;
  /**
   * Determines whether the value being replaced stays in view while the new one is typed.
   * Default value: true
   */
  showCurrent?: boolean;
  /**
   * Sets or retrieves quick steps, for example [-10, -1, 1, 10], shown as keys that adjust the entry from the current value.
   * Default value: 
   */
  steps?: any;
  /**
   * Sets or retrieves the key size. touch makes keys 60 px with a wider gap, for a panel PC with gloves. Reflected to an attribute the stylesheet keys on.
   * Default value: normal
   */
  density?: NumericKeypadDensity | string;
  /**
   * Enables or disables the component. A disabled keypad leaves the tab order, takes no focus and raises nothing.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. Also sets the decimal separator shown on the decimal key, in the entry, the current value and the limits; the entry itself, text() and the events keep a point, and a physical keyboard types either.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the key names, the limits line and the refusal reasons. Used in conjunction with the property locale.
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
 NumericKeypad is an on-screen keypad for entering a numeric value such as a setpoint on a touch panel. It validates the entry against min and max and shows the reason when the value is out of range instead of clamping it, limits the entry to the configured precisionDigits, keeps the current value in view while the new one is typed, and provides optional step keys. Accepting the entry raises the change event. A physical keyboard can also type into the keypad while it has focus, and the touch density enlarges the keys for gloved use. The decimal separator shown is the locale's, a comma for de, fr and es, and the entry is announced to screen readers as it is typed.
*/
export interface NumericKeypad extends BaseElement, NumericKeypadProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when an entry is accepted. Raised once per entry.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, previousValue)
   *  value - The value accepted.
   *  previousValue - The value it replaces, or null.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when an entry is refused. Nothing is written.
	* @param event. The custom event. Custom data event was created with: ev.detail(text, reason)
   *  text - The entry as typed.
   *  reason - 'empty', 'notANumber', 'tooPrecise', 'belowMin' or 'aboveMax'.
   */
  onInvalid?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the entry is abandoned.
	* @param event. The custom event.    */
  onCancel: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered on every key that changes the entry.
	* @param event. The custom event. Custom data event was created with: ev.detail(text)
   *  text - The entry so far.
   */
  onInput?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Starts an entry from a value, shows it as the current value and takes focus. The first key replaces the shown value, as on a calculator.
   * @param {number} value?. The value to start from. Defaults to the value property.
   */
  open(value?: number): void;
  /**
   * Presses a key: a digit, '.', '-', 'backspace', 'clear', 'enter', 'escape', or a step given as a number. A digit beyond fifteen significant digits is ignored, as a number holds no more.
   * @param {any} key. The key.
   */
  press(key: any): void;
  /**
   * Validates the entry against the limits and the precision. If the entry is valid, sets the value and raises the change event. If it is not, the entry stays on screen, the reason is shown and the invalid event is raised. Returns whether the entry was accepted. Only something typed is accepted: with nothing typed since open, accept or cancel - a second Enter, a double click or a double tap on Enter, a held Enter - it raises nothing and returns false, and it returns false while the keypad is disabled.
   * @returns {boolean}
   */
  accept(): boolean;
  /**
   * Abandons the entry, shows the current value again and raises the cancel event. Raises nothing while the keypad is disabled.
   */
  cancel(): void;
  /**
   * Returns the reason the entry would be rejected ('empty', 'notANumber', 'tooPrecise', 'belowMin' or 'aboveMax'), or null when it would be accepted. A point typed first shows as 0. and is 'empty' until a digit follows: the zero was not typed.
   * @returns {string}
   */
  validate(): string;
  /**
   * Returns the text entered so far.
   * @returns {string}
   */
  text(): string;
  /**
   * Rebuilds the keypad.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-numeric-keypad"): NumericKeypad;
        querySelector(selectors: "smart-numeric-keypad"): NumericKeypad | null;
        querySelectorAll(selectors: "smart-numeric-keypad"): NodeListOf<NumericKeypad>;
        getElementsByTagName(qualifiedName: "smart-numeric-keypad"): HTMLCollectionOf<NumericKeypad>;
        getElementsByName(elementName: "smart-numeric-keypad"): NodeListOf<NumericKeypad>;
    }
}

/**Sets or retrieves the digit layout. calculator places 7 8 9 on the top row, as on an HMI keypad; phone places 1 2 3 there. */
export declare type NumericKeypadLayout = 'calculator' | 'phone';
/**Sets or retrieves the key size. touch makes keys 60 px with a wider gap, for a panel PC with gloves. Reflected to an attribute the stylesheet keys on. */
export declare type NumericKeypadDensity = 'normal' | 'touch';
