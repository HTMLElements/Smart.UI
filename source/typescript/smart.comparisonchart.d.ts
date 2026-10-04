import  {BaseElement, Animation} from "./smart.element"

export interface ComparisonChartProperties {
  /**
   * Sets or retrieves the items, as [{ field, label, value, unit, color }]. field is the key push() and Connect.stream() fill; label is what the bar is called; unit and color override the chart's for one item. An item without a value is listed as unknown rather than drawn as zero. Assign a new array to update the component.
   * Default value: 
   */
  items?: any;
  /**
   * Sets or retrieves how the items are drawn: as bars, or as a donut of shares of one whole with the total in the hole. A value below zero has no share of a whole, so while any value is negative the items are drawn as bars, no shares are given in the table, and the total line says so.
   * Default value: bars
   */
  kind?: ComparisonChartKind | string;
  /**
   * Sets or retrieves which way the bars run. Horizontal reads long names without tilting them; vertical suits a few items and a Pareto chart's running share.
   * Default value: horizontal
   */
  orientation?: ComparisonChartOrientation | string;
  /**
   * Sets or retrieves the order of the bars: as listed, largest first or smallest first. An item without a value goes last either way.
   * Default value: none
   */
  sort?: ComparisonChartSort | string;
  /**
   * Sets or retrieves whether the chart is a Pareto chart: largest first, with the running share of the total - a line over upright bars, a figure beside sideways ones - so the few items that make up most of the whole stand out. With a value below zero there is no running share, and the line or figure is left out.
   * Default value: false
   */
  pareto?: boolean;
  /**
   * Sets or retrieves the bottom of the scale. A value below it is not clipped: the scale extends down to a round number under the smallest value, and a negative bar runs from zero the other way.
   * Default value: 0
   */
  min?: number;
  /**
   * Sets or retrieves the top of the scale. Empty takes a round number above the largest value and the limit.
   * Default value: null
   */
  max?: number;
  /**
   * Sets or retrieves a value the bars are held against - a budget, a target - drawn as a dashed line. A bar past it takes the warning colour and its row in the table says so. Empty for none.
   * Default value: null
   */
  limit?: number;
  /**
   * Sets or retrieves the name written at the limit line. Empty writes the limit's value.
   * Default value: ""
   */
  limitLabel?: string;
  /**
   * Sets or retrieves the unit written after every value and the total.
   * Default value: ""
   */
  unit?: string;
  /**
   * Sets or retrieves the digits after the point. Empty chooses once for the whole chart, so the readouts do not jitter between updates: none when every value is whole or the largest is 100 or more, one otherwise.
   * Default value: null
   */
  precisionDigits?: number;
  /**
   * Sets or retrieves whether each bar's value is written at its end.
   * Default value: true
   */
  showValues?: boolean;
  /**
   * Sets or retrieves how many slices a donut draws before it folds the smallest items into one "other" slice.
   * Default value: 6
   */
  maxSlices?: number;
  /**
   * Sets or retrieves the heading of the chart. It is also the caption of the table a screen reader reads.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves whether the chart is disabled.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves whether the chart can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 ComparisonChart puts like values side by side - energy per line, output per shift, downtime per cause, the share of each product in a day - and answers which is the biggest, and by how much. Bars by default, horizontal so the names read without tilting a head, or vertical; sorted when asked, or as a Pareto chart with the running share. A limit draws a line and marks the bars past it, and nothing else is coloured. A donut shows shares of one whole with the total in the hole, folding the smallest items into one "other" slice. Values arrive through push(record), which is what Connect.stream() calls, so each bar can follow its own tag. Every figure is also in a table a screen reader reads.
*/
export interface ComparisonChart extends BaseElement, ComparisonChartProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Takes a record of values by field and shows them: <em>chart.push({ line2: 421 })</em>. It is what Connect.stream() calls with one record per interval, so each bar can follow its own tag. Fields the chart has no item for are ignored; an item the record does not name keeps its value.
   * @param {any} record. { field: value, ... }
   */
  push(record: any): void;
  /**
   * Empties every value and keeps the items.
   */
  clear(): void;
  /**
   * Returns what the chart shows as one sentence: how many items, the highest and its value, the total and how many are past the limit. It is the accessible name of the chart.
   * @returns {string}
   */
  describe(): string;
}

declare global {
    interface Document {
        createElement(tagName: "smart-comparison-chart"): ComparisonChart;
        querySelector(selectors: "smart-comparison-chart"): ComparisonChart | null;
        querySelectorAll(selectors: "smart-comparison-chart"): NodeListOf<ComparisonChart>;
        getElementsByTagName(qualifiedName: "smart-comparison-chart"): HTMLCollectionOf<ComparisonChart>;
        getElementsByName(elementName: "smart-comparison-chart"): NodeListOf<ComparisonChart>;
    }
}

/**Sets or retrieves how the items are drawn: as bars, or as a donut of shares of one whole with the total in the hole. A value below zero has no share of a whole, so while any value is negative the items are drawn as bars, no shares are given in the table, and the total line says so. */
export declare type ComparisonChartKind = 'bars' | 'donut';
/**Sets or retrieves which way the bars run. Horizontal reads long names without tilting them; vertical suits a few items and a Pareto chart's running share. */
export declare type ComparisonChartOrientation = 'horizontal' | 'vertical';
/**Sets or retrieves the order of the bars: as listed, largest first or smallest first. An item without a value goes last either way. */
export declare type ComparisonChartSort = 'none' | 'descending' | 'ascending';
