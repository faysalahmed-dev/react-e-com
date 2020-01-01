import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormHoc from '../../Hoc/FormHoc';
import FormInput from '../Form-input/Form-input';
import Button from '../Button/Button';

import userAction from '../../Redux/User/User.actions';

import styles from './Sing-up.module.scss';
const SingUp = ({ singupUser }) => {
    const [userCredential, setUserCredential] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { email, name, password, confirmPassword } = userCredential;

    const onInputChange = e => {
        const { name, value } = e.target;
        setUserCredential({ ...userCredential, [name]: value });
    };

    const onFormSubmit = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('password do not match');
            return;
        }
        singupUser(name, email, password);
    };
    return (
        <FormHoc>
            <h1>I Do not have a account</h1>
            <span>Sing up with your email and password</span>
            <form className={styles.SingUp} onSubmit={onFormSubmit}>
                <FormInput
                    type="text"
                    onChange={onInputChange}
                    value={name}
                    name="name"
                    label="Name"
                />
                <FormInput
                    type="text"
                    onChange={onInputChange}
                    value={email}
                    name="email"
                    label="Email"
                />
                <FormInput
                    type="password"
                    onChange={onInputChange}
                    value={password}
                    name="password"
                    label="Password"
                />
                <FormInput
                    type="password"
                    onChange={onInputChange}
                    value={confirmPassword}
                    name="confirmPassword"
                    label="Confrim Password"
                />
                <Button vareint="main" type="submit">
                    Submit
                </Button>
            </form>
        </FormHoc>
    );
};

const mapDispatchToProps = dispatch => ({
    singupUser: (name, email, password) =>
        dispatch(userAction.singupStart({ name, email, password }))
});

export default connect(
    null,
    mapDispatchToProps
)(SingUp);
