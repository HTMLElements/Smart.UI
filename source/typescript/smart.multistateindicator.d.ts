import  {BaseElement, Animation} from "./smart.element"

export interface MultiStateIndicatorProperties {
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the shape of the lamp.
   * Default value: round
   */
  shape?: MultiStateIndicatorShape | string;
  /**
   * Sets or retrieves whether the label of the resolved state is rendered next to the lamp.
   * Default value: false
   */
  showLabel?: boolean;
  /**
   * Sets or retrieves the state definitions. Each entry is an object with: value - the value this state matches; label - the text shown when showLabel is enabled, also used as the accessible name; severity - one of ok, advisory, warning, critical, manual, maintenance, off, unknown, which selects a colour from the active theme (an off lamp is an empty ring with a border that keeps 3:1 contrast); color - an explicit CSS colour that overrides the severity; blink - whether the lamp blinks, as ISA-18.2 uses for a state awaiting acknowledgement.
   * Default value: 
   */
  states?: any;
  /**
   * Sets or retrieves the label used when the current value matches none of the declared states. It is empty by default, so the label comes from the unknown message ("Unknown" in English) and follows the locale, including after applyLocale. A value set here takes precedence over the message.
   * Default value: ""
   */
  unknownLabel?: string;
  /**
   * Sets or retrieves the current value. A value that arrives as text from an attribute or a JSON payload matches a state declared with a number when it is that number written in decimal ("3" matches 3; "0x1" does not), and a text value matches a text state ignoring case and surrounding spaces. Missing data matches no state: null, an empty or blank string, false, NaN, an array or an object show the unknown state (a hatched lamp, the unknown label, and the unmatched attribute) instead of the first declared state.
   * Default value: null
   */
  value?: any;
  /**
   * Sets or retrieves the quality of the value, as the Tank family takes it: good, uncertain (the lamp is dimmed), bad (hatched and outlined) or stale (faded). The lamp keeps the state it resolved but does not look live, and the quality word is added to the label and the accessible name, for example 'Running (quality bad)'.
   * Default value: good
   */
  quality?: MultiStateIndicatorQuality | string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the unknown state, the quality words and the accessible name (5 keys: unknown, indicatorLabel, qualityUncertain, qualityBad, qualityStale). Used in conjunction with the property locale; a change of locale redraws the label. The de, fr, es and zh packs in the package cover it.
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
 MultiStateIndicator is a read-only lamp that shows one of several named states, such as running, stopped, manual, fault or unknown. The states are declared with their labels and colours, and the component resolves its value against them. The state name is included in the accessible name.
*/
export interface MultiStateIndicator extends BaseElement, MultiStateIndicatorProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Returns the state definition matching a value, or null when none matches. Called without arguments it resolves the component's current value. Matching is as described for <em>value</em>: missing data matches nothing.
   * @param {any} value?. The value to resolve. Defaults to the current value.
   * @returns {any}
   */
  stateFor(value?: any): any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-multi-state-indicator"): MultiStateIndicator;
        querySelector(selectors: "smart-multi-state-indicator"): MultiStateIndicator | null;
        querySelectorAll(selectors: "smart-multi-state-indicator"): NodeListOf<MultiStateIndicator>;
        getElementsByTagName(qualifiedName: "smart-multi-state-indicator"): HTMLCollectionOf<MultiStateIndicator>;
        getElementsByName(elementName: "smart-multi-state-indicator"): NodeListOf<MultiStateIndicator>;
    }
}

/**Sets or retrieves the shape of the lamp. */
export declare type MultiStateIndicatorShape = 'round' | 'square' | 'bar';
/**Sets or retrieves the quality of the value, as the Tank family takes it: good, uncertain (the lamp is dimmed), bad (hatched and outlined) or stale (faded). The lamp keeps the state it resolved but does not look live, and the quality word is added to the label and the accessible name, for example 'Running (quality bad)'. */
export declare type MultiStateIndicatorQuality = 'good' | 'uncertain' | 'bad' | 'stale';
