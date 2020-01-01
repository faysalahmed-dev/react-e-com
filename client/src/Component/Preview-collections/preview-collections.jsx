import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import CollectionItem from '../Collection-item/Collection-item';
import styles from './preview-collections.module.scss';

const previewCollections = ({ title, items, routeName, match: { path } }) => {
  return (
    <div className={styles.collectionPreview}>
      <h1 className={styles.title}>
        <Link to={`${path}/${routeName}`}>{title.toUpperCase()}</Link>
      </h1>
      <div className={styles.preview}>
        {items
          .filter((_, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(previewCollections);
