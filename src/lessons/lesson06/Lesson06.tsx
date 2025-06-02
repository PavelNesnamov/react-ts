import type { JSX } from "react";

export default function Lesson06():JSX.Element {
  
// ! typesript

//* string

let username:string = 'Pavel';
username = 'Daria'

//* number

let number:number = 42
number = 4.33

console.log(username)
console.log(number)

//* boolean

let isAdmin:boolean = true
isAdmin = 10 < 2
console.log(isAdmin)

//* null | unerfined

const nouhing: undefined = undefined
let empty: null = null
console.log(nouhing, empty)

//* union type

let value: string | number = 42
value = 'my favorit number' + 117
console.log(value)

//* type literals

let userRole: 'ADMIN' | 'CLIENT' | 'GUEST' = 'ADMIN'
userRole = 'CLIENT'
console.log(userRole)

//? оператор typeof из JavaScript покажет вам в ответ JS тип, а не тип TypeScript - будьте осторожны
console.log('type: ', typeof userRole)

//* arrays

const colors: string[] = ['rod', 'green', 'blue']
colors.push('cian')
console.log(colors)

//* tupel (кортеж)
// если не указывать слово readonly мы не ограничиваем этот массив для добавления новых элементов

let person: [string, number] = ['John', 35]
console.log(person)

let planet: readonly[string, boolean] = ['Earth', true]
  // planet.push(1000000) вызовет ошибку
  console.log(planet)

  //* functions
  // в функции обязательна типизация параметров
  // типизация возращенных данных может быть явной так и не явной

//* пример 1

  function sum(a: number, b: number) {
    return a + b
  }

sum(44, 66);
   console.log(sum)

   //* пример 2

   function makeString (a: number, b: number): string {
    return 'summe: ' + (a + b)
   }
    console.log(makeString(30, 25));

  //* пример 3

  const showMessage = (massage: string | number) => {
    console.log('your Message: ' + massage)
  }

  showMessage('🤦‍♂️')
  showMessage('33')

  //* any
  //тип данных который позволяет прописать дюбые типы
  // использовать не рекомендуестя или только в крайних случаях

  // let someValue:any = 'whatever you want';
  // someValue = 10
  // someValue = undefined


  // ! ts-ignore | ts-nocheck
  // можно отключить проверку типов для одной строчки
  // но лучше так не делать по возможности 🫣
  // для конкретной строки либо всего файла

  // /@ts-ignore
  // colors.push(42)

  return (
    <div>
      <h1>Lesson 06: TypeScript pt1 💁‍♂️</h1>
      <p>Самое интересное на этом уроке происходит в теле функции и в командной строке</p>
    </div>
  );
}