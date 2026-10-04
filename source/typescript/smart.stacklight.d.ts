import  {BaseElement, Animation} from "./smart.element"

export interface StackLightProperties {
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the station or machine the light belongs to, the first words of its accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the segments from top to bottom as { id, color, label, state }. color is one of red, amber, green, blue and white, or any CSS colour; state is off, on, flash or fast. A segment given as a string is a colour whose id and label are that word. When empty, a red, amber and green tower is shown.
   * Default value: 
   */
  segments?: any;
  /**
   * Sets or gets a state word known to the stateMap (running, ready, warning, starved, blocked, stopped, fault, call, maintenance, changeover or off), which lights the segments through the map. The word is matched as written, then trimmed and without regard to case, so Fault and FAULT light the red segment. When empty, the segments are driven directly by their own state. The default map lights the blue segment for call and maintenance and the white segment for changeover, which the default three-segment tower does not have; a state the tower cannot show, and a word the map does not know, are said under the tower and in its accessible name rather than shown as a dark tower, and warned about once in the console. Give segments a blue and a white segment to show them.
   * Default value: ""
   */
  state?: string;
  /**
   * Sets or gets the map from a state word to the segments it lights, for example { running: { green: 'on' }, fault: { red: 'fast' } }. A segment not named in an entry is off. null uses the default production floor convention: running lights green, ready flashes green, warning lights amber, starved and blocked flash amber, stopped lights red, fault flashes red fast, call lights blue, maintenance flashes blue, changeover lights white and off lights nothing. A state word the map does not contain lights nothing.
   * Default value: null
   */
  stateMap?: any;
  /**
   * Sets or gets the horn state: off, on or muted. The horn is shown while it is on or muted. Pressing it while it is on raises the muteRequest event; the application responds by setting the horn to muted.
   * Default value: off
   */
  horn?: StackLightHorn | string;
  /**
   * Sets or gets whether the tower stands or lies: vertical, red at the top, or horizontal, red on the left.
   * Default value: vertical
   */
  orientation?: StackLightOrientation | string;
  /**
   * Sets or gets whether a legend beside the tower names each segment and says whether it is off, on or flashing.
   * Default value: false
   */
  showLabels?: boolean;
  /**
   * Sets or gets the duration of one flash in milliseconds. A fast segment flashes at half this duration. The shortest rate used is 667 ms, so that the fast flash stays at or below three flashes a second (WCAG 2.3.1); a smaller value is raised to it, with one console warning. The component writes the value to the --smart-stack-flash-rate variable on itself at every redraw, so set this property rather than the variable.
   * Default value: 800
   */
  flashRate?: number;
  /**
   * Sets or gets whether every change of the light's description is announced through the live region. Off by default, because an andon board contains many lights and a screen reader user reads the one they open.
   * Default value: false
   */
  announceChanges?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the accessible name, the state words on, flashing, flashing fast and off, the horn, the colour names and the legend. Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
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
 StackLight displays the tower light of a machine as a column of coloured segments that can be off, on, flashing or flashing fast, with an optional horn. The segments can be set individually or derived from a state word such as running, starved or fault through the stateMap property. The default map follows the common production floor convention and the PackML vocabulary. Pressing the horn raises the muteRequest event for the application to handle. The describe() method returns the current state of the light as text and is used as the accessible name.
*/
export interface StackLight extends BaseElement, StackLightProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the state word changes.
	* @param event. The custom event. Custom data event was created with: ev.detail(state, oldState)
   *  state - The new state word.
   *  oldState - The previous state word.
   */
  onStateChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a segment is clicked. While anything listens for it, the segments are keyboard buttons - one tab stop, the arrow keys along the tower, Enter or Space to press - and the tower is a group; with no listener it is an image. It is not raised while the light is disabled.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, state)
   *  id - The segment's id.
   *  state - Its state: off, on, flash or fast.
   */
  onSegmentClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the horn is pressed while it is sounding. The application silences the horn and sets the horn property to muted. It is raised once per sounding: a second press before the application answers with a new horn value, or within five seconds, asks nothing. It is not raised while the light is disabled.
	* @param event. The custom event. Custom data event was created with: ev.detail(label)
   *  label - The light's label.
   */
  onMuteRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns the state of one segment, off, on, flash or fast, or null for an id the tower does not have.
   * @param {string} id. The segment's id.
   * @returns {string}
   */
  segmentState(id: string): string;
  /**
   * Returns the segments that are lit, top first, as drawn: { id, color, label, state }.
   * @returns {any}
   */
  activeSegments(): any;
  /**
   * Returns the current state of the light as text, which is also the text given to assistive technology: the lit segments and their states, the horn and the state word.
   * @returns {string}
   */
  describe(): string;
  /**
   * Returns what the state word asks for that the tower cannot show - <em>{ state, unknown: true }</em> for a word the map does not know, <em>{ state, missing }</em> for one whose lit segments the tower does not have - or null when the tower shows it.
   * @returns {any}
   */
  unshown(): any;
  /**
   * Redraws the component from its current properties.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-stack-light"): StackLight;
        querySelector(selectors: "smart-stack-light"): StackLight | null;
        querySelectorAll(selectors: "smart-stack-light"): NodeListOf<StackLight>;
        getElementsByTagName(qualifiedName: "smart-stack-light"): HTMLCollectionOf<StackLight>;
        getElementsByName(elementName: "smart-stack-light"): NodeListOf<StackLight>;
    }
}

/**Sets or gets the horn state: off, on or muted. The horn is shown while it is on or muted. Pressing it while it is on raises the muteRequest event; the application responds by setting the horn to muted. */
export declare type StackLightHorn = 'off' | 'on' | 'muted';
/**Sets or gets whether the tower stands or lies: vertical, red at the top, or horizontal, red on the left. */
export declare type StackLightOrientation = 'vertical' | 'horizontal';
