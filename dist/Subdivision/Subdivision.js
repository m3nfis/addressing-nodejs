/**
 * Subdivision information (state, province, etc.).
 */
export class Subdivision {
    code;
    name;
    localCode;
    localName;
    postalCodePattern;
    children;
    constructor(code, name, localCode = '', localName = '', postalCodePattern = '', children = []) {
        this.code = code;
        this.name = name;
        this.localCode = localCode;
        this.localName = localName;
        this.postalCodePattern = postalCodePattern;
        this.children = children;
    }
    /**
     * Gets the subdivision code.
     */
    getCode() {
        return this.code;
    }
    /**
     * Gets the subdivision name.
     */
    getName() {
        return this.name;
    }
    /**
     * Gets the local code.
     */
    getLocalCode() {
        return this.localCode;
    }
    /**
     * Gets the local name.
     */
    getLocalName() {
        return this.localName;
    }
    /**
     * Gets the postal code pattern.
     */
    getPostalCodePattern() {
        return this.postalCodePattern;
    }
    /**
     * Gets the children subdivisions.
     */
    getChildren() {
        return [...this.children];
    }
    /**
     * Adds a child subdivision.
     */
    addChild(child) {
        this.children.push(child);
    }
}
//# sourceMappingURL=Subdivision.js.map