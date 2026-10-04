import  {BaseElement, Animation} from "./smart.element"

export interface SliderProperties {
  /**
   * Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Use other valid values to enable and control different animation behaviors.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * When the coerce property is set to true and the user clicks on the track, the slider thumb and its value will automatically snap to the nearest valid position based on the interval property. This ensures that the selected value always aligns with the allowed increments defined by interval.
   * Default value: false
   */
  coerce?: boolean;
  /**
   * Controls whether to display custom ticks on the axis, even if they are placed at uneven intervals. The specific positions of these custom ticks are defined by the customTicks property. Use this option to enable or disable the rendering of user-defined tick marks instead of automatically generated ones.
   * Default value: false
   */
  customInterval?: boolean;
  /**
   * When customInterval is enabled, you can define a specific list of tick values to be displayed on the plot axis. If coerce is set to true, any input value will automatically adjust (or "snap") to the nearest specified tick value from this list, ensuring that only those defined tick marks are selected or displayed.
   * Default value: 0,50,100
   */
  customTicks?: Array<number | Date>;
  /**
   * Sets or retrieves the format pattern used to display labels when the mode property is set to 'date'. This pattern determines how dates will appear in the labels, such as the order of day, month, and year, as well as the specific separators or formatting conventions applied.
   * Default value: "d"
   */
  dateLabelFormatString?: string;
  /**
   * Specifies or retrieves the character used as the decimal separator in numeric values. This determines which symbol (such as a period "." or a comma ",") separates the integer part from the fractional part of a number when displaying or parsing numeric data.
   * Default value: "".""
   */
  decimalSeparator?: string;
  /**
   * Determines whether the widget is active and available for user interaction. When enabled, the widget is fully functional; when disabled, it becomes inactive and unresponsive to user input.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Controls whether users can change the jqxSlider value by scrolling the mouse wheel. When enabled, scrolling the wheel while hovering over the slider will increment or decrement its value. Disabling this option prevents value changes via the mouse wheel interaction.
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Specifies the set of predefined values or intervals that the slider's thumb will automatically align or "snap" to when moved by the user, ensuring precise selection and preventing arbitrary positioning.
   * Default value: 1
   */
  interval?: string | number;
  /**
   * Determines the orientation of the slider. When set to true, the positions of the slider’s start and end points are reversed, effectively flipping the slider’s direction from its default state. This can be useful for right-to-left layouts or custom UI requirements.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * A callback function that receives the slider’s current value as an argument and returns a formatted string, which will be displayed on the slider’s labels and tooltip. This allows you to customize how the slider values appear to users, such as adding units, controlling decimal precision, or applying localization.
   * Default value: null
   */
  labelFormatFunction?: any;
  /**
   * Controls the visibility of the widget's label by allowing you to set or retrieve its current state (visible or hidden). Use this property to show or hide the label as needed.
   * Default value: all
   */
  labelsVisibility?: LabelsVisibility | string;
  /**
   * Specifies or retrieves the current locale setting, which determines the language and regional formatting used by the component. This property works in conjunction with the messages property to provide localized content, ensuring that labels, messages, and other text elements are displayed according to the selected locale.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically used to handle language changes, update localized content, or respond to localization-related events within the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Determines whether the widget displays data using a logarithmic scale or a linear scale. When enabled, values on the widget are plotted using a logarithmic scale, which is useful for visualizing data that spans several orders of magnitude. When disabled, a standard linear scale is used.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Specifies or retrieves the maximum allowable value that the widget can accept. This property defines the upper limit for user input or the widget’s range, ensuring that values entered or selected cannot exceed this maximum threshold.
   * Default value: 100
   */
  max?: string | number | Date;
  /**
   * Specifies or retrieves the type of mechanical action being applied. This property determines the operational behavior or interaction mode of the mechanism (e.g., momentary, toggle, or latching). Use this to configure how the mechanism responds to user input or system events.
   * Default value: switchWhileDragging
   */
  mechanicalAction?: DragMechanicalAction | string;
  /**
   * Defines or retrieves an object containing the strings used within the widget that can be localized (translated into different languages). This property works together with the locale setting to display the widget's text elements in the appropriate language for the user. Use this property to customize or override default text labels based on the selected locale.
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
   * Defines or retrieves the widget’s minimum allowed value. This property determines the lowest value a user can input or select within the widget. Setting this value restricts input to be no less than the specified minimum.
   * Default value: 0
   */
  min?: string | number | Date;
  /**
   * Specifies whether the widget is configured to handle numerical values or date values. When set, this determines if the widget processes input and displays output as numbers or as dates. When retrieved, it indicates the current mode—number or date—in which the widget is operating.
   * Default value: numeric
   */
  mode?: ScaleMode | string;
  /**
   * Sets or retrieves the element's name attribute, which serves as a key to identify the element's value when a form is submitted. This name is used to reference the data in the server-side processing, ensuring that the submitted value can be correctly associated with this specific element.
   * Default value: ""
   */
  name?: string;
  /**
   * Specifies the layout direction of the widget, determining whether its content is arranged horizontally, vertically, or in another defined orientation. This property affects how child elements are displayed within the widget.
   * Default value: horizontal
   */
  orientation?: Orientation | string;
  /**
   * Specifies how many digits should be displayed after the decimal point in numeric values. This setting is only effective when the scaleType property is set to 'integer'; it has no effect for other scale types.
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves the quality of the reading: good, uncertain, bad or stale. Reflected to an attribute so the stylesheet can show it - the value is dimmed for uncertain, hatched or struck through for bad and faded for stale, with the word shown beside it so it is legible without colour - and spoken to assistive technology as a description. A reading whose quality is not good must never look, or read out, as though it were. Carried onto the element by JQX.Industrial.Connect bindings.
   * Default value: good
   */
  quality?: SliderQuality | string;
  /**
   * Sets or retrieves the coloured bands drawn behind the track, as [{ startValue, endValue, className }]. A band marks a part of the scale as normal or abnormal - the ISA-101 discipline is to leave the normal region neutral and give colour only to the zones that mean something. Bands are positioned as a percentage of the scale rather than in pixels, so they survive a resize on their own, and they honour orientation and inverted. A band outside min..max is clipped to it. Set showRanges to draw them. smart-gauge draws its own radial ranges and ignores this.
   * Default value: 
   */
  ranges?: any;
  /**
   * Enables or disables the slider's range mode. When set to true, the slider displays two thumbs, allowing users to select a value range between a minimum and maximum. If set to false, only a single thumb is shown for selecting one value.
   * Default value: false
   */
  rangeSlider?: boolean;
  /**
   * When the slider is set to read-only, users cannot interact with it; this means they are unable to drag the slider thumb or click on the track (including the filled portion) to change its value. The slider's current value remains visible, but it cannot be modified through user input.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies or retrieves a value that determines whether the element’s content alignment supports right-to-left text direction, typically used for languages such as Arabic or Hebrew. This setting ensures the element renders content in accordance with right-to-left locale conventions.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the alignment or placement of the widget's scale indicators (such as axes, ticks, or labels) relative to the widget, determining where and how the scales appear within the widget's layout.
   * Default value: near
   */
  scalePosition?: ScalePosition | string;
  /**
   * Defines the style of the slider's scale, such as linear or logarithmic, which determines how values are distributed along the slider track.
   * Default value: floatingPoint
   */
  scaleType?: ScaleType | string;
  /**
   * Specifies whether numerical values should be displayed in scientific notation (e.g., 1.23e+4) instead of standard decimal notation. Set to true to enable scientific notation, or false to display numbers in regular decimal format.
   * Default value: false
   */
  scientificNotation?: boolean;
  /**
   * Controls whether the buttons are visible or hidden. When enabled, the buttons will be displayed in the user interface; when disabled, the buttons will be hidden from view.
   * Default value: false
   */
  showButtons?: boolean;
  /**
   * Sets or retrieves whether the value ranges are drawn. Off by default, so a tank or a slider that declares no bands is unchanged.
   * Default value: false
   */
  showRanges?: boolean;
  /**
   * Controls whether the thumb label is visible or hidden. When enabled, the thumb label will be displayed; when disabled, it will be hidden. This option allows you to show or hide the label that appears above the slider's thumb to indicate its current value.
   * Default value: false
   */
  showThumbLabel?: boolean;
  /**
   * Controls whether the tooltip is visible. When enabled, the tooltip will be displayed; when disabled, the tooltip will be hidden.
   * Default value: false
   */
  showTooltip?: boolean;
  /**
   * Controls whether units (such as px, %, em, etc.) are visible alongside values. When enabled, the units are displayed; when disabled, values are shown without their corresponding units.
   * Default value: false
   */
  showUnit?: boolean;
  /**
   * Identifies the number of significant digits present in a given number. This option is applicable only when the scaleType property is set to 'integer', ensuring that the operation is performed exclusively on integer values.
   * Default value: null
   */
  significantDigits?: number;
  /**
   * Specifies or retrieves the visual theme applied to the element, determining its overall appearance—such as colors, fonts, and styles—according to the selected theme configuration.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or retrieves the current position of the thumb label on the slider control, indicating the value selected by the user. This property allows you to programmatically update the thumb label’s position or access its current location to reflect user interactions.
   * Default value: near
   */
  thumbLabelPosition?: Position | string;
  /**
   * Determines or retrieves the placement of tick marks on the jqxSlider widget. This property allows you to specify where the ticks appear on the slider—such as at the top, bottom, left, or right—enhancing user interaction and slider orientation.
   * Default value: scale
   */
  ticksPosition?: TicksPosition | string;
  /**
   * Controls whether the ticks are visible or hidden. When set, this property determines if tick marks on the component are displayed; when retrieved, it indicates the current visibility status of the ticks.
   * Default value: minor
   */
  ticksVisibility?: TicksVisibility | string;
  /**
   * Specifies or retrieves the position of the tooltip displayed on the jqxSlider widget. This property determines where the tooltip appears relative to the slider handle, such as above, below, left, or right of the handle. Use this option to customize the tooltip placement to enhance user experience.
   * Default value: near
   */
  tooltipPosition?: Position | string;
  /**
   * Determines whether the element is focusable by the user (e.g., via keyboard navigation) or retrieves the current focusable state of the element. If set to true, the element can receive focus; if false, it cannot.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Specifies or retrieves the unit label displayed on the jqxSlider widget, indicating the measurement or value type (such as 'px', '%', 'kg', etc.) associated with the slider's current position. This property allows you to define or access the text shown next to the slider value.
   * Default value: "kg"
   */
  unit?: string;
  /**
   * Defines or retrieves the unlockKey, a unique value used to authorize and enable access to the product’s features.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Configures how the value is validated against the specified minimum and maximum limits.  - When set to 'strict', all value assignments—whether made by user interaction or programmatically—are automatically validated and coerced to remain within the min and max bounds.  - When set to 'interaction', only values entered or changed by user interaction are validated and coerced to the min and max limits. Programmatic value changes are not automatically adjusted, and if the min or max is updated such that the current value falls outside the new range, the value remains unchanged. In this mode, no change event is triggered when values remain out of bounds following these updates.
   * Default value: strict
   */
  validation?: Validation | string;
  /**
   * Sets or retrieves the current value of the jqxSlider widget. This property is applicable only when the rangeSlider option is set to false, meaning the slider operates in single-value mode rather than as a range selector. When you use this property, you can either specify a new value for the slider or obtain the current value the slider is set to.
   * Default value: 0
   */
  value?: any;
  /**
   * Gets or sets the current value of the jqxSlider widget. When the rangeSlider property is set to true, this property manages the values for both slider handles, typically as an array representing the selected range. For a single-value slider, it represents the selected value. Use this property to programmatically retrieve or update the slider's value(s).
   * Default value: 0,100
   */
  values?: Array<number | Date>;
  /**
   * Sets or retrieves the word length value, which determines the number of bits used to represent each integer value. This property is only relevant when scaleType is set to 'integer'. If scaleType has any other value, this property is ignored.
   * Default value: int32
   */
  wordLength?: WordLength | string;
}
/**
 Sliders allow users to make selections from a range of values.
*/
export interface Slider extends BaseElement, SliderProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered each time the user changes the value of the slider, either by dragging the handle or through keyboard input. It allows you to respond programmatically whenever the slider’s value is updated, such as by updating a display label or synchronizing the value with other form elements.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue)
   *  value - A numeric value indicating the scroll position.
   *  oldValue - A numeric value indicating the previous scroll position.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Sets the keyboard focus to the slider element, enabling users to interact with the slider using keyboard controls such as arrow keys, page up/down, and home/end. This facilitates accessibility and allows improved navigation for users relying on keyboard input.
   */
  focus(): void;
  /**
   * Retrieves the most suitable width and height dimensions for the widget based on its content, layout constraints, and current configuration. Use this method to determine the preferred size the widget should be rendered to ensure optimal display and usability.
   * @returns {any}
   */
  getOptimalSize(): any;
  /**
   * Retrieves or assigns the current value of the slider component. When used as a getter, it returns the slider’s present value. When used as a setter, it updates the slider to the specified value and triggers any associated change events or callbacks.
   * @param {string | number | number[] | string[]} value?. The value to be set. If no parameter is passed, returns the displayed value of the slider. 
   * @returns {string}
   */
  val(value?: string | number | number[] | string[]): string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-slider"): Slider;
        querySelector(selectors: "smart-slider"): Slider | null;
        querySelectorAll(selectors: "smart-slider"): NodeListOf<Slider>;
        getElementsByTagName(qualifiedName: "smart-slider"): HTMLCollectionOf<Slider>;
        getElementsByName(elementName: "smart-slider"): NodeListOf<Slider>;
    }
}

