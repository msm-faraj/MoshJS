//this is a cinstructor function that create a address object
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const constructAdress = new Address("stra da nova", "pavia", 27100);
console.log(constructAdress);
