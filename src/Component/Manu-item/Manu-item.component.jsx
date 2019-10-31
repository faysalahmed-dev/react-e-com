import React from 'react';
import styles from './Manu-item.module.scss';

const manuItem = ({ title, imgUrl, size }) => (
	<div className={`${size} ${styles.manuItem}`}>
		<div className={styles.manuItemBg} style={{ backgroundImage: `url(${imgUrl})` }} />
		<div className={styles.Content}>
			<h1 className={styles.title}>{title}</h1>

			<span className={styles.subTitle}>shop now</span>
		</div>
	</div>
);
export default manuItem;
