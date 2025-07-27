import { ImmutableAddressInterface } from './interfaces/ImmutableAddressInterface.js';

/**
 * Default address implementation.
 *
 * Can be used as a value object with immutable updates.
 */
export class Address implements ImmutableAddressInterface {
  private readonly countryCode: string;
  private readonly administrativeArea: string;
  private readonly locality: string;
  private readonly dependentLocality: string;
  private readonly postalCode: string;
  private readonly sortingCode: string;
  private readonly addressLine1: string;
  private readonly addressLine2: string;
  private readonly addressLine3: string;
  private readonly organization: string;
  private readonly givenName: string;
  private readonly additionalName: string;
  private readonly familyName: string;
  private readonly locale: string;

  constructor(
    countryCode: string = '',
    administrativeArea: string = '',
    locality: string = '',
    dependentLocality: string = '',
    postalCode: string = '',
    sortingCode: string = '',
    addressLine1: string = '',
    addressLine2: string = '',
    addressLine3: string = '',
    organization: string = '',
    givenName: string = '',
    additionalName: string = '',
    familyName: string = '',
    locale: string = 'und'
  ) {
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

  getCountryCode(): string {
    return this.countryCode;
  }

  withCountryCode(countryCode: string): ImmutableAddressInterface {
    return new Address(
      countryCode,
      this.administrativeArea,
      this.locality,
      this.dependentLocality,
      this.postalCode,
      this.sortingCode,
      this.addressLine1,
      this.addressLine2,
      this.addressLine3,
      this.organization,
      this.givenName,
      this.additionalName,
      this.familyName,
      this.locale
    );
  }

  getAdministrativeArea(): string {
    return this.administrativeArea;
  }

  withAdministrativeArea(administrativeArea: string): ImmutableAddressInterface {
    return new Address(
      this.countryCode,
      administrativeArea,
      this.locality,
      this.dependentLocality,
      this.postalCode,
      this.sortingCode,
      this.addressLine1,
      this.addressLine2,
      this.addressLine3,
      this.organization,
      this.givenName,
      this.additionalName,
      this.familyName,
      this.locale
    );
  }

  getLocality(): string {
    return this.locality;
  }

  withLocality(locality: string): ImmutableAddressInterface {
    return new Address(
      this.countryCode,
      this.administrativeArea,
      locality,
      this.dependentLocality,
      this.postalCode,
      this.sortingCode,
      this.addressLine1,
      this.addressLine2,
      this.addressLine3,
      this.organization,
      this.givenName,
      this.additionalName,
      this.familyName,
      this.locale
    );
  }

  getDependentLocality(): string {
    return this.dependentLocality;
  }

  withDependentLocality(dependentLocality: string): ImmutableAddressInterface {
    return new Address(
      this.countryCode,
      this.administrativeArea,
      this.locality,
      dependentLocality,
      this.postalCode,
      this.sortingCode,
      this.addressLine1,
      this.addressLine2,
      this.addressLine3,
      this.organization,
      this.givenName,
      this.additionalName,
      this.familyName,
      this.locale
    );
  }

  getPostalCode(): string {
    return this.postalCode;
  }

  withPostalCode(postalCode: string): ImmutableAddressInterface {
    return new Address(
      this.countryCode,
      this.administrativeArea,
      this.locality,
      this.dependentLocality,
      postalCode,
      this.sortingCode,
      this.addressLine1,
      this.addressLine2,
      this.addressLine3,
      this.organization,
      this.givenName,
      this.additionalName,
      this.familyName,
      this.locale
    );
  }

  getSortingCode(): string {
    return this.sortingCode;
  }

  withSortingCode(sortingCode: string): ImmutableAddressInterface {
    return new Address(
      this.countryCode,
      this.administrativeArea,
      this.locality,
      this.dependentLocality,
      this.postalCode,
      sortingCode,
      this.addressLine1,
      this.addressLine2,
      this.addressLine3,
      this.organization,
      this.givenName,
      this.additionalName,
      this.familyName,
      this.locale
    );
  }

  getAddressLine1(): string {
    return this.addressLine1;
  }

  withAddressLine1(addressLine1: string): ImmutableAddressInterface {
    return new Address(
      this.countryCode,
      this.administrativeArea,
      this.locality,
      this.dependentLocality,
      this.postalCode,
      this.sortingCode,
      addressLine1,
      this.addressLine2,
      this.addressLine3,
      this.organization,
      this.givenName,
      this.additionalName,
      this.familyName,
      this.locale
    );
  }

  getAddressLine2(): string {
    return this.addressLine2;
  }

  withAddressLine2(addressLine2: string): ImmutableAddressInterface {
    return new Address(
      this.countryCode,
      this.administrativeArea,
      this.locality,
      this.dependentLocality,
      this.postalCode,
      this.sortingCode,
      this.addressLine1,
      addressLine2,
      this.addressLine3,
      this.organization,
      this.givenName,
      this.additionalName,
      this.familyName,
      this.locale
    );
  }

  getAddressLine3(): string {
    return this.addressLine3;
  }

  withAddressLine3(addressLine3: string): ImmutableAddressInterface {
    return new Address(
      this.countryCode,
      this.administrativeArea,
      this.locality,
      this.dependentLocality,
      this.postalCode,
      this.sortingCode,
      this.addressLine1,
      this.addressLine2,
      addressLine3,
      this.organization,
      this.givenName,
      this.additionalName,
      this.familyName,
      this.locale
    );
  }

  getOrganization(): string {
    return this.organization;
  }

  withOrganization(organization: string): ImmutableAddressInterface {
    return new Address(
      this.countryCode,
      this.administrativeArea,
      this.locality,
      this.dependentLocality,
      this.postalCode,
      this.sortingCode,
      this.addressLine1,
      this.addressLine2,
      this.addressLine3,
      organization,
      this.givenName,
      this.additionalName,
      this.familyName,
      this.locale
    );
  }

  getGivenName(): string {
    return this.givenName;
  }

  withGivenName(givenName: string): ImmutableAddressInterface {
    return new Address(
      this.countryCode,
      this.administrativeArea,
      this.locality,
      this.dependentLocality,
      this.postalCode,
      this.sortingCode,
      this.addressLine1,
      this.addressLine2,
      this.addressLine3,
      this.organization,
      givenName,
      this.additionalName,
      this.familyName,
      this.locale
    );
  }

  getAdditionalName(): string {
    return this.additionalName;
  }

  withAdditionalName(additionalName: string): ImmutableAddressInterface {
    return new Address(
      this.countryCode,
      this.administrativeArea,
      this.locality,
      this.dependentLocality,
      this.postalCode,
      this.sortingCode,
      this.addressLine1,
      this.addressLine2,
      this.addressLine3,
      this.organization,
      this.givenName,
      additionalName,
      this.familyName,
      this.locale
    );
  }

  getFamilyName(): string {
    return this.familyName;
  }

  withFamilyName(familyName: string): ImmutableAddressInterface {
    return new Address(
      this.countryCode,
      this.administrativeArea,
      this.locality,
      this.dependentLocality,
      this.postalCode,
      this.sortingCode,
      this.addressLine1,
      this.addressLine2,
      this.addressLine3,
      this.organization,
      this.givenName,
      this.additionalName,
      familyName,
      this.locale
    );
  }

  getLocale(): string {
    return this.locale;
  }

  withLocale(locale: string): ImmutableAddressInterface {
    return new Address(
      this.countryCode,
      this.administrativeArea,
      this.locality,
      this.dependentLocality,
      this.postalCode,
      this.sortingCode,
      this.addressLine1,
      this.addressLine2,
      this.addressLine3,
      this.organization,
      this.givenName,
      this.additionalName,
      this.familyName,
      locale
    );
  }
} 