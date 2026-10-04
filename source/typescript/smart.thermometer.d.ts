import  {BaseElement, Animation} from "./smart.element"

export interface ThermometerProperties {
  /**
   * Draws the reservoir at the foot of the stem. Set it to false for an instrument drawn into a panel cut-out, where the bulb sits behind the fascia. Boolean attributes are presence-based, so bulb="false" in markup leaves the bulb on; set the property from script to turn it off.
   * Default value: true
   */
  bulb?: boolean;
  /**
   * When true, the reading is snapped to the nearest step of interval, counted from min. It takes effect only when customInterval is true.
   * Default value: false
   */
  coerce?: boolean;
  /**
   * Gives the column and the bulb the colour of the alarm band the reading has reached, so the liquid carries the severity. Requires ranges and showRanges.
   * Default value: false
   */
  colorByRange?: boolean;
  /**
   * When true, interval sets the spacing of the major marks, the step of the arrow keys and the grid coerce snaps to. When false, the scale picks a round spacing that gives about eight major marks, and an arrow key moves a hundredth of the scale.
   * Default value: false
   */
  customInterval?: boolean;
  /**
   * Reserved: the component does not apply it yet. The marks stand at round values of the scale, or every interval when customInterval is true.
   * Default value: 0,50,100
   */
  customTicks?: Array<number | Date>;
  /**
   * Reserved: the component does not apply it yet. The scale is always numeric.
   * Default value: "d"
   */
  dateLabelFormatString?: string;
  /**
   * Sets or gets the character written between the integer and the fractional part of a number, such as "." or ",", in the readout, the tick labels, the marker titles and the accessible text. Left at "." it follows locale: a German, French or Spanish locale writes a comma, as Intl.NumberFormat does for that locale; any other character is used as set. Digits are never grouped. A value given as a string is always read with a period.
   * Default value: "."
   */
  decimalSeparator?: string;
  /**
   * Determines whether the element is interactive or not. When enabled, the element responds to user actions (such as clicks or keyboard input); when disabled, the element appears inactive and does not accept user interaction.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Lets the reading be set by pointer or keyboard. A thermometer reads by default: it has role="meter" and is out of the tab order. With interactive on, it has role="slider" and takes focus.
   * Default value: false
   */
  interactive?: boolean;
  /**
   * Sets or gets the spacing of the major marks, the step of the arrow keys and the grid coerce snaps to, in the unit of the scale. It takes effect only when customInterval is true.
   * Default value: 1
   */
  interval?: number;
  /**
   * Specifies the orientation of the gauge. When set to true, the starting and ending positions of the gauge are reversed, causing the gauge to be displayed in the opposite direction. If false, the gauge follows its default direction. Use this option to customize the gauge's flow based on your application's requirements.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * The name of what is being measured. It is used as the accessible name of the component.
   * Default value: ""
   */
  label?: string;
  /**
   * Reserved: the component does not apply it yet. The mark labels are written at the precision their spacing needs, with decimalSeparator.
   * Default value: null
   */
  labelFormatFunction?: any;
  /**
   * Sets or gets which labels of the major marks are drawn: all of them, the two at the ends of the scale, or none.
   * Default value: all
   */
  labelsVisibility?: LabelsVisibility | string;
  /**
   * Specifies or retrieves the current locale setting, typically defined as a language and regional code (e.g., "en-US" for U.S. English). This property works together with the messages property to determine which localized message set is displayed, enabling proper language and formatting support for users based on their selected locale.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify how localized strings are structured or displayed before they are delivered to your application, enabling support for advanced formatting, variable interpolation, or context-specific adaptations.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Controls whether the element displays data using a logarithmic scale. When enabled, values are plotted on a logarithmic axis, which is useful for visualizing data that spans several orders of magnitude. When disabled, a standard linear scale is used.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Sets or gets the top of the scale. A reading above it is kept as written: the column stands at the top of the stem and OVER is shown on the bulb.
   * Default value: 100
   */
  max?: number | Date;
  /**
   * Reserved: the component does not apply it yet. With interactive on, a press on the stem sets the reading at once and raises change; the column is not dragged.
   * Default value: switchWhileDragging
   */
  mechanicalAction?: DragMechanicalAction | string;
  /**
   * Specifies or retrieves an object containing the text strings displayed by the widget, allowing for customization and localization of all user-facing messages. This property works together with the locale property to support multiple languages by providing translated strings for different locales. The thermometer's own keys are thermometerLabel, highest, lowest, setpointIs, alsoReads, noConversion, overRange, underRange, overRangeFlag, underRangeFlag, noReading, noReadingFlag, qualityUncertain, qualityBad, qualityStale, uncertainFlag, badFlag and staleFlag.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "significantPrecisionDigits": ": the properties significantDigits and precisionDigits cannot be set at the same time.",
   *     "invalidMinOrMax": " value. Max cannot be lower than Min.",
   *     "noInteger": ": precisionDigits could be set only on \"floatingPoint\" scaleType."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the bottom of the scale. A reading below it is kept as written: the column stands at the foot of the stem and UNDER is shown on the bulb.
   * Default value: 0
   */
  min?: number | Date;
  /**
   * Reserved: the component does not apply it yet. The scale is always numeric.
   * Default value: numeric
   */
  mode?: ScaleMode | string;
  /**
   * Reserved: the component does not apply it yet. The thermometer has no form field, so the reading is not submitted with a form.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets or gets how many digits are shown after the decimal point in the readout, the marker titles and the accessible text. null shows the reading as written, to at most twelve significant digits.
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves the quality of the reading: good, uncertain, bad or stale. Reflected to an attribute so the stylesheet can show it: the column and the bulb are hatched for bad and dimmed for uncertain and stale, and the word UNCERTAIN, BAD or STALE is shown on the bulb so it is legible without colour. The quality is also added to the accessible name, for example "Reactor R-101, quality bad". A reading whose quality is not good must never look, or read out, as though it were. Carried onto the element by JQX.Industrial.Connect bindings.
   * Default value: good
   */
  quality?: ThermometerQuality | string;
  /**
   * Sets or gets the alarm bands, as objects with startValue, endValue and className; the stylesheet colours each band by its class. With showRanges the bands are painted along the stem behind the column, and colorByRange gives the column and the bulb the class of the band the reading is in.
   * Default value: 
   */
  ranges?: {startValue?: number | Date, endValue?: number | Date, className?: string}[];
  /**
   * When the element is set to read-only, users are unable to modify its value or content; they can view the information but cannot interact with or edit the element in any way.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets whether the Left and Right arrow keys are swapped for a right-to-left language, such as Arabic or Hebrew. A CSS direction of rtl on the component has the same effect. The property does not mirror the drawing.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Sets or gets which side of the stem carries the scale. When secondaryUnit is set, the second scale takes the other side.
   * Default value: near
   */
  scalePosition?: ThermometerScalePosition | string;
  /**
   * Reserved: the component does not apply it yet. The reading is not rounded to an integer; use precisionDigits to set the digits shown.
   * Default value: floatingPoint
   */
  scaleType?: ScaleType | string;
  /**
   * Reserved: the component does not apply it yet. Numbers are written in decimal form.
   * Default value: false
   */
  scientificNotation?: boolean;
  /**
   * Draws a second scale on the other side in another temperature unit. It is ticked at round values of its own unit and placed by converting each mark back, so the two scales do not line up, exactly as on a dual-scale instrument. It requires the unit property to be a temperature the component recognises: °C, °F or K. Asking for a second unit is a request for a second scale, so it takes the side the first one is not on whatever scalePosition says; scalePosition: none draws no scales at all.
   * Default value: none
   */
  secondaryUnit?: ThermometerSecondaryUnit | string;
  /**
   * The temperature the process was asked for. null for an instrument that is only watching.
   * Default value: null
   */
  setpoint?: number;
  /**
   * Draws the maximum and minimum markers, at the highest and lowest reading since resetExtremes() was last called, as a max-min thermometer does.
   * Default value: false
   */
  showExtremes?: boolean;
  /**
   * This property determines whether the gauge’s range indicators are displayed on the gauge component. When set to true, the range segments (such as colored bands or sections representing value intervals) will be visible on the gauge; when set to false, these range indicators will be hidden.
   * Default value: false
   */
  showRanges?: boolean;
  /**
   * Draws the setpoint marker across the stem.
   * Default value: false
   */
  showSetpoint?: boolean;
  /**
   * Prints the unit above the scale and after the digital reading. It is on by default: a temperature without its unit does not say whether 40 is a warm day or a cool oven.
   * Default value: true
   */
  showUnit?: boolean;
  /**
   * Shows the digital reading below the instrument, at the precision set by precisionDigits, or -- when there is no reading.
   * Default value: false
   */
  showValue?: boolean;
  /**
   * Reserved: the component does not apply it yet. Use precisionDigits to set the digits shown.
   * Default value: null
   */
  significantDigits?: number | null;
  /**
   * Sets or retrieves the visual theme applied to the element, allowing you to customize or query its overall appearance—such as colors, backgrounds, and style variations—to match different design schemes.
   * Default value: ""
   */
  theme?: string;
  /**
   * Reserved: the component does not apply it yet. The ticks are always drawn on the scale beside the stem.
   * Default value: scale
   */
  ticksPosition?: TicksPosition | string;
  /**
   * Sets or gets which ticks the scale draws: the major ticks only, the major and the minor ticks, or none.
   * Default value: minor
   */
  ticksVisibility?: TicksVisibility | string;
  /**
   * When true, the component stays out of the tab order even when interactive is on. A thermometer that is not interactive is never in the tab order.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * The unit the scale is written in. It is a temperature by default rather than the scale engine's kilograms, and its value decides what secondaryUnit can convert from: °C, °F or K.
   * Default value: "°C"
   */
  unit?: string;
  /**
   * Provides a way to retrieve or assign the unlockKey property, which is a unique code required to activate or gain access to the product's full features. Use this property to securely manage the product's access control.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Reserved: the component does not apply it yet. The reading is never clamped to min and max; a reading past either end is shown as OVER or UNDER.
   * Default value: strict
   */
  validation?: Validation | string;
  /**
   * Sets or retrieves the reading, as a number or a numeric string, in the unit of the scale. It is kept as written: a reading past min or max pins the column at that end and shows UNDER or OVER. A value that is not a finite number, such as null, NaN or an empty string, is shown as no reading: an empty stem, -- in the readout and NO DATA on the bulb. With coerce and customInterval, the reading is snapped to the interval.
   * Default value: 0
   */
  value?: string | number | Date;
  /**
   * Reserved: the component does not apply it yet.
   * Default value: int32
   */
  wordLength?: WordLength | string;
}
/**
 Thermometer shows a temperature as the instrument that measures it: a bulb that always holds the liquid, a capillary stem above it and a column standing at the reading. It carries what a thermometer carries and a level indicator does not: a second scale in another temperature unit, ticked at round values of its own unit; the maximum and minimum reached since the memory was last reset; a setpoint marker; and alarm bands the column and the bulb can take their colour from. It extends the scale engine, so logarithmic scales, units, precision, inversion and reading quality behave as they do on the gauge, the slider and the knob. It does not clamp the reading: a value past either end of the scale pins the column at that end and shows OVER or UNDER on the bulb, and a value that is not a finite number, such as null or NaN, shows NO DATA on the bulb, with an empty stem. Everything is placed as a percentage of the stem, so the component needs no measurement and survives any resize, zoom or print.
*/
export interface Thermometer extends BaseElement, ThermometerProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the reading is changed through the component, which only happens when interactive is enabled.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - The new reading.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when the maximum and minimum memory is reset.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - The reading both markers were set to.
   */
  onExtremesReset?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Puts the maximum and minimum markers back on the current reading, as the pin on a max-min thermometer does. Raises the extremesReset event.
   */
  resetExtremes(): void;
  /**
   * Redraws the instrument.
   */
  refresh(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-thermometer"): Thermometer;
        querySelector(selectors: "smart-thermometer"): Thermometer | null;
        querySelectorAll(selectors: "smart-thermometer"): NodeListOf<Thermometer>;
        getElementsByTagName(qualifiedName: "smart-thermometer"): HTMLCollectionOf<Thermometer>;
        getElementsByName(elementName: "smart-thermometer"): NodeListOf<Thermometer>;
    }
}

