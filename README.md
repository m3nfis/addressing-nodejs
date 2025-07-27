# Addressing Node.js

[![CI](https://github.com/m3nfis/addressing-nodejs/actions/workflows/ci.yml/badge.svg)](https://github.com/m3nfis/addressing-nodejs/actions/workflows/ci.yml)

A Node.js addressing library, powered by CLDR and Google's address data. This is a complete port of the [CommerceGuys addressing library](https://github.com/commerceguys/addressing) from PHP to Node.js.

## About This Port

This library is a **complete Node.js port** of the original [CommerceGuys addressing library](https://github.com/commerceguys/addressing) written in PHP. The original library provides:

- Countries, with translations for over 150 locales. Powered by CLDR v47.
- Address formats for over 200 countries
- Subdivisions (administrative areas, localities, dependent localities) for 60 countries
- Both latin and local subdivision names, when relevant (e.g: Okinawa / 沖縄県)
- Formatting, in HTML or plain text
- Validation
- Zones

Address formats and subdivisions were initially generated from Google's Address Data Service, and are now owned and maintained by the library.

This Node.js port maintains the same API structure and functionality while adapting it to modern JavaScript/TypeScript patterns and Node.js ecosystem best practices.

## Features

- **Countries**: 150+ locales, powered by CLDR v47
- **Address Formats**: 200+ countries with proper formatting rules
- **Subdivisions**: 60 countries with hierarchical administrative areas
- **Formatting**: HTML and plain text output
- **Postal Labels**: Proper uppercasing and international mail conventions
- **TypeScript**: Full type safety and IntelliSense support
- **ES Modules**: Modern JavaScript with Node.js 22+ support

## Quick Start

### Installation

```bash
npm install addressing-nodejs
```

### Basic Usage

```typescript
import { Address, DefaultFormatter, CountryRepository, AddressFormatRepository, SubdivisionRepository } from 'addressing-nodejs';

// Create repositories
const countryRepository = new CountryRepository();
const addressFormatRepository = new AddressFormatRepository();
const subdivisionRepository = new SubdivisionRepository();

// Create an address
const address = new Address()
  .withCountryCode('US')
  .withAdministrativeArea('CA')
  .withLocality('Mountain View')
  .withAddressLine1('1098 Alta Ave')
  .withPostalCode('94043');

// Format for display
const formatter = new DefaultFormatter(
  addressFormatRepository,
  countryRepository,
  subdivisionRepository
);

const formattedAddress = await formatter.format(address);
console.log(formattedAddress);
// Output:
// <p translate="no">
// <span>1098 Alta Ave</span><br>
// <span>Mountain View, CA 94043</span><br>
// <span>United States</span>
// </p>
```

## API Reference

### Address

The main address class with immutable updates:

```typescript
import { Address } from 'addressing-nodejs';

const address = new Address()
  .withCountryCode('US')
  .withAdministrativeArea('CA')
  .withLocality('Mountain View')
  .withAddressLine1('1098 Alta Ave')
  .withPostalCode('94043');

// All with* methods return a new instance
const updatedAddress = address.withCountryCode('CA');
```

### Formatters

#### DefaultFormatter

Formats addresses for display with HTML output:

```typescript
import { DefaultFormatter } from 'addressing-nodejs';

const formatter = new DefaultFormatter(
  addressFormatRepository,
  countryRepository,
  subdivisionRepository
);

const html = await formatter.format(address);
const text = await formatter.format(address, { html: false });
```

#### PostalLabelFormatter

Formats addresses for postal labels with proper uppercasing:

```typescript
import { PostalLabelFormatter } from 'addressing-nodejs';

const formatter = new PostalLabelFormatter(
  addressFormatRepository,
  countryRepository,
  subdivisionRepository,
  { locale: 'fr' }
);

const postalLabel = await formatter.format(address, { originCountry: 'FR' });
```

### Repositories

#### CountryRepository

Access country data and localized names:

```typescript
import { CountryRepository } from 'addressing-nodejs';

const repository = new CountryRepository();

// Get country by code
const country = await repository.get('US');
console.log(country.getName()); // "United States"
console.log(country.getCurrencyCode()); // "USD"

// Get localized country list
const list = await repository.getList('fr');
console.log(list['US']); // "États-Unis"
```

#### AddressFormatRepository

Access address formatting rules:

```typescript
import { AddressFormatRepository } from 'addressing-nodejs';

const repository = new AddressFormatRepository();

const format = await repository.get('US');
console.log(format.getFormat()); // "%addressLine1\n%locality, %administrativeArea %postalCode\n%country"
```

#### SubdivisionRepository

Access administrative areas (states, provinces):

```typescript
import { SubdivisionRepository } from 'addressing-nodejs';

const repository = new SubdivisionRepository();

const states = await repository.getAll(['US']);
console.log(states.find(s => s.getCode() === 'CA')?.getName()); // "California"
```

## Development

### Prerequisites

- Node.js 22+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/m3nfis/addressing-nodejs.git
cd addressing-nodejs

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Run linting
npm run lint
```

### Project Structure

```
addressing-nodejs/
├── src/
│   ├── interfaces/          # TypeScript interfaces
│   ├── Country/            # Country-related classes
│   ├── AddressFormat/      # Address format classes
│   ├── Subdivision/        # Subdivision classes
│   ├── Formatter/          # Address formatters
│   └── index.ts           # Main exports
├── dist/                  # Compiled JavaScript
├── examples/              # Usage examples
├── tests/                # Test files
└── addressing/           # Original PHP library data
```

### Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Watch mode for development
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm start` - Build and run the example

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain immutable data structures
- Add tests for new features
- Update documentation as needed
- Use ES modules syntax

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Original PHP library by [CommerceGuys](https://github.com/commerceguys/addressing)
- Powered by [CLDR](http://cldr.unicode.org/) data
- Address formats from Google's Address Data Service 