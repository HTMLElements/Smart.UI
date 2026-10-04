import  {BaseElement, Animation} from "./smart.element"

export interface TankProperties {
  /**
   * Controls the animation mode by setting or retrieving its current state. When set to 'none', all animations are disabled and transitions will not occur. Use this property to enable, disable, or modify animation behavior according to your application's requirements.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * When set to true, all values will be automatically adjusted (coerced) to fit within the range specified by the interval property. This ensures that any value outside the defined interval is converted to the nearest valid value within that range.
   * Default value: false
   */
  coerce?: boolean;
  /**
   * Controls whether custom tick marks, which may be spaced at uneven intervals, are displayed on the axis. The specific positions of these ticks are specified using the customTicks property. This option can be used to enable or disable the rendering of these custom-defined ticks.
   * Default value: false
   */
  customInterval?: boolean;
  /**
   * If customInterval is enabled, this option provides a specific list of tick values to display on the plot's axis, overriding any automatically calculated intervals. When coerce is set to true, user inputs or plotted values will automatically adjust (or "snap") to the nearest tick in this list, ensuring all values align precisely with one of the specified ticks.
   * Default value: 0,50,100
   */
  customTicks?: Array<number | Date>;
  /**
   * Specifies or retrieves the pattern used to format labels when the mode property is set to 'date'. This pattern determines how date labels are displayed to the user (for example, "MM/DD/YYYY" or "dd MMM, yyyy").
   * Default value: "d"
   */
  dateLabelFormatString?: string;
  /**
   * Specifies or retrieves the character used as the decimal separator in numeric values. This determines how decimal points are displayed when formatting or parsing numbers (e.g., use "." for 12.34 or "," for 12,34, depending on locale or formatting requirements).
   * Default value: "".""
   */
  decimalSeparator?: string;
  /**
   * Determines whether the widget is active and visible to users. When enabled, the widget functions normally and is displayed in the user interface; when disabled, the widget is hidden or inactive, preventing user interaction.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * When the 'coerce' property is set to 'true', any input values that fall outside the specified interval will be automatically adjusted ("coerced") to the nearest boundary value of the interval. This ensures that all resulting values strictly adhere to the defined range, preventing any out-of-bounds input.
   * Default value: 1
   */
  interval?: string | number;
  /**
   * Defines the orientation of the tank. When set to true, the positions of the tank's front and rear are swapped, effectively reversing its direction.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * A user-defined callback function that formats the values shown on the tank labels before they are displayed. This function receives the raw value as an argument and should return the formatted string to be rendered on the label, allowing for custom display logic such as unit conversion, number formatting, or localization.
   * Default value: null
   */
  labelFormatFunction?: any;
  /**
   * Controls the visibility of the widget's label. When set, this property determines whether the label is displayed or hidden. When retrieved, it indicates the current visibility state of the label.
   * Default value: all
   */
  labelsVisibility?: LabelsVisibility | string;
  /**
   * Specifies the current locale for the application. This property determines language and regional formatting, and works together with the messages property to provide appropriate translations and locale-specific content. Use this property to get or set the active locale for displaying messages and other localized resources.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module. This callback is triggered during localization operations, such as language selection, translation processing, or locale updates, to handle custom logic or respond to localization events within the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Determines whether the widget displays data using a logarithmic scale. When enabled, values are plotted on a logarithmic scale instead of a linear scale, which can help visualize data with a wide range of values. When disabled, the widget uses a standard linear scale.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Gets or sets the maximum allowable value for the widget, defining the upper limit that users can select or enter.
   * Default value: 100
   */
  max?: string | number | Date;
  /**
   * Defines or retrieves the specific type of mechanical action being applied. This property allows you to specify what kind of mechanical action to use (such as momentary, toggle, or latching), or to query the current mechanical action configuration.
   * Default value: switchWhileDragging
   */
  mechanicalAction?: DragMechanicalAction | string;
  /**
   * Defines or retrieves an object containing the localizable text strings used throughout the widget interface. This property allows you to customize the widget’s displayed messages for different languages and regions. It is typically used together with the locale property to support internationalization and provide translations based on the user’s locale settings.
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
   * Defines or retrieves the minimum allowable value for the widget. When setting this property, it restricts user input so that values below the specified minimum are not permitted. When getting this property, it returns the current minimum value constraint of the widget.
   * Default value: 0
   */
  min?: string | number | Date;
  /**
   * Determines whether the widget processes and displays numeric values or date values. This property can be set to configure the expected data type (numbers or dates), and can also be accessed to check the current mode of the widget.
   * Default value: numeric
   */
  mode?: ScaleMode | string;
  /**
   * Defines or retrieves the element's name attribute. This name uniquely identifies the element within a form and is used as the key when the form data is submitted to the server, allowing the associated value to be referenced and processed.
   * Default value: ""
   */
  name?: string;
  /**
   * Specifies the layout direction of the widget, determining whether its content is arranged horizontally, vertically, or in another supported orientation.
   * Default value: vertical
   */
  orientation?: Orientation | string;
  /**
   * Specifies the number of digits to display after the decimal point in numeric values. This setting is only applicable when scaleType is set to 'integer'.
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves the quality of the reading: good, uncertain, bad or stale. Reflected to an attribute so the stylesheet can show it - the value is dimmed for uncertain, hatched or struck through for bad and faded for stale, with the word shown beside it so it is legible without colour - and spoken to assistive technology as a description. A reading whose quality is not good must never look, or read out, as though it were. Carried onto the element by JQX.Industrial.Connect bindings.
   * Default value: good
   */
  quality?: TankQuality | string;
  /**
   * Sets or retrieves the coloured bands drawn behind the track, as [{ startValue, endValue, className }]. A band marks a part of the scale as normal or abnormal - the ISA-101 discipline is to leave the normal region neutral and give colour only to the zones that mean something. Bands are positioned as a percentage of the scale rather than in pixels, so they survive a resize on their own, and they honour orientation and inverted. A band outside min..max is clipped to it. Set showRanges to draw them. smart-gauge draws its own radial ranges and ignores this.
   * Default value: 
   */
  ranges?: any;
  /**
   * If the widget is set to read-only, users will not be able to interact with or modify the element's content. Any input or actions from users will be disabled, ensuring that the widget's state remains unchanged.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets or sets a value that specifies whether the element’s content is aligned to accommodate right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element’s alignment and text direction are adjusted for proper display in RTL locales.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the placement of the widget’s scales relative to its main content, determining where the scale markers or labels appear within the widget interface (e.g., top, bottom, left, or right).
   * Default value: near
   */
  scalePosition?: ScalePosition | string;
  /**
   * Specifies the measurement system used for the tank's scale, such as linear, logarithmic, or custom, which determines how values are displayed and interpreted on the tank's indicator.
   * Default value: floatingPoint
   */
  scaleType?: ScaleType | string;
  /**
   * Determines whether numerical values are displayed using scientific notation (e.g., 1.23e+6 instead of 1230000). Set to true to enable scientific notation, or false to display numbers in standard decimal format.
   * Default value: false
   */
  scientificNotation?: boolean;
  /**
   * Sets or retrieves whether the value ranges are drawn. Off by default, so a tank or a slider that declares no bands is unchanged.
   * Default value: false
   */
  showRanges?: boolean;
  /**
   * Controls whether the thumb label is visible or hidden. When enabled, the thumb label will be displayed alongside the slider's handle, providing users with a visual indicator of the current value. When disabled, the thumb label will not appear.
   * Default value: false
   */
  showThumbLabel?: boolean;
  /**
   * Controls whether the tooltip is visible to the user. When enabled, the tooltip will be displayed; when disabled, the tooltip will be hidden.
   * Default value: false
   */
  showTooltip?: boolean;
  /**
   * Controls whether unit labels (such as "kg", "cm", "°C") are shown alongside values. Set to true to display units next to values, or false to hide them.
   * Default value: false
   */
  showUnit?: boolean;
  /**
   * Calculates the number of significant digits present in a given number. This process is only relevant and performed when the scaleType property is set to 'integer'. This property should be used to ensure numerical data integrity and appropriate formatting for integer-based values.
   * Default value: 0
   */
  significantDigits?: number;
  /**
   * Sets or retrieves the visual theme applied to the element, determining its overall appearance such as color scheme, typography, and style variants. This property allows dynamic customization of the element’s look to match different design requirements or user preferences.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or retrieves the current position of the thumb label, typically representing the value indicator on a slider or range input. This property allows you to programmatically control or access the exact location of the label relative to the slider track.
   * Default value: near
   */
  thumbLabelPosition?: Position | string;
  /**
   * Defines or retrieves the placement of the tick marks in the jqxTank widget, specifying where the ticks are displayed relative to the tank (e.g., near, far, or both sides). This property allows you to control the visual positioning of the tick indicators along the scale of the jqxTank widget.
   * Default value: scale
   */
  ticksPosition?: TicksPosition | string;
  /**
   * Controls whether the ticks are visible or hidden. This property allows you to enable (show) or disable (hide) the display of tick marks on the relevant component. When set, it determines if ticks are rendered; when accessed, it returns the current visibility state of the ticks.
   * Default value: minor
   */
  ticksVisibility?: TicksVisibility | string;
  /**
   * Specifies or retrieves the position of the tooltip displayed on the jqxTank widget. This property determines where the tooltip appears relative to the tank control (e.g., top, bottom, left, or right). Use this option to customize the tooltip's placement for improved user experience and interface alignment.
   * Default value: near
   */
  tooltipPosition?: Position | string;
  /**
   * Determines whether the element is focusable by setting or retrieving its ability to receive keyboard or mouse focus. If set to true, the element can be targeted by user interactions such as tab navigation or clicking.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Specifies or retrieves the unit label displayed on the jqxTank widget, indicating the measurement unit (e.g., "°C", "kg", "psi") associated with the tank's value. This property allows you to customize the text that appears alongside the value in the widget for better context and readability.
   * Default value: "kg"
   */
  unit?: string;
  /**
   * Retrieves or assigns the unlockKey property, which serves as a security token or code required to activate and access the product's full functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Enhances value validation using minimum and maximum boundaries.  - When set to 'strict', all values—whether changed by user interaction or programmatically—are always constrained within the defined min and max limits. Any attempt to set a value outside this range will automatically adjust (coerce) it to the closest valid boundary.- When set to 'interaction', only values changed by user interaction (such as form input) are validated against min and max. Programmatic updates can set values outside this range, and if the min or max properties are later adjusted such that the current value falls out of bounds, the existing value remains unchanged and is not coerced. In these cases, no change event is triggered.
   * Default value: strict
   */
  validation?: Validation | string;
  /**
   * Gets the current value of the jqxTank widget or sets it to a specified value. This property or method enables you to retrieve the widget's current position (value) or assign a new value programmatically, allowing for dynamic interaction and control over the jqxTank component.
   * Default value: 0
   */
  value?: any;
  /**
   * Specifies or retrieves the word length used for numeric representation. This property is relevant only when the scaleType is set to 'integer'. In such cases, it determines the number of bits allocated for each integer value. For other scaleType values, this setting has no effect.
   * Default value: int32
   */
  wordLength?: WordLength | string;
}
/**
 Tank is a UI Component used in Engineering and Scientific applications. It is broadly used to display the fluid levels.
*/
export interface Tank extends BaseElement, TankProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the tank’s value is updated, whether through user interaction or programmatic changes. It allows listeners to respond immediately to any modification in the tank’s current state.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Locks the keyboard and mouse input exclusively on the tank component, ensuring that all user interactions are directed to the tank (such as movement and firing controls) while disabling interactions with other interface elements.
   */
  focus(): void;
  /**
   * Retrieves the recommended dimensions (width and height) for the widget based on its content and layout constraints, ensuring optimal display and usability.
   * @returns {any}
   */
  getOptimalSize(): any;
  /**
   * Retrieves or updates the current value stored in the tank. Use this property to access the tank’s value (such as its level, volume, or contents) or to assign a new value to it.
   * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the tank. 
   * @returns {string}
   */
  val(value?: string | number): string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-tank"): Tank;
        querySelector(selectors: "smart-tank"): Tank | null;
        querySelectorAll(selectors: "smart-tank"): NodeListOf<Tank>;
        getElementsByTagName(qualifiedName: "smart-tank"): HTMLCollectionOf<Tank>;
        getElementsByName(elementName: "smart-tank"): NodeListOf<Tank>;
    }
}

