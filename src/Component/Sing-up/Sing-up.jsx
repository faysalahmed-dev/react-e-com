import React from 'react';
import { connect } from 'react-redux';
import FormHoc from '../../Hoc/FormHoc';
import FormInput from '../Form-input/Form-input';
import Button from '../Button/Button';

import userAction from '../../Redux/User/User.actions';

import styles from './Sing-up.module.scss';
class SingUp extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
    onInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    onFormSubmit = async e => {
        const { email, name, password, confirmPassword } = this.state;
        const { singupUser } = this.props;
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('password do not match');
            return;
        }
        singupUser(name, email, password);
    };
    render() {
        const { email, name, password, confirmPassword } = this.state;
        return (
            <FormHoc>
                <h1>I Do not have a account</h1>
                <span>Sing up with your email and password</span>
                <form className={styles.SingUp} onSubmit={this.onFormSubmit}>
                    <FormInput
                        type="text"
                        onChange={this.onInputChange}
                        value={name}
                        name="name"
                        label="Name"
                    />
                    <FormInput
                        type="text"
                        onChange={this.onInputChange}
                        value={email}
                        name="email"
                        label="Email"
                    />
                    <FormInput
                        type="password"
                        onChange={this.onInputChange}
                        value={password}
                        name="password"
                        label="Password"
                    />
                    <FormInput
                        type="password"
                        onChange={this.onInputChange}
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
    }
}

const mapDispatchToProps = dispatch => ({
    singupUser: (name, email, password) =>
        dispatch(userAction.singupStart({ name, email, password }))
});

export default connect(
    null,
    mapDispatchToProps
)(SingUp);
