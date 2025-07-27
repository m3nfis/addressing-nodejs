import { Subdivision } from './Subdivision.js';
/**
 * Repository for subdivision data.
 */
export class SubdivisionRepository {
    subdivisions = new Map();
    initialized = false;
    constructor() {
        // Initialize with empty map
    }
    /**
     * Initialize the repository by loading subdivision data.
     */
    async initialize() {
        if (this.initialized) {
            return;
        }
        this.loadHardcodedData();
        this.initialized = true;
    }
    /**
     * Load hardcoded subdivision data.
     */
    loadHardcodedData() {
        // US States
        const usStates = [
            new Subdivision('AL', 'Alabama'),
            new Subdivision('AK', 'Alaska'),
            new Subdivision('AZ', 'Arizona'),
            new Subdivision('AR', 'Arkansas'),
            new Subdivision('CA', 'California'),
            new Subdivision('CO', 'Colorado'),
            new Subdivision('CT', 'Connecticut'),
            new Subdivision('DE', 'Delaware'),
            new Subdivision('FL', 'Florida'),
            new Subdivision('GA', 'Georgia'),
            new Subdivision('HI', 'Hawaii'),
            new Subdivision('ID', 'Idaho'),
            new Subdivision('IL', 'Illinois'),
            new Subdivision('IN', 'Indiana'),
            new Subdivision('IA', 'Iowa'),
            new Subdivision('KS', 'Kansas'),
            new Subdivision('KY', 'Kentucky'),
            new Subdivision('LA', 'Louisiana'),
            new Subdivision('ME', 'Maine'),
            new Subdivision('MD', 'Maryland'),
            new Subdivision('MA', 'Massachusetts'),
            new Subdivision('MI', 'Michigan'),
            new Subdivision('MN', 'Minnesota'),
            new Subdivision('MS', 'Mississippi'),
            new Subdivision('MO', 'Missouri'),
            new Subdivision('MT', 'Montana'),
            new Subdivision('NE', 'Nebraska'),
            new Subdivision('NV', 'Nevada'),
            new Subdivision('NH', 'New Hampshire'),
            new Subdivision('NJ', 'New Jersey'),
            new Subdivision('NM', 'New Mexico'),
            new Subdivision('NY', 'New York'),
            new Subdivision('NC', 'North Carolina'),
            new Subdivision('ND', 'North Dakota'),
            new Subdivision('OH', 'Ohio'),
            new Subdivision('OK', 'Oklahoma'),
            new Subdivision('OR', 'Oregon'),
            new Subdivision('PA', 'Pennsylvania'),
            new Subdivision('RI', 'Rhode Island'),
            new Subdivision('SC', 'South Carolina'),
            new Subdivision('SD', 'South Dakota'),
            new Subdivision('TN', 'Tennessee'),
            new Subdivision('TX', 'Texas'),
            new Subdivision('UT', 'Utah'),
            new Subdivision('VT', 'Vermont'),
            new Subdivision('VA', 'Virginia'),
            new Subdivision('WA', 'Washington'),
            new Subdivision('WV', 'West Virginia'),
            new Subdivision('WI', 'Wisconsin'),
            new Subdivision('WY', 'Wyoming')
        ];
        // Canadian Provinces
        const caProvinces = [
            new Subdivision('AB', 'Alberta'),
            new Subdivision('BC', 'British Columbia'),
            new Subdivision('MB', 'Manitoba'),
            new Subdivision('NB', 'New Brunswick'),
            new Subdivision('NL', 'Newfoundland and Labrador'),
            new Subdivision('NS', 'Nova Scotia'),
            new Subdivision('NT', 'Northwest Territories'),
            new Subdivision('NU', 'Nunavut'),
            new Subdivision('ON', 'Ontario'),
            new Subdivision('PE', 'Prince Edward Island'),
            new Subdivision('QC', 'Quebec'),
            new Subdivision('SK', 'Saskatchewan'),
            new Subdivision('YT', 'Yukon')
        ];
        // Brazilian States
        const brStates = [
            new Subdivision('AC', 'Acre'),
            new Subdivision('AL', 'Alagoas'),
            new Subdivision('AP', 'Amapá'),
            new Subdivision('AM', 'Amazonas'),
            new Subdivision('BA', 'Bahia'),
            new Subdivision('CE', 'Ceará'),
            new Subdivision('DF', 'Distrito Federal'),
            new Subdivision('ES', 'Espírito Santo'),
            new Subdivision('GO', 'Goiás'),
            new Subdivision('MA', 'Maranhão'),
            new Subdivision('MT', 'Mato Grosso'),
            new Subdivision('MS', 'Mato Grosso do Sul'),
            new Subdivision('MG', 'Minas Gerais'),
            new Subdivision('PA', 'Pará'),
            new Subdivision('PB', 'Paraíba'),
            new Subdivision('PR', 'Paraná'),
            new Subdivision('PE', 'Pernambuco'),
            new Subdivision('PI', 'Piauí'),
            new Subdivision('RJ', 'Rio de Janeiro'),
            new Subdivision('RN', 'Rio Grande do Norte'),
            new Subdivision('RS', 'Rio Grande do Sul'),
            new Subdivision('RO', 'Rondônia'),
            new Subdivision('RR', 'Roraima'),
            new Subdivision('SC', 'Santa Catarina'),
            new Subdivision('SP', 'São Paulo'),
            new Subdivision('SE', 'Sergipe'),
            new Subdivision('TO', 'Tocantins')
        ];
        // Australian States
        const auStates = [
            new Subdivision('ACT', 'Australian Capital Territory'),
            new Subdivision('NSW', 'New South Wales'),
            new Subdivision('NT', 'Northern Territory'),
            new Subdivision('QLD', 'Queensland'),
            new Subdivision('SA', 'South Australia'),
            new Subdivision('TAS', 'Tasmania'),
            new Subdivision('VIC', 'Victoria'),
            new Subdivision('WA', 'Western Australia')
        ];
        this.subdivisions.set('US', usStates);
        this.subdivisions.set('CA', caProvinces);
        this.subdivisions.set('BR', brStates);
        this.subdivisions.set('AU', auStates);
    }
    /**
     * Get subdivisions for a country.
     */
    async getAll(parents = []) {
        await this.initialize();
        if (parents.length === 0) {
            return [];
        }
        const countryCode = parents[0];
        if (!countryCode) {
            return [];
        }
        const subdivisions = this.subdivisions.get(countryCode) || [];
        if (parents.length === 1) {
            return subdivisions;
        }
        // For deeper levels, we would need to implement hierarchical lookup
        // For now, return empty array for deeper levels
        return [];
    }
}
//# sourceMappingURL=SubdivisionRepository.js.map