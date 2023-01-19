import React, { useState, useRef } from 'react';
import { Formik, Form, Field } from 'formik';

import './form.css';
import InputContainer from './components/InputContainer';

function FormFormik() {
    const [result, setResult] = useState('');

    const nameInput = useRef();
    const emailInput = useRef();
    const bioInput = useRef();
    const genderFieldset = useRef();
    const termsFieldset = useRef();

    return (
        <div className="form is-formik">
            <h2>Formularz <small>formik</small></h2>
            {result}
            <Formik
                initialValues={{ name: '', email: '', bio: '', gender: '', terms: false }}
                validate={values => {
                    const errors = {};

                    if (!values.name) {
                        errors.name = 'Pole wymagane.'
                        nameInput.current.classList.add('has-error');
                    } else {
                        nameInput.current.classList.remove('has-error');
                    }

                    if (!values.email) {
                        errors.email = 'Pole wymagane.';
                        emailInput.current.classList.add('has-error');
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Niepoprawny adres e-mail';
                        emailInput.current.classList.add('has-error');
                    } else {
                        emailInput.current.classList.remove('has-error');
                    }

                    if (!values.bio) {
                        errors.bio = 'Pole wymagane.'
                        bioInput.current.classList.add('has-error');
                    } else {
                        bioInput.current.classList.remove('has-error');
                    }

                    if (!values.gender) {
                        errors.gender = 'Pole wymagane.'
                        genderFieldset.current.classList.add('has-error');
                    } else {
                        genderFieldset.current.classList.remove('has-error');
                    }

                    if (!values.terms) {
                        errors.terms = 'Pole wymagane.';
                        termsFieldset.current.classList.add('has-error');
                    } else {
                        termsFieldset.current.classList.remove('has-error');
                    }

                    return errors;
                }}
                onSubmit={() => {
                    setResult(<p className="form-message is-success">Formularz został wysłany.</p>);
                }}
            >
                {({ errors }) => (
                    <Form>
                        <InputContainer ref={nameInput} errorLabel={errors.name}>
                            <label>
                                Name
                                <Field type="text" name="name" />
                            </label>
                        </InputContainer>
                        <InputContainer ref={emailInput} errorLabel={errors.email}>
                            <label>
                                E-mail
                                <Field type="email" name="email" />
                            </label>
                        </InputContainer>
                        <InputContainer ref={bioInput} errorLabel={errors.bio}>
                            <label>
                                Bio
                                <Field name="bio" component="textarea" />
                            </label>
                        </InputContainer>
                        <InputContainer ref={genderFieldset} errorLabel={errors.gender}>
                            <label className="form-checkable">
                                <Field type="radio" name="gender" value="Male" />
                                Male
                            </label>
                            <label className="form-checkable">
                                <Field type="radio" name="gender" value="Female" />
                                Female
                            </label>
                        </InputContainer>
                        <InputContainer ref={termsFieldset} errorLabel={errors.terms}>
                            <label className="form-checkable">
                                <Field type="checkbox" name="terms" />
                                I agree to terms of use.
                            </label>
                        </InputContainer>
                        <button type="submit">Wyślij</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormFormik;