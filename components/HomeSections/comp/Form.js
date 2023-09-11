import React from "react";
import { Formik } from "formik";

const Form = ({ initialValues, validationSchema, onSubmit, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <form className="contact-form">{children}</form>}
    </Formik>
  );
};

export default Form;
