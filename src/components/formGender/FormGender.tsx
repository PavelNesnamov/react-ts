import { useFormik } from "formik";
import styles from './FormGender.module.css';
import { useState } from "react";

// типизация данных из формы
interface IFormValues {
  name: string;
}

// типизация данных из API
interface IGenderData {
  count: number;
  name: string;
  gender: string;
  probability: number;
}

// начальные данные для state
const initialData: IGenderData = {
  count: 0,
  name: "",
  gender: "",
  probability: 0
};

export default function FormGender() {
  // переменная состояния под данные
  const [genderData, setGenderData] = useState<IGenderData>(initialData);

  // функция для запроса
  const fetchGender = async (name: string) => {
    const res = await fetch('https://api.genderize.io/?name=' + name);
    const data: IGenderData = await res.json();
    // форматируем имя для корректного отображения
    data.name = data.name[0].toUpperCase() + data.name.slice(1).toLowerCase()
    setGenderData(data);
  };

  // объект управляющий формой
  const formik = useFormik({
    initialValues: {
      name: ''
    } as IFormValues,
    onSubmit: (values: IFormValues) => {
      fetchGender(values.name);
    }
  });

  return (
    <div>
      <h1>Gender Analyze 🔮</h1>
      <form onSubmit={formik.handleSubmit} className={styles.genderForm}>
        <input onChange={formik.handleChange} name="name" placeholder="type your name" type="text" />
        <button type='submit'>✨ name analyze ✨</button>
        {genderData.name && (
          <h2> {genderData.name} is {genderData.gender === 'male' ? '💁‍♂️' : '🙋‍♀️'} {genderData.probability * 100}%</h2>
        )}

      </form>
    </div>
  );
}