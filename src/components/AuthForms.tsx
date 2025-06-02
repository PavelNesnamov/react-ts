import * as Yup from "yup";
import { useFormik } from "formik";
import styles from "./AuthForms.module.css";
import MyButton from "../components/myButton/MyButton";

const registerSchema = Yup.object({
  username: Yup.string()
    .min(3, "Name must be min of 3 characters")
    .max(20, "Name must not exceed 20 characters")
    .matches(/^[a-zA-Z0-9_]+$/, "Only letters, numbers and symbol are allowed")
    .required("Required field"),
  email: Yup.string().email("Invalid email").required("Required field"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters ")
    .max(32, "Password must not exceed 32 characters")
    .matches(/[A-Z]/, "Must be at least one uppercase letter")
    .matches(/[a-z]/, 'Must contain at least one lowercase letter"')
    .matches(/\d/, "Must contain at least one number")
    .matches(/[@$!%*?&]/, "Must contain the @$!%*?& special character")
    .required("Required field"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required field"),
});

const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required field"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required field"),
});

interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ILoginForm {
  email: string;
  password: string;
}

export default function AuthForms() {
  const registerForm = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values: IRegisterForm) => console.log(values),
  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values: ILoginForm) => console.log(values),
  });

  return (
    <div className="authFormContainer">
      <h1>Registration</h1>
      <form onSubmit={registerForm.handleSubmit} className={styles.loginForm}>
        <input
          value={registerForm.values.username}
          name="username"
          onChange={registerForm.handleChange}
          type="username"
          placeholder="username"
        />
        <input
          value={registerForm.values.email}
          name="email"
          onChange={registerForm.handleChange}
          type="email"
          placeholder="email"
        />
        <input
          value={registerForm.values.password}
          name="password"
          onChange={registerForm.handleChange}
          type="password"
          placeholder="password"
        />
        <input
          value={registerForm.values.confirmPassword}
          name="confirmPassword"
          onChange={registerForm.handleChange}
          type="password"
          placeholder="Enter password"
        />

        <MyButton type="submit" text="Registration" />
        <span className={styles.errorMessage}>
          {registerForm.errors.username}
        </span>
        <span className={styles.errorMessage}>{registerForm.errors.email}</span>
        <span className={styles.errorMessage}>
          {registerForm.errors.password}
        </span>
        <span className={styles.errorMessage}>
          {registerForm.errors.confirmPassword}
        </span>
      </form>
      <h2>Login</h2>
      <form onSubmit={loginForm.handleSubmit} className={styles.loginForm}>
        <input
          value={loginForm.values.password}
          name="password"
          type="password"
          onChange={loginForm.handleChange}
          placeholder="password"
        />
        <input
          value={loginForm.values.email}
          name="email"
          type="email"
          onChange={loginForm.handleChange}
          placeholder="Email"
        />
        <MyButton type="submit" text="Login" />
        <span className={styles.errorMessage}>{loginForm.errors.email}</span>
        <span className={styles.errorMessage}>{loginForm.errors.password}</span>
      </form>
    </div>
  );
}