/**
 * Default address implementation.
 *
 * Can be used as a value object with immutable updates.
 */
export class Address {
    countryCode;
    administrativeArea;
    locality;
    dependentLocality;
    postalCode;
    sortingCode;
    addressLine1;
    addressLine2;
    addressLine3;
    organization;
    givenName;
    additionalName;
    familyName;
    locale;
    constructor(countryCode = '', administrativeArea = '', locality = '', dependentLocality = '', postalCode = '', sortingCode = '', addressLine1 = '', addressLine2 = '', addressLine3 = '', organization = '', givenName = '', additionalName = '', familyName = '', locale = 'und') {
        this.countryCode = countryCode;
        this.administrativeArea = administrativeArea;
        this.locality = locality;
        this.dependentLocality = dependentLocality;
        this.postalCode = postalCode;
        this.sortingCode = sortingCode;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.addressLine3 = addressLine3;
        this.organization = organization;
        this.givenName = givenName;
        this.additionalName = additionalName;
        this.familyName = familyName;
        this.locale = locale;
    }
    getCountryCode() {
        return this.countryCode;
    }
    withCountryCode(countryCode) {
        return new Address(countryCode, this.administrativeArea, this.locality, this.dependentLocality, this.postalCode, this.sortingCode, this.addressLine1, this.addressLine2, this.addressLine3, this.organization, this.givenName, this.additionalName, this.familyName, this.locale);
    }
    getAdministrativeArea() {
        return this.administrativeArea;
    }
    withAdministrativeArea(administrativeArea) {
        return new Address(this.countryCode, administrativeArea, this.locality, this.dependentLocality, this.postalCode, this.sortingCode, this.addressLine1, this.addressLine2, this.addressLine3, this.organization, this.givenName, this.additionalName, this.familyName, this.locale);
    }
    getLocality() {
        return this.locality;
    }
    withLocality(locality) {
        return new Address(this.countryCode, this.administrativeArea, locality, this.dependentLocality, this.postalCode, this.sortingCode, this.addressLine1, this.addressLine2, this.addressLine3, this.organization, this.givenName, this.additionalName, this.familyName, this.locale);
    }
    getDependentLocality() {
        return this.dependentLocality;
    }
    withDependentLocality(dependentLocality) {
        return new Address(this.countryCode, this.administrativeArea, this.locality, dependentLocality, this.postalCode, this.sortingCode, this.addressLine1, this.addressLine2, this.addressLine3, this.organization, this.givenName, this.additionalName, this.familyName, this.locale);
    }
    getPostalCode() {
        return this.postalCode;
    }
    withPostalCode(postalCode) {
        return new Address(this.countryCode, this.administrativeArea, this.locality, this.dependentLocality, postalCode, this.sortingCode, this.addressLine1, this.addressLine2, this.addressLine3, this.organization, this.givenName, this.additionalName, this.familyName, this.locale);
    }
    getSortingCode() {
        return this.sortingCode;
    }
    withSortingCode(sortingCode) {
        return new Address(this.countryCode, this.administrativeArea, this.locality, this.dependentLocality, this.postalCode, sortingCode, this.addressLine1, this.addressLine2, this.addressLine3, this.organization, this.givenName, this.additionalName, this.familyName, this.locale);
    }
    getAddressLine1() {
        return this.addressLine1;
    }
    withAddressLine1(addressLine1) {
        return new Address(this.countryCode, this.administrativeArea, this.locality, this.dependentLocality, this.postalCode, this.sortingCode, addressLine1, this.addressLine2, this.addressLine3, this.organization, this.givenName, this.additionalName, this.familyName, this.locale);
    }
    getAddressLine2() {
        return this.addressLine2;
    }
    withAddressLine2(addressLine2) {
        return new Address(this.countryCode, this.administrativeArea, this.locality, this.dependentLocality, this.postalCode, this.sortingCode, this.addressLine1, addressLine2, this.addressLine3, this.organization, this.givenName, this.additionalName, this.familyName, this.locale);
    }
    getAddressLine3() {
        return this.addressLine3;
    }
    withAddressLine3(addressLine3) {
        return new Address(this.countryCode, this.administrativeArea, this.locality, this.dependentLocality, this.postalCode, this.sortingCode, this.addressLine1, this.addressLine2, addressLine3, this.organization, this.givenName, this.additionalName, this.familyName, this.locale);
    }
    getOrganization() {
        return this.organization;
    }
    withOrganization(organization) {
        return new Address(this.countryCode, this.administrativeArea, this.locality, this.dependentLocality, this.postalCode, this.sortingCode, this.addressLine1, this.addressLine2, this.addressLine3, organization, this.givenName, this.additionalName, this.familyName, this.locale);
    }
    getGivenName() {
        return this.givenName;
    }
    withGivenName(givenName) {
        return new Address(this.countryCode, this.administrativeArea, this.locality, this.dependentLocality, this.postalCode, this.sortingCode, this.addressLine1, this.addressLine2, this.addressLine3, this.organization, givenName, this.additionalName, this.familyName, this.locale);
    }
    getAdditionalName() {
        return this.additionalName;
    }
    withAdditionalName(additionalName) {
        return new Address(this.countryCode, this.administrativeArea, this.locality, this.dependentLocality, this.postalCode, this.sortingCode, this.addressLine1, this.addressLine2, this.addressLine3, this.organization, this.givenName, additionalName, this.familyName, this.locale);
    }
    getFamilyName() {
        return this.familyName;
    }
    withFamilyName(familyName) {
        return new Address(this.countryCode, this.administrativeArea, this.locality, this.dependentLocality, this.postalCode, this.sortingCode, this.addressLine1, this.addressLine2, this.addressLine3, this.organization, this.givenName, this.additionalName, familyName, this.locale);
    }
    getLocale() {
        return this.locale;
    }
    withLocale(locale) {
        return new Address(this.countryCode, this.administrativeArea, this.locality, this.dependentLocality, this.postalCode, this.sortingCode, this.addressLine1, this.addressLine2, this.addressLine3, this.organization, this.givenName, this.additionalName, this.familyName, locale);
    }
}
//# sourceMappingURL=Address.js.map