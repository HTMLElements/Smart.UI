import  {BaseElement, Animation} from "./smart.element"

export interface GaugeProperties {
  /**
   * Specifies the style or format of the gauge's indicator, such as a needle, bar, or marker, which visually represents the current value on the gauge.
   * Default value: needle
   */
  analogDisplayType?: GaugeAnalogDisplayType | string;
  /**
   * Configures or retrieves the current animation mode. When this property is set to 'none', all animations are disabled, resulting in static content with no animated transitions or effects. Setting a different value enables animation according to the specified mode.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Defines or retrieves the duration of the gauge's animation effect, measured in milliseconds. This property only applies when the animation setting is enabled (i.e., its value is not 'none'). If animation is set to 'none', this duration has no effect.
   * Default value: 300
   */
  animationDuration?: number;
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
   * Specifies the format of the date labels that appear when the mode property is set to 'date'. This determines how dates are displayed on the labels (e.g., 'YYYY-MM-DD', 'MM/DD/YYYY').
   * Default value: "d"
   */
  dateLabelFormatString?: string;
  /**
   * Specifies or retrieves the character used as the decimal separator in numeric values. This property allows you to define which character (such as "." or ",") separates the integer part from the fractional part in numbers when displaying or parsing numeric data.
   * Default value: "".""
   */
  decimalSeparator?: string;
  /**
   * Determines whether the element's content is shown or hidden on the digital interface. When enabled, the element is visible to users; when disabled, the element is not displayed on the screen.
   * Default value: false
   */
  digitalDisplay?: boolean;
  /**
   * Specifies the placement of the digital display within the element, allowing you to control its alignment (e.g., top, bottom, left, right, or center) relative to the element’s boundaries.
   * Default value: bottom
   */
  digitalDisplayPosition?: GaugeDigitalDisplayPosition | string;
  /**
   * Determines whether the element is interactive or not. When enabled, the element responds to user actions (such as clicks or keyboard input); when disabled, the element appears inactive and does not accept user interaction.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Callback function that enables custom rendering of the needle element when using the 'analogDisplayType' setting. This function is called during the drawing process, allowing you to define the appearance and behavior of the needle beyond the default rendering. Only applicable when the display type is set to 'analog'.
   * Default value: null
   */
  drawNeedle?: any;
  /**
   * Defines or retrieves the end angle of the gauge, specifying where the gauge’s scale terminates. The angle is measured in degrees, starting from the gauge’s initial position (commonly 0 degrees). Adjusting this property determines the extent of the gauge’s arc and affects how the scale is rendered visually.
   * Default value: 210
   */
  endAngle?: number;
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
   * Sets or retrieves the quality of the reading: good, uncertain, bad or stale. Reflected to an attribute so the stylesheet can show it - the value is dimmed for uncertain, hatched or struck through for bad and faded for stale, with the word shown beside it so it is legible without colour - and spoken to assistive technology as a description. A reading whose quality is not good must never look, or read out, as though it were. Carried onto the element by JQX.Industrial.Connect bindings.
   * Default value: good
   */
  quality?: GaugeQuality | string;
  /**
   * Provides a way to retrieve or assign the unlockKey property, which is a unique code required to activate or gain access to the product's full features. Use this property to securely manage the product's access control.
   * Default value: ""
   */
  unlockKey?: string;
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
   * Specifies the upper limit for the element's scale, preventing it from being scaled beyond this maximum value. This setting ensures that when the element is resized or transformed, its scale will not exceed the defined maximum threshold.
   * Default value: 100
   */
  max?: number | Date;
  /**
   * Specifies the event or condition that triggers the update of the element’s value, such as on user input, when focus is lost, or after a specific action occurs. This setting controls how and when changes to the element's value are recognized and processed in the application.
   * Default value: switchWhileDragging
   */
  mechanicalAction?: DragMechanicalAction | string;
  /**
   * Specifies or retrieves an object containing the text strings displayed by the widget, allowing for customization and localization of all user-facing messages. This property works together with the locale property to support multiple languages by providing translated strings for different locales. Use this to ensure the widget's interface is fully adaptable to users' language preferences.
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
   * Specifies the lowest allowable value for the element’s scale, preventing the element from being scaled below this threshold. This property ensures that the element cannot appear smaller than the defined minimum scale value.
   * Default value: 0
   */
  min?: number | Date;
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
   * Specifies the angle or position of the needle when analogDisplayType is set to 'needle'. This value controls where the needle points on the analog display, allowing customization of its exact placement based on the current data or setting.
   * Default value: center
   */
  needlePosition?: GaugeNeedlePosition | string;
  /**
   * Specifies how many digits should be displayed after the decimal point for numeric values. This property is only applicable when the scaleType is set to 'floatingPoint'; it has no effect for other scale types.
   * Default value: null
   */
  precisionDigits?: number;
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
   * Specifies whether the element should use right-to-left (RTL) alignment to support languages and locales that utilize right-to-left fonts, such as Arabic or Hebrew. When enabled, the element's scale is inverted, and all labels and digital displays are repositioned and rendered in a right-to-left orientation to ensure proper localization and readability for RTL scripts. This property can be both set and retrieved.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the placement of the scale within the element, indicating where the scale will appear (e.g., top, bottom, left, or right) relative to the element.
   * Default value: inside
   */
  scalePosition?: GaugeScalePosition | string;
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
   * This property determines whether the gauge’s range indicators are displayed on the gauge component. When set to true, the range segments (such as colored bands or sections representing value intervals) will be visible on the gauge; when set to false, these range indicators will be hidden.
   * Default value: false
   */
  showRanges?: boolean;
  /**
   * Controls whether units are shown or hidden in the user interface, allowing you to toggle the display of measurement units (e.g., px, %, em) alongside values.
   * Default value: false
   */
  showUnit?: boolean;
  /**
   * Calculates the number of significant digits present in a given number. This property is relevant only when the scaleType is set to 'integer', ensuring that the digit count pertains exclusively to whole numbers, not decimals or other formats.
   * Default value: null
   */
  significantDigits?: number | null;
  /**
   * Specifies the method used to determine the overall dimensions (width and height) of the Gauge component, affecting how it adapts to its parent container or specified sizing rules.
   * Default value: circle
   */
  sizeMode?: GaugeSizeMode | string;
  /**
   * Sets or retrieves the starting angle of the gauge. This property defines the position, in degrees, where the gauge's scale begins, measured clockwise from the reference point (typically the rightmost horizontal axis at 0 degrees). Adjusting this value changes where the gauge arc starts, allowing for customized gauge orientations.
   * Default value: -30
   */
  startAngle?: number;
  /**
   * Sets or retrieves the visual theme applied to the element, allowing you to customize or query its overall appearance—such as colors, backgrounds, and style variations—to match different design schemes.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies the exact placement of tick marks along the Gauge's scale, such as inside, outside, or across the gauge axis. This setting controls where the ticks appear relative to the gauge track for improved readability and customization.
   * Default value: scale
   */
  ticksPosition?: TicksPosition | string;
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
   * Specifies or retrieves the unit of measurement (such as pixels, percentage, or em) that is applied to the values displayed on the element's scale. This determines how the scale values are interpreted and rendered for the element.
   * Default value: "kg"
   */
  unit?: string;
  /**
   * Defines validation constraints for the value by specifying minimum and maximum allowable limits. Ensures that the value entered falls within the specified range.
   * Default value: strict
   */
  validation?: Validation | string;
  /**
   * Sets or retrieves the current value of the element. If the scaleType property is set to 'date', the value must be a date object or a valid date string; otherwise, the value should match the expected data type for the current scaleType.
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
 Gauge displays an indicator within a range of values.
*/
export interface Gauge extends BaseElement, GaugeProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the value of the element is modified by the user or through a script, typically after the element loses focus or its value is updated programmatically. It allows you to detect and respond to changes in the element’s content.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previous value of the element.
   *  value - The new value of the element.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Sets keyboard focus to the specified element, making it the active element for user input and interaction. This allows users to immediately begin typing or interacting with the element without manually clicking or tabbing to it. Commonly used for form fields or interactive components to improve accessibility and user experience.
   */
  focus(): void;
  /**
   * Returns the optimal size of the element, including the current width and the calculated height based on the layout and dimensions of its internal child elements. This ensures the element can fully contain its content without overflow, reflecting the most appropriate size for display.
   * @returns {any}
   */
  getOptimalSize(): any;
  /**
   * Retrieves or updates the current value displayed by the gauge component. Use this to programmatically read the gauge’s status or set it to a new value within its defined range.
   * @param {string | number | Date} value?. The value to be set. If no parameter is passed, returns the current value of the gauge. The value can be a date only when <b>scaleType</b> is 'date'.
   * @returns {string}
   */
  val(value?: string | number | Date): string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-gauge"): Gauge;
        querySelector(selectors: "smart-gauge"): Gauge | null;
        querySelectorAll(selectors: "smart-gauge"): NodeListOf<Gauge>;
        getElementsByTagName(qualifiedName: "smart-gauge"): HTMLCollectionOf<Gauge>;
        getElementsByName(elementName: "smart-gauge"): NodeListOf<Gauge>;
    }
}

