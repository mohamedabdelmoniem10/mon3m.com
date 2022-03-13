import React, { useState, useCallback } from "react";
import { useFormikContext } from "formik";
import * as Yup from "yup";

import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = { name: "", email: "", message: "" };
  const handleSubmit = async (value, { resetForm }) => {
    setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `name=${value.name}&email=${value.email}&message=${value.message}`,
    };
    const res = await fetch(`/api/contact`, requestOptions);
    const { status, message } = await res.json();
    // const data = await res.json();
    if (status == "ok") {
      setLoading(false);
      resetForm();
      toast.success("your message sent successfully!", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: `${localStorage.getItem("theme")}`,
      });
    }
  };
  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormField
        name="name"
        type="text"
        placeholder="Name"
        autoComplete="off"
      />

      <FormField
        name="email"
        type="email"
        placeholder="email"
        autoComplete="off"
      />

      <FormTextField
        name="message"
        className="input"
        placeholder="Message"
        rows="5"
      />

      <SubmitBtn label="Send message" loading={loading} />
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </Form>
  );
};

export default ContactForm;

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  message: Yup.string().label("Message"),
});

const ErrorMessage = ({ title }) => {
  if (!title) return null;

  return <p>{title}</p>;
};

const FormField = ({ name, ...otherProps }) => {
  const { handleChange, setFieldTouched, touched, errors, values } =
    useFormikContext();

  return (
    <div className="input-group">
      <input
        className={touched[name] && errors[name] ? "error" : ""}
        onChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        {...otherProps}
      />
      {touched[name] && <ErrorMessage title={errors[name]} />}
    </div>
  );
};
const FormTextField = ({ name, ...otherProps }) => {
  const { handleChange, values } = useFormikContext();
  return (
    <div className="input-group">
      <textarea
        {...otherProps}
        onChange={handleChange(name)}
        value={values[name]}
      ></textarea>
    </div>
  );
};
const SubmitBtn = ({ label, loading }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <div className="input-group">
      <button className="btn btn--outline" type="submit" onClick={handleSubmit}>
        {label}
        {loading && <div className="loader"></div>}
      </button>
    </div>
  );
};
