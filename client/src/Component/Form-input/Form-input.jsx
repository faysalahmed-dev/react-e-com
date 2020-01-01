import React from 'react';
import styles from './Form-input.module.scss';
const FormInput = ({ label, onInputChange, ...others }) => {
	const inLen = others.value.length;
	return (
		<div className={styles.InputGroup}>
			<input className={styles.formInput} onChange={onInputChange} {...others} id={others.label} />
			{label && (
				<label className={`${styles.formLabel} ${inLen > 0 && styles.shrink}`} htmlFor={others.label}>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
