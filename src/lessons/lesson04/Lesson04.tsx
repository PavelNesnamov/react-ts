// не забывайте импортировать useState
import { useState, type JSX } from "react";
import MyButton from "../../components/myButton/MyButton";

function Lesson04():JSX.Element {

  // ! код ниже сработал бы в js, но не обновит данные на странице в react

  // let count = 0

  // const handlePlus = () => {
  //   count++
  //   console.log(count)
  // }

  // ! вместо этого мы воспользуемся функцией useState()

  // * 1. долгий способ (не используется)

  // ? вызываем функцию useState и передаем начальное значение - в ответ получаем массив из двух элементов
  // let result = useState(0)

  // ? первый элемент - сама переменная состояния, от изменения которой будет зависеть обновление страницы
  // const count = result[0]

  // ? второй элемент - функция изменяющая эту переменную - напрямую перезаписать данные не получится
  // эта функция перезаписывает значение переменной состояния
  // const setCount = result[1]

// проверка загрузки
  // * 2. короткий способ (рекомендуется!)
  // через деструктуризацию массивов

  const [count, setCount] = useState(0)


   const handlePlus = () => {
    setCount(prev => prev + 1)
  }

  const handleMinus = () => {
    setCount(prev => prev - 1)
  }

  const handlePlusTen = () => {
    setCount(prev => prev + 10)
  }

  // ! функция для уменьшения значения написана в виде безымянной стрелочной функции в самом onClick

  return(
    <div>
      <h1>Lesson 4: useState hook 🪝</h1>
      <MyButton text="-10" func={() => setCount(prev => prev - 10)}/>
      <button onClick={handleMinus}>-1</button>
      <span>{count}</span>
      <button onClick={handlePlus}>+1</button>
      <MyButton text="+10" func={handlePlusTen}/>
    </div>
  )
}

export default Lesson04;