import React from 'react';
import styles from './previewCollections.module.scss';
import CollectionItem from '../Collection-item/CollectionItem';

const previewCollections = ({ id, title, items }) => {
	return (
		<div className={styles.collectionPreview}>
			<h1 className={styles.title}>{title.toUpperCase()}</h1>
			<div className={styles.preview}>
				{items
					.filter((_, index) => index < 4)
					.map(({ id, ...others }) => <CollectionItem key={id} {...others} />)}
			</div>
		</div>
	);
};

export default previewCollections;
