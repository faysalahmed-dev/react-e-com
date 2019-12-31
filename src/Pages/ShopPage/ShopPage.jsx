import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../Component/Collections-overview/Collections-overview';
import CollectionPage from '../CollectionsPage/CollectionPage';

// import { fetchCollections } from '../../Redux/Shop/Shop.action';
import { fetchCollectionStart } from '../../Redux/Shop/Shop.action';
import { loadingSpinnerSelector } from '../../Redux/Shop/Shop.selector';

import styles from './ShopPage.module.scss';

const ShopPage = ({ fetchCollectionsAsync, isLoading, match: { path } }) => {
    useEffect(() => {
        fetchCollectionsAsync();
    }, [fetchCollectionsAsync]);
    return (
        <div className={styles.shopPage}>
            <Route
                path={path}
                exact
                render={routeName => (
                    <CollectionsOverview isLoading={isLoading} {...routeName} />
                )}
            />
            <Route
                path={`${path}/:categoryId`}
                exact
                render={routeName => (
                    <CollectionPage isLoading={isLoading} {...routeName} />
                )}
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionStart())
});
const mapStateToProps = createStructuredSelector({
    isLoading: loadingSpinnerSelector
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopPage);
