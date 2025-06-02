//! дкструетурезация объекта
// разделение объекта на переменные без деструктуризации
const peter = {name: 'Peter', age: 40, hobby: 'coding'};

// const name = peter.name;
// const age = peter.age;
// const hobby = peter.hobby;

// console.log(name, age, hobby);

//* с леструктуризацией в одну строку:

const {name, age, hobby} = peter;

console.log(name, age, hobby);