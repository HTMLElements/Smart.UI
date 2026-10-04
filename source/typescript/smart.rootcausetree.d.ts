import  {BaseElement, Animation} from "./smart.element"

export interface RootCauseTreeProperties {
  /**
   * Enables or disables the component. Disabled, the tree is dimmed and leaves the tab order, and neither a click nor a key opens, closes or selects a node or raises an event. It comes back when it is cleared.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the component cannot be focused. Set, no node is a tab stop.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or retrieves the analysis, as { id, label, tag, contribution, evidence, children }, contribution being 0 to 1 and children more of the same. Assign a new object to update the component. A contribution outside 0 to 1 is shown as the number the model gave (300 %, -30 %) with OVER or UNDER beside it and in the spoken name, the bar held inside its track; one that is not a number (missing, NaN, Infinity, text) shows "--" and is spoken "no reading". Neither is ever folded away. A node that is its own ancestor (a loop in the data) is drawn once, with a "Loop back to ..." marker where the loop would start again (Enter on it selects the node it repeats), and the tree is drawn at most 64 levels deep and 5000 nodes, with a note where it is cut; either raises structureWarning once per root and one console warning. The property is not reflected to an attribute.
   * Default value: null
   */
  root?: any;
  /**
   * Sets or retrieves the contribution share below which nodes are collapsed into a count under their parent, for example "and 4 more under 5 %". 0 shows every node. Only a share inside 0 to 1 is folded: a contribution out of range, or none at all, is always shown. A value that is not a number counts as 0.
   * Default value: 0
   */
  minContribution?: number;
  /**
   * Sets or retrieves the number of levels shown below the root. 0 shows every level. A node at the limit shows no expander.
   * Default value: 0
   */
  maxDepth?: number;
  /**
   * Sets or retrieves the selected node's id, or null.
   * Default value: "null"
   */
  selected?: string;
  /**
   * Sets or retrieves the ids of the nodes shown open. Every node is open until this is set. Assign a new array to update the component.
   * Default value: null
   */
  expandedIds?: any;
  /**
   * Determines whether each node's evidence is shown under its label.
   * Default value: true
   */
  showEvidence?: boolean;
  /**
   * Determines whether each node's tag is shown beside its label and spoken with it.
   * Default value: true
   */
  showTags?: boolean;
  /**
   * Determines whether children are ordered by contribution, largest first, or shown in the order given.
   * Default value: true
   */
  sortByContribution?: boolean;
  /**
   * Sets or retrieves a name for the analysis, spoken as part of the tree's label.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or gets the language-specific strings the component shows, keyed by locale then by message. Used with the locale property.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Sets or gets the locale, which selects a block of messages.
   * Default value: "en"
   */
  locale?: string;
}
/**
 RootCauseTree displays the ranked, nested explanation produced by a root-cause analysis model: the deviation at the root, the contributing conditions below it and their share of the contribution as a bar and a percentage, with the evidence for each node. Nodes below a configurable share are collapsed into a count. Selecting a node raises the nodeSelect event, where the application can open the underlying data or record a verdict. The arrow keys follow the tree pattern: ArrowRight opens a node or goes to its first child, ArrowLeft closes it or goes to its parent - mirrored on a right-to-left page or with rightToLeft, where the tree is indented from the right and opens towards the left. Contributions are written in the element's locale.
*/
export interface RootCauseTree extends BaseElement, RootCauseTreeProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a node is selected, clicked, Enter or Space pressed on it, or select() called.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, node, path, depth)
   *  id - The node's id.
   *  node - The node as it was given.
   *  path - The ids from the root to the node.
   *  depth - How many levels below the root.
   */
  onNodeSelect?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a node is opened.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, node)
   *  id - The node's id.
   *  node - The node as it was given.
   */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a node is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, node)
   *  id - The node's id.
   *  node - The node as it was given.
   */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered once when a root is assigned that cannot be drawn as given: a node that is its own ancestor (a loop) or more than 64 levels. The tree is drawn with markers where it is cut, and nothing is thrown.
	* @param event. The custom event. Custom data event was created with: ev.detail(reasons, cycles, maxLevels)
   *  reasons - What was found: cycle, depth, or both.
   *  cycles - The loops, as [{ id, parent }]: the node that repeats and the node whose child it is.
   *  maxLevels - The most levels drawn, 64.
   */
  onStructureWarning?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns a node by id, as it was given, or null. A loop in the data is not followed round.
   * @param {string} id. The node's id.
   * @returns {any}
   */
  nodeById(id: string): any;
  /**
   * Returns the nodes from the root to one, root first, empty when the id is not in the tree. A loop in the data is not followed round.
   * @param {string} id. The node's id.
   * @returns {any}
   */
  pathTo(id: string): any;
  /**
   * Returns the causes of the whole tree ranked by contribution, largest first, as <em>[{ id, label, tag, contribution, depth }]</em>. <em>contribution</em> is the number the model gave, outside 0 to 1 too; null where it gave none that is a number, and those come last. A loop in the data is not followed round.
   * @param {number} count?. How many. All when omitted.
   * @returns {any}
   */
  ranked(count?: number): any;
  /**
   * Selects a node, expands the path to it, moves focus to it and raises the nodeSelect event.
   * @param {string} id. The node's id.
   */
  select(id: string): void;
  /**
   * Expands or collapses one node and raises the expand or collapse event.
   * @param {string} id. The node's id.
   * @param {boolean} open?. Force a state instead of toggling.
   */
  toggle(id: string, open?: boolean): void;
  /**
   * Expands every node.
   */
  expandAll(): void;
  /**
   * Collapses every node except the root.
   */
  collapseAll(): void;
  /**
   * Rebuilds the component from its properties.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-root-cause-tree"): RootCauseTree;
        querySelector(selectors: "smart-root-cause-tree"): RootCauseTree | null;
        querySelectorAll(selectors: "smart-root-cause-tree"): NodeListOf<RootCauseTree>;
        getElementsByTagName(qualifiedName: "smart-root-cause-tree"): HTMLCollectionOf<RootCauseTree>;
        getElementsByName(elementName: "smart-root-cause-tree"): NodeListOf<RootCauseTree>;
    }
}

