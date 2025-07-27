import { ImmutableAddressInterface } from './interfaces/ImmutableAddressInterface.js';
/**
 * Default address implementation.
 *
 * Can be used as a value object with immutable updates.
 */
export declare class Address implements ImmutableAddressInterface {
    private readonly countryCode;
    private readonly administrativeArea;
    private readonly locality;
    private readonly dependentLocality;
    private readonly postalCode;
    private readonly sortingCode;
    private readonly addressLine1;
    private readonly addressLine2;
    private readonly addressLine3;
    private readonly organization;
    private readonly givenName;
    private readonly additionalName;
    private readonly familyName;
    private readonly locale;
    constructor(countryCode?: string, administrativeArea?: string, locality?: string, dependentLocality?: string, postalCode?: string, sortingCode?: string, addressLine1?: string, addressLine2?: string, addressLine3?: string, organization?: string, givenName?: string, additionalName?: string, familyName?: string, locale?: string);
    getCountryCode(): string;
    withCountryCode(countryCode: string): ImmutableAddressInterface;
    getAdministrativeArea(): string;
    withAdministrativeArea(administrativeArea: string): ImmutableAddressInterface;
    getLocality(): string;
    withLocality(locality: string): ImmutableAddressInterface;
    getDependentLocality(): string;
    withDependentLocality(dependentLocality: string): ImmutableAddressInterface;
    getPostalCode(): string;
    withPostalCode(postalCode: string): ImmutableAddressInterface;
    getSortingCode(): string;
    withSortingCode(sortingCode: string): ImmutableAddressInterface;
    getAddressLine1(): string;
    withAddressLine1(addressLine1: string): ImmutableAddressInterface;
    getAddressLine2(): string;
    withAddressLine2(addressLine2: string): ImmutableAddressInterface;
    getAddressLine3(): string;
    withAddressLine3(addressLine3: string): ImmutableAddressInterface;
    getOrganization(): string;
    withOrganization(organization: string): ImmutableAddressInterface;
    getGivenName(): string;
    withGivenName(givenName: string): ImmutableAddressInterface;
    getAdditionalName(): string;
    withAdditionalName(additionalName: string): ImmutableAddressInterface;
    getFamilyName(): string;
    withFamilyName(familyName: string): ImmutableAddressInterface;
    getLocale(): string;
    withLocale(locale: string): ImmutableAddressInterface;
}
//# sourceMappingURL=Address.d.ts.map