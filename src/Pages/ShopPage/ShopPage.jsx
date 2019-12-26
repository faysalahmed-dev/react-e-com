import React from 'react';
import { Route } from 'react-router-dom';

import PreviewCollections from '../../Component/Collections-overview/Collections-overview';
import CollectionPage from '../CollectionsPage/CollectionPage';

import styles from './ShopPage.module.scss';

const ShopPage = ({ match: { path } }) => {
  return (
    <div className={styles.shopPage}>
      <Route path={path} exact component={PreviewCollections} />
      <Route path={`${path}/:categoryId`} exact component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
