import { Subdivision } from './Subdivision.js';
/**
 * Repository for subdivision data.
 */
export declare class SubdivisionRepository {
    private subdivisions;
    private initialized;
    constructor();
    /**
     * Initialize the repository by loading subdivision data.
     */
    private initialize;
    /**
     * Load hardcoded subdivision data.
     */
    private loadHardcodedData;
    /**
     * Get subdivisions for a country.
     */
    getAll(parents?: string[]): Promise<Subdivision[]>;
}
//# sourceMappingURL=SubdivisionRepository.d.ts.map