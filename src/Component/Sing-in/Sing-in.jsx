import React, { Component } from 'react';
import FormInput from '../Form-input/Form-input';
import Button from '../Button/Button';
import styles from './Sing-in.module.scss';

class SingIn extends Component {
	state = {
		email: '',
		password: ''
	};
	onInputChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	onFormSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};
	render() {
		return (
			<div className={styles.SingIn}>
				<h1>I Already Have An Account </h1>
				<span>Sing in with your email and password</span>
				<form onSubmit={this.onFormSubmit}>
					<FormInput
						type='text'
						onChange={this.onInputChange}
						value={this.state.email}
						name='email'
						label='Email'
					/>
					<FormInput
						type='password'
						onChange={this.onInputChange}
						value={this.state.password}
						name='password'
						label='Password'
					/>
					<Button vareint='buttonMain' type='submit'>
						Submit
					</Button>
				</form>
			</div>
		);
	}
}
export default SingIn;
