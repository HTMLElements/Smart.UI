import  {BaseElement, Animation} from "./smart.element"

export interface CauseEffectMatrixProperties {
  /**
   * Enables or disables the component. A disabled matrix takes its cells out of the tab order and raises no cellClick, causeClick, effectClick or selectionChange event.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the rows: { id, tag, label, active, bypassed, activeSince }. An active cause tints its row; a bypassed one is marked and does not count towards an expected trip. active and bypassed written as the text "false", "0", "no" or "off" are false. activeSince (a Date, epoch milliseconds or ISO text) is when the cause became active, used for timed trips; without it the component counts from when it first saw the cause active. Entries that are not objects are ignored. Assign a new array to update the component; the keyboard stays on the same cell across an update.
   * Default value: 
   */
  causes?: any;
  /**
   * Sets or gets the columns: { id, tag, label, tripped }. A tripped effect tints its column. tripped written as the text "false", "0", "no" or "off" is false.
   * Default value: 
   */
  effects?: any;
  /**
   * Sets or gets the links: { cause, effect, mark, delay, note }. mark is X, T, P, A or any short text the marks property explains; delay is the seconds of a timed trip: a tripping link with a delay is expected only once its cause has been active that long, and until then the effect is shown as 'timed trip due in N s' (a dashed outline), not as a discrepancy; the component redraws itself when the trip falls due. note is read with the cell.
   * Default value: 
   */
  matrix?: any;
  /**
   * Sets or gets the meaning of the marks: { X: { label, trips } }, where trips says whether the mark means the effect is expected when the cause is active. Null is the standard set: X trip, T timed trip, P permissive, A alarm only. An object replaces the standard set; a mark it does not list, or an entry without trips: false, counts as a trip.
   * Default value: null
   */
  marks?: any;
  /**
   * Sets or gets the selected cell as { cause, effect }, or null.
   * Default value: null
   */
  selected?: any;
  /**
   * Sets or gets the name of the system, part of the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets whether the marks in use and the three states are explained under the chart.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Sets or gets whether the rows of active causes and the columns of tripped effects are tinted.
   * Default value: true
   */
  highlightActive?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the accessible names of the chart, its headers and cells, the mark names, the state words and the legend. Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
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
 CauseEffectMatrix displays the cause and effect chart of a safety instrumented system as a live matrix. Causes are rows, effects are columns, and each cell shows the mark that links them: X for a trip, T for a timed trip, P for a permissive and A for an alarm only. Active causes and tripped effects are highlighted, bypassed causes are marked, and the component reports a discrepancy when an effect is tripped without an active cause or expected to trip but is not. The causes, effects, links and states are supplied by the application from the safety controller; the component does not apply any logic or bypass itself.
*/
export interface CauseEffectMatrix extends BaseElement, CauseEffectMatrixProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a different cell is selected by a click or by keyboard focus. Setting the selected property does not raise it.
	* @param event. The custom event. Custom data event was created with: ev.detail(cause, effect, mark, link)
   *  cause - The cause's id.
   *  effect - The effect's id.
   *  mark - The link's mark, or null where there is no link.
   *  link - The link as it was given, or null.
   */
  onSelectionChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a cell is clicked, or Enter or Space is pressed on it.
	* @param event. The custom event. Custom data event was created with: ev.detail(cause, effect, mark, link)
   *  cause - The cause's id.
   *  effect - The effect's id.
   *  mark - The link's mark, or null where there is no link.
   *  link - The link as it was given, or null.
   */
  onCellClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a cause's header is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(cause, links)
   *  cause - The cause's id.
   *  links - Its links, each with its effect id.
   */
  onCauseClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an effect's header is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(effect, causes, expected)
   *  effect - The effect's id.
   *  causes - The links to it, each with its cause id.
   *  expected - Whether the chart expects it to be tripped now.
   */
  onEffectClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns the links of a cause, as given, each with its effect id.
   * @param {string} causeId. The cause's id.
   * @returns {any}
   */
  linksFor(causeId: string): any;
  /**
   * Returns the links to an effect, as given, each with its cause id.
   * @param {string} effectId. The effect's id.
   * @returns {any}
   */
  causesOf(effectId: string): any;
  /**
   * Returns whether an effect is expected to be tripped now: an active, unbypassed cause links to it with a mark that trips, and, for a link with a delay, the cause has been active for at least that delay.
   * @param {string} effectId. The effect's id.
   * @returns {boolean}
   */
  expected(effectId: string): boolean;
  /**
   * Returns the effects whose state does not match the chart, as <em>[{ effect, expected, tripped }]</em>: expected to trip but not tripped, or tripped with no active cause. An effect whose timed trip is still counting down is not a discrepancy.
   * @returns {any}
   */
  discrepancies(): any;
  /**
   * Redraws the component from its current properties.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-cause-effect-matrix"): CauseEffectMatrix;
        querySelector(selectors: "smart-cause-effect-matrix"): CauseEffectMatrix | null;
        querySelectorAll(selectors: "smart-cause-effect-matrix"): NodeListOf<CauseEffectMatrix>;
        getElementsByTagName(qualifiedName: "smart-cause-effect-matrix"): HTMLCollectionOf<CauseEffectMatrix>;
        getElementsByName(elementName: "smart-cause-effect-matrix"): NodeListOf<CauseEffectMatrix>;
    }
}