/**Controls the visibility of the widget's label. When set, this property determines whether the label is displayed or hidden. When retrieved, it indicates the current visibility state of the label. */
export declare type LabelsVisibility = 'all' | 'endPoints' | 'none';
/**Defines or retrieves the specific type of mechanical action being applied. This property allows you to specify what kind of mechanical action to use (such as momentary, toggle, or latching), or to query the current mechanical action configuration. */
export declare type DragMechanicalAction = 'switchUntilReleased' | 'switchWhenReleased' | 'switchWhileDragging';
/**Determines whether the widget processes and displays numeric values or date values. This property can be set to configure the expected data type (numbers or dates), and can also be accessed to check the current mode of the widget. */
export declare type ScaleMode = 'numeric' | 'date';
/**Specifies the layout direction of the widget, determining whether its content is arranged horizontally, vertically, or in another supported orientation. */
export declare type Orientation = 'horizontal' | 'vertical';
/**Sets or retrieves the quality of the reading: good, uncertain, bad or stale. Reflected to an attribute so the stylesheet can show it - the value is dimmed for uncertain, hatched or struck through for bad and faded for stale, with the word shown beside it so it is legible without colour - and spoken to assistive technology as a description. A reading whose quality is not good must never look, or read out, as though it were. Carried onto the element by JQX.Industrial.Connect bindings. */
export declare type TankQuality = 'good' | 'uncertain' | 'bad' | 'stale';
/**Specifies the placement of the widget’s scales relative to its main content, determining where the scale markers or labels appear within the widget interface (e.g., top, bottom, left, or right). */
export declare type ScalePosition = 'near' | 'far' | 'both' | 'none';
/**Specifies the measurement system used for the tank's scale, such as linear, logarithmic, or custom, which determines how values are displayed and interpreted on the tank's indicator. */
export declare type ScaleType = 'floatingPoint' | 'integer';
/**Specifies or retrieves the position of the tooltip displayed on the jqxTank widget. This property determines where the tooltip appears relative to the tank control (e.g., top, bottom, left, or right). Use this option to customize the tooltip's placement for improved user experience and interface alignment. */
export declare type Position = 'near' | 'far';
/**Defines or retrieves the placement of the tick marks in the jqxTank widget, specifying where the ticks are displayed relative to the tank (e.g., near, far, or both sides). This property allows you to control the visual positioning of the tick indicators along the scale of the jqxTank widget. */
export declare type TicksPosition = 'scale' | 'track';
/**Controls whether the ticks are visible or hidden. This property allows you to enable (show) or disable (hide) the display of tick marks on the relevant component. When set, it determines if ticks are rendered; when accessed, it returns the current visibility state of the ticks. */
export declare type TicksVisibility = 'major' | 'minor' | 'none';
/**Enhances value validation using minimum and maximum boundaries.  <br/>- When set to 'strict', all values—whether changed by user interaction or programmatically—are always constrained within the defined <code>min</code> and <code>max</code> limits. Any attempt to set a value outside this range will automatically adjust (coerce) it to the closest valid boundary.<br/>- When set to 'interaction', only values changed by user interaction (such as form input) are validated against <code>min</code> and <code>max</code>. Programmatic updates can set values outside this range, and if the <code>min</code> or <code>max</code> properties are later adjusted such that the current value falls out of bounds, the existing value remains unchanged and is not coerced. In these cases, no change event is triggered. */
export declare type Validation = 'strict' | 'interaction';
/**Specifies or retrieves the word length used for numeric representation. This property is relevant only when the scaleType is set to 'integer'. In such cases, it determines the number of bits allocated for each integer value. For other scaleType values, this setting has no effect. */
export declare type WordLength = 'int8' | 'uint8' | 'int16' | 'uint16' | 'int32' | 'uint32' | 'int64' | 'uint64';
