import { AddressField } from './AddressField.js';
/**
 * Address format configuration for a country.
 */
export declare class AddressFormat {
    private readonly countryCode;
    private readonly format;
    private readonly requiredFields;
    private readonly upperFields;
    private readonly administrativeAreaType;
    private readonly localityType;
    private readonly dependentLocalityType;
    private readonly postalCodeType;
    private readonly postalCodePattern;
    private readonly postalCodePrefix;
    constructor(countryCode: string, format: string, requiredFields: AddressField[], upperFields: AddressField[], administrativeAreaType: string, localityType: string, dependentLocalityType: string, postalCodeType: string, postalCodePattern: string, postalCodePrefix: string);
    /**
     * Gets the country code.
     */
    getCountryCode(): string;
    /**
     * Gets the format string.
     */
    getFormat(): string;
    /**
     * Gets the required fields.
     */
    getRequiredFields(): AddressField[];
    /**
     * Gets the fields that should be uppercased.
     */
    getUpperFields(): AddressField[];
    /**
     * Gets the administrative area type.
     */
    getAdministrativeAreaType(): string;
    /**
     * Gets the locality type.
     */
    getLocalityType(): string;
    /**
     * Gets the dependent locality type.
     */
    getDependentLocalityType(): string;
    /**
     * Gets the postal code type.
     */
    getPostalCodeType(): string;
    /**
     * Gets the postal code pattern.
     */
    getPostalCodePattern(): string;
    /**
     * Gets the postal code prefix.
     */
    getPostalCodePrefix(): string;
    /**
     * Checks if a field is required.
     */
    isFieldRequired(field: AddressField): boolean;
    /**
     * Checks if a field should be uppercased.
     */
    isFieldUpper(field: AddressField): boolean;
}
//# sourceMappingURL=AddressFormat.d.ts.map