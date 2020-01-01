import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import directorySelector from '../../Redux/Directory/Directory.selector';
import ManuItem from '../Manu-item/Manu-item.component';
import styles from './Directory.module.scss';

const Directory = ({ section }) => {
  return (
    <div className={styles.directory}>
      {section.map(({ id, ...others }) => (
        <ManuItem {...others} key={id} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  section: directorySelector
});

export default connect(mapStateToProps)(Directory);
