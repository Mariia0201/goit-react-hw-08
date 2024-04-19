import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be at least 2 characters!")
    .max(50, "Must be 50 characters or less!")
    .required("Name is required!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = ({ name, email, password }, actions) => {
    dispatch(register({ name, email, password }));
    actions.resetForm();
  };
 
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name" >
          Name:
        </label>

        <div className={css.containerField}>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Maria Mar"
            autoComplete="current-password"
          />
          <ErrorMessage
            className={css.errorSpan}
            name="name"
            component="span"
          />
        </div>
        <label className={css.label} htmlFor="email" >
          Email:
        </label>

        <div className={css.containerField}>
          <Field
            className={css.input}
            type="text"
            name="email"
            placeholder="maria@example.com"
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

        <button type="submit" title="Click to register user">
          Sing Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;