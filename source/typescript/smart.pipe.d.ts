import  {BaseElement, Animation} from "./smart.element"

export interface PipeProperties {
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves whether the segment turns a corner, and which way.
   * Default value: none
   */
  elbow?: PipeElbow | string;
  /**
   * Sets or retrieves whether the line is carrying flow. A flowing pipe animates a marching dash and takes the active colour. With reduced motion the dash stands still and chevrons show the direction.
   * Default value: false
   */
  flowing?: boolean;
  /**
   * Sets or retrieves the direction of the segment.
   * Default value: horizontal
   */
  orientation?: PipeOrientation | string;
  /**
   * Sets or retrieves whether the flow animation runs the other way, for a line that returns.
   * Default value: false
   */
  reverse?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the flow states and the accessible name with the direction of flow (8 keys: flowing, idle, pipeLabel, flowingFromTo, sideLeft, sideRight, sideTop, sideBottom). Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or retrieves the stroke width of the line in pixels. The stroke does not scale with the segment, so a long run has the same weight as a short one. 1 to 64; a value that is not a number draws the default 3. The direction chevrons are sized from it.
   * Default value: 3
   */
  thickness?: number;
  /**
   * If is set to true, the component cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Pipe displays a section of process line on a mimic diagram. It has a flow state and direction, and an in-service state. A flowing pipe animates a dashed line in the direction of flow; where the user has asked for reduced motion (prefers-reduced-motion) the line stands still and chevrons along it point the way the flow goes, so forward and reverse still look different. Pipe segments stretch to fill their container so a run can be built on a grid. A pipe is decoration and hidden from assistive technology; given role="img", it is named from its messages with the direction of flow - "Process line, flowing from the left to the right" - unless it has an aria-label of its own.
*/
export interface Pipe extends BaseElement, PipeProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Redraws the pipe.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-pipe"): Pipe;
        querySelector(selectors: "smart-pipe"): Pipe | null;
        querySelectorAll(selectors: "smart-pipe"): NodeListOf<Pipe>;
        getElementsByTagName(qualifiedName: "smart-pipe"): HTMLCollectionOf<Pipe>;
        getElementsByName(elementName: "smart-pipe"): NodeListOf<Pipe>;
    }
}

/**Sets or retrieves whether the segment turns a corner, and which way. */
export declare type PipeElbow = 'none' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
/**Sets or retrieves the direction of the segment. */
export declare type PipeOrientation = 'horizontal' | 'vertical';
