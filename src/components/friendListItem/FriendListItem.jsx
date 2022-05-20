import PropTypes from 'prop-types';
import React from 'react';
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.list__item}>
      <span
        className={isOnline ? styles.status__on : styles.status__off}
      ></span>
      <img className={styles.list__avatar} src={avatar} alt={name} width="48" />
      <p className={styles.list__name}>{name}</p>
    </li>
  );
};

// ? PropTypes

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
