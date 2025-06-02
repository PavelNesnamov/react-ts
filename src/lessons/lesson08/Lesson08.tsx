import { useEffect, useState, type JSX } from "react";
import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";


export default function Lesson08():JSX.Element {
  // ! особенности работы с обновлением компонента
  // компонент обновляется в 2 случаях:

  // 1. при изменении переменных состояния внутри него
  // 2. при изменении props данных также внутри него

  // * при обновлении компонента код, который написан в теле функции сработает еще раз

  const [value, setValue] = useState(42);

  const handleIncrease = () => setValue(prev => prev + 1);

  console.log('update!');

  // ! работа с fetch запросами внутри компонента

  const [dog, setDog] = useState<string>("#");

  //  * useEffect - хук для управления выполнением действий внутри жизненного цикла react компонентов

  // частая задача: нужно изолировать действия от многократного повторения - например делать запрос только в начале жизненного цикла

  // * useEffect - принимает в себя два аргумента:

  // 1. функция, которая сработает при желаемых условиях
  // 2. массив зависимостей, в котором могут находиться ссылки на переменные, изменения которых приведет к вызову функции

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setDog(data.message));
  }, [value]);

  // в массиве зависимостей через запятую можно перечислить имена переменных при изменении которых useEffect сработает еще раз

  // пустой массив означает, что действие сработает только в начале жизненного цикла

   // ! useEffect + life cycle practice

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(prev => !prev)
  }

  return (
    <div>
      <h1>Lesson 8: UseEffect hook 🪝</h1>
      <div>
        <MyButton func={handleIncrease} text="increase value & change dog" />
      </div>
      <h2>{value}</h2>
      <h2>Работа с fetch внутри react компонентов ⬇</h2>
      <img width={200} src={dog} alt="" />

      <h2>Практика работы с useEffect внутри жизненного цикла ⬇</h2>

      {/* если хотим поставить отображения данных на странице от значения true / false в переменной - можем использовать символ && */}
      <MyButton func={handleToggle} text={`${toggle ? 'hide' : 'show'} card`}/>
      {toggle && <UserCard name={""} age={0} hobby={""}/>}


    </div>
  );
}