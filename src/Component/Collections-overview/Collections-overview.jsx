import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { collectionOverviewSelector } from '../../Redux/Shop/Shop.selector';

import PreviewCollections from '../Preview-collections/preview-collections';

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
  collection: collectionOverviewSelector
});

export default connect(mapStateToProps)(collectionOverview);
