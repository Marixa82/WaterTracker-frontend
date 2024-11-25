import React from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

interface FormValues {
  username: string;
  email: string;
}

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

export const DisplayingErrorMessagesExample: React.FC = () => {
  const initialValues: FormValues = {
    username: '',
    email: '',
  };

  const handleSubmit = (values: FormValues): void => {
    console.log(values);
  };

  return (
    <div>
      <h1>Displaying Error Messages</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field name="username" />
              {touched.username && errors.username && (
                <div>{errors.username}</div>
              )}
            </div>

            <div>
              <Field name="email" />
              {touched.email && errors.email && (
                <div>{errors.email}</div>
              )}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
