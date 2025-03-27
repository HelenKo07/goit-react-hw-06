import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const form = useSelector((state) => state.contacts.items);

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: crypto.randomUUID(),
        ...values,
      })
    );
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required input field"),
    number: Yup.string()
      .matches(
        /^[+\d]?[0-9\s\-()]{3,50}$/,
        "Number must be between 3 and 50 digits"
      )
      .required("Required input field"),
  });

  return (
    <Formik
      className={css.formik}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label className={css.formLabel} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={css.field}
          autoComplete="on"
          type="text"
          name="name"
          id={nameFieldId}
        />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.formLabel} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={css.field}
          autoComplete="on"
          type="text"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.buttonFormik} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
