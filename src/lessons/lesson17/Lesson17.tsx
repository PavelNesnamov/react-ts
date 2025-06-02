// import styles from './Lesson17.module.css'
import type { JSX } from 'react';
import ChildrenProps from "../../components/childrenProps/ChildrenProps";
import MyInput from "../../components/myInput/MyInput";
import MyButton from "../../components/myButton/MyButton";
import { useFormik } from "formik";

export default function Lesson17(): JSX.Element {

  const formik = useFormik({
    initialValues: {
      password: '123456',
      email: 'user@gmail.com'
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <div>
      <h2>Lesson 17: Context + children practice</h2>
      <h3>Пример использования children props:</h3>
      <ChildrenProps func={() => console.log('1!')}>
        <h4>Эти данные переданы через children props 🙇‍♂️</h4>
      </ChildrenProps>
      <ChildrenProps func={() => console.log('2!')}>
        <h2>Это карточка 🙆‍♂️</h2>
        <p>Но все ее данные пришли через children props</p>
        <h3>Такая карточка может быть более универсальной в использовании, т.к кол-во элементов HTML не ограничено</h3>
      </ChildrenProps>
      <h3>Переиспользуемые компоненты с input:</h3>
      <form onSubmit={formik.handleSubmit}>
        <MyInput formik={formik} name="email" placeholder="email" label="type your email:" type="email" />
        <MyInput formik={formik} name="password" placeholder="password" label="type your password:" type="password"/>
        <MyButton type="submit" size="sm" text="sign in"/>
      </form>
    </div>
  );
}