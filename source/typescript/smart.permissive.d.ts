import  {BaseElement, Animation} from "./smart.element"

export interface PermissiveProperties {
  /**
   * Sets or retrieves the conditions as [{ id, label, satisfied, required, bypassed, bypassedBy, tag, value, description, timestamp }]. required defaults to true; an advisory condition is listed but never blocks. timestamp is the time the condition last changed state and is used to determine the first-out condition. Assign a new array to update the component. Flags given as text, as a tag database may hand them over, are read as such: 'false', '0', 'no', 'off' and '' are not set.
   * Default value: 
   */
  conditions?: any;
  /**
   * Sets or retrieves the type of the list. A permissive list gates a start, and the verdict reads ready or not permitted. An interlock list trips a running device, the verdict reads healthy or tripped, and the first-out condition is marked.
   * Default value: permissive
   */
  mode?: PermissiveMode | string;
  /**
   * Sets or retrieves the title of the list, usually the device name and the purpose of the list.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines whether the earliest unsatisfied required condition, by timestamp, is marked as first-out. Applies in interlock mode only. Conditions without a timestamp cannot be first-out, and a tie is reported as no first-out.
   * Default value: true
   */
  showFirstOut?: boolean;
  /**
   * Determines whether met conditions are listed. When off, a long list shows only the conditions that block; the verdict still counts every condition.
   * Default value: true
   */
  showSatisfied?: boolean;
  /**
   * Determines whether each condition shows how long it has been in its state, from its timestamp. The ages tick without the rows being rebuilt.
   * Default value: true
   */
  showTimestamps?: boolean;
  /**
   * Determines whether a bypass control is offered on each required condition that blocks, and a removal control on each bypassed one. The control raises bypassRequest and changes nothing itself.
   * Default value: false
   */
  allowBypass?: boolean;
  /**
   * Determines whether a change of verdict is read through the live region, assertively for a trip, politely otherwise.
   * Default value: true
   */
  announceChanges?: boolean;
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the verdicts, the state words, the badges and the ages. Used in conjunction with the property locale.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
}
/**
 Permissive displays a list of conditions that a start requires or that a running device depends on, with whether each condition is met. Required conditions that are not met block the start, bypassed conditions count as met and are listed separately, and advisory conditions never block. In interlock mode the condition that went unhealthy first is marked from the timestamps supplied by the application. A bypass request raises the bypassRequest event and is not applied by the component.
*/
export interface Permissive extends BaseElement, PermissiveProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the verdict changes, a start becomes possible or a device trips, and not on every redraw. It also fires when the list is emptied (ready false, nothing blocking) and when it is filled again.
	* @param event. The custom event. Custom data event was created with: ev.detail(ready, blocking, firstOut)
   *  ready - Whether every required condition is met or bypassed.
   *  blocking - The ids of the required conditions not met.
   *  firstOut - The id of the first-out condition, or null.
   */
  onReadyChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a bypass control is pressed. The list is not changed; the application applies the bypass, records who applied it, and returns an updated list. It is raised once per press: the control waits for the application's updated list, or five seconds, before it asks again. Each bypass control is named after its condition.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, bypass, condition)
   *  id - The condition's id.
   *  bypass - True to apply a bypass, false to remove one.
   *  condition - The condition as the application supplied it.
   */
  onBypassRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a condition row is clicked, so that the application can open the faceplate or trend of the tag.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, condition)
   *  id - The condition's id.
   *  condition - The condition as the application supplied it.
   */
  onConditionClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns a summary of the list as <em>{ total, required, satisfied, unsatisfied, bypassed, ready, blocking, firstOut }</em>, where <em>blocking</em> is the ids of the required conditions that are not met and <em>firstOut</em> is an id or null. With no conditions, ready is false: an empty list permits nothing.
   * @returns {any}
   */
  summary(): any;
  /**
   * Returns the condition with the given id, as the application supplied it, or null.
   * @param {string} id. The condition's id.
   * @returns {any}
   */
  conditionById(id: string): any;
  /**
   * Rebuilds the header and the list.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-permissive"): Permissive;
        querySelector(selectors: "smart-permissive"): Permissive | null;
        querySelectorAll(selectors: "smart-permissive"): NodeListOf<Permissive>;
        getElementsByTagName(qualifiedName: "smart-permissive"): HTMLCollectionOf<Permissive>;
        getElementsByName(elementName: "smart-permissive"): NodeListOf<Permissive>;
    }
}

/**Sets or retrieves the type of the list. A permissive list gates a start, and the verdict reads ready or not permitted. An interlock list trips a running device, the verdict reads healthy or tripped, and the first-out condition is marked. */
export declare type PermissiveMode = 'permissive' | 'interlock';
