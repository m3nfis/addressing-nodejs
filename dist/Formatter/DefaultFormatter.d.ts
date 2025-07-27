import { FormatterInterface } from './FormatterInterface.js';
import { AddressInterface } from '../interfaces/AddressInterface.js';
import { AddressFormatRepository } from '../AddressFormat/AddressFormatRepository.js';
import { CountryRepository } from '../Country/CountryRepository.js';
/**
 * Default formatter for addresses.
 * Formats addresses for display, always adds the localized country name.
 */
export declare class DefaultFormatter implements FormatterInterface {
    private addressFormatRepository;
    private countryRepository;
    private options;
    constructor(addressFormatRepository: AddressFormatRepository, countryRepository: CountryRepository, _subdivisionRepository: any, // Keep for API compatibility
    options?: Record<string, any>);
    /**
     * Format an address.
     */
    format(address: AddressInterface, options?: Record<string, any>): Promise<string>;
    /**
     * Format the address according to the format string.
     */
    private formatAddress;
    /**
     * Wrap the formatted address in HTML.
     */
    private wrapInHtml;
}
//# sourceMappingURL=DefaultFormatter.d.ts.map