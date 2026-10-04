import  {BaseElement, Animation} from "./smart.element"

export interface OrderQueueProperties {
  /**
   * Sets or retrieves the orders as [{ id, product, quantity, unit, due, recipe, status, produced, started, finished }], the shape a Scada Studio station returns from /api/orders. status is queued, running, paused, done or aborted. Assign a new array to update the component.
   * Default value: 
   */
  orders?: any;
  /**
   * Sets or retrieves the heading of the queue. It is also the accessible name of the group.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the line's rate in units an hour, for the projection. Left 0, the rate is the running order's own so far, once it has run five minutes and made something.
   * Default value: 0
   */
  rate?: number;
  /**
   * Sets or retrieves whether finished and aborted orders are listed under the queue.
   * Default value: true
   */
  showFinished?: boolean;
  /**
   * Sets or retrieves whether the queue only shows the orders. Every button is removed.
   * Default value: false
   */
  readOnly?: boolean;
  /**
   * Sets or retrieves the id of the order the application is acting on. Its buttons wait. The queue also sets it itself as it raises orderAction, so a double press is one action even when the application sets busy only after an await. It is released when the application sets busy, refuses (errorMessage) or hands back the order changed, or after ten seconds.
   * Default value: ""
   */
  busy?: string;
  /**
   * Sets or retrieves the reason the station refused an action. It is shown as an alert and announced.
   * Default value: ""
   */
  errorMessage?: string;
  /**
   * Sets the reason the station refused an action, by its earlier name: it sets errorMessage. Reading it returns the element's error-reporting method, which reads as the message where text is wanted; read errorMessage for the message.
   * Default value: ""
   */
  error?: string;
  /**
   * Sets or retrieves whether the queue is disabled.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves whether the queue can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 OrderQueue shows what a line is making, how far along it is, and what comes next. The order on the line comes first, with its count against its quantity and, once it has run long enough to have a rate, when it will be done at that rate against when it is due. Start is offered on each queued order and refused, with the reason, while another order is on the line; Complete and Abort ask first, because a finished order is not started again. The component changes nothing: every button raises orderAction, and the application asks the station, which loads the order's recipe as it starts it and counts from the line's counter.
*/
export interface OrderQueue extends BaseElement, OrderQueueProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the operator starts, pauses, resumes, completes or aborts an order - after the confirmation, for complete and abort. The queue is not changed: the application asks the station and hands back the orders. A double press raises one action, and the answer to Complete or Abort has to be a second decision: the second click of the double-click that asked, or a press within 300 ms of the question, is not an answer.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, action)
   *  id - The id of the order.
   *  action - start, pause, resume, complete or abort.
   */
  onOrderAction?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-order-queue"): OrderQueue;
        querySelector(selectors: "smart-order-queue"): OrderQueue | null;
        querySelectorAll(selectors: "smart-order-queue"): NodeListOf<OrderQueue>;
        getElementsByTagName(qualifiedName: "smart-order-queue"): HTMLCollectionOf<OrderQueue>;
        getElementsByName(elementName: "smart-order-queue"): NodeListOf<OrderQueue>;
    }
}

