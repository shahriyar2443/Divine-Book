// Answer No 1
const name = 'Rifat';
const age = 25;

console.log('My name is ' + name + " and i am " + age + " years old");

// Answer No 2
const num = 10;
if (num % 2 == 0) {
    console.log("The number is even."
)
} else {
    console.log("The number is odd.");   
}
// Answer No 3
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
// Answer No 4
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(9, 11);
console.log(result);
// Answer No 5
let arr = ["apple", "banana", "cherry"];
arr.push('orange')
let final = arr[0]
console.log(final);
console.log(arr.length);
// Answer No 6
let numArr = [1, 2, 3, 4, 5];
numArr.forEach(function(number) {
    console.log(number * 2);
});
// Answer No 7
const button = document.getElementById('changeText');
const heading = document.querySelector('h1');

button.addEventListener('click', function() {
    heading.textContent = "You clicked the button!";
});
// Answer No 8
let som = "hello world";
console.log(som.toUpperCase());
// Answer No 9
let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        return Hello, my name is ${this.name}.;
    }
};

console.log(person.greet());