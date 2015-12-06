var poison = {focus: 1, blah: 2, nothing: 3};

var person = {name: "harry", born: 1980};

function age(person) { return 2014 - person.age; }
function ages(persons) return persons.map(age); }

age(person);
ages([person, person]);

age({n //+ name

ages([{b //+ born

var example = {
  // The foo
  foo: 10,
  // The food
  food: 20,
  // The bar
  bar: true
};

example.    //+ bar, foo, food @9
example.f   //+ foo, food @9
example.bar //+ bar @9
example.    //+? bar, foo, food @9
example.f   //+? foo, food @9
example.bar //+? bar @9

example.    //+! bar, foo, food @9
example.f   //+! bar, foo, food, hasOwnProperty, ... @9
example.bar //+! bar, foo, food, hasOwnProperty, ... @9
example.    //+?! bar, foo, food @9
example.f   //+?! bar, foo, food, hasOwnProperty, ... @9
example.bar //+?! bar, foo, food, hasOwnProperty, ... @9

example.    //+ bar, foo, food @10
example.f   //+ foo, food @10
example.bar //+ bar @9
example.    //+? bar, foo, food @10
example.f   //+? foo, food @10
example.bar //+? bar @10

example.    //+! bar, foo, food @10
example.f   //+! bar, foo, food, hasOwnProperty, ... @10
example.bar //+! bar, foo, food, hasOwnProperty, ... @10
example.    //+?! bar, foo, food @10
example.f   //+?! bar, foo, food, hasOwnProperty, ... @10
example.bar //+?! bar, foo, food, hasOwnProperty, ... @10

example.no    //+! bar, foo, food, hasOwnProperty, ... @9
example.not   //+! bar, foo, food, hasOwnProperty, ... @9
example.isProp //+! bar, foo, food, hasOwnProperty, ... @9

function takes(example) { return example; }
takes(example);

takes({
  fo //+ foo, food
});

takes({
  _1: "long long long long long long long long long long long long long long long long long long string",
  noise: 10,
  food //<doc: The food
  bar: false,
  _2: "long long long long long long long long long long long long long long long long long long string"
});

takes({
  _1: "long long long long long long long long long long long long long long long long long long string",
  noise: 10,
  b //+ bar
  _2: "long long long long long long long long long long long long long long long long long long string"
});

takes({
  bar //<: bool
