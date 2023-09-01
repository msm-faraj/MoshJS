function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}
const newFactoryAddress = createAddress("stra da nova", "pavia", "27100");
console.log(newFactoryAddress);
