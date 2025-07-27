import { FormatterInterface } from './FormatterInterface.js';
import { AddressInterface } from '../interfaces/AddressInterface.js';
import { AddressFormatRepository } from '../AddressFormat/AddressFormatRepository.js';
import { CountryRepository } from '../Country/CountryRepository.js';

/**
 * Default formatter for addresses.
 * Formats addresses for display, always adds the localized country name.
 */
export class DefaultFormatter implements FormatterInterface {
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
      html: true,
      wrapper_element: 'p',
      wrapper_attributes: { translate: 'no' },
      ...options
    };
  }

  /**
   * Format an address.
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

    const formattedAddress = await this.formatAddress(address, addressFormat, country, mergedOptions);
    
    if (mergedOptions.html) {
      return this.wrapInHtml(formattedAddress, mergedOptions);
    }
    
    return formattedAddress;
  }

  /**
   * Format the address according to the format string.
   */
  private async formatAddress(
    address: AddressInterface,
    addressFormat: any,
    country: any,
    _options: Record<string, any>
  ): Promise<string> {
    let format = addressFormat.getFormat();
    
    // Replace placeholders with actual values
    format = format.replace(/%addressLine1/g, address.getAddressLine1() || '');
    format = format.replace(/%addressLine2/g, address.getAddressLine2() || '');
    format = format.replace(/%addressLine3/g, address.getAddressLine3() || '');
    format = format.replace(/%locality/g, address.getLocality() || '');
    format = format.replace(/%administrativeArea/g, address.getAdministrativeArea() || '');
    format = format.replace(/%dependentLocality/g, address.getDependentLocality() || '');
    format = format.replace(/%postalCode/g, address.getPostalCode() || '');
    format = format.replace(/%sortingCode/g, address.getSortingCode() || '');
    format = format.replace(/%organization/g, address.getOrganization() || '');
    format = format.replace(/%givenName/g, address.getGivenName() || '');
    format = format.replace(/%additionalName/g, address.getAdditionalName() || '');
    format = format.replace(/%familyName/g, address.getFamilyName() || '');
    format = format.replace(/%country/g, country.getName());

    // Clean up empty lines and extra spaces
    format = format.replace(/\n\s*\n/g, '\n').trim();
    
    return format;
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
      // Simple HTML formatting - in a real implementation, this would be more sophisticated
      return `<span>${line}</span>`;
    });
    
    return `<${wrapperElement}${attributes}>\n${htmlLines.join('<br>\n')}\n</${wrapperElement}>`;
  }
} 