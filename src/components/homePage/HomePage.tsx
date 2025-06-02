import styles from './HomePage.module.css'
import { Link } from "react-router-dom";

const lessons = [
  {
    id: 1,
    title: 'React-intro'
  },
  {
    id: 2,
    title: 'JSX-components'
  },
  {
    id: 3,
    title: 'React-Props'
  },
  {
    id: 4,
    title: 'React-UseState-hook'
  },
  {
    id: 5,
    title: 'React-Map-components'
  },
  {
    id: 6,
    title: 'React-TS'
  },
  {
    id: 7,
    title: 'React-TS-2'
  },
  {
    id: 8,
    title: 'UseEffect-hook'
  },
  {
    id: 9,
    title: 'CSS-modules'
  },
  {
    id: 10,
    title: 'React-test'
  },
  {
    id: 11,
    title: 'React-router-dom'
  },
  {
    id: 12,
    title: 'Formik'
  },
  {
    id: 13,
    title: 'Yup'
  },
  {
    id: 14,
    title: 'Dynamic-routing'
  },
  {
    id: 15,
    title: 'React-practice'
  },
  {
    id: 16,
    title: 'Context'
  },
  {
    id: 17,
    title: 'Context-practice'
  },
  {
    id: 18,
    title: 'Redux'
  }
]

export default function HomePage() {
  return (
    <div >
      <h1>Lessons: 🏡</h1>
      <div className={styles.containerGrid}>
        {lessons.map(lesson => (
          <Link to={lesson.title}>
            <section>
              {lesson.id}. {lesson.title}
            </section>
          </Link>
        ))}
      </div>
    </div>
  )
}