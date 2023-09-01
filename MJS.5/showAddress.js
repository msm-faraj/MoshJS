const address = {
  street: "stra da nova",
  city: "pavia",
  zipCode: "27100",
};

function showAddress(obj) {
  for (let key in obj) console.log(key, obj[key]);
}

showAddress(address);
