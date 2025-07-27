/**
 * Country information.
 */
export class Country {
  private readonly countryCode: string;
  private readonly name: string;
  private readonly threeLetterCode: string;
  private readonly numericCode: string;
  private readonly currencyCode: string;
  private readonly timezones: string[];

  constructor(
    countryCode: string,
    name: string,
    threeLetterCode: string,
    numericCode: string,
    currencyCode: string,
    timezones: string[]
  ) {
    this.countryCode = countryCode;
    this.name = name;
    this.threeLetterCode = threeLetterCode;
    this.numericCode = numericCode;
    this.currencyCode = currencyCode;
    this.timezones = timezones;
  }

  /**
   * Gets the two-letter country code.
   */
  getCountryCode(): string {
    return this.countryCode;
  }

  /**
   * Gets the country name.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Gets the three-letter country code.
   */
  getThreeLetterCode(): string {
    return this.threeLetterCode;
  }

  /**
   * Gets the numeric country code.
   */
  getNumericCode(): string {
    return this.numericCode;
  }

  /**
   * Gets the currency code.
   */
  getCurrencyCode(): string {
    return this.currencyCode;
  }

  /**
   * Gets the timezones.
   */
  getTimezones(): string[] {
    return [...this.timezones];
  }
} 