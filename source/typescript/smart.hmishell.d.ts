import  {BaseElement, Animation} from "./smart.element"

export interface HmiShellProperties {
  /**
   * Sets or retrieves the plant or site name, the header's first line.
   * Default value: ""
   */
  plant?: string;
  /**
   * Sets or retrieves the area, the first step of the breadcrumb under the plant name.
   * Default value: ""
   */
  area?: string;
  /**
   * Sets or retrieves the name of the screen, shown as the last step of the breadcrumb and included in the accessible name of the shell.
   * Default value: ""
   */
  screen?: string;
  /**
   * Sets or retrieves who is logged on. Shown as a button in the header that raises userClick, for a application's log-off or e-signature dialog. Empty hides it.
   * Default value: ""
   */
  user?: string;
  /**
   * Sets or retrieves the role of the user, shown next to the name. The property is not named role because role is the ARIA attribute of the component.
   * Default value: ""
   */
  userRole?: string;
  /**
   * Determines whether the 24-hour clock is shown in the header.
   * Default value: true
   */
  showClock?: boolean;
  /**
   * Sets or retrieves the data connection state, using the state words reported by a Smart.Industrial.Connect session, plus unknown for a screen without a session. The state is shown as a word with an indicator dot and exposed as a live status; a lost connection is announced assertively.
   * Default value: unknown
   */
  connection?: HmiShellConnection | string;
  /**
   * Sets or retrieves extra text beside the connection word, the gateway's name, a latency.
   * Default value: ""
   */
  connectionDetail?: string;
  /**
   * Sets or retrieves the displays as [{ id, label, level, active, alarms, disabled }]. level is the ISA-101 display level (1 to 4) and indents the item. alarms is a number or { critical, warning, advisory }; the badge shows the highest non-zero priority with its count, and the priority word is included in the accessible name of the item. A plain number is treated as critical. Pressing an item raises the navigate event; the application changes the screen.
   * Default value: 
   */
  navigation?: any;
  /**
   * Sets or retrieves the alarms the footer summarises, in the shape AlarmBanner takes: [{ id, tag, message, priority, severity, timestamp, acknowledged, active, shelvedUntil, suppressed, outOfService }], read as ISA-18.2 reads an alarm list. Priority 0 and 1 are critical, 2 warning, 3 and above advisory - a number written as text counts as the number, and a severity (critical, warning, advisory) given on a record wins over its priority. The footer counts the active alarms by priority; counts as unacknowledged both active unacknowledged alarms and alarms that returned to normal before anybody acknowledged them; names the most urgent unacknowledged alarm (by priority, then the newest); and takes its colour from the worst alarm that is active or still unacknowledged. Shelved, suppressed and out-of-service alarms are not active and never named as needing attention; they are counted separately ('2 shelved'). A record without active is active. It acknowledges nothing.
   * Default value: 
   */
  alarms?: any;
  /**
   * Determines whether the alarm strip is shown.
   * Default value: true
   */
  showFooter?: boolean;
  /**
   * Determines whether the navigation bar is shown.
   * Default value: true
   */
  showNavigation?: boolean;
  /**
   * Determines whether the header offers a switch between lightTheme and darkTheme.
   * Default value: false
   */
  showThemeToggle?: boolean;
  /**
   * Sets or retrieves the theme the toggle switches to from a dark one.
   * Default value: "industrial"
   */
  lightTheme?: string;
  /**
   * Sets or retrieves the theme the toggle switches to from a light one.
   * Default value: "industrial-dark"
   */
  darkTheme?: string;
  /**
   * Sets or retrieves the target density. touch makes every target in the shell at least 44 px and the header taller, for panel PCs and gloved operation; normal is the desktop density. The value is reflected to an attribute used by the stylesheet.
   * Default value: normal
   */
  density?: HmiShellDensity | string;
  /**
   * Determines whether a change of connection state is read through the live region.
   * Default value: true
   */
  announceChanges?: boolean;
  /**
   * Enables or disables the component. A disabled shell disables its navigation items, user button, theme toggle and alarm strip, which takes them out of the tab order, and raises no navigate, userClick, alarmsClick or themeChange event. The screen in main is the application's and is not disabled.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the landmark names, the connection words, the alarm summary (including shelvedCount, suppressedCount and outOfServiceCount) and the badge names. Used in conjunction with the property locale.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component. When set through setTheme or the toggle, the theme is applied to every themed element inside the shell; elements without a theme inherit it through the CSS variables.
   * Default value: ""
   */
  theme?: string;
}
/**
 HmiShell is the display frame for operator screens described in ISA-101. It provides a header with the plant, area and display name, the logged-on user, a clock and the data connection state; a navigation bar across the display hierarchy with the alarm count for each display; a main area for the screen content; and a footer with the alarm summary and the unacknowledged alarm that most needs attention. Content is placed in the main area - including content appended after the shell has started, so a screen can be swapped by removing one child and appending another - and elements with slot="header" or slot="footer" are placed in the header or footer. The clock and the navigation keep working when the shell is moved to another parent. The shell raises the navigate, alarmsClick, userClick and themeChange events, switches the theme for all elements inside it and supports a touch density.
*/
export interface HmiShell extends BaseElement, HmiShellProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a display is selected in the navigation bar. The application changes the screen. A held Enter raises it once.
	* @param event. The custom event. Custom data event was created with: ev.detail(id, item, index)
   *  id - The display's id.
   *  item - The navigation item as the application supplied it.
   *  index - Its position in the list.
   */
  onNavigate?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the alarm strip is pressed - with the mouse, or with Enter or Space, since the strip is a button in the tab order - so that the application can open the alarm list. A control placed in the footer slot by the application does not raise this event.
	* @param event. The custom event. Custom data event was created with: ev.detail(alarms)
   *  alarms - A copy of the alarm list.
   */
  onAlarmsClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user button is pressed, for a application's log-off or e-signature dialog.
	* @param event. The custom event. Custom data event was created with: ev.detail(user, role)
   *  user - Who is logged on.
   *  role - Their role.
   */
  onUserClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the theme is switched through the toggle or setTheme, after every element inside the shell has been switched with it.
	* @param event. The custom event. Custom data event was created with: ev.detail(theme, previousTheme)
   *  theme - The theme now in force.
   *  previousTheme - The theme before.
   */
  onThemeChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Sets the theme on the shell and on every element inside it that has a theme, so the whole screen switches at once, and raises the themeChange event.
   * @param {string} theme. The theme name.
   */
  setTheme(theme: string): void;
  /**
   * Returns whether the current theme is the dark theme: the darkTheme, or any theme whose name ends in -dark.
   * @returns {boolean}
   */
  isDark(): boolean;
  /**
   * Rebuilds the header, navigation and footer.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-hmi-shell"): HmiShell;
        querySelector(selectors: "smart-hmi-shell"): HmiShell | null;
        querySelectorAll(selectors: "smart-hmi-shell"): NodeListOf<HmiShell>;
        getElementsByTagName(qualifiedName: "smart-hmi-shell"): HTMLCollectionOf<HmiShell>;
        getElementsByName(elementName: "smart-hmi-shell"): NodeListOf<HmiShell>;
    }
}

/**Sets or retrieves the data connection state, using the state words reported by a Smart.Industrial.Connect session, plus unknown for a screen without a session. The state is shown as a word with an indicator dot and exposed as a live status; a lost connection is announced assertively. */
export declare type HmiShellConnection = 'connected' | 'connecting' | 'reconnecting' | 'error' | 'closed' | 'unknown';
/**Sets or retrieves the target density. touch makes every target in the shell at least 44 px and the header taller, for panel PCs and gloved operation; normal is the desktop density. The value is reflected to an attribute used by the stylesheet. */
export declare type HmiShellDensity = 'normal' | 'touch';
