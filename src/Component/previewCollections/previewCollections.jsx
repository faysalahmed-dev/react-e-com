import React from 'react';
import styles from './previewCollections.module.scss';
import CollectionItem from '../Collection-item/CollectionItem';

const previewCollections = ({ title, items }) => {
	return (
		<div className={styles.collectionPreview}>
			<h1 className={styles.title}>{title.toUpperCase()}</h1>
			<div className={styles.preview}>
				{items.filter((_, index) => index < 4).map((item) => <CollectionItem key={item.id} item={item} />)}
			</div>
		</div>
	);
};

export default previewCollections;
