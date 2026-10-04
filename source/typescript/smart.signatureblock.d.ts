import  {BaseElement, Animation} from "./smart.element"

export interface SignatureBlockProperties {
  /**
   * Sets or retrieves the signature to show, as { userId, userName, meaning, meaningLabel, reason, at, recordHash, id }. null shows 'Not signed'. A meaning other than the six standard ones is shown with its meaningLabel and the localized 'by' form (the byMeaning message). A missing or unreadable at is shown as 'No date and time of signing' or 'Date and time not readable' and sets the date-invalid attribute; at may be an ISO 8601 string, a Date or epoch milliseconds.
   * Default value: null
   */
  signature?: any;
  /**
   * Sets or retrieves the record as it is now. Given, the block verifies the signature against it and says 'Record matches signature' or 'Record altered since signing', or 'Record cannot be checked' when the signature carries no record hash (the verified attribute is then 'unknown'). The record is verified again on every assignment, including the same object assigned again after it was changed in place; a change made in place without assigning the record again is not seen.
   * Default value: null
   */
  record?: any;
  /**
   * Determines whether the reason is shown.
   * Default value: true
   */
  showReason?: boolean;
  /**
   * Determines whether the user ID is shown beside the printed name.
   * Default value: true
   */
  showUserId?: boolean;
  /**
   * Determines whether the record hash is shown, shortened, with the full hash as a tooltip.
   * Default value: false
   */
  showHash?: boolean;
  /**
   * Determines whether the block is one line instead of a stack.
   * Default value: false
   */
  compact?: boolean;
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
   * Sets or gets an object specifying the strings used by the component, the 'by' form of each meaning (byMeaning for a custom meaning), the verdicts, the date warnings and the prefixes. Used in conjunction with the property locale.
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
 SignatureBlock displays the signature manifestation required by 21 CFR Part 11 §11.50: the meaning of the signature, the printed name of the signer, the date and time of signing with the UTC offset, and the reason if one was given. When the signed record is also provided, the component compares the record hash in the signature with the record and reports whether the record has changed since it was signed. The signature object is the one produced by the ESignature component.
*/
export interface SignatureBlock extends BaseElement, SignatureBlockProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Returns the manifestation as one line, for example 'Approved by Alice Smith, 2026-09-18 14:32:00 +03:00, Batch release', for a printout or a log. It is built from what the block shows: a custom meaning in its own words, and a missing date said in words.
   * @returns {string}
   */
  text(): string;
  /**
   * Returns whether the record given still matches the signature: true or false, or null when no record or no signature is given, or when the signature carries no record hash and so cannot be checked.
   * @returns {boolean}
   */
  verified(): boolean;
  /**
   * Rebuilds the block from its properties.
   */
  redraw(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-signature-block"): SignatureBlock;
        querySelector(selectors: "smart-signature-block"): SignatureBlock | null;
        querySelectorAll(selectors: "smart-signature-block"): NodeListOf<SignatureBlock>;
        getElementsByTagName(qualifiedName: "smart-signature-block"): HTMLCollectionOf<SignatureBlock>;
        getElementsByName(elementName: "smart-signature-block"): NodeListOf<SignatureBlock>;
    }
}

