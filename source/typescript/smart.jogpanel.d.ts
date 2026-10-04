import  {BaseElement, Animation} from "./smart.element"

export interface JogPanelProperties {
  /**
   * Sets or retrieves the axes as [{ id, label, unit, position, homed, min, max, state }]. position, homed and state are reported by the drive; min and max are soft limits. Setting the same axes again, in the same order, updates the rows in place as update() does and keeps a jog in progress; setting different axes ends it. For a running feed use update().
   * Default value: 
   */
  axes?: any;
  /**
   * Sets or retrieves the selected step: 0 for continuous jogging, otherwise an increment in the axis unit. Changing the step ends a jog in progress. The step is kept to what the panel offers: 0 only while allowContinuous is true, otherwise a positive size no larger than the largest of steps. Anything else - a negative, 0 with Continuous switched off, a size larger than any offered - becomes the smallest step offered.
   * Default value: 0
   */
  step?: number;
  /**
   * Sets or retrieves the step sizes offered.
   * Default value: 0.01,0.1,1,10
   */
  steps?: any;
  /**
   * Determines whether Continuous is offered as a step. Off, every jog is a step: a step of 0 becomes the smallest step offered, a continuous jog in progress ends, and jogStart() does nothing.
   * Default value: true
   */
  allowContinuous?: boolean;
  /**
   * Sets or retrieves the speed override, in percent, sent with every jog. Kept above 0 and no higher than the largest of speeds (100 when none is offered); anything else becomes the slowest speed offered.
   * Default value: 25
   */
  speed?: number;
  /**
   * Sets or retrieves the speed overrides offered, in percent.
   * Default value: 10,25,50,100
   */
  speeds?: any;
  /**
   * Sets or retrieves the unit for axes that name none.
   * Default value: "mm"
   */
  unit?: string;
  /**
   * Sets or retrieves the decimal places in the position readout.
   * Default value: 3
   */
  precisionDigits?: number;
  /**
   * Determines whether each axis has a home button.
   * Default value: true
   */
  showHome?: boolean;
  /**
   * Determines whether the Stop button is shown. Escape stops either way.
   * Default value: true
   */
  showStop?: boolean;
  /**
   * Determines whether the panel is interlocked, the machine not in manual, a guard open. An interlocked panel ends any jog in progress, stays readable, shows interlockReason, and raises blocked instead of moving anything.
   * Default value: false
   */
  interlocked?: boolean;
  /**
   * Sets or retrieves why the panel will not jog, shown under it while interlocked and read out when a button is pressed.
   * Default value: ""
   */
  interlockReason?: string;
  /**
   * Sets or retrieves the name of the mechanism the panel moves, shown in the header and used in the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the target size. touch makes the jog buttons 60px high for a gloved hand.
   * Default value: normal
   */
  density?: JogPanelDensity | string;
  /**
   * Enables or disables the component. A disabled panel cannot jog, step or home, but its Stop button stays enabled: a stop must always be possible. Prefer interlocked for a panel that must not move anything right now, it shows the reason.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. The position readout and the step sizes use the locale's decimal separator.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the accessible names, the step and speed titles, the hints and the refusal reasons. Used in conjunction with the property locale.
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
 JogPanel is the manual motion panel of a machine pendant. It shows one row per axis with the current position, jog minus and jog plus buttons and a home button, a step selector (continuous or a fixed increment), a speed override and a stop button. The component reports the operator actions through events; the positions are supplied by the application from the drive. A continuous jog raises jogStart and jogStop and is always ended when the pointer or key is released, focus is lost, an interlock is set or the stop button is pressed. Soft limits prevent jogging past the limit. The window losing the focus or the page being hidden also ends a continuous jog, and the Stop button stays enabled while the panel is disabled. In a narrow cell the buttons of an axis wrap under its position readout.
*/
export interface JogPanel extends BaseElement, JogPanelProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a continuous jog begins. jogStop always follows.
	* @param event. The custom event. Custom data event was created with: ev.detail(axis, direction, speed)
   *  axis - The axis id.
   *  direction - 1 or -1.
   *  speed - The speed override, in percent.
   */
  onJogStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a continuous jog ends, for any reason.
	* @param event. The custom event. Custom data event was created with: ev.detail(axis, direction, duration)
   *  axis - The axis id.
   *  direction - 1 or -1.
   *  duration - How long it ran, in milliseconds.
   */
  onJogStop?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when one increment is requested.
	* @param event. The custom event. Custom data event was created with: ev.detail(axis, direction, step, speed)
   *  axis - The axis id.
   *  direction - 1 or -1.
   *  step - The increment, in the unit.
   *  speed - The speed override, in percent.
   */
  onJogStep?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a home is requested.
	* @param event. The custom event. Custom data event was created with: ev.detail(axis)
   *  axis - The axis id, or null for all.
   */
  onHomeRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered by the Stop button, Escape, or stop().
	* @param event. The custom event.    */
  onStop?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a step is selected.
	* @param event. The custom event. Custom data event was created with: ev.detail(step, previousStep)
   *  step - The step, 0 for continuous.
   *  previousStep - The step before.
   */
  onStepChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a speed is selected.
	* @param event. The custom event. Custom data event was created with: ev.detail(speed, previousSpeed)
   *  speed - The speed, in percent.
   *  previousSpeed - The speed before.
   */
  onSpeedChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a jog, step or home is refused. Nothing moves.
	* @param event. The custom event. Custom data event was created with: ev.detail(reason, axis)
   *  reason - Why, the interlock reason, the axis already jogging, or the limit.
   *  axis - The axis id, or null.
   */
  onBlocked?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Updates one axis with the values reported by the drive (position, homed, state, min, max, label, unit) and updates its row in place. Intended for a position subscription. A jog into a limit that the update reports as reached is ended.
   * @param {string} id. The axis.
   * @param {any} patch. The fields to change.
   */
  update(id: string, patch: any): void;
  /**
   * Returns the axes as the panel holds them, with everything update() has reported.
   * @returns {any}
   */
  axisList(): any;
  /**
   * Begins a continuous jog, as holding a jog button does. The jog ends with jogStop(). The request is refused, with the blocked event, while the panel is interlocked, while another axis is jogging, or when the jog would move into a soft limit. Does nothing while allowContinuous is false.
   * @param {string} id. The axis.
   * @param {number} direction. 1 or -1.
   * @returns {boolean}
   */
  jogStart(id: string, direction: number): boolean;
  /**
   * Ends the continuous jog in progress, if there is one.
   * @returns {boolean}
   */
  jogStop(): boolean;
  /**
   * Requests one increment of the selected step, as pressing a jog button does when a step is selected. Does nothing when the step is continuous.
   * @param {string} id. The axis.
   * @param {number} direction. 1 or -1.
   * @returns {boolean}
   */
  jogStep(id: string, direction: number): boolean;
  /**
   * Returns the continuous jog in progress as { axis, direction }, or null.
   * @returns {any}
   */
  activeJog(): any;
  /**
   * Requests a homing cycle for one axis, or for all axes when no axis is given. Refused while the panel is interlocked or while an axis is jogging.
   * @param {string} id?. The axis. Omit for all.
   * @returns {boolean}
   */
  home(id?: string): boolean;
  /**
   * Ends a jog in progress and raises the stop event for everything else that moves.
   */
  stop(): void;
  /**
   * Rebuilds the panel from its properties.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-jog-panel"): JogPanel;
        querySelector(selectors: "smart-jog-panel"): JogPanel | null;
        querySelectorAll(selectors: "smart-jog-panel"): NodeListOf<JogPanel>;
        getElementsByTagName(qualifiedName: "smart-jog-panel"): HTMLCollectionOf<JogPanel>;
        getElementsByName(elementName: "smart-jog-panel"): NodeListOf<JogPanel>;
    }
}

/**Sets or retrieves the target size. touch makes the jog buttons 60px high for a gloved hand. */
export declare type JogPanelDensity = 'normal' | 'touch';
