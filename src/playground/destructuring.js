// OBJECT DESTRUCTURING

const person = {
  name: 'Hayeon',
  age: 30,
  location: {
    city: 'Tokyo',
    temp: -1
  }
};

const { name: firstName = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);
console.log('----------------------------------------');

// ARRAY DESTRUCTURING

const address = ['Awesome Street', 'Minato', 'Tokyo', '12345'];
const [, , state = 'New York'] = address;
console.log(`You are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [itemName, smallPrice, mediumPrice, largePrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);

