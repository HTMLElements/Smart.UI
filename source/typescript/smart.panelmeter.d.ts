import  {BaseElement, Animation} from "./smart.element"

export interface PanelMeterProperties {
  /**
   * A centre-zero movement: the needle rests in the middle of the scale and a heavier zero line is drawn there. It sets nothing on the scale itself, which is min and max, it marks the rest position.
   * Default value: false
   */
  centerZero?: boolean;
  /**
   * When the coerce property is set to true, any value provided will automatically be adjusted to the nearest valid value based on the defined interval. This ensures that the resulting value always conforms to the step size specified by the interval property, even if the original input does not exactly match an allowed value.
   * Default value: false
   */
  coerce?: boolean;
  /**
   * Determines whether custom tick marks, which may be placed at uneven intervals, are displayed on the plot. The specific positions of these custom ticks are specified using the customTicks property. This option allows you to override the default tick placement and use your own set of tick values.
   * Default value: false
   */
  customInterval?: boolean;
  /**
   * When customInterval is enabled, you can define a specific list of tick values to be displayed on the plot. If coerce is set to true, any input value will automatically snap to the nearest tick from this predefined list, ensuring that only these tick values can be selected or represented.
   * Default value: 0,50,100
   */
  customTicks?: Array<number | Date>;
  /**
   * The inertia of the coil, in milliseconds for the needle to settle. 0 is an undamped movement. The value is never animated, only the needle: a reader of the property gets the reading, and the digital display shows it undamped, so the instrument cannot show two different values for the same instant.
   * Default value: 0
   */
  damping?: number;
  /**
   * Specifies the format of the date labels that appear when the mode property is set to 'date'. This determines how dates are displayed on the labels (e.g., 'YYYY-MM-DD', 'MM/DD/YYYY').
   * Default value: "d"
   */
  dateLabelFormatString?: string;
  /**
   * Sets or gets the character written between the integer and the fractional part of a number, such as "." or ",", in the readout, the scale labels, the setpoint title and the accessible text. Left at "." it follows locale: a German, French or Spanish locale writes a comma, as Intl.NumberFormat does for that locale; any other character is used as set. Digits are never grouped. A value given as a string is always read with a period.
   * Default value: "."
   */
  decimalSeparator?: string;
  /**
   * Determines whether the element is interactive or not. When enabled, the element responds to user actions (such as clicks or keyboard input); when disabled, the element appears inactive and does not accept user interaction.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Lets the reading be set by pointer or keyboard. A meter reads by default: it has role="meter" and is out of the tab order. With interactive on, it has role="slider", takes focus, and an arrow-key step starts from the end stop when the reading is off the scale.
   * Default value: false
   */
  interactive?: boolean;
  /**
   * "When the 'coerce' property is set to 'true', all input values are automatically adjusted to fall within the specified interval. Any value outside the interval will be coerced to the nearest boundary value of the interval."
   * Default value: 1
   */
  interval?: number;
  /**
   * Specifies the orientation of the gauge. When set to true, the starting and ending positions of the gauge are reversed, causing the gauge to be displayed in the opposite direction. If false, the gauge follows its default direction. Use this option to customize the gauge's flow based on your application's requirements.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * What is being measured, screened on the plate at the left of the movement. It is used as the accessible name of the component.
   * Default value: ""
   */
  label?: string;
  /**
   * A callback function that allows you to customize the formatting of the values shown within the gauge labels. This function receives the raw value as an argument and should return the formatted string to be displayed. Use this to control the appearance, number formatting, units, or localization of label values inside the gauge.
   * Default value: null
   */
  labelFormatFunction?: any;
  /**
   * Specifies whether the labels within the element are displayed or hidden. When set to true, the labels inside the element are visible; when set to false, the labels are not shown. This property allows you to control the display of label text within the element.
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
   * Sets or gets the top of the scale. A reading above it is kept as written: the needle rests against the right end stop and OVER is shown on the plate.
   * Default value: 100
   */
  max?: number | Date;
  /**
   * Specifies the event or condition that triggers the update of the element’s value, such as on user input, when focus is lost, or after a specific action occurs. This setting controls how and when changes to the element's value are recognized and processed in the application.
   * Default value: switchWhileDragging
   */
  mechanicalAction?: DragMechanicalAction | string;
  /**
   * Specifies or retrieves an object containing the text strings displayed by the widget, allowing for customization and localization of all user-facing messages. This property works together with the locale property to support multiple languages by providing translated strings for different locales. Use this to ensure the widget's interface is fully adaptable to users' language preferences. The panel meter's own keys are panelMeterLabel, setpointIs, overRange, underRange, overRangeFlag, underRangeFlag, noReading, noReadingFlag, qualityUncertain, qualityBad, qualityStale, uncertainFlag, badFlag and staleFlag.
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
   * Sets or gets the bottom of the scale. A reading below it is kept as written: the needle rests against the left end stop and UNDER is shown on the plate.
   * Default value: 0
   */
  min?: number | Date;
  /**
   * Draws the anti-parallax mirror band under the scale: the strip an operator lines the needle up with its own reflection in, which is how a moving-coil meter is read accurately.
   * Default value: false
   */
  mirror?: boolean;
  /**
   * Specifies whether the element is configured to handle numerical values or date values, enabling appropriate functionality and validation for each data type.
   * Default value: numeric
   */
  mode?: ScaleMode | string;
  /**
   * Specifies or retrieves the element’s name attribute, which serves as the identifier for the element’s value when form data is submitted to the server. This name is used as the key in the name-value pair sent with the form submission, enabling the server-side application to access the corresponding data.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets or gets how many digits are shown after the decimal point in the readout, the setpoint title and the accessible text. Values outside 0 to 20 are held to that range. null shows the reading as written, to at most twelve significant digits, so an arrow-key step never shows binary noise such as 0.30000000000000004.
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves the quality of the reading: good, uncertain, bad or stale. Reflected to an attribute so the stylesheet can show it: the needle is dimmed for uncertain and stale and greyed over a hatched plate for bad, and the word UNCERTAIN, BAD or STALE is printed at the top left of the plate so it is legible without colour. The scale and its numbers are never dimmed. The quality is also added to the accessible name, for example "Bus, quality bad". A reading whose quality is not good must never look, or read out, as though it were. Carried onto the element by JQX.Industrial.Connect bindings.
   * Default value: good
   */
  quality?: PanelMeterQuality | string;
  /**
   * This property is an array containing multiple objects, where each object defines a distinct range. Each range represents a colored area characterized by its own specific size and properties, such as start and end values, color, and label. These ranges allow you to visually differentiate segments according to predefined criteria on a graphical interface or data visualization component.
   * Default value: 
   */
  ranges?: {startValue?: number | Date, endValue?: number | Date, className?: string}[];
  /**
   * When the element is set to read-only, users are unable to modify its value or content; they can view the information but cannot interact with or edit the element in any way.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets whether the Left and Right arrow keys are swapped for a right-to-left language, such as Arabic or Hebrew, when the meter is interactive. A CSS direction of rtl on the component has the same effect. The property does not mirror the drawing.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the data type used for the gauge’s value and defines the corresponding scale (e.g., linear, logarithmic). This setting ensures that input values are interpreted correctly and displayed with the appropriate measurement scale on the gauge.
   * Default value: floatingPoint
   */
  scaleType?: ScaleType | string;
  /**
   * Specifies whether numerical values should be displayed using scientific notation (e.g., 1.23e+4) instead of standard decimal formatting. Set to true to enable scientific notation, or false to display numbers in regular decimal form.
   * Default value: false
   */
  scientificNotation?: boolean;
  /**
   * The value the red set pointer is clipped to on the scale plate. null for none.
   * Default value: null
   */
  setpoint?: number;
  /**
   * This property determines whether the gauge’s range indicators are displayed on the gauge component. When set to true, the range segments (such as colored bands or sections representing value intervals) will be visible on the gauge; when set to false, these range indicators will be hidden.
   * Default value: false
   */
  showRanges?: boolean;
  /**
   * Draws the set pointer.
   * Default value: false
   */
  showSetpoint?: boolean;
  /**
   * Prints the unit on the plate at the right of the movement and after the digital reading. It is on by default: an instrument whose plate does not say what it measures cannot be read.
   * Default value: true
   */
  showUnit?: boolean;
  /**
   * Shows the digital reading under the case, at the precision set by precisionDigits. It is never damped, and it shows -- when there is no reading.
   * Default value: false
   */
  showValue?: boolean;
  /**
   * Calculates the number of significant digits present in a given number. This property is relevant only when the scaleType is set to 'integer', ensuring that the digit count pertains exclusively to whole numbers, not decimals or other formats.
   * Default value: null
   */
  significantDigits?: number | null;
  /**
   * How far the needle travels, in degrees. A moving-coil movement swings about 90 to 120 degrees; a scale wider than that is a dial, which is what the Gauge draws.
   * Default value: 100
   */
  sweepAngle?: number;
  /**
   * Sets or retrieves the visual theme applied to the element, allowing you to customize or query its overall appearance—such as colors, backgrounds, and style variations—to match different design schemes.
   * Default value: ""
   */
  theme?: string;
  /**
   * Controls whether the ticks are displayed or hidden on the axis. If set to true, ticks will be visible; if false, ticks will be hidden. This option allows you to toggle the tick marks for improved chart customization.
   * Default value: minor
   */
  ticksVisibility?: TicksVisibility | string;
  /**
   * Specifies whether the element can receive keyboard focus. When set to true, the element can be focused programmatically or via user interaction (such as using the Tab key); when set to false, the element will be excluded from the tab order and cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the unit of the reading, such as bar or °C. It is printed on the scale plate and after the digital reading while showUnit is set. Empty by default, so nothing is printed until a unit is given.
   * Default value: ""
   */
  unit?: string;
  /**
   * Provides a way to retrieve or assign the unlockKey property, which is a unique code required to activate or gain access to the product's full features. Use this property to securely manage the product's access control.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Not applied by the panel meter: the reading is never clamped to min and max; a reading past either end is shown as OVER or UNDER.
   * Default value: strict
   */
  validation?: Validation | string;
  /**
   * Sets or retrieves the reading, as a number or a decimal string, in the unit of the scale. It is kept as written and never clamped: a reading past min or max pins the needle against that end stop, raises the OVER or UNDER flag on the plate and is read out as over range or under range, and the read-only offScale getter returns 'over', 'under' or ''. A value that is not a finite number - null, NaN, an infinity, an empty or non-numeric string such as '0x1F' - is no reading: the needle is removed, the case is dashed, NO DATA is shown on the plate, the readout shows --, and aria-valuenow is removed. With coerce and customInterval, the reading is snapped to the interval.
   * Default value: 0
   */
  value?: string | number | Date;
  /**
   * Gets or sets the word length used for values. This property is only applicable when scaleType is set to 'integer'; it has no effect for other scale types.
   * Default value: int32
   */
  wordLength?: WordLength | string;
}
/**
 PanelMeter draws the moving-coil instrument screwed into the front of a rack: a rectangular case, a shallow arc of scale across the top of it and a long needle swinging from a pivot near the bottom. It is not a gauge with its arc cut down; the geometry exists because the pointer is a physical arm, and with it come the things a dial has no use for: the anti-parallax mirror band, end stops that pin the needle and raise an over-range flag while the reading is still reported, the damping of the coil, and a centre-zero movement. It extends the scale engine, so logarithmic scales, units, precision, alarm bands and reading quality behave as they do on the gauge, the thermometer and the knob. It does not clamp the reading: a value past either end of the scale pins the needle against that stop and raises OVER or UNDER on the plate, and a value that is not a finite number, such as null or NaN, removes the needle and shows NO DATA. The whole face is drawn in one viewBox, so it scales to any size and prints at any resolution.
*/
export interface PanelMeter extends BaseElement, PanelMeterProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the reading is changed through the component, which only happens when interactive is enabled.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - The new reading.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Redraws the face.
   */
  refresh(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-panel-meter"): PanelMeter;
        querySelector(selectors: "smart-panel-meter"): PanelMeter | null;
        querySelectorAll(selectors: "smart-panel-meter"): NodeListOf<PanelMeter>;
        getElementsByTagName(qualifiedName: "smart-panel-meter"): HTMLCollectionOf<PanelMeter>;
        getElementsByName(elementName: "smart-panel-meter"): NodeListOf<PanelMeter>;
    }
}