/**Specifies the style or format of the gauge's indicator, such as a needle, bar, or marker, which visually represents the current value on the gauge. */
export declare type GaugeAnalogDisplayType = 'needle' | 'fill' | 'line';
/**Specifies the placement of the digital display within the element, allowing you to control its alignment (e.g., top, bottom, left, right, or center) relative to the element’s boundaries. */
export declare type GaugeDigitalDisplayPosition = 'bottom' | 'center' | 'right' | 'top';
/**Specifies whether the labels within the element are displayed or hidden. When set to true, the labels inside the element are visible; when set to false, the labels are not shown. This property allows you to control the display of label text within the element. */
export declare type LabelsVisibility = 'all' | 'endPoints' | 'none';
/**Sets or retrieves the quality of the reading: good, uncertain, bad or stale. Reflected to an attribute so the stylesheet can show it - the value is dimmed for uncertain, hatched or struck through for bad and faded for stale, with the word shown beside it so it is legible without colour - and spoken to assistive technology as a description. A reading whose quality is not good must never look, or read out, as though it were. Carried onto the element by JQX.Industrial.Connect bindings. */
export declare type GaugeQuality = 'good' | 'uncertain' | 'bad' | 'stale';
/**Specifies the event or condition that triggers the update of the element’s value, such as on user input, when focus is lost, or after a specific action occurs. This setting controls how and when changes to the element's value are recognized and processed in the application. */
export declare type DragMechanicalAction = 'switchUntilReleased' | 'switchWhenReleased' | 'switchWhileDragging';
/**Specifies whether the element is configured to handle numerical values or date values, enabling appropriate functionality and validation for each data type. */
export declare type ScaleMode = 'date' | 'numeric';
/**Specifies the angle or position of the needle when analogDisplayType is set to 'needle'. This value controls where the needle points on the analog display, allowing customization of its exact placement based on the current data or setting. */
export declare type GaugeNeedlePosition = 'center' | 'edge';
/**Specifies the placement of the scale within the element, indicating where the scale will appear (e.g., top, bottom, left, or right) relative to the element. */
export declare type GaugeScalePosition = 'inside' | 'outside' | 'none';
/**Specifies the data type used for the gauge’s value and defines the corresponding scale (e.g., linear, logarithmic). This setting ensures that input values are interpreted correctly and displayed with the appropriate measurement scale on the gauge. */
export declare type ScaleType = 'floatingPoint' | 'integer';
/**Specifies the method used to determine the overall dimensions (width and height) of the Gauge component, affecting how it adapts to its parent container or specified sizing rules. */
export declare type GaugeSizeMode = 'auto' | 'circle' | 'none';
/**Specifies the exact placement of tick marks along the Gauge's scale, such as inside, outside, or across the gauge axis. This setting controls where the ticks appear relative to the gauge track for improved readability and customization. */
export declare type TicksPosition = 'scale' | 'track';
/**Controls whether the ticks are displayed or hidden on the axis. If set to true, ticks will be visible; if false, ticks will be hidden. This option allows you to toggle the tick marks for improved chart customization. */
export declare type TicksVisibility = 'major' | 'minor' | 'none';
/**Defines validation constraints for the value by specifying minimum and maximum allowable limits. Ensures that the value entered falls within the specified range. */
export declare type Validation = 'interaction' | 'strict';
/**Gets or sets the word length used for values. This property is only applicable when scaleType is set to 'integer'; it has no effect for other scale types. */
export declare type WordLength = 'int8' | 'int16' | 'int32' | 'int64' | 'uint8' | 'uint16' | 'uint32' | 'uint64';
