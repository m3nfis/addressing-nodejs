import { AddressFormat } from './AddressFormat.js';
import { AddressField } from './AddressField.js';
/**
 * Repository for address format data.
 */
export class AddressFormatRepository {
    formats = new Map();
    initialized = false;
    constructor() {
        // Initialize with empty map
    }
    /**
     * Initialize the repository by loading address format data.
     */
    async initialize() {
        if (this.initialized) {
            return;
        }
        this.loadHardcodedData();
        this.initialized = true;
    }
    /**
     * Load hardcoded address format data.
     */
    loadHardcodedData() {
        // Sample address format data
        const formatData = {
            US: {
                format: '%addressLine1\n%locality, %administrativeArea %postalCode\n%country',
                requiredFields: [AddressField.ADDRESS_LINE1, AddressField.LOCALITY, AddressField.ADMINISTRATIVE_AREA, AddressField.POSTAL_CODE],
                upperFields: [AddressField.LOCALITY, AddressField.ADMINISTRATIVE_AREA],
                administrativeAreaType: 'state',
                localityType: 'city',
                dependentLocalityType: 'neighborhood',
                postalCodeType: 'zip',
                postalCodePattern: '\\d{5}(-\\d{4})?',
                postalCodePrefix: ''
            },
            GB: {
                format: '%addressLine1\n%locality\n%administrativeArea %postalCode\n%country',
                requiredFields: [AddressField.ADDRESS_LINE1, AddressField.LOCALITY, AddressField.POSTAL_CODE],
                upperFields: [AddressField.LOCALITY, AddressField.ADMINISTRATIVE_AREA],
                administrativeAreaType: 'county',
                localityType: 'city',
                dependentLocalityType: 'neighborhood',
                postalCodeType: 'postal_code',
                postalCodePattern: '[A-Z]{1,2}\\d[A-Z\\d]? ?\\d[A-Z]{2}',
                postalCodePrefix: ''
            },
            FR: {
                format: '%addressLine1\n%postalCode %locality\n%country',
                requiredFields: [AddressField.ADDRESS_LINE1, AddressField.LOCALITY, AddressField.POSTAL_CODE],
                upperFields: [AddressField.LOCALITY],
                administrativeAreaType: 'region',
                localityType: 'city',
                dependentLocalityType: 'neighborhood',
                postalCodeType: 'postal_code',
                postalCodePattern: '\\d{5}',
                postalCodePrefix: ''
            },
            DE: {
                format: '%addressLine1\n%postalCode %locality\n%country',
                requiredFields: [AddressField.ADDRESS_LINE1, AddressField.LOCALITY, AddressField.POSTAL_CODE],
                upperFields: [AddressField.LOCALITY],
                administrativeAreaType: 'state',
                localityType: 'city',
                dependentLocalityType: 'neighborhood',
                postalCodeType: 'postal_code',
                postalCodePattern: '\\d{5}',
                postalCodePrefix: ''
            },
            BR: {
                format: '%addressLine1\n%locality - %administrativeArea\n%postalCode %country',
                requiredFields: [AddressField.ADDRESS_LINE1, AddressField.LOCALITY, AddressField.ADMINISTRATIVE_AREA, AddressField.POSTAL_CODE],
                upperFields: [AddressField.LOCALITY, AddressField.ADMINISTRATIVE_AREA],
                administrativeAreaType: 'state',
                localityType: 'city',
                dependentLocalityType: 'neighborhood',
                postalCodeType: 'postal_code',
                postalCodePattern: '\\d{5}-\\d{3}',
                postalCodePrefix: ''
            },
            CA: {
                format: '%addressLine1\n%locality %administrativeArea %postalCode\n%country',
                requiredFields: [AddressField.ADDRESS_LINE1, AddressField.LOCALITY, AddressField.ADMINISTRATIVE_AREA, AddressField.POSTAL_CODE],
                upperFields: [AddressField.LOCALITY, AddressField.ADMINISTRATIVE_AREA],
                administrativeAreaType: 'province',
                localityType: 'city',
                dependentLocalityType: 'neighborhood',
                postalCodeType: 'postal_code',
                postalCodePattern: '[A-Z]\\d[A-Z] ?\\d[A-Z]\\d',
                postalCodePrefix: ''
            },
            AU: {
                format: '%addressLine1\n%locality %administrativeArea %postalCode\n%country',
                requiredFields: [AddressField.ADDRESS_LINE1, AddressField.LOCALITY, AddressField.ADMINISTRATIVE_AREA, AddressField.POSTAL_CODE],
                upperFields: [AddressField.LOCALITY, AddressField.ADMINISTRATIVE_AREA],
                administrativeAreaType: 'state',
                localityType: 'city',
                dependentLocalityType: 'neighborhood',
                postalCodeType: 'postal_code',
                postalCodePattern: '\\d{4}',
                postalCodePrefix: ''
            }
        };
        // Create AddressFormat objects
        for (const [countryCode, data] of Object.entries(formatData)) {
            const format = new AddressFormat(countryCode, data.format, data.requiredFields, data.upperFields, data.administrativeAreaType, data.localityType, data.dependentLocalityType, data.postalCodeType, data.postalCodePattern, data.postalCodePrefix);
            this.formats.set(countryCode, format);
        }
    }
    /**
     * Get an address format by country code.
     */
    async get(countryCode) {
        await this.initialize();
        return this.formats.get(countryCode) || null;
    }
    /**
     * Get all address formats.
     */
    async getAll() {
        await this.initialize();
        return Array.from(this.formats.values());
    }
}
//# sourceMappingURL=AddressFormatRepository.js.map