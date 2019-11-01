import React, { Component } from 'react';
import ManuItem from '../../Component/Manu-item/Manu-item.component';
import styles from './Directory.module.scss';
import RandomId from '../../Helper/Random';
import AllImg from '../../Helper/GetAllImg';

class Directory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			section: [
				{
					id: RandomId(),
					imgUrl: AllImg[0],
					title: 'Mans'
				},
				{
					id: RandomId(),
					imgUrl: AllImg[1],
					title: 'Mans'
				},
				{
					id: RandomId(),
					imgUrl: AllImg[2],
					title: 'Mans'
				},
				{
					id: RandomId(),
					imgUrl: AllImg[3],
					title: 'Mans'
				},
				{
					id: RandomId(),
					imgUrl: AllImg[4],
					title: 'Mans'
				},
				{
					id: RandomId(),
					imgUrl: AllImg[5],
					title: 'Mans',
					size: 'large'
				},
				{
					id: RandomId(),
					imgUrl: AllImg[6],
					title: 'Mans',
					size: 'large'
				}
			]
		};
	}
	render() {
		return (
			<div className={styles.directory}>
				{this.state.section.map(({ id, ...others }) => <ManuItem key={id} {...others} />)}
			</div>
		);
	}
}

export default Directory;
