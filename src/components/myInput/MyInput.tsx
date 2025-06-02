// import styles from './MyInput.module.css'
import type { JSX } from 'react';
import type { FormikProps } from "formik";
interface MyinputProps {
  name: string;
  label: string;
  placeholder: string;
  type: 'password' | 'email' | 'number' | 'text';
  formik: FormikProps<any>
}


export default function MyInput({formik, label, name, placeholder, type }: MyinputProps): JSX.Element {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <input value={formik.values[name]} onChange={formik.handleChange} name={name} placeholder={placeholder} type={type} />
    </div>
  );
}