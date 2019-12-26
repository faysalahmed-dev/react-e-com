import React from 'react';
import { connect } from 'react-redux';
import { collectionSelector } from '../../Redux/Shop/Shop.selector';
import CollectionItem from '../../Component/Collection-item/Collection-item';

import styles from './CollectionPage.module.scss';

const CollectionsPage = ({ collections }) => {
  const { title, items } = collections;
  return (
    <div className={styles.collections_page}>
      <h2 className={styles.collections_page__title}>{title}</h2>
      <div className={styles.collections_page__items}>
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collections: collectionSelector(ownProps.match.params.categoryId)(state)
});
export default connect(mapStateToProps)(CollectionsPage);
