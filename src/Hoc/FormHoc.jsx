import React from 'react';
import styles from './FormHoc.module.scss';
const FormHoc = ({ children }) => <div className={styles.formContainer}>{children}</div>;
export default FormHoc;
