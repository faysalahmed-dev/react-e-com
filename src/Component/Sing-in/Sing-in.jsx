import React, { Component } from 'react';
import FormHoc from '../../Hoc/FormHoc';
import FormInput from '../Form-input/Form-input';
import Button from '../Button/Button';
import { auth, singInWithGoogle } from '../../FireBase/FireBase.utils';

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
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  onGoogleSingin = () => {
    singInWithGoogle()
      .then(result => {
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(token, user);
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorCode, errorMessage, credential);
      });
  };

  render() {
    const { email, password } = this.state;
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
              onClick={this.onGoogleSingin}
            >
              Singin with google
            </Button>
          </div>
        </form>
      </FormHoc>
    );
  }
}
export default SingIn;
