// импорт css modules происходит в переменной
import type { JSX } from "react";
import MyButton from "../../components/myButton/MyButton";
import styles from './Lesson09.module.css';

export default function Lesson09():JSX.Element {
  console.log(styles);

  return (
    <div>
      <h1 className={styles.heading}>Lesson 9: CSS modules 🎨</h1>
      <p className={styles.info}>CSS modules - это технология, позволяющая работать с CSS свойствами изолированно и независимо</p>
      <div>
        <MyButton text="primary" />
        <MyButton text="danger" variant="danger" />
        <MyButton text="success" variant="success" />
        <MyButton text="disabled" disabled={true} />
        <div className={styles.experimental}>
          <MyButton text="experimental"/>
        </div>
      </div>
      <p>Задачу добавления нескольких классов в CSS Modules можно решить несколькими способами:</p>
      <ul className={styles.ul}>
        <li>Конкатенация (сложение строк)</li>
        <li>Шаблонная строка (для не сложных случаев)</li>
        <li>Библиотека Classnames (предпочтительный)</li>
      </ul>

    </div>
  );
}