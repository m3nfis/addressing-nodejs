# Addressing Node.js

A Node.js addressing library, powered by CLDR and Google's address data.

Manipulates postal addresses, meant to identify a precise recipient location for shipping or billing purposes.

## Features

- Countries, with translations for over 150 locales. Powered by CLDR v47.
- Address formats for over 200 countries
- Subdivisions (administrative areas, localities, dependent localities) for 60 countries
- Both latin and local subdivision names, when relevant (e.g: Okinawa / 沖縄県)
- Formatting, in HTML or plain text.
- Validation
- Zones

Address formats and subdivisions were initially generated from Google's Address Data Service, and are now owned and maintained by the library.

## Installation

```bash
npm install addressing-nodejs
```

## Requirements

- Node.js 22 or higher

## Quick Start

```typescript
import { Address, CountryRepository, AddressFormatRepository, SubdivisionRepository, DefaultFormatter } from 'addressing-nodejs';

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

// Format the address
const formatter = new DefaultFormatter(
    addressFormatRepository,
    countryRepository,
    subdivisionRepository
);

const formattedAddress = await formatter.format(address);
console.log(formattedAddress);
```

## Usage

### Basic Usage

```typescript
import { Address, CountryRepository, AddressFormatRepository, SubdivisionRepository } from 'addressing-nodejs';

// Create repositories
const countryRepository = new CountryRepository();
const addressFormatRepository = new AddressFormatRepository();
const subdivisionRepository = new SubdivisionRepository();

// Get the country list (countryCode => name), in French.
const countryList = countryRepository.getList('fr-FR');

// Get the country object for Brazil.
const brazil = countryRepository.get('BR');
console.log(brazil.getThreeLetterCode()); // BRA
console.log(brazil.getName()); // Brazil
console.log(brazil.getCurrencyCode()); // BRL
console.log(brazil.getTimezones());

// Get all country objects.
const countries = countryRepository.getAll();

// Get the address format for Brazil.
const addressFormat = addressFormatRepository.get('BR');

// Get the subdivisions for Brazil.
const states = subdivisionRepository.getAll(['BR']);
for (const state of states) {
    const municipalities = state.getChildren();
}

// Get the subdivisions for Brazilian state Ceará.
const municipalities = subdivisionRepository.getAll(['BR', 'CE']);
for (const municipality of municipalities) {
    console.log(municipality.getName());
}
```

### Address Creation

```typescript
import { Address } from 'addressing-nodejs';

// Create an address
const address = new Address()
    .withCountryCode('US')
    .withAdministrativeArea('CA')
    .withLocality('Mountain View')
    .withAddressLine1('1098 Alta Ave')
    .withPostalCode('94043');

console.log(address.getCountryCode()); // US
console.log(address.getLocality()); // Mountain View
```

### Formatters

#### DefaultFormatter

Formats an address for display, always adds the localized country name.

```typescript
import { DefaultFormatter } from 'addressing-nodejs';

const formatter = new DefaultFormatter(
    addressFormatRepository,
    countryRepository,
    subdivisionRepository
);

const address = new Address()
    .withCountryCode('US')
    .withAdministrativeArea('CA')
    .withLocality('Mountain View')
    .withAddressLine1('1098 Alta Ave');

const formatted = await formatter.format(address);

// Output:
// <p translate="no">
// <span class="address-line1">1098 Alta Ave</span><br>
// <span class="locality">Mountain View</span>, <span class="administrative-area">CA</span><br>
// <span class="country">United States</span>
// </p>
```

#### PostalLabelFormatter

Takes care of uppercasing fields where required by the format (to facilitate automated mail sorting).

```typescript
import { PostalLabelFormatter } from 'addressing-nodejs';

const formatter = new PostalLabelFormatter(
    addressFormatRepository,
    countryRepository,
    subdivisionRepository,
    { locale: 'fr' }
);

const address = new Address()
    .withCountryCode('US')
    .withAdministrativeArea('CA')
    .withLocality('Mountain View')
    .withAddressLine1('1098 Alta Ave')
    .withPostalCode('94043');

const formatted = await formatter.format(address, { originCountry: 'FR' });

// Output:
// 1098 Alta Ave
// MOUNTAIN VIEW, CA 94043
// ÉTATS-UNIS - UNITED STATES
```

## Development

### Prerequisites

- Node.js 22 or higher
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd addressing-nodejs

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Run the example
npm start
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
├── examples/              # Usage examples
├── tests/                # Test files
├── dist/                 # Compiled JavaScript (generated)
└── addressing/           # Original PHP library data
```

### Building

```bash
# Build TypeScript to JavaScript
npm run build

# Watch mode for development
npm run dev
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Data Model

The address interface represents a postal address, with getters for the following fields:

- Country code
- Administrative area
- Locality (City)
- Dependent Locality
- Postal code
- Sorting code
- Address line 1
- Address line 2
- Address line 3
- Organization
- Given name (First name)
- Additional name (Middle name / Patronymic)
- Family name (Last name)

Field names follow the OASIS eXtensible Address Language (xAL) standard.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## License

MIT License 