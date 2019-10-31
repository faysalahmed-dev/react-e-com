import React from 'react';
import SingIn from '../../Component/Sing-in/Sing-in';
import SingUp from '../../Component/Sing-up/Sing-up';
import styles from './SingIn-and-Singup-Page.module.scss';
const singInAndSinpUpPage = () => {
	return (
		<section className={styles.authPage}>
			<SingIn />
			<SingUp />
		</section>
	);
};
export default singInAndSinpUpPage;