/**Controls the visibility of the widget's label by allowing you to set or retrieve its current state (visible or hidden). Use this property to show or hide the label as needed. */
export declare type LabelsVisibility = 'all' | 'endPoints' | 'none';
/**Specifies or retrieves the type of mechanical action being applied. This property determines the operational behavior or interaction mode of the mechanism (e.g., momentary, toggle, or latching). Use this to configure how the mechanism responds to user input or system events. */
export declare type DragMechanicalAction = 'switchUntilReleased' | 'switchWhenReleased' | 'switchWhileDragging';
/**Specifies whether the widget is configured to handle numerical values or date values. When set, this determines if the widget processes input and displays output as numbers or as dates. When retrieved, it indicates the current mode—number or date—in which the widget is operating. */
export declare type ScaleMode = 'numeric' | 'date';
/**Specifies the layout direction of the widget, determining whether its content is arranged horizontally, vertically, or in another defined orientation. This property affects how child elements are displayed within the widget. */
export declare type Orientation = 'horizontal' | 'vertical';
/**Sets or retrieves the quality of the reading: good, uncertain, bad or stale. Reflected to an attribute so the stylesheet can show it - the value is dimmed for uncertain, hatched or struck through for bad and faded for stale, with the word shown beside it so it is legible without colour - and spoken to assistive technology as a description. A reading whose quality is not good must never look, or read out, as though it were. Carried onto the element by JQX.Industrial.Connect bindings. */
export declare type SliderQuality = 'good' | 'uncertain' | 'bad' | 'stale';
/**Specifies the alignment or placement of the widget's scale indicators (such as axes, ticks, or labels) relative to the widget, determining where and how the scales appear within the widget's layout. */
export declare type ScalePosition = 'near' | 'far' | 'both' | 'none';
/**Defines the style of the slider's scale, such as linear or logarithmic, which determines how values are distributed along the slider track. */
export declare type ScaleType = 'floatingPoint' | 'integer';
/**Specifies or retrieves the position of the tooltip displayed on the jqxSlider widget. This property determines where the tooltip appears relative to the slider handle, such as above, below, left, or right of the handle. Use this option to customize the tooltip placement to enhance user experience. */
export declare type Position = 'near' | 'far';
/**Determines or retrieves the placement of tick marks on the jqxSlider widget. This property allows you to specify where the ticks appear on the slider—such as at the top, bottom, left, or right—enhancing user interaction and slider orientation. */
export declare type TicksPosition = 'scale' | 'track';
/**Controls whether the ticks are visible or hidden. When set, this property determines if tick marks on the component are displayed; when retrieved, it indicates the current visibility status of the ticks. */
export declare type TicksVisibility = 'major' | 'minor' | 'none';
/**Configures how the value is validated against the specified minimum and maximum limits.  <br/>- When set to 'strict', all value assignments—whether made by user interaction or programmatically—are automatically validated and coerced to remain within the <code>min</code> and <code>max</code> bounds.  <br/>- When set to 'interaction', only values entered or changed by user interaction are validated and coerced to the <code>min</code> and <code>max</code> limits. Programmatic value changes are not automatically adjusted, and if the <code>min</code> or <code>max</code> is updated such that the current value falls outside the new range, the value remains unchanged. In this mode, no change event is triggered when values remain out of bounds following these updates. */
export declare type Validation = 'strict' | 'interaction';
/**Sets or retrieves the word length value, which determines the number of bits used to represent each integer value. This property is only relevant when scaleType is set to 'integer'. If scaleType has any other value, this property is ignored. */
export declare type WordLength = 'int8' | 'uint8' | 'int16' | 'uint16' | 'int32' | 'uint32' | 'int64' | 'uint64';