/**Sets or gets which labels of the major marks are drawn: all of them, the two at the ends of the scale, or none. */
export declare type LabelsVisibility = 'all' | 'endPoints' | 'none';
/**Reserved: the component does not apply it yet. With interactive on, a press on the stem sets the reading at once and raises change; the column is not dragged. */
export declare type DragMechanicalAction = 'switchUntilReleased' | 'switchWhenReleased' | 'switchWhileDragging';
/**Reserved: the component does not apply it yet. The scale is always numeric. */
export declare type ScaleMode = 'date' | 'numeric';
/**Sets or retrieves the quality of the reading: good, uncertain, bad or stale. Reflected to an attribute so the stylesheet can show it: the column and the bulb are hatched for bad and dimmed for uncertain and stale, and the word UNCERTAIN, BAD or STALE is shown on the bulb so it is legible without colour. The quality is also added to the accessible name, for example "Reactor R-101, quality bad". A reading whose quality is not good must never look, or read out, as though it were. Carried onto the element by JQX.Industrial.Connect bindings. */
export declare type ThermometerQuality = 'good' | 'uncertain' | 'bad' | 'stale';
/**Sets or gets which side of the stem carries the scale. When secondaryUnit is set, the second scale takes the other side. */
export declare type ThermometerScalePosition = 'near' | 'far' | 'both' | 'none';
/**Reserved: the component does not apply it yet. The reading is not rounded to an integer; use precisionDigits to set the digits shown. */
export declare type ScaleType = 'floatingPoint' | 'integer';
/**Draws a second scale on the other side in another temperature unit. It is ticked at round values of its own unit and placed by converting each mark back, so the two scales do not line up, exactly as on a dual-scale instrument. It requires the unit property to be a temperature the component recognises: °C, °F or K. Asking for a second unit is a request for a second scale, so it takes the side the first one is not on whatever scalePosition says; scalePosition: none draws no scales at all. */
export declare type ThermometerSecondaryUnit = 'none' | 'celsius' | 'fahrenheit' | 'kelvin';
/**Reserved: the component does not apply it yet. The ticks are always drawn on the scale beside the stem. */
export declare type TicksPosition = 'scale' | 'track';
/**Sets or gets which ticks the scale draws: the major ticks only, the major and the minor ticks, or none. */
export declare type TicksVisibility = 'major' | 'minor' | 'none';
/**Reserved: the component does not apply it yet. The reading is never clamped to min and max; a reading past either end is shown as OVER or UNDER. */
export declare type Validation = 'interaction' | 'strict';
/**Reserved: the component does not apply it yet. */
export declare type WordLength = 'int8' | 'int16' | 'int32' | 'int64' | 'uint8' | 'uint16' | 'uint32' | 'uint64';
