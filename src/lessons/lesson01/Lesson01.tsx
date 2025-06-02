import type { JSX } from 'react';
import reactLogo from '../../assets/react.svg'
import style from'./lesson01.module.css'

function Lesson01():JSX.Element {
    return (
        <div className={style.reactContainer}>
            <img src="/vite.svg" alt="" />
            <img src={reactLogo} alt="" />
        <h1>Hello, React ⚡</h1>
        </div>
    )
}

export default Lesson01;