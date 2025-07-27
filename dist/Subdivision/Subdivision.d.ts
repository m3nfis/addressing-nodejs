/**
 * Subdivision information (state, province, etc.).
 */
export declare class Subdivision {
    private readonly code;
    private readonly name;
    private readonly localCode;
    private readonly localName;
    private readonly postalCodePattern;
    private readonly children;
    constructor(code: string, name: string, localCode?: string, localName?: string, postalCodePattern?: string, children?: Subdivision[]);
    /**
     * Gets the subdivision code.
     */
    getCode(): string;
    /**
     * Gets the subdivision name.
     */
    getName(): string;
    /**
     * Gets the local code.
     */
    getLocalCode(): string;
    /**
     * Gets the local name.
     */
    getLocalName(): string;
    /**
     * Gets the postal code pattern.
     */
    getPostalCodePattern(): string;
    /**
     * Gets the children subdivisions.
     */
    getChildren(): Subdivision[];
    /**
     * Adds a child subdivision.
     */
    addChild(child: Subdivision): void;
}
//# sourceMappingURL=Subdivision.d.ts.map