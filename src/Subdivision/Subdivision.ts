/**
 * Subdivision information (state, province, etc.).
 */
export class Subdivision {
  private readonly code: string;
  private readonly name: string;
  private readonly localCode: string;
  private readonly localName: string;
  private readonly postalCodePattern: string;
  private readonly children: Subdivision[];

  constructor(
    code: string,
    name: string,
    localCode: string = '',
    localName: string = '',
    postalCodePattern: string = '',
    children: Subdivision[] = []
  ) {
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
  getCode(): string {
    return this.code;
  }

  /**
   * Gets the subdivision name.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Gets the local code.
   */
  getLocalCode(): string {
    return this.localCode;
  }

  /**
   * Gets the local name.
   */
  getLocalName(): string {
    return this.localName;
  }

  /**
   * Gets the postal code pattern.
   */
  getPostalCodePattern(): string {
    return this.postalCodePattern;
  }

  /**
   * Gets the children subdivisions.
   */
  getChildren(): Subdivision[] {
    return [...this.children];
  }

  /**
   * Adds a child subdivision.
   */
  addChild(child: Subdivision): void {
    this.children.push(child);
  }
} 