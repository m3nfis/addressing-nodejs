/**
 * Country information.
 */
export class Country {
    countryCode;
    name;
    threeLetterCode;
    numericCode;
    currencyCode;
    timezones;
    constructor(countryCode, name, threeLetterCode, numericCode, currencyCode, timezones) {
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
    getCountryCode() {
        return this.countryCode;
    }
    /**
     * Gets the country name.
     */
    getName() {
        return this.name;
    }
    /**
     * Gets the three-letter country code.
     */
    getThreeLetterCode() {
        return this.threeLetterCode;
    }
    /**
     * Gets the numeric country code.
     */
    getNumericCode() {
        return this.numericCode;
    }
    /**
     * Gets the currency code.
     */
    getCurrencyCode() {
        return this.currencyCode;
    }
    /**
     * Gets the timezones.
     */
    getTimezones() {
        return [...this.timezones];
    }
}
//# sourceMappingURL=Country.js.map