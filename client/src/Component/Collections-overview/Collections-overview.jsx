import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  collectionOverviewSelector,
  loadingSpinnerSelector
} from '../../Redux/Shop/Shop.selector';

import PreviewCollections from '../Preview-collections/preview-collections';

import WithSpinner from '../With-spinner/WithSpinner';

const collectionOverview = ({ collection }) => {
  return (
    <div>
      {collection.map(({ id, ...otherCollection }) => (
        <PreviewCollections key={id} {...otherCollection} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collection: collectionOverviewSelector,
  isLoading: loadingSpinnerSelector
});

export default connect(mapStateToProps)(WithSpinner(collectionOverview));
