import  {BaseElement, Animation} from "./smart.element"

export interface BarGraphProperties {
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the accessible name and the peak marker (2 keys: barGraphLabel, peak). Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or retrieves whether the meter can be operated as a control. The meter is read-only by default and is not in the tab order, so that a meter which cannot be operated is not an empty tab stop. The property is named for the enabled state because boolean attributes are presence-based, and a property that defaulted to true could not be turned off from markup. A read-only meter has the meter role; an interactive one is a slider. A click on an interactive meter sets the value there, clamped and snapped to interval when coerce is set, and moves the display.
   * Default value: false
   */
  interactive?: boolean;
  /**
   * Sets or retrieves the rate at which a held peak falls after its hold time expires, in scale units per second. 0 drops the peak straight back to the signal; a small value makes it fall gradually, like an analogue meter, which keeps a burst of transients readable. The fall is steady, measured from the peak as it was caught, however often the value updates.
   * Default value: 0
   */
  peakDecay?: number;
  /**
   * Sets or retrieves whether the highest value reached is marked and held. Works the same set in markup or as a property, and after the meter is moved to another parent.
   * Default value: false
   */
  peakHold?: boolean;
  /**
   * Sets or gets the time in milliseconds a peak is held before it starts to fall.
   * Default value: 1500
   */
  peakHoldTime?: number;
  /**
   * Sets or gets the gap between segments in pixels.
   * Default value: 2
   */
  segmentGap?: number;
  /**
   * Sets or retrieves the number of segments the bar is divided into. A segment lights when the value passes its lower edge, so half of the scale lights exactly half of the segments. Values below 1 draw one segment and values above 500 draw 500.
   * Default value: 20
   */
  segments?: number;
  /**
   * Sets or retrieves whether the value is written beside the bar.
   * Default value: false
   */
  showValue?: boolean;
  /**
   * If is set to true, the component cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 BarGraph is a segmented level meter, such as the column of lit blocks on an audio console or a vibration monitor. It extends Tank, so min, max, value, interval, coerce, logarithmicScale, precisionDigits and inverted work as they do on Tank. The alarm ranges colour the segments while showRanges is set, the unit is written with the value while showUnit is set, orientation lays the bar vertically (the default) or horizontally, and rightToLeft reverses the Left and Right arrow keys. Tank's scientificNotation and mechanicalAction are inherited, but the bar graph does not apply them. The component adds the segmented display and peak hold, which keeps short transients visible. A lit segment in the normal range takes the process colour (--${namespace.toLowerCase()}-bar-segment-on); green, amber and red come only from ranges marked ok, warning or critical. An aria-label written by the author names the meter.
*/
export interface BarGraph extends BaseElement, BarGraphProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the value changes through a click or the keyboard. Only raised when <em>interactive</em> is set, a read-only meter reports nothing.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - The new value.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Redraws the bar.
   */
  redraw(): void;
  /**
   * Clears the held peak, for example to reset the meters after an event.
   */
  resetPeak(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-bar-graph"): BarGraph;
        querySelector(selectors: "smart-bar-graph"): BarGraph | null;
        querySelectorAll(selectors: "smart-bar-graph"): NodeListOf<BarGraph>;
        getElementsByTagName(qualifiedName: "smart-bar-graph"): HTMLCollectionOf<BarGraph>;
        getElementsByName(elementName: "smart-bar-graph"): NodeListOf<BarGraph>;
    }
}

