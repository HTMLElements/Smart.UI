import  {BaseElement, Animation} from "./smart.element"

export interface StateMachineProperties {
  /**
   * Sets or retrieves the state model. packml and isa88 include the states, commands and automatic transitions of their standards; custom uses the states and transitions properties.
   * Default value: packml
   */
  model?: StateMachineModel | string;
  /**
   * Sets or retrieves the states of a custom model as [{ id, label, kind, x, y }]. kind is wait for a state the machine stays in and acting for a state it passes through; x and y are grid positions on the diagram.
   * Default value: 
   */
  states?: any;
  /**
   * Sets or retrieves the transitions of a custom model as [{ from, to, command, many }]. A transition without a command is automatic and is taken when the acting state completes. many marks a command that is valid from many states; it is listed under its target state instead of being drawn as an arrow from each state. The command list of the model is derived from the transitions.
   * Default value: 
   */
  transitions?: any;
  /**
   * Sets or retrieves the current state's id, as the controller reports it. A change is stamped, recorded in the history and raised as stateChange.
   * Default value: ""
   */
  state?: string;
  /**
   * Sets or retrieves the time the current state was entered, as a timestamp. When the application sets enteredAt and state together, in either order in the same task, that time is kept for the new state and the previous state's duration is measured to it; a state change that comes without a time is stamped with the time of the change. When the state comes first, its stateChange event carries the time of the change and the history takes the controller's time when enteredAt follows. A controller that reports the time should supply it, so that the time in state is correct after a page reload.
   * Default value: null
   */
  enteredAt?: number;
  /**
   * Sets or retrieves the unit mode. Production, Maintenance, Manual, shown beside the state. PackML keeps mode and state orthogonal, and so does this.
   * Default value: ""
   */
  mode?: string;
  /**
   * Sets or retrieves the unit modes offered as buttons. Pressing one raises the modeRequest event; the mode does not change until the application reports it.
   * Default value: 
   */
  modes?: any;
  /**
   * Sets or retrieves the view. diagram draws the whole model; compact hides the diagram and keeps the header with the state, its time and the mode, the mode buttons, the command bar and the history, for a faceplate or a machine list.
   * Default value: diagram
   */
  view?: StateMachineView | string;
  /**
   * Determines whether the command bar is shown. Every command of the model is listed and only the commands that are valid from the current state are enabled.
   * Default value: true
   */
  showCommands?: boolean;
  /**
   * Determines whether the transitions taken are listed, newest first, with the time each state lasted.
   * Default value: true
   */
  showHistory?: boolean;
  /**
   * Sets or retrieves how many transitions the history keeps.
   * Default value: 8
   */
  historyLength?: number;
  /**
   * Determines whether commands and modes can be requested from the component.
   * Default value: true
   */
  interactive?: boolean;
  /**
   * Sets or retrieves whether a command is out and the controller has not answered. The component sets it when it raises commandRequest and clears it when the state changes or pendingTimeout runs out; the application may set it too - true while it writes, false when a write failed. While busy, the command sent and every other command except Stop and Abort are refused, so a second press of Start is not a second write. Stop and Abort stay available.
   * Default value: false
   */
  busy?: boolean;
  /**
   * Sets or retrieves how long a command waits for the controller's answer, in milliseconds, before it is dropped as unanswered with commandTimeout.
   * Default value: 10000
   */
  pendingTimeout?: number;
  /**
   * Sets or retrieves the commands that take two presses, for example ['Stop', 'Abort']. The first press arms the button and a second within five seconds sends it; the second click of a double-click, a press within 300 ms of the first and a held key do not count. Empty by default.
   * Default value: 
   */
  confirmCommands?: any;
  /**
   * Sets or retrieves the machine's name, shown in the header and in the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines whether a reported change of state is read through the live region, assertively for Aborting and Aborted.
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
   * Sets or gets an object specifying the strings used by the component, one key per standard state and command, the header, the durations and the accessible names. Used in conjunction with the property locale.
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
 StateMachine displays the state model of a machine as a diagram with the current state highlighted, the time in the state, the unit mode and the commands that are available from the current state. The PackML / ISA-TR88.00.02 model with its seventeen states and nine commands and the ISA-88 procedural model are built in, and a custom model can be supplied. A command press raises the commandRequest event; the application reports the state the controller reached. The canCommand(), target() and nextAutomatic() methods answer from the model, and the transitions taken are listed.
*/
export interface StateMachine extends BaseElement, StateMachineProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a valid command is pressed. The state does not change; the application sends the command to the controller and reports the state it reaches. Until the controller answers (a change of state) or pendingTimeout runs out, the component is busy and refuses the same command and every other one except Stop and Abort.
	* @param event. The custom event. Custom data event was created with: ev.detail(command, from, to)
   *  command - The command.
   *  from - The current state.
   *  to - The state the model says the command leads to.
   */
  onCommandRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the controller did not answer a command - the state did not change - within pendingTimeout. The command is dropped, busy is cleared and the component says so.
	* @param event. The custom event. Custom data event was created with: ev.detail(command, state)
   *  command - The command that was not answered.
   *  state - The state the controller still reports.
   */
  onCommandTimeout?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a unit mode button is pressed. The mode does not change until the application reports it.
	* @param event. The custom event. Custom data event was created with: ev.detail(mode, from)
   *  mode - The mode asked for.
   *  from - The mode in force.
   */
  onModeRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the state property changes, when the application reports a new state.
	* @param event. The custom event. Custom data event was created with: ev.detail(from, to, at, duration)
   *  from - The state left.
   *  to - The state entered.
   *  at - When, as a timestamp.
   *  duration - How long the state left lasted, in milliseconds.
   */
  onStateChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns the transitions legal from a state, as [{ from, to, command }].
   * @param {string} state?. A state id. Defaults to the current state.
   * @returns {any}
   */
  transitionsFrom(state?: string): any;
  /**
   * Returns the state a command leads to from a state, or null when the command is not legal there.
   * @param {string} command. The command.
   * @param {string} state?. A state id. Defaults to the current state.
   * @returns {string}
   */
  target(command: string, state?: string): string;
  /**
   * Returns whether a command is legal from the current state.
   * @param {string} command. The command.
   * @returns {boolean}
   */
  canCommand(command: string): boolean;
  /**
   * Returns the commands legal from the current state, in the model's order.
   * @returns {any}
   */
  commands(): any;
  /**
   * Returns the state an acting state completes into, or null for a wait state.
   * @param {string} state?. A state id. Defaults to the current state.
   * @returns {string}
   */
  nextAutomatic(state?: string): string;
  /**
   * Returns the transitions taken, newest first, as [{ from, to, at, duration }].
   * @returns {any}
   */
  history(): any;
  /**
   * Returns the time spent in the current state, in milliseconds.
   * @returns {number}
   */
  timeInState(): number;
  /**
   * Returns the command sent and not yet answered by the controller, or null.
   * @returns {string}
   */
  pending(): string;
  /**
   * Rebuilds the header, diagram, command bar and history.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-state-machine"): StateMachine;
        querySelector(selectors: "smart-state-machine"): StateMachine | null;
        querySelectorAll(selectors: "smart-state-machine"): NodeListOf<StateMachine>;
        getElementsByTagName(qualifiedName: "smart-state-machine"): HTMLCollectionOf<StateMachine>;
        getElementsByName(elementName: "smart-state-machine"): NodeListOf<StateMachine>;
    }
}

/**Sets or retrieves the state model. packml and isa88 include the states, commands and automatic transitions of their standards; custom uses the states and transitions properties. */
export declare type StateMachineModel = 'packml' | 'isa88' | 'custom';
/**Sets or retrieves the view. diagram draws the whole model; compact hides the diagram and keeps the header with the state, its time and the mode, the mode buttons, the command bar and the history, for a faceplate or a machine list. */
export declare type StateMachineView = 'diagram' | 'compact';
