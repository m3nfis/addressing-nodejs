import { FormatterInterface } from './FormatterInterface.js';
import { AddressInterface } from '../interfaces/AddressInterface.js';
import { AddressFormatRepository } from '../AddressFormat/AddressFormatRepository.js';
import { CountryRepository } from '../Country/CountryRepository.js';
/**
 * Postal label formatter for addresses.
 * Takes care of uppercasing fields where required by the format.
 */
export declare class PostalLabelFormatter implements FormatterInterface {
    private addressFormatRepository;
    private countryRepository;
    private options;
    constructor(addressFormatRepository: AddressFormatRepository, countryRepository: CountryRepository, _subdivisionRepository: any, // Keep for API compatibility
    options?: Record<string, any>);
    /**
     * Format an address for postal labels.
     */
    format(address: AddressInterface, options?: Record<string, any>): Promise<string>;
    /**
     * Format the address according to the format string with proper uppercasing.
     */
    private formatAddress;
    /**
     * Get field value with proper uppercasing if required.
     */
    private getFieldValue;
    /**
     * Wrap the formatted address in HTML.
     */
    private wrapInHtml;
}
//# sourceMappingURL=PostalLabelFormatter.d.ts.map