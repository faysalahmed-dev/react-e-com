/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const button = ({ children, vareint, ...others }) => {
	let classs;
	if (!vareint) classs = styles.main;
	else classs = styles[vareint];
	const classNames = [ styles.customButton, classs ].join(' ');
	return (
		<button className={classNames} {...others}>
			{children}
		</button>
	);
};
button.defaultProps = {
	vareint: 'main'
};

button.propTypes = {
	vareint: PropTypes.string
};

export default button;
