import { Country } from './Country.js';
/**
 * Repository for country data.
 * Uses in-memory data for now.
 */
export class CountryRepository {
    countries = new Map();
    countryLists = new Map();
    initialized = false;
    constructor() {
        // Initialize with empty maps
    }
    /**
     * Initialize the repository by loading country data.
     */
    async initialize() {
        if (this.initialized) {
            return;
        }
        // Load hardcoded data for now
        this.loadHardcodedData();
        this.initialized = true;
    }
    /**
     * Load hardcoded country data.
     */
    loadHardcodedData() {
        // Sample country data
        const countryData = {
            US: {
                name: 'United States',
                threeLetterCode: 'USA',
                numericCode: '840',
                currencyCode: 'USD',
                timezones: ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles']
            },
            GB: {
                name: 'United Kingdom',
                threeLetterCode: 'GBR',
                numericCode: '826',
                currencyCode: 'GBP',
                timezones: ['Europe/London']
            },
            FR: {
                name: 'France',
                threeLetterCode: 'FRA',
                numericCode: '250',
                currencyCode: 'EUR',
                timezones: ['Europe/Paris']
            },
            DE: {
                name: 'Germany',
                threeLetterCode: 'DEU',
                numericCode: '276',
                currencyCode: 'EUR',
                timezones: ['Europe/Berlin']
            },
            BR: {
                name: 'Brazil',
                threeLetterCode: 'BRA',
                numericCode: '076',
                currencyCode: 'BRL',
                timezones: ['America/Sao_Paulo']
            },
            CA: {
                name: 'Canada',
                threeLetterCode: 'CAN',
                numericCode: '124',
                currencyCode: 'CAD',
                timezones: ['America/Toronto', 'America/Vancouver']
            },
            AU: {
                name: 'Australia',
                threeLetterCode: 'AUS',
                numericCode: '036',
                currencyCode: 'AUD',
                timezones: ['Australia/Sydney', 'Australia/Melbourne']
            }
        };
        // Create Country objects
        for (const [code, data] of Object.entries(countryData)) {
            const country = new Country(code, data.name, data.threeLetterCode, data.numericCode, data.currencyCode, data.timezones);
            this.countries.set(code, country);
        }
        // Create country lists for different locales
        this.countryLists.set('en', {
            US: 'United States',
            GB: 'United Kingdom',
            FR: 'France',
            DE: 'Germany',
            BR: 'Brazil',
            CA: 'Canada',
            AU: 'Australia'
        });
        this.countryLists.set('fr', {
            US: 'États-Unis',
            GB: 'Royaume-Uni',
            FR: 'France',
            DE: 'Allemagne',
            BR: 'Brésil',
            CA: 'Canada',
            AU: 'Australie'
        });
        this.countryLists.set('es', {
            US: 'Estados Unidos',
            GB: 'Reino Unido',
            FR: 'Francia',
            DE: 'Alemania',
            BR: 'Brasil',
            CA: 'Canadá',
            AU: 'Australia'
        });
    }
    /**
     * Get a country by its code.
     */
    async get(countryCode) {
        await this.initialize();
        return this.countries.get(countryCode) || null;
    }
    /**
     * Get all countries.
     */
    async getAll() {
        await this.initialize();
        return Array.from(this.countries.values());
    }
    /**
     * Get the country list for a specific locale.
     */
    async getList(locale = 'en') {
        await this.initialize();
        return this.countryLists.get(locale) || {};
    }
}
//# sourceMappingURL=CountryRepository.js.map