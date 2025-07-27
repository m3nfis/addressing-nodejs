/**
 * Country information.
 */
export declare class Country {
    private readonly countryCode;
    private readonly name;
    private readonly threeLetterCode;
    private readonly numericCode;
    private readonly currencyCode;
    private readonly timezones;
    constructor(countryCode: string, name: string, threeLetterCode: string, numericCode: string, currencyCode: string, timezones: string[]);
    /**
     * Gets the two-letter country code.
     */
    getCountryCode(): string;
    /**
     * Gets the country name.
     */
    getName(): string;
    /**
     * Gets the three-letter country code.
     */
    getThreeLetterCode(): string;
    /**
     * Gets the numeric country code.
     */
    getNumericCode(): string;
    /**
     * Gets the currency code.
     */
    getCurrencyCode(): string;
    /**
     * Gets the timezones.
     */
    getTimezones(): string[];
}
//# sourceMappingURL=Country.d.ts.map