import  {BaseElement, Animation} from "./smart.element"

export interface ESignatureProperties {
  /**
   * Sets or retrieves the record being signed, as { id, title, fields: [{ label, value }] } or any object. The record is shown in the panel and the whole object is hashed into the signature. The panel takes a copy and its hash together, so what is signed is what was shown: a record assigned while the application is verifying a submitted signature does not change that signature (its recordId and recordHash stay those of the record submitted) and is shown once the request is answered.
   * Default value: null
   */
  record?: any;
  /**
   * Sets or retrieves the meaning of the signature. Empty asks the signer to choose.
   * Default value: ""
   */
  meaning?: string;
  /**
   * Sets or retrieves the meanings offered, as ids or { id, label }. Empty offers approved, reviewed, authored, responsible, verified and witnessed.
   * Default value: 
   */
  meanings?: any;
  /**
   * Determines whether the meaning is shown as fixed text instead of a selection, for a step whose meaning is always the same, such as a release that is always an approval.
   * Default value: false
   */
  lockMeaning?: boolean;
  /**
   * Determines whether a reason must be given before the request is raised.
   * Default value: false
   */
  requireReason?: boolean;
  /**
   * Sets or retrieves preset reasons, shown as a list. Empty gives a free text field.
   * Default value: 
   */
  reasons?: any;
  /**
   * Sets or retrieves the signed-in user, when the application knows one. Pre-fills the user ID and, with continuousSession, is the user whose repeat signings need the password only.
   * Default value: ""
   */
  sessionUserId?: string;
  /**
   * Sets or retrieves the printed name of the session user, used in the continuous-session hint and as the signer's name when the signer is the session user and the application's accept() gives no name.
   * Default value: ""
   */
  sessionUserName?: string;
  /**
   * Determines whether a repeat signing by the session user within sessionTimeout of the last asks for the password only. The first signing always uses both components.
   * Default value: false
   */
  continuousSession?: boolean;
  /**
   * Sets or retrieves how long after a signing the next one by the same user counts as the same session, in milliseconds.
   * Default value: 900000
   */
  sessionTimeout?: number;
  /**
   * Sets or retrieves the number of rejections after which the panel is locked. 0 disables the lock. reset() unlocks the panel.
   * Default value: 3
   */
  maxAttempts?: number;
  /**
   * Sets or retrieves how long the manifestation stays after a signing before the panel closes, in milliseconds. 0 keeps it open until Close.
   * Default value: 2500
   */
  autoClose?: number;
  /**
   * Determines whether the panel is shown. sign() opens it; cancel(), Escape and the close button close it. After a signing the manifestation stays for autoClose milliseconds, or until Close is pressed when autoClose is 0.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines whether the open panel is a modal dialog: aria-modal is true, Tab and Shift+Tab stay inside the panel, and when it closes - by Cancel, Escape, Close or after autoClose - the keyboard returns to the element that had it when the panel opened. Set to false for a panel that is part of the page.
   * Default value: true
   */
  modal?: boolean;
  /**
   * Sets or retrieves the panel's title. Empty shows 'Electronic signature'.
   * Default value: ""
   */
  label?: string;
  /**
   * Sets or retrieves the target size. touch makes the fields and buttons 48px high.
   * Default value: normal
   */
  density?: ESignatureDensity | string;
  /**
   * Enables or disables the component. A disabled panel disables every control in it - the fields, Sign, Cancel, Close and the close button - which takes them out of the tab order, and Escape does nothing.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the titles, field labels, validation messages, the meanings and their 'by' forms. Used in conjunction with the property locale.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
}
/**
 ESignature provides the electronic signature dialog described in 21 CFR Part 11. It shows the record being signed and its hash, the meaning of the signature (approved, reviewed, authored, responsible, verified or witnessed), a user ID and password field, and an optional reason. The component does not verify credentials: it raises the signRequest event and waits for the application to call accept() or reject(). The resulting signature contains the SHA-256 hash of the record, and Smart.Industrial.Audit.verifySignature() checks later that the record still produces that hash. The hash has no key: it shows that a record changed after signing or that a signature was moved to another record, but anyone who can rewrite both the record and the stored signature can recompute it. Protection against deliberate alteration rests with the application's access control and audit trail. Failed attempts are counted and the dialog locks after maxAttempts. With continuousSession enabled, a repeat signing by the same user within sessionTimeout asks for the password only.
*/
export interface ESignature extends BaseElement, ESignatureProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the signer submits. The application verifies the credentials and calls accept() or reject(). The password is in this event and nowhere else. <em>record</em> is the copy that was shown and <em>recordHash</em> its hash - the signature accept() builds carries the same.
	* @param event. The custom event. Custom data event was created with: ev.detail(userId, password, meaning, reason, record, recordHash, continuous, at)
   *  userId - The user ID entered, or the session user's.
   *  password - The password entered.
   *  meaning - The meaning chosen.
   *  reason - The reason given, or ''.
   *  record - The record being signed.
   *  recordHash - SHA-256 of the record, computed when the panel opened or the record property last changed.
   *  continuous - Whether this was a password-only signing.
   *  at - When it was submitted, ISO 8601 with offset.
   */
  onSignRequest?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the application accepts.
	* @param event. The custom event. Custom data event was created with: ev.detail(signature)
   *  signature - { id, userId, userName, meaning, meaningLabel, reason, at, recordId, recordHash }.
   */
  onSigned?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the application rejects.
	* @param event. The custom event. Custom data event was created with: ev.detail(reason, attempt, remaining)
   *  reason - The reason given, or ''.
   *  attempt - How many refusals so far.
   *  remaining - Attempts left before the lock, or -1 when maxAttempts is 0.
   */
  onRejected?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the refusals reach maxAttempts. The application enforces the same on the server.
	* @param event. The custom event. Custom data event was created with: ev.detail(userId, attempts)
   *  userId - The user ID in the field at the time.
   *  attempts - The refusals counted.
   */
  onLockout?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the panel opens.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the panel is closed without signing.
	* @param event. The custom event.    */
  onCancel: ((this: any, ev: Event) => any) | null;
  /**
   * Opens the panel for a record and returns a promise of the signature. The promise resolves when the application calls accept(), and rejects with <em>{ reason: 'cancel' | 'lockout' | 'superseded' }</em> otherwise.
   * @param {any} record?. Replaces the record property when given.
   * @param {any} options?. { meaning, reason } for this ceremony.
   * @returns {any}
   */
  sign(record?: any, options?: any): any;
  /**
   * Called by the application after it has verified the credentials. Builds the signature as <em>{ id, userId, userName, meaning, meaningLabel, reason, at, recordId, recordHash }</em>, where recordId and recordHash are those of the record that was submitted, shows the manifestation, raises the signed event and resolves the promise. Returns the signature, or null when no signing was pending.
   * @param {any} verification?. { userName, userId, at, id } - the printed name, and the application's values where they are to replace the panel's.
   * @returns {any}
   */
  accept(verification?: any): any;
  /**
   * Called by the application when the credentials could not be verified or the signer is not authorised. Counts the attempt, shows the rejection and locks the panel after maxAttempts.
   * @param {string} reason?. Shown to the signer after 'Signature refused:'.
   */
  reject(reason?: string): void;
  /**
   * Closes the panel without signing, raises the cancel event and rejects the promise. Does nothing while the panel is closed.
   */
  cancel(): void;
  /**
   * Clears the failed attempt count and the lock. Intended to be called by the application, not by the signer.
   */
  reset(): void;
  /**
   * Clears the last signing, so that the next signing asks for both signature components again.
   */
  resetSession(): void;
  /**
   * Returns the failed attempts since the last successful signing or reset().
   * @returns {number}
   */
  attempts(): number;
  /**
   * Returns whether the panel is locked.
   * @returns {boolean}
   */
  isLocked(): boolean;
  /**
   * Returns whether the next signing needs the password only.
   * @returns {boolean}
   */
  isContinuous(): boolean;
  /**
   * Rebuilds the panel from its properties.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-esignature"): ESignature;
        querySelector(selectors: "smart-esignature"): ESignature | null;
        querySelectorAll(selectors: "smart-esignature"): NodeListOf<ESignature>;
        getElementsByTagName(qualifiedName: "smart-esignature"): HTMLCollectionOf<ESignature>;
        getElementsByName(elementName: "smart-esignature"): NodeListOf<ESignature>;
    }
}

/**Sets or retrieves the target size. touch makes the fields and buttons 48px high. */
export declare type ESignatureDensity = 'normal' | 'touch';
