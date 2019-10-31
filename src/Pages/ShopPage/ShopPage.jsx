import React, { Component } from 'react';
import shopData from './shop.data';
import PreviewCollections from '../../Component/previewCollections/previewCollections';

class ShopPage extends Component {
	state = {
		collection: shopData
	};
	render() {
		const { collection } = this.state;
		return (
			<div>
				{collection.map(({ id, ...otherCollection }) => <PreviewCollections key={id} {...otherCollection} />)}
			</div>
		);
	}
}
export default ShopPage;
