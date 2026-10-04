import  {BaseElement, Animation} from "./smart.element"

export interface MimicSymbolProperties {
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the equipment tag shown beside the symbol.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves where the tag is rendered.
   * Default value: bottom
   */
  labelPosition?: MimicSymbolLabelPosition | string;
  /**
   * Sets or retrieves the content of a vessel as a percentage, drawn as a fill clipped to the vessel shape. Only the vessel symbol uses it.
   * Default value: null
   */
  level?: number;
  /**
   * Sets or retrieves a rotation in degrees, for symbols that sit in a vertical run.
   * Default value: 0
   */
  rotate?: number;
  /**
   * Sets or retrieves whether the symbol is drawn as the current selection.
   * Default value: false
   */
  selected?: boolean;
  /**
   * Sets or retrieves the equipment state, which sets how the symbol is drawn. In the Industrial themes running - the normal state - is drawn solid neutral and stopped as a light body, as ISA-101 asks, so colour is left for fault; elsewhere running is green. The smart-mimic-classic class on the symbol, the diagram or the page brings the green back in the Industrial themes, and the --smart-mimic-running-fill, --smart-mimic-running-stroke and --smart-mimic-running-detail custom properties set it outright. unknown means no data: the body is hollow and dotted, so it is not read as stopped, and the reading is struck through as not current.
   * Default value: normal
   */
  state?: MimicSymbolState | string;
  /**
   * Sets or retrieves the quality of what the symbol shows: good, uncertain, bad or stale. Reflected to an attribute when not good. Bad drops the state colour (a state from a bad signal is not a state) and strikes the reading through; stale fades the symbol and its reading; uncertain dashes the outline. A mark in the corner - a cross, a clock, a question mark - says which without colour, and the quality is spoken in the symbol's name and shown as a tooltip on the reading.
   * Default value: good
   */
  quality?: MimicSymbolQuality | string;
  /**
   * Sets or retrieves which connection stubs are drawn. Stubs extend past the edge of the symbol on the pipe centreline, so a symbol placed in a pipe run connects to the line on either side.
   * Default value: auto
   */
  stubs?: MimicSymbolStubs | string;
  /**
   * Sets or retrieves the symbol to draw. The built-in set contains 33 ISA-5.1 shapes: pumps (centrifugal, positive displacement, vacuum), valves (control, check, relief, ball, gate, butterfly, three-way), vessels (vertical, column, reactor, drum, silo, cyclone), rotating equipment (motor, turbine, generator, fan, blower, compressor, agitator, conveyor), electrical equipment (breaker, transformer, disconnect) and inline devices (filter, exchanger, orifice, heater, cooler, instrument bubble). The names can be enumerated at run time from the static symbols map. The value is not restricted to the built-in names, because symbolTemplate can supply additional symbols. An unknown symbol without a template falls back to the pump.
   * Default value: "pump"
   */
  symbol?: string;
  /**
   * Sets or retrieves a function that returns the SVG markup for a symbol that is not in the built-in set. The function is called with (symbolName, element) and returns markup for the same 100x100 viewBox, or null to fall back to the built-in set. The markup is inserted as it is, so it should come from application code; markup built from plant data has to be escaped first.
   * Default value: null
   */
  symbolTemplate?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the equipment states and the accessible name of the symbol (8 keys: normal, running, stopped, fault, manual, maintenance, ..). Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * If set to true, the component cannot be focused. By default a symbol is an interactive control: it is in the tab order, has role="button" and is activated with Enter or Space. Setting this property removes it from the tab order and exposes it with role="img", which is appropriate for a symbol that is displayed only.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or retrieves a reading rendered under the symbol, already formatted with its unit. It is not reflected to an attribute: copying it to one on every update made the browser restyle every symbol of a large diagram.
   * Default value: ""
   */
  value?: string;
}
/**
 MimicSymbol displays one piece of equipment on a process diagram, such as a pump, a valve, a tank or a motor, with its tag, state and reading. The symbols are drawn as SVG in a 100x100 viewBox and scale with the element. The state colours come from the theme, and clicking the symbol raises an event so the application can open the related faceplate.
*/
export interface MimicSymbol extends BaseElement, MimicSymbolProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the symbol is chosen, by click or by pressing Enter or Space while it has focus, typically used to select the item and open its detail. A disabled symbol raises nothing.
	* @param event. The custom event. Custom data event was created with: ev.detail(label, symbol, state)
   *  label - The symbol's tag.
   *  symbol - Which symbol is drawn.
   *  state - The equipment state at the time of the click.
   */
  onSymbolClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Redraws the symbol.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-mimic-symbol"): MimicSymbol;
        querySelector(selectors: "smart-mimic-symbol"): MimicSymbol | null;
        querySelectorAll(selectors: "smart-mimic-symbol"): NodeListOf<MimicSymbol>;
        getElementsByTagName(qualifiedName: "smart-mimic-symbol"): HTMLCollectionOf<MimicSymbol>;
        getElementsByName(elementName: "smart-mimic-symbol"): NodeListOf<MimicSymbol>;
    }
}

/**Sets or retrieves where the tag is rendered. */
export declare type MimicSymbolLabelPosition = 'top' | 'bottom' | 'none';
/**Sets or retrieves the equipment state, which sets how the symbol is drawn. In the Industrial themes running - the normal state - is drawn solid neutral and stopped as a light body, as ISA-101 asks, so colour is left for fault; elsewhere running is green. The jqx-mimic-classic class on the symbol, the diagram or the page brings the green back in the Industrial themes, and the --jqx-mimic-running-fill, --jqx-mimic-running-stroke and --jqx-mimic-running-detail custom properties set it outright. unknown means no data: the body is hollow and dotted, so it is not read as stopped, and the reading is struck through as not current. */
export declare type MimicSymbolState = 'normal' | 'running' | 'stopped' | 'fault' | 'manual' | 'maintenance' | 'unknown';
/**Sets or retrieves the quality of what the symbol shows: good, uncertain, bad or stale. Reflected to an attribute when not good. Bad drops the state colour (a state from a bad signal is not a state) and strikes the reading through; stale fades the symbol and its reading; uncertain dashes the outline. A mark in the corner - a cross, a clock, a question mark - says which without colour, and the quality is spoken in the symbol's name and shown as a tooltip on the reading. */
export declare type MimicSymbolQuality = 'good' | 'uncertain' | 'bad' | 'stale';
/**Sets or retrieves which connection stubs are drawn. Stubs extend past the edge of the symbol on the pipe centreline, so a symbol placed in a pipe run connects to the line on either side. */
export declare type MimicSymbolStubs = 'auto' | 'both' | 'left' | 'right' | 'bottom' | 'none';
