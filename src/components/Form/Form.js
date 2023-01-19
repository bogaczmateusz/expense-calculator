import React, { useState, useRef } from 'react';

import './form.css';
import InputContainer from './components/InputContainer';
import Input from './components/Input';
import InputRadio from './components/InputRadio';
import InputCheckbox from './components/InputCheckbox';
import Textarea from './components/Textarea';

function useInput(initialValue = '') {
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.type === 'checkbox' ? e.target.checked : e.target.value);
    }

    return [value, handleChange];
}

function Form() {
    const [name, handleChangeName] = useInput('');
    const [email, handleChangeEmail] = useInput('');
    const [bio, handleChangeBio] = useInput('');
    const [gender, handleChangeGender] = useInput('');
    const [terms, handleChangeTerms] = useInput('');
    const [result, setResult] = useState('');

    const nameInput = useRef();
    const emailInput = useRef();
    const bioInput = useRef();
    const genderFieldset = useRef();
    const termsFieldset = useRef();


    const handleSubmit = e => {
        e.preventDefault();

        !name ? nameInput.current.classList.add('has-error') : nameInput.current.classList.remove('has-error');
        !email ? emailInput.current.classList.add('has-error') : emailInput.current.classList.remove('has-error');
        !bio ? bioInput.current.classList.add('has-error') : bioInput.current.classList.remove('has-error');
        !gender ? genderFieldset.current.classList.add('has-error') : genderFieldset.current.classList.remove('has-error');
        !terms ? termsFieldset.current.classList.add('has-error') : termsFieldset.current.classList.remove('has-error');

        if (!name || !email || !bio || !gender || !terms) {
            setResult(<p className="form-message is-error">Formularz zawiera błędy.</p>);
        } else {
            setResult(<p className="form-message is-success">Formularz został wysłany.</p>);
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Formularz <small>prosty</small></h2>
            {result}
            <InputContainer ref={nameInput}>
                <Input
                    name="name"
                    value={name}
                    label="Name"
                    handleChange={handleChangeName}
                />
            </InputContainer>
            <InputContainer ref={emailInput}>
                <Input
                    name="email"
                    value={email}
                    label="E-mail"
                    handleChange={handleChangeEmail}
                />
            </InputContainer>
            <InputContainer ref={bioInput}>
                <Textarea
                    name="bio"
                    value={bio}
                    label="Bio"
                    handleChange={handleChangeBio}
                />
            </InputContainer>
            <InputContainer ref={genderFieldset}>
                <InputRadio
                    name="gender"
                    value="Male"
                    checked={gender === 'Male'}
                    handleChange={handleChangeGender}
                />
                <InputRadio
                    name="gender"
                    value="Female"
                    checked={gender === 'Female'}
                    handleChange={handleChangeGender}
                />
            </InputContainer>
            <InputContainer ref={termsFieldset}>
                <InputCheckbox
                    name="terms"
                    label="I agree to terms of use."
                    checked={terms}
                    handleChange={handleChangeTerms}
                />
            </InputContainer>
            <button type="submit">Wyślij</button>
        </form>
    );
}

export default Form;