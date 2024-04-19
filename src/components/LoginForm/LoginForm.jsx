import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";


const initialValues = {
  email: "",
  password: "",
};

// Валідація за допомогою Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = ({ email, password }, actions) => {
    dispatch(logIn({ email, password }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="email" >
          Email:
        </label>

        <div className={css.containerField}>
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="username"
          />
          <ErrorMessage
            className={css.errorSpan}
            name="email"
            component="span"
          />
        </div>

        <label className={css.label} htmlFor="password" >
          Password:
        </label>

        <div className={css.containerField}>
          <Field
            className={css.input}
            type="password"
            name="password"
            autoComplete="current-password"
          />
          <ErrorMessage
            className={css.errorSpan}
            name="password"
            component="span"
          />
        </div>

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;