import { AddressInterface } from '../interfaces/AddressInterface.js';
/**
 * Interface for address formatters.
 */
export interface FormatterInterface {
    /**
     * Format an address.
     */
    format(address: AddressInterface, options?: Record<string, any>): Promise<string>;
}
//# sourceMappingURL=FormatterInterface.d.ts.map