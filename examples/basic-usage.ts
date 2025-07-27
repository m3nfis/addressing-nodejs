import {
  Address,
  CountryRepository,
  AddressFormatRepository,
  SubdivisionRepository,
  DefaultFormatter,
  PostalLabelFormatter
} from '../src/index.js';

export async function runExample() {
  console.log('=== Addressing Node.js Library Demo ===\n');

  // Create repositories
  const countryRepository = new CountryRepository();
  const addressFormatRepository = new AddressFormatRepository();
  const subdivisionRepository = new SubdivisionRepository();

  // Get country information
  console.log('1. Country Information:');
  const brazil = await countryRepository.get('BR');
  if (brazil) {
    console.log(`   Brazil: ${brazil.getName()}`);
    console.log(`   Three-letter code: ${brazil.getThreeLetterCode()}`);
    console.log(`   Currency: ${brazil.getCurrencyCode()}`);
    console.log(`   Timezones: ${brazil.getTimezones().join(', ')}`);
  }
  console.log();

  // Get country list
  console.log('2. Country List (French):');
  const countryList = await countryRepository.getList('fr');
  console.log(`   Available countries: ${Object.keys(countryList).length}`);
  console.log(`   France: ${countryList['FR']}`);
  console.log(`   Germany: ${countryList['DE']}`);
  console.log();

  // Get subdivisions
  console.log('3. Subdivisions:');
  const usStates = await subdivisionRepository.getAll(['US']);
  console.log(`   US States: ${usStates.length} states`);
  console.log(`   First 5 states: ${usStates.slice(0, 5).map(s => s.getName()).join(', ')}`);
  console.log();

  // Create an address
  console.log('4. Address Creation:');
  const address = new Address()
    .withCountryCode('US')
    .withAdministrativeArea('CA')
    .withLocality('Mountain View')
    .withAddressLine1('1098 Alta Ave')
    .withPostalCode('94043')
    .withGivenName('John')
    .withFamilyName('Doe');

  console.log(`   Country: ${address.getCountryCode()}`);
  console.log(`   State: ${address.getAdministrativeArea()}`);
  console.log(`   City: ${address.getLocality()}`);
  console.log(`   Address: ${address.getAddressLine1()}`);
  console.log(`   Postal Code: ${address.getPostalCode()}`);
  console.log(`   Name: ${address.getGivenName()} ${address.getFamilyName()}`);
  console.log();

  // Format address with DefaultFormatter
  console.log('5. Default Formatter (HTML):');
  const defaultFormatter = new DefaultFormatter(
    addressFormatRepository,
    countryRepository,
    subdivisionRepository
  );

  const formattedAddress = await defaultFormatter.format(address);
  console.log(formattedAddress);
  console.log();

  // Format address with PostalLabelFormatter
  console.log('6. Postal Label Formatter (Text):');
  const postalFormatter = new PostalLabelFormatter(
    addressFormatRepository,
    countryRepository,
    subdivisionRepository,
    { locale: 'fr' }
  );

  const postalAddress = await postalFormatter.format(address, { originCountry: 'FR' });
  console.log(postalAddress);
  console.log();

  // Create a Brazilian address
  console.log('7. Brazilian Address:');
  const brazilianAddress = new Address()
    .withCountryCode('BR')
    .withAdministrativeArea('SP')
    .withLocality('São Paulo')
    .withAddressLine1('Rua das Flores, 123')
    .withPostalCode('01234-567');

  const brazilianFormatted = await defaultFormatter.format(brazilianAddress);
  console.log(brazilianFormatted);
  console.log();

  console.log('=== Demo Complete ===');
}

// Run the demo if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runExample().catch(console.error);
} 