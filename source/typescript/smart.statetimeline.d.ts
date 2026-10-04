import  {BaseElement, Animation} from "./smart.element"

export interface StateTimelineProperties {
  /**
   * Enables or disables the component. Disabled, the timeline is dimmed, no segment is a tab stop, and neither a click nor a key selects a segment or raises segmentClick or selectionChange.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the rows, one per machine: { id, label, segments }, each segment { state, from, to, reason } with times in milliseconds since the epoch. A segment without to is open: it runs until the next segment in time, or to the end of the window. Segments may come in any order and are drawn and counted in time order; where two overlap, the one later in the array (the one pushed later) wins its interval and the earlier keeps what is left on either side, so no instant is counted twice and the time in each state never adds up to more than the window. A segment with no length is dropped. An item that is not usable - null, not an object, a segment with no state, a from that is not a time or a to before it - is skipped with one console warning per array. Assign a new array to update the component.
   * Default value: 
   */
  rows?: any;
  /**
   * Sets or gets the segments of a single machine, drawn as one row named by label, when there are no rows. The id of that row is 'row', whatever the label: pass 'row' to summary(), segmentAt() and push() to reach it. The segments are normalised as in rows.
   * Default value: 
   */
  segments?: any;
  /**
   * Sets or gets the vocabulary: { id, label, color }, or just an id (a string or a number), where color is ok, warning, critical, accent, neutral, off or any CSS colour. A state the vocabulary does not name is drawn neutral with its id as its label. Empty is the floor's vocabulary: running, idle, ready, starved, blocked, stopped, fault, changeover, maintenance, off. Each of those has a look of its own, in the floor's vocabulary and in a vocabulary that names it without a colour: running a muted grey-green (the normal state is not a saturated green: colour is for what is wrong), idle a hatched light grey (not to be read as a gap), ready hollow, stopped a heavy slate, starved amber, blocked yellow with dark stripes, fault red, changeover blue, maintenance purple with light stripes, off a dashed outline. Each is a CSS variable (--smart-timeline-running, --smart-timeline-running-color and so on) a page can restyle. An item with no id is skipped with one console warning.
   * Default value: 
   */
  states?: any;
  /**
   * Sets or gets the width of the window in milliseconds, from 1000 (a second) to 315576000000 (ten years). A value that is not a positive number (NaN, Infinity, 0, negative) is ignored for the default 28800000 (8 h), and one outside the range is held at its end, each with one console warning. Over two months the axis is labelled with dates and years.
   * Default value: 28800000
   */
  timeSpan?: number;
  /**
   * Sets or gets the right edge of the window in milliseconds since the epoch. Null follows the record: the latest end of a segment, or now while a segment is open. A value that is not a time (NaN, Infinity) is ignored with one console warning, and the axis follows the record.
   * Default value: null
   */
  end?: number;
  /**
   * Sets or gets the selected segment as { row, from }, or null.
   * Default value: null
   */
  selected?: any;
  /**
   * Sets or gets the name of the line or area, part of the accessible name and the name of the single row drawn from segments.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets whether the vocabulary is listed under the rows with its colours.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Sets or gets whether each row carries the time in each state over the window, as percentages, under its name.
   * Default value: false
   */
  showSummary?: boolean;
  /**
   * Sets or gets whether the time axis is drawn above the rows.
   * Default value: true
   */
  showTimeAxis?: boolean;
  /**
   * Sets or gets whether a segment's reason is written into it when it is wide enough to hold the words.
   * Default value: true
   */
  showReasons?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the accessible names of the timeline, its rows and segments, the durations, the summary and the floor vocabulary's state names. Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the component cannot be focused. Set, no segment is a tab stop.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 StateTimeline displays the state history of one or more machines as coloured segments on a time axis, one row per machine. Each segment has a state, a start time, an end time and an optional reason; an open segment shows the current state. Segments are drawn and counted in time order with overlaps resolved (the later record wins), so the summaries never add up to more than the window. The component shows a legend, a time axis and, with showSummary, the time spent in each state, and provides the summary(), segmentAt() and push() methods for data feeds. The default state vocabulary covers running, idle, ready, starved, blocked, stopped, fault, changeover, maintenance and off, each with its own colour, and can be replaced. Segments narrower than two pixels are drawn together as one cell in the colour of the state that took most of it, with fine hairlines, named with every state under it and how long ("17 short states from 06:00 to 06:01: Running 35 s, Starved 13 s"): ten thousand segments are a few hundred elements, and the summaries still count every segment exactly. The arrow keys move along the time axis, which runs left to right on screen on a right-to-left page too, so ArrowRight is always later. Percentages and durations are written in the element's locale (12,5 % in German).
*/
export interface StateTimeline extends BaseElement, StateTimelineProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when another segment is selected by a click or by receiving the keyboard focus. Setting <em>selected</em> from script marks the segment and does not raise it.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, segment, state, from, to, count, segments)
   *  row - The row's id.
   *  segment - The segment as it was given; for a cell of several short segments, the first of them.
   *  state - The segment's state.
   *  from - When the segment began, in milliseconds since the epoch.
   *  to - When it ended, or the end of the window for an open segment.
   *  count - How many segments the cell stands for: 1, or more for a cell of segments too short to draw one by one.
   *  segments - Every segment under the cell, as given.
   */
  onSelectionChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a segment is clicked, or Enter or Space is pressed on it.
	* @param event. The custom event. Custom data event was created with: ev.detail(row, segment, state, from, to, count, segments)
   *  row - The row's id.
   *  segment - The segment as it was given; for a cell of several short segments, the first of them.
   *  state - The segment's state.
   *  from - When the segment began, in milliseconds since the epoch.
   *  to - When it ended, or the end of the window for an open segment.
   *  count - How many segments the cell stands for: 1, or more for a cell of segments too short to draw one by one.
   *  segments - Every segment under the cell, as given.
   */
  onSegmentClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns the time in each state of a row over the window, longest first: [{ state, milliseconds, percent }]. It counts the record as drawn, overlaps resolved, so the milliseconds never add up to more than the window.
   * @param {string} rowId. The row's id.
   * @returns {any}
   */
  summary(rowId: string): any;
  /**
   * Returns the segment of a row under a time, as it was given, or null. Where segments overlap it is the one drawn there - the later one.
   * @param {string} rowId. The row's id.
   * @param {number} time. Milliseconds since the epoch.
   * @returns {any}
   */
  segmentAt(rowId: string, time: number): any;
  /**
   * Appends a segment to the record of a row. An open segment of the row that started before the new one is closed at the new one's start. A segment that arrives late - starting before the open one - is slotted in where it happened and the open one stays ongoing; one that overlaps the record wins its interval. Intended for a data feed, with one call per state change. A row that does not exist is added. Something that is not a segment is refused with a console warning.
   * @param {string} rowId. The row's id.
   * @param {any} segment. The segment: { state, from, to, reason }.
   */
  push(rowId: string, segment: any): void;
  /**
   * Redraws the component from its current properties.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-state-timeline"): StateTimeline;
        querySelector(selectors: "smart-state-timeline"): StateTimeline | null;
        querySelectorAll(selectors: "smart-state-timeline"): NodeListOf<StateTimeline>;
        getElementsByTagName(qualifiedName: "smart-state-timeline"): HTMLCollectionOf<StateTimeline>;
        getElementsByName(elementName: "smart-state-timeline"): NodeListOf<StateTimeline>;
    }
}

