import React from "react";
import "./App.scss";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");

  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          name: "",
          email: "",
          acceptedTerms: false,
          gender: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(5, "უნდა შეიცავდეს მინიმუმ 5 სიმბოლოს")
            .max(15, "უნდა შეიცავდეს მაქსიმუმ 15 სიმბოლოს")
            .required("აუცილებელია"),
          email: Yup.string()
            .email("არასწორი მეილის მისამართი")
            .required("აუცილებელია"),
          acceptedTerms: Yup.boolean()
            .required("აუცილებელია")
            .oneOf([true], "ამას აუცილებელია დაეთანხმო, ისე არ გამოვა"),
          gender: Yup.string()
            .oneOf(
              ["მამაკაცი", "დედაკაცი", "სხვა", "უფრო სხვა", "აბა მე რავი"],
              "ნუ იქნები ჰომოფობი"
            )
            .required("აუცილებელია"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 2000);
        }}
      >
        {(props) => (
          <Form>
            <h1>რეგისტრაცია</h1>
            <CustomTextInput
              label="სახელი"
              name="name"
              type="text"
              placeholder="Rame Name"
            />
            <CustomTextInput
              label="ელ-ფოსტა"
              name="email"
              type="email"
              placeholder="Rame@gmail.com"
            />
            <CustomSelect label="გენდერი" name="gender">
              <option value="">აირჩიეთ გენდერი</option>
              <option value="მამაკაცი">მამაკაცი</option>
              <option value="დედაკაცი">დედაკაცი</option>
              <option value="სხვა">სხვა</option>
              <option value="უფრო სხვა">უფრო სხვა</option>
              <option value="აბა მე რავი">აბა მე რავი</option>
            </CustomSelect>
            <CustomCheckBox name="acceptedTerms">
              მე თანახმა ვარ დაუწიონ მზეს 15 გრადუსით
            </CustomCheckBox>
            <button type="submit">
              {props.isSubmitting ? "იტვირთება..." : "Submit"}{" "}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
