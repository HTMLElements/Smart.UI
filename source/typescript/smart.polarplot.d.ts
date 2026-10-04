import  {BaseElement, Animation} from "./smart.element"

export interface PolarPlotProperties {
  /**
   * Enables or disables the element. Disabled, the plot leaves the tab order, the legend buttons are disabled, and no cursorChange or plotVisibilityChange is raised; enabled again, all of it comes back.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the plots. Each is an object with id, label, color, lineWidth, visible, style (line or points), closed (joins the last point to the first) and either angles and radii or x and y about the centre. A point without a reading - null, NaN or an infinite value on either axis - is a gap in the trace: not drawn, not read by the cursor, not in the radius range, and counted in the readout and the accessible name ("no reading at 2 of 360 points"), with one console warning. An item that is not an object is skipped, with one console warning.
   * Default value: 
   */
  plots?: any;
  /**
   * Sets or retrieves the markers: named points, each an object with label, color and either angle and radius or x and y. They are drawn on the plot and listed under it. An item that is not an object is skipped, with one console warning.
   * Default value: 
   */
  markers?: any;
  /**
   * Sets or retrieves the unit of angles given and shown.
   * Default value: deg
   */
  angleUnit?: PolarPlotAngleUnit | string;
  /**
   * Sets or retrieves where angle zero points.
   * Default value: right
   */
  angleOrigin?: PolarPlotAngleOrigin | string;
  /**
   * Sets or retrieves the direction angles increase in.
   * Default value: counterclockwise
   */
  angleDirection?: PolarPlotAngleDirection | string;
  /**
   * Sets or retrieves the radius at the centre. Null uses zero, or the smallest negative value in the data. A value that is not a finite number is ignored; set above radiusMax, the two are swapped. Each is said once in a console warning.
   * Default value: null
   */
  radiusMin?: number;
  /**
   * Sets or retrieves the radius at the rim. Null follows the data, rounded up to a nice number. A value that is not above the centre (radiusMin equal to radiusMax, for one) leaves no radius axis, so it is ignored and the rim follows the data; this, a value that is not a finite number, and limits set the wrong way round (swapped) are each said once in a console warning.
   * Default value: null
   */
  radiusMax?: number;
  /**
   * Sets or retrieves the unit of the radius, used in the ring labels and the readouts.
   * Default value: ""
   */
  radiusUnit?: string;
  /**
   * Shows the rings and the spokes.
   * Default value: true
   */
  showGrid?: boolean;
  /**
   * Shows the legend, where a plot is hidden and shown.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Sets or retrieves the angle of the cursor, which reads every plot. Null hides it. The cursor is placed by clicking the plot and moved with the arrow keys; the arrows rotate it on screen, the same in a right-to-left layout. Where a plot has nothing drawn at the cursor's angle - beyond the ends of an open trace, or across a gap - its reading is "--".
   * Default value: null
   */
  cursor?: number;
  /**
   * Enables placing and moving the cursor with the pointer and the keyboard.
   * Default value: true
   */
  interactive?: boolean;
  /**
   * Sets or retrieves the title shown above the plot and used in the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the number of significant digits in radii. Held to 1 to 21; a value outside that, or not a number (4 is then used), is said once in a console warning.
   * Default value: 4
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves the line width of the plots, in pixels. A plot can carry its own.
   * Default value: 1.6
   */
  lineWidth?: number;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the element - the legend, marker, cursor and gap texts and the summary, with chartSummaryOne for a single plot. Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the element.
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 PolarPlot displays data on a circular grid: a radius against an angle, or an x and a y about a centre. It is the orbit a pair of proximity probes draws of a shaft, the pattern an antenna radiates and the round-out a dial indicator records. Angles start to the right or at the top and run counterclockwise or clockwise. The radius axis can start below zero, so a pattern in dBi reads its floor at the centre. Markers name a point, and a cursor at an angle reads every plot's radius there.
*/
export interface PolarPlot extends BaseElement, PolarPlotProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the cursor is placed or moved by the operator.
	* @param event. The custom event. Custom data event was created with: ev.detail(angle)
   *  angle - The cursor angle, in the element's angle unit.
   */
  onCursorChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a plot is hidden or shown from the legend.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, visible)
   *  id - The plot.
   *  visible - Whether it is now shown.
   */
  onPlotVisibilityChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns a plot's radius at an angle, interpolated between the neighbouring points that span it - from the last point back to the first only when the plot is closed, as drawn. Returns NaN where the plot has nothing drawn at that angle: beyond the ends of an open trace, across a gap, or for an unknown plot.
   * @param {string} id. The plot.
   * @param {number} angle. In the element's angle unit.
   * @returns {number}
   */
  valueAt(id: string, angle: number): number;
  /**
   * Shows or hides a plot.
   * @param {string} id. The plot.
   * @param {boolean} visible?. Shown when true, hidden when false; toggled when omitted.
   */
  togglePlot(id: string, visible?: boolean): void;
  /**
   * Returns a sentence describing what the plot shows, as used in its accessible name: the number of plots, the radius range, where the largest radius is, and how many points of a plot have no reading.
   * @returns {string}
   */
  describe(): string;
  /**
   * Redraws the element from its current properties.
   */
  redraw(): void;
  /**
   * Redraws the plot on the next animation frame, so that many changes between two frames cost one draw.
   */
  invalidate(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-polar-plot"): PolarPlot;
        querySelector(selectors: "smart-polar-plot"): PolarPlot | null;
        querySelectorAll(selectors: "smart-polar-plot"): NodeListOf<PolarPlot>;
        getElementsByTagName(qualifiedName: "smart-polar-plot"): HTMLCollectionOf<PolarPlot>;
        getElementsByName(elementName: "smart-polar-plot"): NodeListOf<PolarPlot>;
    }
}

/**Sets or retrieves the unit of angles given and shown. */
export declare type PolarPlotAngleUnit = 'deg' | 'rad';
/**Sets or retrieves where angle zero points. */
export declare type PolarPlotAngleOrigin = 'right' | 'top';
/**Sets or retrieves the direction angles increase in. */
export declare type PolarPlotAngleDirection = 'counterclockwise' | 'clockwise';
