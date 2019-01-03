var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// nameConst = 'Gunther';
console.log('nameConst', nameConst);

function getPetName() {
  const petName = 'Hula';
  return petName;
}

getPetName();

const petName = getPetName();
console.log(petName);

// Block scoping

var fullName = 'Alan Partridge';
let firstName;

if(fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);