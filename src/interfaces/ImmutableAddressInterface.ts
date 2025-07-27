import { AddressInterface } from './AddressInterface.js';

/**
 * Interface for immutable addresses.
 *
 * Provides with* methods that return new instances with updated values,
 * following the PSR-7 style immutable pattern.
 */
export interface ImmutableAddressInterface extends AddressInterface {
  /**
   * Returns a new instance with the updated country code.
   */
  withCountryCode(countryCode: string): ImmutableAddressInterface;

  /**
   * Returns a new instance with the updated administrative area.
   */
  withAdministrativeArea(administrativeArea: string): ImmutableAddressInterface;

  /**
   * Returns a new instance with the updated locality.
   */
  withLocality(locality: string): ImmutableAddressInterface;

  /**
   * Returns a new instance with the updated dependent locality.
   */
  withDependentLocality(dependentLocality: string): ImmutableAddressInterface;

  /**
   * Returns a new instance with the updated postal code.
   */
  withPostalCode(postalCode: string): ImmutableAddressInterface;

  /**
   * Returns a new instance with the updated sorting code.
   */
  withSortingCode(sortingCode: string): ImmutableAddressInterface;

  /**
   * Returns a new instance with the updated address line 1.
   */
  withAddressLine1(addressLine1: string): ImmutableAddressInterface;

  /**
   * Returns a new instance with the updated address line 2.
   */
  withAddressLine2(addressLine2: string): ImmutableAddressInterface;

  /**
   * Returns a new instance with the updated address line 3.
   */
  withAddressLine3(addressLine3: string): ImmutableAddressInterface;

  /**
   * Returns a new instance with the updated organization.
   */
  withOrganization(organization: string): ImmutableAddressInterface;

  /**
   * Returns a new instance with the updated given name.
   */
  withGivenName(givenName: string): ImmutableAddressInterface;

  /**
   * Returns a new instance with the updated additional name.
   */
  withAdditionalName(additionalName: string): ImmutableAddressInterface;

  /**
   * Returns a new instance with the updated family name.
   */
  withFamilyName(familyName: string): ImmutableAddressInterface;

  /**
   * Returns a new instance with the updated locale.
   */
  withLocale(locale: string): ImmutableAddressInterface;
} 