import  {BaseElement, Animation} from "./smart.element"

export interface ResourcePickerProperties {
  /**
   * Enables or disables the element. Disabled, the field and its buttons are disabled and out of the tab order, an open list closes without a close event, and nothing is selected or requested.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the resources found. Each is an object with name (the resource string), alias, description, kind (gpib, tcpip, usb, serial, pxi, daq or other; worked out from the name when absent), available and an optional id. A plain string is taken as a resource name; null and anything else that is not an object is skipped, with one console warning per list.
   * Default value: 
   */
  resources?: any;
  /**
   * Sets or retrieves the resource string in force.
   * Default value: ""
   */
  value?: string;
  /**
   * Sets or retrieves the kinds listed. Empty lists every kind.
   * Default value: 
   */
  kinds?: any;
  /**
   * Accepts a typed resource the list does not have, once it parses as a resource name.
   * Default value: false
   */
  allowCustom?: boolean;
  /**
   * Lists only the resources that are available.
   * Default value: false
   */
  availableOnly?: boolean;
  /**
   * Shows the refresh button, which raises refreshRequest.
   * Default value: true
   */
  refreshable?: boolean;
  /**
   * Shows discovery in progress: the refresh button waits and the empty list says so. The application sets it while it searches.
   * Default value: false
   */
  busy?: boolean;
  /**
   * Sets or retrieves the label above the field, which also names the combobox.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the text shown when nothing is selected. Empty uses the localized default.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Shows the value without allowing a change.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the element - the placeholder, refresh, kind and hint texts. Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the element.
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 ResourcePicker selects an instrument or a channel: it lists the resources the application has found, grouped by interface and named by alias, filters them as text is typed, and reads a typed resource string before it is accepted. The refresh button raises a request; the application performs the discovery and assigns the list. GPIB, LAN, USB, serial, PXI and DAQ names are parsed into their parts by a static method usable without an element.
*/
export interface ResourcePicker extends BaseElement, ResourcePickerProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a resource is selected from the list or typed and accepted.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, previousValue, resource, parsed)
   *  value - The resource string.
   *  previousValue - The one before.
   *  resource - The entry of the list, or null for a typed resource.
   *  parsed - The parts of the name, as parse() reads them.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when the refresh button is pressed. The application performs the discovery, sets busy while it runs and assigns the resources it found.
	* @param event. The custom event.    */
  onRefreshRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the list opens.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the list closes.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * Opens the list.
   */
  open(): void;
  /**
   * Closes the list and shows the value again.
   */
  close(): void;
  /**
   * Selects a resource by name and raises <em>change</em>. A name the list does not have is taken only when custom entries are allowed and it parses; otherwise the hint says so.
   * @param {string} name. The resource string or id.
   */
  select(name: string): void;
  /**
   * Also available as a static method of the class. Reads a resource string into its parts by the VISA resource syntax (IVI VPP-4.3): { kind, interface, ... } with the fields of its kind - <em>board</em>, <em>address</em> (0 to 30) and <em>secondary</em> (0 to 30, or 96 to 126 as the bus code some tools write; reported as written) for GPIB; <em>board</em>, <em>host</em>, <em>addressType</em> (ipv4, ipv6 or hostname), <em>device</em>, <em>port</em>, <em>socket</em> and <em>protocol</em> (vxi-11, hislip or socket) for LAN, where the host is an IPv4 address of four octets 0 to 255, an RFC 1123 host name or an IPv6 address - in brackets as VISA writes it (TCPIP0::[fe80::1]::inst0::INSTR), or bare where that is unambiguous, and the port is 0 to 65535; <em>vendor</em>, <em>product</em> (0 to 0xFFFF), <em>serial</em> and <em>interfaceNumber</em> for USB; <em>board</em> and <em>port</em> for serial (ASRL3, ASRLCOM3, and device paths such as ASRL/dev/ttyUSB0, whose board is null); <em>board</em>, <em>bus</em> (0 to 255), <em>device</em> (0 to 31), <em>function</em> (0 to 7), <em>chassis</em> and <em>slot</em> for PXI, from any of its three forms - PXI[bus]::device[::function], PXI[interface]::[bus-]device[.function] and PXI[interface]::CHASSISn::SLOTn[::FUNCn] - where only the last names a slot and the others give slot null, since a PCI device number is not a slot; <em>device</em>, <em>channelType</em>, <em>channel</em> and <em>channelEnd</em> for DAQ. The trailing ::INSTR may be left out, as the syntax allows. Text that is not a resource, including one that breaks these ranges (GPIB0::31::INSTR, TCPIP0::999.1.1.1::INSTR, PXI0::2::11::INSTR), is { kind: "other", name, reason } with <em>reason</em> the rule it broke in English, or null; empty text is null.
   * @param {string} name. The resource string.
   * @returns {any}
   */
  parse(name: string): any;
  /**
   * Also available as a static method of the class. True for a name the picker recognises as a resource: one that parse() reads as a kind other than "other", within the VISA ranges.
   * @param {string} name. The resource string.
   * @returns {boolean}
   */
  isValid(name: string): boolean;
  /**
   * Redraws the element from its current properties.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-resource-picker"): ResourcePicker;
        querySelector(selectors: "smart-resource-picker"): ResourcePicker | null;
        querySelectorAll(selectors: "smart-resource-picker"): NodeListOf<ResourcePicker>;
        getElementsByTagName(qualifiedName: "smart-resource-picker"): HTMLCollectionOf<ResourcePicker>;
        getElementsByName(elementName: "smart-resource-picker"): NodeListOf<ResourcePicker>;
    }
}

