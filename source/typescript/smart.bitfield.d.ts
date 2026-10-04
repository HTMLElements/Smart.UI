import  {BaseElement, Animation} from "./smart.element"

export interface BitFieldProperties {
  /**
   * Sets or retrieves the display order of the bits. It affects the display only; bits are always numbered from the least significant bit, so bit 3 is the same bit in both orders.
   * Default value: msbFirst
   */
  bitOrder?: BitFieldBitOrder | string;
  /**
   * Sets or retrieves the register map, as [{ index, label, description, readOnly, color }]. index counts from the least significant bit. A bit marked readOnly refuses to change, a register map is a contract, and a UI that lets an operator flip a reserved bit is lying about the hardware. An entry that is not an object is skipped.
   * Default value: 
   */
  bits?: any;
  /**
   * Enables or disables the component.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or gets the number of bits grouped together visually. Groups are counted from the least significant end, so nibble boundaries line up with the hexadecimal digits underneath. 0 removes the grouping.
   * Default value: 4
   */
  groupSize?: number;
  /**
   * Sets or retrieves whether the bits can be toggled by click or keyboard. The property is named for the enabled state because boolean attributes are presence-based, and a property that defaulted to true could not be turned off from markup. When false the bits are not buttons and not in the tab order.
   * Default value: false
   */
  interactive?: boolean;
  /**
   * Sets or retrieves how the word value is written beneath the bits.
   * Default value: hex
   */
  radixDisplay?: BitFieldRadixDisplay | string;
  /**
   * Sets or retrieves whether each bit shows its number. Boolean attributes are presence-based, so set the property from script to turn it off.
   * Default value: true
   */
  showIndices?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying the strings used by the component, the bit and field names, the set, clear, reserved and read-only words (7 keys: fieldLabel, bitLabel, namedBitLabel, set, clear, reserved, ..). Used in conjunction with the property locale. The de, fr, es and zh packs in the package cover it.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Determines the theme. Theme defines the look of the component.
   * Default value: ""
   */
  theme?: string;
  /**
   * If is set to true, the component cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or retrieves the word. Accepts a number, a BigInt, a boolean, or a string with an optional sign and 0x, 0b or 0o prefix (-0x1 is minus one; 1e3 is 1000); a negative value is treated as two's complement. The value is read back as a decimal string - signed for a signed word length, so an int16 at all ones reads -1 - because a 64-bit value cannot be represented exactly as a number. A value wider than the word length is masked, and one that cannot be read becomes 0: whatever was assigned, the property reads back in this form.
   * Default value: 0
   */
  value?: any;
  /**
   * Sets or retrieves the register width and signedness. Signedness shows only in the decimal readout: the same bit pattern is 65535 as a uint16 and -1 as an int16.
   * Default value: uint16
   */
  wordLength?: BitFieldWordLength | string;
}
/**
 BitField displays a fixed-width register as individual bits with names, keeping the word value and the bits in sync. It supports named and reserved bits, MSB-first or LSB-first order, and word widths up to 64 bits. Values are held as BigInt, so 64-bit registers are represented exactly. A register wider than its panel wraps whole groups onto further rows. Only an interactive register's bits are buttons; a read-only one shows them as images named with their state, with no tab stop.
*/
export interface BitField extends BaseElement, BitFieldProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the word changes through the component, a click, the keyboard, setBit or mask. Assigning the value property directly does not raise it.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, oldValue, bit)
   *  value - The new word, as a decimal string.
   *  oldValue - The previous word.
   *  bit - Which bit changed, or null when a mask changed several at once.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * Returns the value of one bit. The index counts from the least significant bit regardless of the bitOrder property.
   * @param {number} index. Bit position from the least significant bit.
   * @returns {boolean}
   */
  bit(index: number): boolean;
  /**
   * Sets or clears every bit that is set in the mask, as a "clear faults" command does. A bit marked readOnly in the register map is not changed, and bits beyond the word length are ignored.
   * @param {number | string | bigint} mask. The bits to act on.
   * @param {boolean} on?. Set them (the default) or clear them.
   */
  mask(mask: number | string | bigint, on?: boolean): void;
  /**
   * Redraws the register.
   */
  redraw(): void;
  /**
   * Sets, clears or toggles one bit. A bit marked readOnly in the register map is not changed.
   * @param {number} index. Bit position from the least significant bit.
   * @param {boolean} on?. Force a state instead of toggling.
   */
  setBit(index: number, on?: boolean): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-bit-field"): BitField;
        querySelector(selectors: "smart-bit-field"): BitField | null;
        querySelectorAll(selectors: "smart-bit-field"): NodeListOf<BitField>;
        getElementsByTagName(qualifiedName: "smart-bit-field"): HTMLCollectionOf<BitField>;
        getElementsByName(elementName: "smart-bit-field"): NodeListOf<BitField>;
    }
}

/**Sets or retrieves the display order of the bits. It affects the display only; bits are always numbered from the least significant bit, so bit 3 is the same bit in both orders. */
export declare type BitFieldBitOrder = 'msbFirst' | 'lsbFirst';
/**Sets or retrieves how the word value is written beneath the bits. */
export declare type BitFieldRadixDisplay = 'hex' | 'dec' | 'bin' | 'oct' | 'none';
/**Sets or retrieves the register width and signedness. Signedness shows only in the decimal readout: the same bit pattern is 65535 as a uint16 and -1 as an int16. */
export declare type BitFieldWordLength = 'int8' | 'uint8' | 'int16' | 'uint16' | 'int32' | 'uint32' | 'int64' | 'uint64';
