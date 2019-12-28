import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  firestore,
  transformDataFromSnapshot
} from '../../FireBase/FireBase.utils';

import CollectionsOverview from '../../Component/Collections-overview/Collections-overview';
import CollectionPage from '../CollectionsPage/CollectionPage';

import { updateCollection, offSpiner } from '../../Redux/Shop/Shop.action';

import styles from './ShopPage.module.scss';

class ShopPage extends Component {
  componentDidMount() {
    const { shopUpdateCollection, disabledSpinner } = this.props;
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async doc => {
      await shopUpdateCollection(transformDataFromSnapshot(doc));
      disabledSpinner();
    });
  }
  render() {
    const {
      match: { path }
    } = this.props;
    return (
      <div className={styles.shopPage}>
        <Route path={path} exact component={CollectionsOverview} />
        <Route path={`${path}/:categoryId`} exact component={CollectionPage} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  shopUpdateCollection: collections => dispatch(updateCollection(collections)),
  disabledSpinner: () => dispatch(offSpiner())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
