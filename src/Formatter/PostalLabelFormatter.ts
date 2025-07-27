import { FormatterInterface } from './FormatterInterface.js';
import { AddressInterface } from '../interfaces/AddressInterface.js';
import { AddressFormatRepository } from '../AddressFormat/AddressFormatRepository.js';
import { CountryRepository } from '../Country/CountryRepository.js';
import { AddressField } from '../AddressFormat/AddressField.js';

/**
 * Postal label formatter for addresses.
 * Takes care of uppercasing fields where required by the format.
 */
export class PostalLabelFormatter implements FormatterInterface {
  private addressFormatRepository: AddressFormatRepository;
  private countryRepository: CountryRepository;
  private options: Record<string, any>;

  constructor(
    addressFormatRepository: AddressFormatRepository,
    countryRepository: CountryRepository,
    _subdivisionRepository: any, // Keep for API compatibility
    options: Record<string, any> = {}
  ) {
    this.addressFormatRepository = addressFormatRepository;
    this.countryRepository = countryRepository;
    this.options = {
      html: false,
      locale: 'en',
      ...options
    };
  }

  /**
   * Format an address for postal labels.
   */
  async format(address: AddressInterface, options: Record<string, any> = {}): Promise<string> {
    const mergedOptions = { ...this.options, ...options };
    const countryCode = address.getCountryCode();
    
    if (!countryCode) {
      return '';
    }

    const addressFormat = await this.addressFormatRepository.get(countryCode);
    const country = await this.countryRepository.get(countryCode);
    
    if (!addressFormat || !country) {
      return '';
    }

    const originCountry = mergedOptions.originCountry || countryCode;
    const isDomestic = originCountry === countryCode;

    const formattedAddress = await this.formatAddress(address, addressFormat, country, mergedOptions, isDomestic);
    
    if (mergedOptions.html) {
      return this.wrapInHtml(formattedAddress, mergedOptions);
    }
    
    return formattedAddress;
  }

  /**
   * Format the address according to the format string with proper uppercasing.
   */
  private async formatAddress(
    address: AddressInterface,
    addressFormat: any,
    country: any,
    options: Record<string, any>,
    isDomestic: boolean
  ): Promise<string> {
    let format = addressFormat.getFormat();
    
    // Get field values and apply uppercasing where required
    const addressLine1 = this.getFieldValue(address.getAddressLine1(), AddressField.ADDRESS_LINE1, addressFormat);
    const addressLine2 = this.getFieldValue(address.getAddressLine2(), AddressField.ADDRESS_LINE2, addressFormat);
    const addressLine3 = this.getFieldValue(address.getAddressLine3(), AddressField.ADDRESS_LINE3, addressFormat);
    const locality = this.getFieldValue(address.getLocality(), AddressField.LOCALITY, addressFormat);
    const administrativeArea = this.getFieldValue(address.getAdministrativeArea(), AddressField.ADMINISTRATIVE_AREA, addressFormat);
    const dependentLocality = this.getFieldValue(address.getDependentLocality(), AddressField.DEPENDENT_LOCALITY, addressFormat);
    const postalCode = this.getFieldValue(address.getPostalCode(), AddressField.POSTAL_CODE, addressFormat);
    const sortingCode = this.getFieldValue(address.getSortingCode(), AddressField.SORTING_CODE, addressFormat);
    const organization = this.getFieldValue(address.getOrganization(), AddressField.ORGANIZATION, addressFormat);
    const givenName = this.getFieldValue(address.getGivenName(), AddressField.GIVEN_NAME, addressFormat);
    const additionalName = this.getFieldValue(address.getAdditionalName(), AddressField.ADDITIONAL_NAME, addressFormat);
    const familyName = this.getFieldValue(address.getFamilyName(), AddressField.FAMILY_NAME, addressFormat);
    
    // Replace placeholders with actual values
    format = format.replace(/%addressLine1/g, addressLine1);
    format = format.replace(/%addressLine2/g, addressLine2);
    format = format.replace(/%addressLine3/g, addressLine3);
    format = format.replace(/%locality/g, locality);
    format = format.replace(/%administrativeArea/g, administrativeArea);
    format = format.replace(/%dependentLocality/g, dependentLocality);
    format = format.replace(/%postalCode/g, postalCode);
    format = format.replace(/%sortingCode/g, sortingCode);
    format = format.replace(/%organization/g, organization);
    format = format.replace(/%givenName/g, givenName);
    format = format.replace(/%additionalName/g, additionalName);
    format = format.replace(/%familyName/g, familyName);
    format = format.replace(/%country/g, country.getName());

    // Add country name for international mail
    if (!isDomestic) {
      const countryName = country.getName();
      const locale = options.locale || 'en';
      
      // For international mail, add country name in both current locale and English
      if (locale !== 'en') {
        format += `\n${countryName} - ${country.getName()}`;
      } else {
        format += `\n${countryName}`;
      }
    }

    // Clean up empty lines and extra spaces
    format = format.replace(/\n\s*\n/g, '\n').trim();
    
    return format;
  }

  /**
   * Get field value with proper uppercasing if required.
   */
  private getFieldValue(value: string | null, field: AddressField, addressFormat: any): string {
    if (!value) {
      return '';
    }
    
    // Apply uppercasing if the field is marked for uppercasing
    if (addressFormat.isFieldUpper(field)) {
      return value.toUpperCase();
    }
    
    return value;
  }

  /**
   * Wrap the formatted address in HTML.
   */
  private wrapInHtml(formattedAddress: string, options: Record<string, any>): string {
    const wrapperElement = options.wrapper_element || 'p';
    const wrapperAttributes = options.wrapper_attributes || {};
    
    let attributes = '';
    for (const [key, value] of Object.entries(wrapperAttributes)) {
      attributes += ` ${key}="${value}"`;
    }
    
    const lines = formattedAddress.split('\n').filter(line => line.trim());
    const htmlLines = lines.map(line => {
      return `<span>${line}</span>`;
    });
    
    return `<${wrapperElement}${attributes}>\n${htmlLines.join('<br>\n')}\n</${wrapperElement}>`;
  }
} 