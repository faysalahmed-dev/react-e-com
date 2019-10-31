import React from 'react';
import styles from './Button.module.scss';
const button = ({ children, vareint, ...others }) => {
	let classs;
	if (!vareint) classs = styles.buttonMain;
	else classs = styles[vareint];
	return (
		<button className={classs} {...others}>
			{children}
		</button>
	);
};

export default button;
