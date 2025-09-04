let person = {
  name: "Akash",
  address: {
    city: "Meerut",
    pincode: 250001
  }
};

let { address: { city, pincode } } = person;

console.log(city);    // "Meerut"
console.log(pincode); // 250001
