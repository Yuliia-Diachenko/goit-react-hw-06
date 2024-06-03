import { useId } from "react";
import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    usernumber: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
  });
  
function ContactForm() {
  const dispatch = useDispatch();
    const fieldId = useId();
    const handleSubmit = (values, actions) => {
      values.id = nanoid(); 
        actions.resetForm();
        const { name, number } = values;
        dispatch(addContact(name, number));
    
        actions.resetForm();
      };
  
    return (
      <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        
      <Form className={css.container}>

        <div className={css.group}>
            <label  htmlFor={`${fieldId}-username`}>Name</label>
            <Field type="text" name="username" id={`${fieldId}-username`}/>
            <ErrorMessage name="username" component="span" className={css.error}/>
        </div>
        <div className={css.group}>
            <label  htmlFor={`${fieldId}-usernumber`}>Number</label>
            <Field type="text" name="usernumber" id={`${fieldId}-usernumber`}/>
            <ErrorMessage name="usernumber" component="span" className={css.error}/>
        </div>
        <button type="submit">Add contact</button>
        
      </Form>
      </Formik>
    )
}
export default ContactForm;