/**
 * Interface for international postal addresses.
 *
 * Field names follow the OASIS "eXtensible Address Language" (xAL) standard:
 * http://www.oasis-open.org/committees/ciq/download.shtml
 *
 * Doesn't include the sub-administrative area (United States: county,
 * Italy: province, Great Britain: county) because it is not required for
 * addressing purposes.
 *
 * Makes no assumptions about mutability. The implementing application
 * can extend the interface to provide setters, or implement a value object
 * that uses either PSR-7 style with* mutators or relies on an AddressBuilder.
 */
export interface AddressInterface {
    /**
     * Gets the two-letter country code.
     *
     * This is a CLDR country code, since CLDR includes additional countries
     * for addressing purposes, such as Canary Islands (IC).
     *
     * @returns The two-letter country code.
     */
    getCountryCode(): string | null;
    /**
     * Gets the administrative area.
     *
     * Called the "state" in the United States, "region" in France, "province" in Italy,
     * "county" in Great Britain, "prefecture" in Japan, etc.
     *
     * @returns The administrative area. A subdivision code if there
     *          are predefined subdivision at this level.
     */
    getAdministrativeArea(): string | null;
    /**
     * Gets the locality (i.e city).
     *
     * Some countries do not use this field; their address lines are sufficient
     * to locate an address within a sub-administrative area.
     *
     * @returns The administrative area. A subdivision code if there
     *          are predefined subdivision at this level.
     */
    getLocality(): string | null;
    /**
     * Gets the dependent locality (i.e neighbourhood).
     *
     * When representing a double-dependent locality in Great Britain, includes
     * both the double-dependent locality and the dependent locality,
     * e.g. "Whaley, Langwith".
     *
     * @returns The administrative area. A subdivision code if there
     *          are predefined subdivision at this level.
     */
    getDependentLocality(): string | null;
    /**
     * Gets the postal code.
     *
     * The value is often alphanumeric.
     */
    getPostalCode(): string | null;
    /**
     * Gets the sorting code.
     *
     * For example, CEDEX in France.
     */
    getSortingCode(): string | null;
    /**
     * Gets the first line of address block.
     */
    getAddressLine1(): string | null;
    /**
     * Gets the second line of address block.
     */
    getAddressLine2(): string | null;
    /**
     * Gets the third line of address block.
     */
    getAddressLine3(): string | null;
    /**
     * Gets the organization.
     */
    getOrganization(): string | null;
    /**
     * Gets the given name (i.e first name).
     */
    getGivenName(): string | null;
    /**
     * Gets the additional name.
     *
     * Can be used to hold a middle name, or a patronymic.
     * If a remote API does not have an additional_name/middle_name parameter,
     * append it to the given name.
     */
    getAdditionalName(): string | null;
    /**
     * Gets the family name (i.e last name).
     */
    getFamilyName(): string | null;
    /**
     * Gets the locale.
     *
     * Allows the initially-selected address format / subdivision translations
     * to be selected and used the next time this address is modified.
     */
    getLocale(): string | null;
}
//# sourceMappingURL=AddressInterface.d.ts.map