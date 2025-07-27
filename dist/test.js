import {
  Address,
  CountryRepository,
  AddressFormatRepository,
  SubdivisionRepository,
  DefaultFormatter,
  PostalLabelFormatter
} from './index.js';

async function testLibrary() {
  console.log('=== Addressing Node.js Library Test ===\n');

  try {
    // Create repositories
    const countryRepository = new CountryRepository();
    const addressFormatRepository = new AddressFormatRepository();
    const subdivisionRepository = new SubdivisionRepository();

    // Test country repository
    console.log('1. Testing Country Repository:');
    const brazil = await countryRepository.get('BR');
    if (brazil) {
      console.log(`   ✅ Brazil: ${brazil.getName()}`);
      console.log(`   ✅ Three-letter code: ${brazil.getThreeLetterCode()}`);
      console.log(`   ✅ Currency: ${brazil.getCurrencyCode()}`);
    } else {
      console.log('   ❌ Failed to get Brazil');
    }

    // Test address creation
    console.log('\n2. Testing Address Creation:');
    const address = new Address()
      .withCountryCode('US')
      .withAdministrativeArea('CA')
      .withLocality('Mountain View')
      .withAddressLine1('1098 Alta Ave')
      .withPostalCode('94043');

    console.log(`   ✅ Country: ${address.getCountryCode()}`);
    console.log(`   ✅ State: ${address.getAdministrativeArea()}`);
    console.log(`   ✅ City: ${address.getLocality()}`);
    console.log(`   ✅ Address: ${address.getAddressLine1()}`);

    // Test formatter
    console.log('\n3. Testing Default Formatter:');
    const formatter = new DefaultFormatter(
      addressFormatRepository,
      countryRepository,
      subdivisionRepository
    );

    const formattedAddress = await formatter.format(address);
    console.log('   ✅ Formatted address:');
    console.log(formattedAddress);

    // Test postal formatter
    console.log('\n4. Testing Postal Label Formatter:');
    const postalFormatter = new PostalLabelFormatter(
      addressFormatRepository,
      countryRepository,
      subdivisionRepository,
      { locale: 'fr' }
    );

    const postalAddress = await postalFormatter.format(address, { originCountry: 'FR' });
    console.log('   ✅ Postal address:');
    console.log(postalAddress);

    console.log('\n=== All Tests Passed! ===');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Run the test
testLibrary(); 