import  {BaseElement, Animation} from "./smart.element"

export interface SequenceEditorProperties {
  /**
   * Sets or retrieves the id of the step being run. Null when nothing is running.
   * Default value: null
   */
  currentStep?: any;
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets a function (step, value) that returns true, false, or undefined to fall back to the built-in limit forms. Only needed for a limit that cannot be expressed as a range or as a nominal value with a tolerance.
   * Default value: null
   */
  limitEvaluator?: any;
  /**
   * Sets or retrieves whether the sequence is being edited or run.
   * Default value: edit
   */
  mode?: SequenceEditorMode | string;
  /**
   * Sets or gets the number of decimal places used when a measurement is shown.
   * Default value: 3
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves whether the result column is shown. The property is read when the default columns are built, so set it before the component is initialized. Boolean attributes are presence-based, so the column cannot be turned off from markup.
   * Default value: true
   */
  showResults?: boolean;
  /**
   * Sets or retrieves the sequence as [{ id, name, action, unit, min, max, nominal, tolerance, value, skipped, aborted }]. Only id is required. A step with neither a range nor a nominal value is an action rather than a measurement: it can run but cannot fail on a value. The state of a step is derived from its measurement and its limit, so updating the measurement updates the verdict. Assign a new array to update the component.
   * Default value: 
   */
  steps?: any;
  /**
   * Sets or retrieves whether a failed step aborts the rest of the run.
   * Default value: false
   */
  stopOnFailure?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the column headers, the step states, the limit words and the accessible name (17 keys: columnStep, columnAction, columnLimit, columnValue, columnResult, pending, ..). Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
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
 SequenceEditor is a step sequence editor and runner for test sequences, batch procedures and recipes. It extends Table, so sorting, column resizing, virtualization, state persistence and export are inherited. Each step has a limit defined as a range or a nominal value with a tolerance, and the component evaluates the results against the limits, runs the sequence through its run state machine and produces a report. The component does not execute steps: it raises stepStart and waits for the application to call setResult. A custom limit evaluator can be supplied through the limitEvaluator property. Every Table property, method and event - columns, paging, sorting, filtering, selection, exportData and the rest - applies to the sequence editor as well; see the Table API.
*/
export interface SequenceEditor extends BaseElement, SequenceEditorProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the run finishes or is aborted.
	* @param event. The custom event. Custom data event was created with: ev.detail(aborted, report)
   *  aborted - Whether it was aborted rather than completed.
   *  report - The full record.
   */
  onSequenceComplete?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the run is paused.
	* @param event. The custom event. Custom data event was created with: ev.detail(step)
   *  step - The step it paused at.
   */
  onSequencePause?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a measurement is recorded against a step.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, state, passed, step)
   *  id - The step's id.
   *  state - The state it settled into.
   *  passed - Whether it passed.
   *  step - The step that completed.
   */
  onStepComplete?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when setResult is called for a step that is not the one running. The result is not recorded and the run does not move.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, value, current)
   *  id - The step the result was for.
   *  value - The result that was refused.
   *  current - The step that is running.
   */
  onResultRefused?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the run reaches a step. The application performs the measurement and calls setResult; the component waits and does not execute anything itself.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, step, index)
   *  id - The step's id.
   *  step - The step.
   *  index - Its position in the sequence.
   */
  onStepStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Stops the run and marks every step that has not run as aborted, so that the report shows that the run did not finish.
   */
  abort(): void;
  /**
   * Returns the limit of a step as it appears on a specification sheet: a range, a single bound, or a nominal value with a tolerance. An invalid limit is written with "(invalid limit)" after it, and warned about once in the console.
   * @param {any} step. The step.
   * @returns {string}
   */
  limitText(step: any): string;
  /**
   * Pauses the run at the current step.
   */
  pause(): void;
  /**
   * Returns the record of the run: the verdict, the number of steps in each state, and every step with its limit and measurement. A run passes only when no step failed and no step was left unrun.
   * @returns {any}
   */
  report(): any;
  /**
   * Starts the run at the first pending step and raises the stepStart event. Does nothing when the sequence is already running.
   */
  run(): void;
  /**
   * Records a measurement for a step and moves to the next step. While a step is current, only that step takes a result: a result for another step is refused, raises resultRefused, changes nothing and returns false. A non-numeric result is kept and shown, and the step is marked as not evaluated rather than as passed or failed.
   * @param {string | number} id. The step's id. Always identify a step by id and never by row index, the table sorts, so an index stops meaning anything the moment a column header is clicked.
   * @param {any} value. The measurement.
   * @returns {boolean}
   */
  setResult(id: string | number, value: any): boolean;
  /**
   * Marks a step as not run and moves to the next step when the sequence is running.
   * @param {string | number} id. The step's id.
   */
  skip(id: string | number): void;
  /**
   * Returns the state of a step: pending, running, passed, failed, skipped, aborted or notEvaluated. The state is derived from the measurement and the limit. A step with a limit whose result cannot be judged against it - NaN, Infinity, a text such as n/a, or a limit that is itself invalid (a minimum above the maximum, a negative tolerance) - is notEvaluated, never passed; a report with such a step has not passed.
   * @param {any} step. The step.
   * @returns {string}
   */
  stateOf(step: any): string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-sequence-editor"): SequenceEditor;
        querySelector(selectors: "smart-sequence-editor"): SequenceEditor | null;
        querySelectorAll(selectors: "smart-sequence-editor"): NodeListOf<SequenceEditor>;
        getElementsByTagName(qualifiedName: "smart-sequence-editor"): HTMLCollectionOf<SequenceEditor>;
        getElementsByName(elementName: "smart-sequence-editor"): NodeListOf<SequenceEditor>;
    }
}

/**Sets or retrieves whether the sequence is being edited or run. */
export declare type SequenceEditorMode = 'edit' | 'run';
