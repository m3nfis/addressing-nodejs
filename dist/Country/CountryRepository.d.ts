import { Country } from './Country.js';
/**
 * Repository for country data.
 * Uses in-memory data for now.
 */
export declare class CountryRepository {
    private countries;
    private countryLists;
    private initialized;
    constructor();
    /**
     * Initialize the repository by loading country data.
     */
    private initialize;
    /**
     * Load hardcoded country data.
     */
    private loadHardcodedData;
    /**
     * Get a country by its code.
     */
    get(countryCode: string): Promise<Country | null>;
    /**
     * Get all countries.
     */
    getAll(): Promise<Country[]>;
    /**
     * Get the country list for a specific locale.
     */
    getList(locale?: string): Promise<Record<string, string>>;
}
//# sourceMappingURL=CountryRepository.d.ts.map