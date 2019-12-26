import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Manu-item.module.scss';

const manuItem = props => {
  const { title, imageUrl, size, linkUrl, history } = props;
  const handleClick = () => history.push(linkUrl);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={`${size} ${styles.manuItem}`} onClick={handleClick}>
      <div
        className={styles.manuItemBg}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.Content}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.subTitle}>shop now</span>
      </div>
    </div>
  );
};
export default withRouter(manuItem);
