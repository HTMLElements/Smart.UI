import  {BaseElement, Animation} from "./smart.element"

export interface ControlChartProperties {
  /**
   * Sets or retrieves which chart is drawn. The shape of data follows from it: an array of subgroups (arrays of readings) for xbar-r and xbar-s, an array of individual readings for i-mr, and an array of counts for the attribute charts, defectives per sample for p and np, defects per unit for c and u.
   * Default value: i-mr
   */
  type?: ControlChartType | string;
  /**
   * Sets or retrieves the measurements, in the format expected by type. Assign a new array to update the component; an array modified in place is deep-equal to the current one and does not trigger a redraw. A missing reading (null, an empty string) and, on an X-bar chart, a subgroup with fewer than two readings are left off the chart; the sample numbers on the axis and in the violation list stay those of data.
   * Default value: 
   */
  data?: any;
  /**
   * Sets or retrieves the sample size for the p, np and u charts, as one number or as an array with one entry per sample when the size varies. With unequal sample sizes the limits of a p chart differ from sample to sample and are drawn as steps.
   * Default value: null
   */
  sampleSize?: any;
  /**
   * Sets or retrieves the number of initial points used to establish the control limits. 0 uses every point. In practice, limits are established from a baseline phase and then held, because a chart that recomputes its limits on every new point cannot signal a shift.
   * Default value: 0
   */
  baselineCount?: number;
  /**
   * Sets or retrieves held limits for the primary chart as { center, ucl, lcl, sigma }, which replace the computed limits. Set by freezeLimits, or by an application that established limits in a qualification run and monitors against them. The secondary chart keeps its computed limits.
   * Default value: null
   */
  limits?: any;
  /**
   * Sets or retrieves the run rules to test: nelson (eight rules), westernElectric (four rules), both, none, or an array of rule names as listed by Smart.Industrial.spc.ruleNames. Rules are identified by name because the numbering differs between sources. On an attribute chart with unequal samples there is no single sigma, so only the limit test is applied, point by point against the limits of that point.
   * Default value: nelson
   */
  ruleSet?: any;
  /**
   * Determines whether the matching R, S or moving range chart is drawn below the primary chart. Its own points beyond its own limits count as violations too: variation out of control is as much a signal as a shifted mean.
   * Default value: true
   */
  showSecondary?: boolean;
  /**
   * Determines whether the one, two and three sigma zones on either side of the centre line are shaded, so that the zone of a point can be read from the chart.
   * Default value: true
   */
  showZones?: boolean;
  /**
   * Sets or retrieves the specification limits as { lsl, usl, target }. They are drawn on the primary chart in their own line style, labelled USL and LSL, and used for the capability readout. They are not used for the control limits or the run rules: control limits describe what the process does, and specification limits describe what the customer requires.
   * Default value: null
   */
  specLimits?: any;
  /**
   * Determines whether Cp, Cpk, Pp, Ppk and the expected defect rate are shown under the chart. Requires specLimits and a variables chart; capability indices are not defined for attribute charts and are not shown for them.
   * Default value: true
   */
  showCapability?: boolean;
  /**
   * Determines whether the header, chart type, centre line, limits, subgroup size, baseline or held state, and the in-control status, is shown.
   * Default value: true
   */
  showStats?: boolean;
  /**
   * Determines whether the points that violate a rule are listed as text under the chart, each with the rules it violates. The list is what a screen reader and a report receive; the marks on the canvas show the same information graphically.
   * Default value: true
   */
  showViolations?: boolean;
  /**
   * Sets or retrieves the name of the characteristic being charted, shown in the header and in the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the engineering unit, shown beside the centre line value.
   * Default value: ""
   */
  unit?: string;
  /**
   * Sets or retrieves how many decimal places the limits, ticks and annotations are printed with.
   * Default value: 2
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves the radius of a point marker in pixels. An offending point is drawn larger, in the limit colour, with a ring.
   * Default value: 3.5
   */
  markerSize?: number;
  /**
   * Sets or retrieves the width of the trace in pixels.
   * Default value: 1.5
   */
  lineWidth?: number;
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
   * Sets or gets an object specifying the strings used by the component, the chart type names, the limit labels, the status words and the rule names. Used in conjunction with the property locale.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component. With no theme of its own the component takes the nearest themed ancestor's palette for its series and limit colours.
   * Default value: ""
   */
  theme?: string;
}
/**
 ControlChart is a Shewhart control chart for statistical process control. It supports the X-bar/R, X-bar/S and I-MR variable charts and the p, np, c and u attribute charts, each with its range, standard deviation or moving range chart, and applies the Nelson or Western Electric run rules to every point. Points that violate a rule are marked on the chart, listed as text and raised as an event. Control limits are computed from a baseline or set directly, and specification limits are drawn separately and used for the Cp and Cpk readout. All statistics are computed by Smart.Industrial.spc.
*/
export interface ControlChart extends BaseElement, ControlChartProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the set of offending points changes, after new data, new limits or a different rule set, and not on every redraw. It fires with a count of zero when the chart returns to control.
	* @param event. The custom event. Custom data event was created with: ev.detail(violations, count)
   *  violations - The offending points as [{ index, point, rules, chart }], where index is the position in data, point the position on the chart, and chart is 'secondary' for a point on the range, S or moving range chart.
   *  count - How many points are out of control.
   */
  onViolation?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns the computed primary chart as <em>{ type, points, center, ucl, lcl, sigma, n, secondary, held }</em>, as returned by Smart.Industrial.spc, with held limits applied. <em>ucl</em> and <em>lcl</em> are arrays when the sample size varies.
   * @returns {any}
   */
  chart(): any;
  /**
   * Returns which points on the primary chart break which rules, as [{ index, point, rules }]: <em>index</em> is the position in <em>data</em> of the sample or subgroup that broke the rule, <em>point</em> its position on the chart. They differ when the chart leaves a missing reading or an incomplete subgroup out. A point that breaks nothing is not in the list.
   * @returns {any}
   */
  violations(): any;
  /**
   * Returns the points on the secondary chart, the range, standard deviation or moving range, that lie beyond its own limits, as [{ index, point, rules }]. <em>index</em> is the position in <em>data</em>; a moving range belongs to the later of its two readings.
   * @returns {any}
   */
  secondaryViolations(): any;
  /**
   * Returns the process capability against the specification limits as <em>{ n, mean, sigmaWithin, sigmaOverall, cp, cpk, pp, ppk, ppm }</em>, or null without specification limits or for an attribute chart. Sigma within is the estimate the chart is built on: S-bar / c4 for <em>xbar-s</em>, R-bar / d2 for <em>xbar-r</em> and the average moving range / d2 for <em>i-mr</em>.
   * @returns {any}
   */
  capability(): any;
  /**
   * Holds the limits currently shown by the chart, so that data arriving after this point is judged against them instead of changing them. Sets the limits property and returns it.
   * @returns {any}
   */
  freezeLimits(): any;
  /**
   * Rebuilds the header, capability readout and violation list, and redraws both plots.
   */
  redraw(): void;
  /**
   * Redraws the plots on the next animation frame, so that many changes between two frames cost one draw.
   */
  invalidate(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-control-chart"): ControlChart;
        querySelector(selectors: "smart-control-chart"): ControlChart | null;
        querySelectorAll(selectors: "smart-control-chart"): NodeListOf<ControlChart>;
        getElementsByTagName(qualifiedName: "smart-control-chart"): HTMLCollectionOf<ControlChart>;
        getElementsByName(elementName: "smart-control-chart"): NodeListOf<ControlChart>;
    }
}

/**Sets or retrieves which chart is drawn. The shape of data follows from it: an array of subgroups (arrays of readings) for xbar-r and xbar-s, an array of individual readings for i-mr, and an array of counts for the attribute charts, defectives per sample for p and np, defects per unit for c and u. */
export declare type ControlChartType = 'xbar-r' | 'xbar-s' | 'i-mr' | 'p' | 'np' | 'c' | 'u';
