/**
 * Address format configuration for a country.
 */
export class AddressFormat {
    countryCode;
    format;
    requiredFields;
    upperFields;
    administrativeAreaType;
    localityType;
    dependentLocalityType;
    postalCodeType;
    postalCodePattern;
    postalCodePrefix;
    constructor(countryCode, format, requiredFields, upperFields, administrativeAreaType, localityType, dependentLocalityType, postalCodeType, postalCodePattern, postalCodePrefix) {
        this.countryCode = countryCode;
        this.format = format;
        this.requiredFields = requiredFields;
        this.upperFields = upperFields;
        this.administrativeAreaType = administrativeAreaType;
        this.localityType = localityType;
        this.dependentLocalityType = dependentLocalityType;
        this.postalCodeType = postalCodeType;
        this.postalCodePattern = postalCodePattern;
        this.postalCodePrefix = postalCodePrefix;
    }
    /**
     * Gets the country code.
     */
    getCountryCode() {
        return this.countryCode;
    }
    /**
     * Gets the format string.
     */
    getFormat() {
        return this.format;
    }
    /**
     * Gets the required fields.
     */
    getRequiredFields() {
        return [...this.requiredFields];
    }
    /**
     * Gets the fields that should be uppercased.
     */
    getUpperFields() {
        return [...this.upperFields];
    }
    /**
     * Gets the administrative area type.
     */
    getAdministrativeAreaType() {
        return this.administrativeAreaType;
    }
    /**
     * Gets the locality type.
     */
    getLocalityType() {
        return this.localityType;
    }
    /**
     * Gets the dependent locality type.
     */
    getDependentLocalityType() {
        return this.dependentLocalityType;
    }
    /**
     * Gets the postal code type.
     */
    getPostalCodeType() {
        return this.postalCodeType;
    }
    /**
     * Gets the postal code pattern.
     */
    getPostalCodePattern() {
        return this.postalCodePattern;
    }
    /**
     * Gets the postal code prefix.
     */
    getPostalCodePrefix() {
        return this.postalCodePrefix;
    }
    /**
     * Checks if a field is required.
     */
    isFieldRequired(field) {
        return this.requiredFields.includes(field);
    }
    /**
     * Checks if a field should be uppercased.
     */
    isFieldUpper(field) {
        return this.upperFields.includes(field);
    }
}
//# sourceMappingURL=AddressFormat.js.map