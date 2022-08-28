let name = "alexis";
let surName = "lopez";

let user = {
  name: "jose",
  surName: "ramirez",
};
//console.log(`hola ${name}`);
//console.log(`hola soy ${user.name} y mi apellido es ${user.surName}`);

let names = ["luna", "maria", "jose"];

for (let i = 0; i < names.length; i++) {
  //console.log(`Hola ${names[i]}`);
}

function employee(name, surname) {
  return `the employee ${name} have the surname ${surname} `;
}

console.log(employee("Alexis", "lopez"));
console.log(employee("Ariel", "Benitez"));
