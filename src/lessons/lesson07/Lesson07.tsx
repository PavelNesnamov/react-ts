import type { JSX } from "react";
import MyButton from "../../components/myButton/MyButton";


export default function Lesson07():JSX.Element {
  // ! типизация объектов
  // возможна с помощью двух ключевых слов interface и type

  // ! типизация через interface

  // описание типа с помощью interface - он описывает все типы данных по ключам в объекте
  // такой тип записанный отдельно удобно переиспользовать с разными объектами
  interface ISuperHero {
    id: number;
    name: string;
    nickname: string;
    superpowers: string[];
    // необязательный ключ в объекте
    age?: number
  }

  // здесь мы создаем переменную hero1 с типом ISuperHero, описанным выше
  const hero1: ISuperHero = {
    id: 1,
    name: "Bruce Wayne",
    nickname: "Batman",
    superpowers: []
  };

  // на основании уже существующих interface можно создавать новые через ключевое слово extends
  interface ISpaceHero extends ISuperHero {
    homePlanet: 'Mars' | 'Saturn' | 'Crypton';
  }

  const hero2: ISpaceHero = {
    id: 2,
    name: "Clark Kent",
    nickname: "Superman",
    superpowers: ['super fly', 'super fly'],
    homePlanet: "Crypton",
  };

  // ? помните что типы можно объявить заново и тогда свойства описанные в них будут складываться

  // interface ISpaceHero {
  //   galactic: string
  // }

  // ! пример типизации массива из объектов
  // пишите название интерфейса для объекта из которого состоит массив и квадратные скобки
  // это значит, что если нужно типизировать массив объектов - сначала типизируйте один объект из которого состоит этот массив

  const superArray:ISuperHero[] = [hero1, hero2, {id: 3, name: 'Tony Stark', nickname: 'Iron man', superpowers: ['super genius'] }]

  console.log('супергерои: ', superArray);


  // ! типизация через type
  // есть небольшие особенности в сравнении с interface
  // оба способа хороши и активно используются

  type User = {
    id: 1
    isAdmin: boolean
    name: string
  }

  type UserProfile = User & {
    info: string
  }

  const user1:UserProfile = {
    id: 1,
    isAdmin: true,
    name: "Nick Fury",
    info: 'Head of the Shield organisation'
  }

  console.log(user1)

  //! джинерики
  // можно смотреть на них, как на переменные для передаваемого типа при вызове функции

  function makeArray<T>(first: T, second: T): T[] {
    return [first, second];
  }

    console.log(makeArray(100, 1000));
    console.log(makeArray(hero1, hero2));
    // console.log(makeArray(hero1, 'Spider-man')); // эти элементы должны быть одного типа


  return (
    <div>
      <h1>Lesson 7:  TypeScript pt2 💁‍♂️</h1>
      <p>Самое интересное на этом уроке происходит в теле функции и в командной строке</p>
      <MyButton text="Lern Typescript now!"/>
      {/* <MyInput type={"text"} placeholder={"placeholder"} label={"no dete"}/> */}
    </div>
  )
}
