
let name = 'Shekhar';

console.log(name);




let selectedColors= ['red','blue'];
selectedColors[2] = '1';
console.log(selectedColors.length);


// Performing a Task
function greet(name, lastName) {              // Parameter
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Shekhar', 'Poddar');                   // Argument
greet('McQueen', 'Lightning');

//Calculationg a value
function square(number) {
    return number * number;
}

let number = square (2);
console.log(number);

console.log(square(2));