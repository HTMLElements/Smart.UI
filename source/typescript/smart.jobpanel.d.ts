import  {BaseElement, Animation} from "./smart.element"

export interface JobPanelProperties {
  /**
   * Sets or retrieves the jobs as [{ id, name, enabled, when, action, lastRun, lastResult, runs, error }]. when is { daily: 'hh:mm' }, { weekly: { days, at } }, { every: milliseconds } or { cron }, and may carry text - the words the station's own schedule reader made of it, shown in place of the expression. action is { kind: 'recipe', recipe }, { kind: 'write', tag, value } or { kind: 'flow', flow }. lastResult is { ok, error }. The shape is what a Scada Studio station returns from /api/jobs. Assign a new array to update the component.
   * Default value: 
   */
  jobs?: any;
  /**
   * Sets or retrieves the heading of the panel. It is also the accessible name of the group.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves whether the panel only shows the jobs. The Run now and Enable/Disable buttons are removed rather than disabled, because a control that cannot be used should not invite a press; every job and how it last went stays readable.
   * Default value: false
   */
  readOnly?: boolean;
  /**
   * Sets or retrieves whether the Enable/Disable button is offered. Running a job and changing what the station does on its own are different rights - an operator may run the night setback early, only an engineer may switch it off - so an application can give the first without the second. When false the button is removed rather than disabled.
   * Default value: true
   */
  allowToggle?: boolean;
  /**
   * Sets or retrieves the id of the job the application is running now. Its row says so and its button cannot be pressed twice. The application sets it on jobRun and clears it when the run comes back. From a jobRun until the application sets running, or for two seconds when it never does, the panel raises no other jobRun - so a held Enter or a double click runs a job once.
   * Default value: ""
   */
  running?: string;
  /**
   * Sets or retrieves whether running a job by hand asks first. The confirmation says what the job does. A job writes into a plant, and running the night setback in the middle of the afternoon is a thing to be sure about, so this is on by default. The confirmation runs exactly what it showed: the job's action is copied when it opens, so a jobs update while it is open cannot change what Run it sends. A job that has left the station by then is not run. Escape, Cancel and Run it give the focus back to the Run now button.
   * Default value: true
   */
  confirm?: boolean;
  /**
   * Sets or retrieves whether the panel is disabled.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves whether the panel can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 JobPanel shows what a station does on its own - the jobs it runs because of the clock rather than because of a person - with what each does, when it runs and how it went last time. A job that failed says so where it is read, not only in a log, and a switched-off job keeps its place and recedes, in the secondary text colour, rather than disappearing. The panel never runs anything: Run now raises the jobRun event and the switch raises jobToggle, and the application does the work through the station, which records who asked. Times read in 24 hours, and a job update keeps the keyboard focus on the button it was on.
*/
export interface JobPanel extends BaseElement, JobPanelProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the operator runs a job by hand, after the confirmation when one is asked for. The component does not run it: the application asks the station to, sets the running property while it does, and hands back the updated jobs. It cannot know who is pressing the button or how the run should be audited, so it does not pretend to. Raised once per press: a held key or a double click does not raise it again.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, name, action)
   *  id - The id of the job.
   *  name - The name of the job, as the operator saw it.
   *  action - What the job does, as it was given in <em>jobs</em>.
   */
  onJobRun?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the operator switches a job on or off. The list is not changed; the application stores the change on the station and hands back the updated jobs. A second click on the same switch within a second is the same press and raises nothing.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, name, enabled)
   *  id - The id of the job.
   *  name - Its name.
   *  enabled - Whether the job is asked to be on: true to switch it on, false to switch it off.
   */
  onJobToggle?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-job-panel"): JobPanel;
        querySelector(selectors: "smart-job-panel"): JobPanel | null;
        querySelectorAll(selectors: "smart-job-panel"): NodeListOf<JobPanel>;
        getElementsByTagName(qualifiedName: "smart-job-panel"): HTMLCollectionOf<JobPanel>;
        getElementsByName(elementName: "smart-job-panel"): NodeListOf<JobPanel>;
    }
}

