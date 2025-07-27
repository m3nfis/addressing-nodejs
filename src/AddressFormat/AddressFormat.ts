import { AddressField } from './AddressField.js';

/**
 * Address format configuration for a country.
 */
export class AddressFormat {
  private readonly countryCode: string;
  private readonly format: string;
  private readonly requiredFields: AddressField[];
  private readonly upperFields: AddressField[];
  private readonly administrativeAreaType: string;
  private readonly localityType: string;
  private readonly dependentLocalityType: string;
  private readonly postalCodeType: string;
  private readonly postalCodePattern: string;
  private readonly postalCodePrefix: string;

  constructor(
    countryCode: string,
    format: string,
    requiredFields: AddressField[],
    upperFields: AddressField[],
    administrativeAreaType: string,
    localityType: string,
    dependentLocalityType: string,
    postalCodeType: string,
    postalCodePattern: string,
    postalCodePrefix: string
  ) {
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
  getCountryCode(): string {
    return this.countryCode;
  }

  /**
   * Gets the format string.
   */
  getFormat(): string {
    return this.format;
  }

  /**
   * Gets the required fields.
   */
  getRequiredFields(): AddressField[] {
    return [...this.requiredFields];
  }

  /**
   * Gets the fields that should be uppercased.
   */
  getUpperFields(): AddressField[] {
    return [...this.upperFields];
  }

  /**
   * Gets the administrative area type.
   */
  getAdministrativeAreaType(): string {
    return this.administrativeAreaType;
  }

  /**
   * Gets the locality type.
   */
  getLocalityType(): string {
    return this.localityType;
  }

  /**
   * Gets the dependent locality type.
   */
  getDependentLocalityType(): string {
    return this.dependentLocalityType;
  }

  /**
   * Gets the postal code type.
   */
  getPostalCodeType(): string {
    return this.postalCodeType;
  }

  /**
   * Gets the postal code pattern.
   */
  getPostalCodePattern(): string {
    return this.postalCodePattern;
  }

  /**
   * Gets the postal code prefix.
   */
  getPostalCodePrefix(): string {
    return this.postalCodePrefix;
  }

  /**
   * Checks if a field is required.
   */
  isFieldRequired(field: AddressField): boolean {
    return this.requiredFields.includes(field);
  }

  /**
   * Checks if a field should be uppercased.
   */
  isFieldUpper(field: AddressField): boolean {
    return this.upperFields.includes(field);
  }
} 