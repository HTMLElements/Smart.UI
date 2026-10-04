import  {BaseElement, Animation} from "./smart.element"

export interface AnnunciatorProperties {
  /**
   * Sets or retrieves how many tiles are laid out per row.
   * Default value: 4
   */
  columns?: number;
  /**
   * Enables or disables the component. A disabled panel disables its tiles, which leaves them out of the tab order, and raises no acknowledge, reset or tileClick event.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the tile states (including unknown), the acknowledge and reset hints shown as the tooltip of a tile a press acts on, and the accessible names (9 keys: normal, alarm, ack, ringback, unknown, panelLabel, acknowledgeHint, resetHint, tileLabel). Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or retrieves the minimum height of a tile in pixels.
   * Default value: 64
   */
  tileHeight?: number;
  /**
   * Sets or retrieves the monitored conditions. Each entry is an object with: id - the identifier of the tile, returned in the events; label - the tile legend; detail - an optional second line, typically the tag; state - one of normal, alarm, ack or ringback, in any case. A tile without a state is normal; any other word is shown as an unknown state (dashed and hatched, read out as 'Unknown state') rather than as a normal tile, cannot be acknowledged, and makes the panel's state attribute 'unknown' unless a tile is in alarm. Assign a new array to update the component, or call redraw after modifying the array in place; an array that is deep-equal to the current one does not trigger a redraw. The keyboard stays on the same tile across an update.
   * Default value: 
   */
  tiles?: any;
  /**
   * If is set to true, the component cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Annunciator displays a wall of tiles, one per monitored condition, following the ISA-18.1 alarm sequence: normal, alarm (unacknowledged, blinking fast), acknowledged (steady) and ringback (cleared but not reset, blinking slowly). Pressing a tile raises an event to acknowledge the alarm or reset the ringback; the application returns the updated tile list.
*/
export interface Annunciator extends BaseElement, AnnunciatorProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when an operator presses a tile that is in the alarm state, or through acknowledgeAll. One press raises one event: the repeats of a held Enter or Space are ignored, and the same tile pressed again within 600 ms (a double click) is not acknowledged twice.
	* @param event. The custom event. Custom data event was created with: ev.detail(tile)
   *  tile - The tile being acknowledged.
   */
  onAcknowledge?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an operator presses a tile that is in the ringback state, the condition has cleared and the operator is resetting it. As with acknowledge, one press raises one event.
	* @param event. The custom event. Custom data event was created with: ev.detail(tile)
   *  tile - The tile being reset.
   */
  onReset?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a tile is pressed, in any state. It follows the acknowledge or reset event when one of those applies.
	* @param event. The custom event. Custom data event was created with: ev.detail(tile)
   *  tile - The tile that was pressed.
   */
  onTileClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Raises the acknowledge event once for every tile in the alarm state. Nothing is raised while the panel is disabled. The component does not change the tiles.
   */
  acknowledgeAll(): void;
  /**
   * Redraws the panel. Only needed after the tiles array has been modified in place instead of replaced.
   */
  redraw(): void;
  /**
   * Returns how many tiles are in each state, as { normal, alarm, ack, ringback, unknown }. A state word the panel does not know is counted as unknown.
   * @returns {any}
   */
  stateCounts(): any;
  /**
   * Returns the state of a tile as the panel reads it: normal, alarm, ack or ringback in any case, normal when the tile has no state, and unknown for any other word.
   * @param {any} tile. A tile record.
   * @returns {string}
   */
  stateOf(tile: any): string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-annunciator"): Annunciator;
        querySelector(selectors: "smart-annunciator"): Annunciator | null;
        querySelectorAll(selectors: "smart-annunciator"): NodeListOf<Annunciator>;
        getElementsByTagName(qualifiedName: "smart-annunciator"): HTMLCollectionOf<Annunciator>;
        getElementsByName(elementName: "smart-annunciator"): NodeListOf<Annunciator>;
    }
}

