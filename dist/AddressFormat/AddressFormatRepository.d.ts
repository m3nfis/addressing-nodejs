import { AddressFormat } from './AddressFormat.js';
/**
 * Repository for address format data.
 */
export declare class AddressFormatRepository {
    private formats;
    private initialized;
    constructor();
    /**
     * Initialize the repository by loading address format data.
     */
    private initialize;
    /**
     * Load hardcoded address format data.
     */
    private loadHardcodedData;
    /**
     * Get an address format by country code.
     */
    get(countryCode: string): Promise<AddressFormat | null>;
    /**
     * Get all address formats.
     */
    getAll(): Promise<AddressFormat[]>;
}
//# sourceMappingURL=AddressFormatRepository.d.ts.map