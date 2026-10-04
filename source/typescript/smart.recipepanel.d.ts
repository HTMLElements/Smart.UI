import  {BaseElement, Animation} from "./smart.element"

export interface RecipePanelProperties {
  /**
   * Sets or retrieves the recipes as [{ id, name, note, entries: [{ tag, label, value, unit }] }]. label is what an operator calls the value; without one the tag is shown, which is what an engineer calls it. Assign a new array to update the component.
   * Default value: 
   */
  recipes?: any;
  /**
   * Sets or retrieves the id of the recipe whose values are shown. An empty value shows the first recipe.
   * Default value: ""
   */
  selected?: string;
  /**
   * Sets or retrieves the heading of the panel. It is also the accessible name of the group.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves whether the panel only shows the recipes. The Load button is removed rather than disabled, because a control that cannot be used should not invite a press; the values are still readable.
   * Default value: false
   */
  readOnly?: boolean;
  /**
   * Sets or retrieves whether loading asks first. When true, the confirmation names every value that is about to be written. A recipe moves several setpoints at once, so this is on by default. The confirmation is modal - the panel behind it does not respond and Tab stays on its two buttons - and it freezes what it names: Load it sends the recipe as it was shown. If that recipe changes underneath while the question is open (the list is refreshed, another recipe is selected), the question is withdrawn and the panel says so. The second click of the double-click that opened it, a press within 300 ms of opening and a held key do not answer it.
   * Default value: true
   */
  confirm?: boolean;
  /**
   * Sets or retrieves whether a load is in flight. The application sets it while it writes, so the button cannot be pressed twice and the panel says what it is doing. The panel also sets it itself as it raises recipeApply, so a double press is one load even when the application sets busy only after an await. It is released when the application sets busy to false or sets result, or after ten seconds.
   * Default value: false
   */
  busy?: boolean;
  /**
   * Sets or retrieves what the last load did, as { name, applied, of, failed: [{ tag, error }], at }. The application sets it when the writes come back. The entries named in failed are marked refused in the values table, so a load that half-succeeded is visible rather than only logged. A load refused as a whole - the role may not load, the session ran out - wrote nothing, and is given as { name, error }, which the panel says in those words rather than as "0 of 5 written".
   * Default value: null
   */
  result?: any;
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
 RecipePanel lists the recipes a line can be set to and loads one into the plant in a single action. A recipe is a named set of values, and the panel shows what loading the chosen one would write - with the names an operator knows and the units they are in - before it writes anything. The panel never writes: loading raises the recipeApply event and the application performs the writes, then sets the result property. A load that half-succeeds is reported, and the entries the plant refused stay marked in the values table.
*/
export interface RecipePanel extends BaseElement, RecipePanelProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the operator loads a recipe, after the confirmation when one is asked for. The component does not write: the application performs the writes and then sets the result property. It cannot know who is pressing the button or how the writes should be audited, so it does not pretend to. With confirm on, the id and the values are the ones the confirmation showed.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, name, entries)
   *  id - The id of the recipe.
   *  name - The name of the recipe, as the operator saw it.
   *  entries - The values to write, as <em>[{ tag, value }]</em>.
   */
  onRecipeApply?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a recipe is chosen, by pointer or by keyboard. It is also raised when the recipe already shown is chosen again. Nothing is written; only what the panel shows changes.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, name)
   *  id - The id of the recipe now shown.
   *  name - Its name.
   */
  onRecipeSelect?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-recipe-panel"): RecipePanel;
        querySelector(selectors: "smart-recipe-panel"): RecipePanel | null;
        querySelectorAll(selectors: "smart-recipe-panel"): NodeListOf<RecipePanel>;
        getElementsByTagName(qualifiedName: "smart-recipe-panel"): HTMLCollectionOf<RecipePanel>;
        getElementsByName(elementName: "smart-recipe-panel"): NodeListOf<RecipePanel>;
    }
}

