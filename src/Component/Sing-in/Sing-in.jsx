import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormHoc from '../../Hoc/FormHoc';
import FormInput from '../Form-input/Form-input';
import Button from '../Button/Button';
import UserActions from '../../Redux/User/User.actions';

import styles from './Sing-in.module.scss';

class SingIn extends Component {
    state = {
        email: '',
        password: ''
    };
    onInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    onFormSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        const { emailAndPasswordSingin } = this.props;
        emailAndPasswordSingin(email, password);
    };

    render() {
        const { email, password } = this.state;
        const { googleSingin } = this.props;
        return (
            <FormHoc>
                <h1>I Already Have An Account </h1>
                <span>Sing in with your email and password</span>
                <form onSubmit={this.onFormSubmit} className={styles.SingIn}>
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
                    <div className={styles.buttonGroup}>
                        <Button vareint="main" type="submit">
                            Submit
                        </Button>
                        <Button
                            vareint="secondry"
                            type="button"
                            onClick={googleSingin}
                        >
                            Singin with google
                        </Button>
                    </div>
                </form>
            </FormHoc>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    googleSingin: () => dispatch(UserActions.googleSingStart()),
    emailAndPasswordSingin: (email, password) =>
        dispatch(UserActions.emailAndPasswordSinginStart({ email, password }))
});

export default connect(
    null,
    mapDispatchToProps
)(SingIn);
