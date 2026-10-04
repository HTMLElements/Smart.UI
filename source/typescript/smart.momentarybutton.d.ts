import  {BaseElement, Animation} from "./smart.element"

export interface MomentaryButtonProperties {
  /**
   * Sets or retrieves the word on the button. It carries the meaning the kind colour cannot.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the action mode. momentary raises press and release as they happen; hold raises activate after holdDuration and reports an early release; confirm arms on the first press and raises activate on a second press within confirmTimeout. A confirm press counts when it is let go of on the button; a press that slides off, is cancelled or is ended by an interlock neither arms nor activates.
   * Default value: momentary
   */
  mode?: MomentaryButtonMode | string;
  /**
   * Sets or retrieves how long a hold-mode button must be held before it acts, in milliseconds.
   * Default value: 1000
   */
  holdDuration?: number;
  /**
   * Sets or retrieves how long a confirm-mode button stays armed after the first press, in milliseconds. The timeout disarms it without acting.
   * Default value: 5000
   */
  confirmTimeout?: number;
  /**
   * Sets or retrieves the button style following the colour conventions of push button panels: a green ring for a start button, a red ring for a stop button, and a round mushroom head for an emergency stop. The colour is applied to the ring, not the whole face, so the label stays readable.
   * Default value: normal
   */
  kind?: MomentaryButtonKind | string;
  /**
   * Sets or retrieves the device feedback reported by the plant, as a word such as running, stopped, open, closed or fault, shown as a lit lamp. An empty value shows no lamp. The property is set by the application from the feedback tag, not by the button. The button is announced as pressed (aria-pressed) only while the state is an on word - anything but stopped, closed, off, fault, tripped or unknown.
   * Default value: ""
   */
  state?: string;
  /**
   * Determines whether the button is interlocked. An interlocked button stays readable and focusable, shows interlockReason, ends any press in progress without acting, disarms an armed button, and raises blocked instead of acting.
   * Default value: false
   */
  interlocked?: boolean;
  /**
   * Sets or retrieves why the button will not act, shown under it while interlocked and read out when pressed.
   * Default value: ""
   */
  interlockReason?: string;
  /**
   * Sets or retrieves the target size. touch makes the button 60px high for a gloved hand.
   * Default value: normal
   */
  density?: MomentaryButtonDensity | string;
  /**
   * Enables or disables the component. Prefer interlocked for a button that must not act right now, it shows the reason. Disabling a button while it is held ends the press at once, as a cancelled press.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the accessible name, the hints and the blocked message. Used in conjunction with the property locale.
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
 MomentaryButton is an operator button with three action modes. In momentary mode the button acts while it is pressed and stops when it is released. In hold mode the action starts only after the button has been held for holdDuration, shown by a progress ring. In confirm mode the action requires a second press within confirmTimeout. An interlocked button stays readable, shows the reason and raises the blocked event when pressed. The state property shows the device feedback as a lamp and is set by the application.
*/
export interface MomentaryButton extends BaseElement, MomentaryButtonProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a momentary button is pressed.
	* @param event. The custom event. Custom data event was created with: ev.detail(at)
   *  at - The time of the press, in milliseconds since the epoch.
   */
  onPress?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a momentary button is released, or a hold button is let go before holdDuration.
	* @param event. The custom event. Custom data event was created with: ev.detail(duration, early)
   *  duration - How long it was held, in milliseconds.
   *  early - true when a hold was let go too early to act.
   */
  onRelease?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a hold button has been held for holdDuration, or a confirm button is pressed the second time.
	* @param event. The custom event. Custom data event was created with: ev.detail(mode, duration)
   *  mode - 'hold' or 'confirm'.
   *  duration - The hold duration met, for a hold.
   */
  onActivate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a confirm button is pressed the first time.
	* @param event. The custom event. Custom data event was created with: ev.detail(timeout)
   *  timeout - How long it stays armed, in milliseconds.
   */
  onArm?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an armed confirm button times out or is disarmed without acting.
	* @param event. The custom event.    */
  onDisarm?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an interlocked button is pressed. Nothing acts.
	* @param event. The custom event. Custom data event was created with: ev.detail(reason)
   *  reason - The interlockReason.
   */
  onBlocked?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Begins a press, as a pointer or the keyboard would. The method is public so that an application can drive the button from its own input, for example a physical key on a pendant. It does nothing while the button is pressed, disabled or interlocked; an interlocked button raises the blocked event. A button that is not on a page cannot be pressed.
   */
  press(): void;
  /**
   * Ends a press. A release always follows a press, so a momentary action is always stopped. A press also ends at once, as a cancelled press, when the button is removed or moved to another parent, disabled, hidden, when the focus or the pointer leaves it, or when the window loses the focus or the page is hidden. A cancelled press releases a momentary button and ends a hold early, but is not a step of a confirm. A second finger on a held button neither presses nor releases it, and a held key that repeats does not press again.
   */
  release(): void;
  /**
   * Returns whether the button is currently pressed.
   * @returns {boolean}
   */
  isPressed(): boolean;
  /**
   * Returns whether a confirm-mode button is armed and waiting for its second press.
   * @returns {boolean}
   */
  isArmed(): boolean;
  /**
   * Disarms a button in confirm mode without activating it.
   */
  disarm(): void;
  /**
   * Rebuilds the button from its properties.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-momentary-button"): MomentaryButton;
        querySelector(selectors: "smart-momentary-button"): MomentaryButton | null;
        querySelectorAll(selectors: "smart-momentary-button"): NodeListOf<MomentaryButton>;
        getElementsByTagName(qualifiedName: "smart-momentary-button"): HTMLCollectionOf<MomentaryButton>;
        getElementsByName(elementName: "smart-momentary-button"): NodeListOf<MomentaryButton>;
    }
}

/**Sets or retrieves the action mode. momentary raises press and release as they happen; hold raises activate after holdDuration and reports an early release; confirm arms on the first press and raises activate on a second press within confirmTimeout. A confirm press counts when it is let go of on the button; a press that slides off, is cancelled or is ended by an interlock neither arms nor activates. */
export declare type MomentaryButtonMode = 'momentary' | 'hold' | 'confirm';
/**Sets or retrieves the button style following the colour conventions of push button panels: a green ring for a start button, a red ring for a stop button, and a round mushroom head for an emergency stop. The colour is applied to the ring, not the whole face, so the label stays readable. */
export declare type MomentaryButtonKind = 'normal' | 'start' | 'stop' | 'emergency';
/**Sets or retrieves the target size. touch makes the button 60px high for a gloved hand. */
export declare type MomentaryButtonDensity = 'normal' | 'touch';