/**Specifies whether the labels within the element are displayed or hidden. When set to true, the labels inside the element are visible; when set to false, the labels are not shown. This property allows you to control the display of label text within the element. */
export declare type LabelsVisibility = 'all' | 'endPoints' | 'none';
/**Specifies the event or condition that triggers the update of the element’s value, such as on user input, when focus is lost, or after a specific action occurs. This setting controls how and when changes to the element's value are recognized and processed in the application. */
export declare type DragMechanicalAction = 'switchUntilReleased' | 'switchWhenReleased' | 'switchWhileDragging';
/**Specifies whether the element is configured to handle numerical values or date values, enabling appropriate functionality and validation for each data type. */
export declare type ScaleMode = 'date' | 'numeric';
/**Sets or retrieves the quality of the reading: good, uncertain, bad or stale. Reflected to an attribute so the stylesheet can show it: the needle is dimmed for uncertain and stale and greyed over a hatched plate for bad, and the word UNCERTAIN, BAD or STALE is printed at the top left of the plate so it is legible without colour. The scale and its numbers are never dimmed. The quality is also added to the accessible name, for example "Bus, quality bad". A reading whose quality is not good must never look, or read out, as though it were. Carried onto the element by JQX.Industrial.Connect bindings. */
export declare type PanelMeterQuality = 'good' | 'uncertain' | 'bad' | 'stale';
/**Specifies the data type used for the gauge’s value and defines the corresponding scale (e.g., linear, logarithmic). This setting ensures that input values are interpreted correctly and displayed with the appropriate measurement scale on the gauge. */
export declare type ScaleType = 'floatingPoint' | 'integer';
/**Controls whether the ticks are displayed or hidden on the axis. If set to true, ticks will be visible; if false, ticks will be hidden. This option allows you to toggle the tick marks for improved chart customization. */
export declare type TicksVisibility = 'major' | 'minor' | 'none';
/**Not applied by the panel meter: the reading is never clamped to min and max; a reading past either end is shown as OVER or UNDER. */
export declare type Validation = 'interaction' | 'strict';
/**Gets or sets the word length used for values. This property is only applicable when scaleType is set to 'integer'; it has no effect for other scale types. */
export declare type WordLength = 'int8' | 'int16' | 'int32' | 'int64' | 'uint8' | 'uint16' | 'uint32' | 'uint64';
