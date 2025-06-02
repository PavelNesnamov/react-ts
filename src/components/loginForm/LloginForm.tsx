import type { JSX } from "react";
import styles from './LoginForm.module.css'
import MyButton from "../myButton/MyButton"
import MyInput from "../myInput/MyInput"

interface ILoginform {
    name: string;
    type: string;
    label: string;
    placeholder: string;
}

const submitLog = () => console.log('Submited!');

function LoginForm(): JSX.Element  {
    return (
        <div className={styles.container}>
            <h3>Login</h3>
            <MyInput name="login" type="login" label="Login: " placeholder="input login"/>
            <MyInput name="email" type="email" label="Email: " placeholder="input email"/>
            <MyInput name="password" type="password" label="Password: " placeholder="input password"/>
            <MyButton func={submitLog} type="submit"/>
        </div>
    )
}

export default LoginForm;