import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadingSpinnerSelector,
  collectionOverviewSelector
} from '../../Redux/Shop/Shop.selector';
import CollectionOverview from './Collections-overview';

import WithSpinner from '../With-spinner/WithSpinner';

const mapStateToProps = createStructuredSelector({
  isLoading: loadingSpinnerSelector,
  collection: collectionOverviewSelector
});
const CollectionsOverviewContainer = () =>
  compose(
    connect(mapStateToProps),
    WithSpinner
  )(CollectionOverview);

export default CollectionsOverviewContainer;
