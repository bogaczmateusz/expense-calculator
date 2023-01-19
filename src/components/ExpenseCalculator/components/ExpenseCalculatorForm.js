import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

function ExpenseCalculatorForm({ addHandler }) {
    return (
        <div className="expense-calculator-form">
            <Formik
                initialValues={{ type: '', name: '', amount: '', tags: '' }}
                validate={values => {
                    const errors = {};

                    if (!values.type) {
                        errors.type = 'Wybierz typ.';
                    }

                    if (!values.name) {
                        errors.name = 'Podaj nazwę.';
                    }

                    if (!values.amount) {
                        errors.amount = 'Podaj kwotę.';
                    }

                    return errors;
                }}
                onSubmit={(values) => {
                    addHandler(values);
                }}
            >
                {() => (
                    <Form>
                        <fieldset>
                            <label>
                                <Field type="radio" name="type" value="expense" />
                                Wydatek
                            </label>
                            <label>
                                <Field type="radio" name="type" value="income" />
                                Przychód
                            </label>
                            <ErrorMessage name="type" component="span" />
                        </fieldset>

                        <label className="expense-calculator-form-field">
                            <small>Nazwa</small>
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component="span" />
                        </label>

                        <label className="expense-calculator-form-field">
                            <small>Kwota</small>
                            <Field type="number" name="amount" />
                            <ErrorMessage name="amount" component="span" />
                        </label>

                        <label className="expense-calculator-form-field">
                            <small>Tagi</small>
                            <Field type="text" name="tags" />
                        </label>

                        <button type="submit">Dodaj</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ExpenseCalculatorForm;
