import  {BaseElement, Animation} from "./smart.element"

export interface IntensityGraphProperties {
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the matrix in graph mode: an array of rows, each an array or typed array of z values. data[row][column]; rows run along y from the bottom, columns along x. A cell that holds no number - null, undefined, an empty string, NaN - is transparent, and the cursors and cellAt read it as missing (z NaN), never as 0.
   * Default value: 
   */
  data?: any;
  /**
   * Sets or retrieves the mode: graph shows the matrix as assigned; chart scrolls the columns that arrive through push, keeping the newest historyLength of them.
   * Default value: graph
   */
  mode?: IntensityGraphMode | string;
  /**
   * Sets or retrieves the number of columns kept in chart mode.
   * Default value: 500
   */
  historyLength?: number;
  /**
   * Sets or retrieves the x of the first column in graph mode. Null counts columns from 0.
   * Default value: null
   */
  xMin?: number;
  /**
   * Sets or retrieves the x at the end of the last column in graph mode. Null counts columns from 0.
   * Default value: null
   */
  xMax?: number;
  /**
   * Sets or retrieves the y of the first row. Null counts rows from 0.
   * Default value: null
   */
  yMin?: number;
  /**
   * Sets or retrieves the y at the end of the last row. Null counts rows from 0.
   * Default value: null
   */
  yMax?: number;
  /**
   * Sets or retrieves the z at the bottom of the colour ramp. Null follows the data. In chart mode the range follows the columns on screen, so it moves when the history scrolls. A value below a fixed zMin takes the bottom colour, or underRangeColor when that is set.
   * Default value: null
   */
  zMin?: number;
  /**
   * Sets or retrieves the z at the top of the colour ramp. Null follows the data. A value above a fixed zMax takes the top colour, or overRangeColor when that is set.
   * Default value: null
   */
  zMax?: number;
  /**
   * Sets or retrieves the name of the x axis.
   * Default value: ""
   */
  xLabel?: string;
  /**
   * Sets or retrieves the unit of the x axis.
   * Default value: ""
   */
  xUnit?: string;
  /**
   * Sets or retrieves the name of the y axis.
   * Default value: ""
   */
  yLabel?: string;
  /**
   * Sets or retrieves the unit of the y axis.
   * Default value: ""
   */
  yUnit?: string;
  /**
   * Sets or retrieves the name of the z axis, shown above the colour ramp.
   * Default value: ""
   */
  zLabel?: string;
  /**
   * Sets or retrieves the unit of z, used in the ramp and the readouts.
   * Default value: ""
   */
  zUnit?: string;
  /**
   * Sets or retrieves how x values are written: si in engineering notation with the x unit, plain as a number, clock as a time of day for x values in epoch milliseconds.
   * Default value: si
   */
  xFormat?: IntensityGraphXFormat | string;
  /**
   * Sets or retrieves the named colour map.
   * Default value: viridis
   */
  colorMap?: IntensityGraphColorMap | string;
  /**
   * Sets or retrieves the application's own colour stops, which override the named map: an array of [position, colour] pairs with positions from 0 to 1. Repeating a colour at two positions makes a band, for a pass/fail map.
   * Default value: 
   */
  colorStops?: any;
  /**
   * Sets or retrieves the colour of a cell above zMax. Empty draws it in the top colour of the ramp, which reads as "at the limit"; a colour of its own says "beyond it", and a cap of that colour is drawn above the ramp as its key.
   * Default value: ""
   */
  overRangeColor?: string;
  /**
   * Sets or retrieves the colour of a cell below zMin. Empty draws it in the bottom colour of the ramp; a colour of its own says the value is below the range, with a cap of that colour under the ramp as its key.
   * Default value: ""
   */
  underRangeColor?: string;
  /**
   * Smooths between cells instead of drawing each as a block.
   * Default value: false
   */
  interpolate?: boolean;
  /**
   * Shows the colour ramp with its z ticks at the right of the plot.
   * Default value: true
   */
  showRamp?: boolean;
  /**
   * Shows grid lines at the ticks of the axes.
   * Default value: false
   */
  showGrid?: boolean;
  /**
   * Shows the cursor legend under the plot.
   * Default value: true
   */
  showCursorLegend?: boolean;
  /**
   * Sets or retrieves the cursors. Each is an object with id, label, x, y, color and visible. A cursor reads the cell under it into the legend; it is dragged on the plot and moved a cell at a time with the arrow keys.
   * Default value: 
   */
  cursors?: any;
  /**
   * Enables placing and dragging cursors with the pointer and the keyboard.
   * Default value: true
   */
  interactive?: boolean;
  /**
   * Sets or retrieves the title shown above the plot and used in the accessible name.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the number of significant digits in readouts and axis labels.
   * Default value: 4
   */
  precisionDigits?: number;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the element - the ramp and cursor texts. Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
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
 IntensityGraph displays a matrix as colour on an x and a y axis, with a colour ramp that says what the colours mean and cursors that read the cell under them: the display a spectrogram, a thermal image, a die map or a sensor array ends in. In graph mode the matrix is assigned whole; in chart mode columns are pushed as they arrive and scroll along x. Colour comes from a named map or from the application's own stops, over a z range that follows the data or is fixed. The matrix is drawn once into an image and scaled onto the canvas.
*/
export interface IntensityGraph extends BaseElement, IntensityGraphProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a cursor is moved by the operator, with the pointer or the keyboard.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, x, y, z)
   *  id - The cursor.
   *  x - Its x.
   *  y - Its y.
   *  z - The value of the cell under it.
   */
  onCursorChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the plot is clicked without dragging.
	* @param event. The custom event. Custom data event was created with: ev.detail(x, y, z, row, column)
   *  x - The x under the pointer.
   *  y - The y under the pointer.
   *  z - The value of the cell, or NaN outside the matrix.
   *  row - The row, or -1.
   *  column - The column, or -1.
   */
  onCellClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Appends a column in chart mode: one z per row, newest at the right. The oldest column leaves once <em>historyLength</em> is reached. A missing column (null) is a column of missing cells, and the automatic z range follows the columns held, also once the history is full.
   * @param {any} column. The z values, one per row, as an array or a typed array.
   * @param {number} x?. The x of the column; unset, columns count from 0.
   */
  push(column: any, x?: number): void;
  /**
   * Empties the chart.
   */
  clear(): void;
  /**
   * Returns the cell at a point as { z, row, column }, or null outside the matrix. z is NaN for a cell that holds no number.
   * @param {number} x. The x.
   * @param {number} y. The y.
   * @returns {any}
   */
  cellAt(x: number, y: number): any;
  /**
   * Returns a sentence describing what the graph shows, as used in its accessible name: the shape, the z range and where the highest value is.
   * @returns {string}
   */
  describe(): string;
  /**
   * Redraws the element from its current properties.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-intensity-graph"): IntensityGraph;
        querySelector(selectors: "smart-intensity-graph"): IntensityGraph | null;
        querySelectorAll(selectors: "smart-intensity-graph"): NodeListOf<IntensityGraph>;
        getElementsByTagName(qualifiedName: "smart-intensity-graph"): HTMLCollectionOf<IntensityGraph>;
        getElementsByName(elementName: "smart-intensity-graph"): NodeListOf<IntensityGraph>;
    }
}

/**Sets or retrieves the mode: graph shows the matrix as assigned; chart scrolls the columns that arrive through push, keeping the newest historyLength of them. */
export declare type IntensityGraphMode = 'graph' | 'chart';
/**Sets or retrieves how x values are written: si in engineering notation with the x unit, plain as a number, clock as a time of day for x values in epoch milliseconds. */
export declare type IntensityGraphXFormat = 'si' | 'plain' | 'clock';
/**Sets or retrieves the named colour map. */
export declare type IntensityGraphColorMap = 'viridis' | 'inferno' | 'thermal' | 'grey' | 'jet' | 'blues';
