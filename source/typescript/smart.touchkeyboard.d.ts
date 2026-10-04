import  {BaseElement, Animation} from "./smart.element"

export interface TouchKeyboardProperties {
  /**
   * Sets or retrieves the letters: qwerty, qwertz with the German letters, or azerty with the French ones.
   * Default value: qwerty
   */
  layout?: TouchKeyboardLayout | string;
  /**
   * Sets or retrieves the field to type into, as an element or a selector - or a form or any other container, whose fields the keyboard serves, following focus among them and no others. Two keyboards on one page are kept apart this way. A number field named here is typed over when it is touched afresh, as one found through autoAttach is.
   * Default value: null
   */
  target?: any;
  /**
   * Sets or retrieves whether the keyboard follows focus, typing into whichever text field on the page was last focused.
   * Default value: false
   */
  autoAttach?: boolean;
  /**
   * Sets or retrieves where the keyboard sits: in the page; beside the field touched, under it or over it where the screen has no room (popup); or across the bottom of the screen (docked), where a dialog the field is in moves up above the keys. A popup or docked keyboard follows focus and shows only while a field is being typed into.
   * Default value: inline
   */
  mode?: TouchKeyboardMode | string;
  /**
   * Sets or retrieves when the keypad replaces the letters: for number, decimal and phone fields (by type or inputmode), always, or never.
   * Default value: auto
   */
  keypad?: TouchKeyboardKeypad | string;
  /**
   * Sets or retrieves whether a popup or docked keyboard is showing.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Sets or retrieves what the keyboard has typed when there is no field.
   * Default value: ""
   */
  value?: string;
  /**
   * Sets or retrieves whether the preview is masked. A password field is masked anyway.
   * Default value: false
   */
  masked?: boolean;
  /**
   * Sets or retrieves whether the line naming the field, and what it holds, is shown above the keys.
   * Default value: true
   */
  showPreview?: boolean;
  /**
   * Sets or retrieves whether the keyboard is disabled.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves whether the keyboard can be focused.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 TouchKeyboard is the on-screen keyboard for a panel PC that has none, or a kiosk browser whose system keyboard covers the field it types into. It types at the caret of a field - the target, or the last text field focused - and raises the field's own input event, so whatever listens to the field hears typing. It sits in the page, or out of the way until a field is touched: beside the field (popup) or across the bottom of the screen (docked), going away on Done, Escape, Enter in a one-line field or a touch elsewhere. What it shows follows the field: a keypad for a number, a decimal or a phone number, @ and .com for an email address, / and .com for a URL, the letters otherwise. A number field's range is shown, and a half-typed number ("12.") is held until it is one. A number field or a numeric text box touched afresh shows its value selected and is typed over - the first key replaces it - and a number outside the field's range is refused on Enter or Done, with the reason, instead of being handed to a field that would clamp it. Docked, it lifts a dialog the field is in above its keys. Keys are at least 44 pixels, Shift twice is caps lock, Backspace held repeats, and the keys are one tab stop moved through with the arrow keys. A number outside the field's range is held on the preview line and is never written into the field or sent through its input events; the field keeps the value it had when the entry began. A read-only or disabled field is never typed into.
*/
export interface TouchKeyboard extends BaseElement, TouchKeyboardProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered by Enter in a one-line field, which also raises the field's keydown and keyup of Enter and its change event (a numeric text box commits on them), and submits the field's form as a keyboard's Enter would - through its default button, or with none when the field is its only one-line field - and puts a popup or docked keyboard away. In a text area Enter starts a new line instead. A number outside the field's range is not accepted: the keyboard stays up and says so.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - The value of the field, or of the keyboard when there is no field.
   */
  onAccept?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the keyboard's own value changes, when there is no field. With a field, listen to the field's input event.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - The new value.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when the keyboard is put away - by Done, Escape, Enter or a touch elsewhere - or, in the page, by the hide key or Escape, for the application to decide.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * Shows a popup or docked keyboard for a field, or for the one it follows.
   * @param {HTMLElement} field?. The field to type into.
   */
  open(field?: HTMLElement): void;
  /**
   * Puts a popup or docked keyboard away, raising close.
   */
  close(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-touch-keyboard"): TouchKeyboard;
        querySelector(selectors: "smart-touch-keyboard"): TouchKeyboard | null;
        querySelectorAll(selectors: "smart-touch-keyboard"): NodeListOf<TouchKeyboard>;
        getElementsByTagName(qualifiedName: "smart-touch-keyboard"): HTMLCollectionOf<TouchKeyboard>;
        getElementsByName(elementName: "smart-touch-keyboard"): NodeListOf<TouchKeyboard>;
    }
}

/**Sets or retrieves the letters: qwerty, qwertz with the German letters, or azerty with the French ones. */
export declare type TouchKeyboardLayout = 'qwerty' | 'qwertz' | 'azerty';
/**Sets or retrieves where the keyboard sits: in the page; beside the field touched, under it or over it where the screen has no room (popup); or across the bottom of the screen (docked), where a dialog the field is in moves up above the keys. A popup or docked keyboard follows focus and shows only while a field is being typed into. */
export declare type TouchKeyboardMode = 'inline' | 'popup' | 'docked';
/**Sets or retrieves when the keypad replaces the letters: for number, decimal and phone fields (by type or inputmode), always, or never. */
export declare type TouchKeyboardKeypad = 'auto' | 'always' | 'never';
