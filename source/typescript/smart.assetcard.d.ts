import  {BaseElement, Animation} from "./smart.element"

export interface AssetCardProperties {
  /**
   * Sets or retrieves the name of the asset. It is the heading of the card and its accessible name.
   * Default value: ""
   */
  name?: string;
  /**
   * Sets or retrieves the asset's identifier, as the plant's maintenance system knows it.
   * Default value: ""
   */
  assetId?: string;
  /**
   * Sets or retrieves the maker and model.
   * Default value: ""
   */
  model?: string;
  /**
   * Sets or retrieves where the asset stands.
   * Default value: ""
   */
  location?: string;
  /**
   * Sets or retrieves the machine's state. Only fault, maintenance and offline are marked; running and stopped are text.
   * Default value: running
   */
  state?: AssetCardState | string;
  /**
   * Sets or retrieves the run hours, from the PLC's counter.
   * Default value: 0
   */
  runHours?: number;
  /**
   * Sets or retrieves the number of starts, from the PLC's counter. Null hides it.
   * Default value: null
   */
  starts?: number;
  /**
   * Sets or retrieves the hours between services. 0 for an asset without an hours-based interval, which the card says rather than drawing an empty bar.
   * Default value: 0
   */
  serviceInterval?: number;
  /**
   * Sets or retrieves the run hours at the last service. The next is due at this plus the interval. When runHours is below it - a counter reset or replaced, or a service entered wrong - the card says the counter needs checking instead of showing a full interval.
   * Default value: 0
   */
  lastServiceHours?: number;
  /**
   * Sets or retrieves when the last service was done, as an ISO date.
   * Default value: ""
   */
  lastServiceDate?: string;
  /**
   * Sets or retrieves who did the last service.
   * Default value: ""
   */
  lastServiceBy?: string;
  /**
   * Sets or retrieves how much of the interval is left, as a fraction, when the service is marked due soon.
   * Default value: 0.1
   */
  dueSoon?: number;
  /**
   * Sets or retrieves the condition readings as [{ label, value, unit, status, limit, direction }]. status is normal, warning or alarm; a reading out of band says so in words, with its limit. A warning names its side: direction 'high' or 'low' when given, otherwise high when a numeric value is above its limit and low when below it, and 'warning' when neither can be told.
   * Default value: 
   */
  condition?: any;
  /**
   * Sets or retrieves the work orders as [{ id, title, status, priority, due }]. Done orders are not listed. Assign a new array to update the component.
   * Default value: 
   */
  workOrders?: any;
  /**
   * Sets or retrieves whether the card shows only the name, the state and the service: for a wall of assets.
   * Default value: false
   */
  compact?: boolean;
  /**
   * Sets or retrieves whether the card only shows. Request work and Record service are removed; work orders can still be opened.
   * Default value: false
   */
  readOnly?: boolean;
  /**
   * Sets or retrieves whether the application is sending a request or recording a service. Send and Record wait.
   * Default value: false
   */
  busy?: boolean;
  /**
   * Sets or retrieves whether the card is disabled. A disabled card disables its buttons and fields, which takes them out of the tab order, and raises no event - not from the keyboard either (Ctrl+Enter in an open request form sends nothing).
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves whether the card can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 AssetCard is one machine as maintenance sees it: how long it has run, when it is next due for service, how it is doing and what is open against it. Its first job is to answer "is it due" in hours - the service bar fills as the interval is used and says in words how much is left or by how much it is overdue. Colour is for what is abnormal: a service due soon or overdue, a condition reading out of band, a machine in fault. Request work and Record service raise events; the application puts them where the plant keeps its maintenance.
*/
export interface AssetCard extends BaseElement, AssetCardProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the operator sends a request for work on the asset.
	* @param event. The custom event. Custom data event was created with: ev.detail(assetId, text, priority)
   *  assetId - The asset's identifier.
   *  text - What needs doing.
   *  priority - high, normal or low.
   */
  onWorkOrderRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a service is recorded, after the confirmation. The card does not restart the interval itself: the application records it and sets lastServiceHours.
	* @param event. The custom event. Custom data event was created with: ev.detail(assetId, runHours)
   *  assetId - The asset's identifier.
   *  runHours - The run hours the service was done at.
   */
  onServiceRecord?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a work order is opened from the card, for the application to show it.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, assetId)
   *  id - The id of the work order.
   *  assetId - The asset's identifier.
   */
  onWorkOrderOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-asset-card"): AssetCard;
        querySelector(selectors: "smart-asset-card"): AssetCard | null;
        querySelectorAll(selectors: "smart-asset-card"): NodeListOf<AssetCard>;
        getElementsByTagName(qualifiedName: "smart-asset-card"): HTMLCollectionOf<AssetCard>;
        getElementsByName(elementName: "smart-asset-card"): NodeListOf<AssetCard>;
    }
}

/**Sets or retrieves the machine's state. Only fault, maintenance and offline are marked; running and stopped are text. */
export declare type AssetCardState = 'running' | 'stopped' | 'fault' | 'maintenance' | 'offline';
