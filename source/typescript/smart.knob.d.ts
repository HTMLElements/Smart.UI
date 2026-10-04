import  {BaseElement, Animation} from "./smart.element"

export interface KnobProperties {
  /**
   * Enables or disables the component. Disabling the knob, or making it readonly, during a drag ends the drag: nothing more is written, and under switchWhenReleased or switchUntilReleased the value goes back to where the drag began.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the accessible name of the control (knobLabel) and the quality description (qualityUncertain, qualityBad, qualityStale). Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover these keys.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or retrieves how a pointer drag changes the value: vertical - up increases, dragSensitivity pixels covering the full range; circular - turning round the centre turns the knob through the same angle; both - the first few pixels of movement decide which. Either way the drag is relative: it moves the value from where it was, so the press itself writes nothing and a tap without movement is no change. The drag belongs to the primary button of the pointer that started it; a second finger or the right button does nothing.
   * Default value: both
   */
  dragMode?: KnobDragMode | string;
  /**
   * Sets or gets the number of pixels of vertical drag that cover the full range. A larger value gives a finer adjustment.
   * Default value: 150
   */
  dragSensitivity?: number;
  /**
   * Sets or gets the angle at which the scale ends, in degrees clockwise from twelve o'clock. The value may exceed 360.
   * Default value: 495
   */
  endAngle?: number;
  /**
   * Sets or retrieves how the value is marked.
   * Default value: pointer
   */
  knobStyle?: KnobKnobStyle | string;
  /**
   * Sets or retrieves whether the value is shown under the dial. Boolean attributes are presence-based, so set the property from script to turn it off.
   * Default value: true
   */
  showValue?: boolean;
  /**
   * Sets or gets the angle at which the scale starts, in degrees clockwise from twelve o'clock. The default leaves a gap at the bottom, like the stop of a panel knob.
   * Default value: 225
   */
  startAngle?: number;
  /**
   * If is set to true, the component cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Knob is a rotary control for setting a value. It extends Tank, so min, max, value, interval, coerce, logarithmicScale, ranges, unit, precisionDigits, inverted, mechanicalAction and rightToLeft work as they do on Gauge, Slider and Tank. The unit is shown after the value only when showUnit is true, and the ranges are drawn only when showRanges is true. The readout is formatted with precisionDigits alone: scientificNotation, significantDigits and decimalSeparator are not applied. On the knob, rightToLeft swaps the Left and Right arrow keys. The component adds the rotary display and circular drag. The mechanicalAction property defines when the value is committed while the knob is turned. An aria-label written by the author names the knob; without one it is named by its knobLabel message.
*/
export interface Knob extends BaseElement, KnobProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the value changes through the pointer or the keyboard. When it fires depends on <em>mechanicalAction</em>: switchWhileDragging reports continuously, switchWhenReleased reports once on release, and switchUntilReleased is momentary: the knob takes the value while it is held and goes back on release. A press without movement changes nothing. A drag that is cancelled - the touch cancelled, the knob disabled, made readonly or removed - raises nothing it had not already reported. A value set by the application during a drag is held until the drag ends and is shown then, unless the drag committed a value of its own; under switchUntilReleased the knob returns to that value.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - The new value.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Redraws the dial.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-knob"): Knob;
        querySelector(selectors: "smart-knob"): Knob | null;
        querySelectorAll(selectors: "smart-knob"): NodeListOf<Knob>;
        getElementsByTagName(qualifiedName: "smart-knob"): HTMLCollectionOf<Knob>;
        getElementsByName(elementName: "smart-knob"): NodeListOf<Knob>;
    }
}

/**Sets or retrieves how a pointer drag changes the value: vertical - up increases, dragSensitivity pixels covering the full range; circular - turning round the centre turns the knob through the same angle; both - the first few pixels of movement decide which. Either way the drag is relative: it moves the value from where it was, so the press itself writes nothing and a tap without movement is no change. The drag belongs to the primary button of the pointer that started it; a second finger or the right button does nothing. */
export declare type KnobDragMode = 'circular' | 'vertical' | 'both';
/**Sets or retrieves how the value is marked. */
export declare type KnobKnobStyle = 'pointer' | 'dot' | 'arc';
