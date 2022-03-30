import PropTypes from 'prop-types';
import React from "react";
import styles from "./Profile.module.css";

export const Profile = ({ username, tag, location, avatar, stats}) => {
    return (
        <div className={styles.container}>
            <div className={styles.profile__description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.profile__image}
                />
                <p className={styles.profile__name}>{username}</p>
                <p className={styles.profile__text}>{tag}</p>
                <p className={styles.profile__text}>{location}</p>
            </div>

            <ul className={styles.profile__list}>
                <li className={styles.list__item}>
                    <span className={styles.stats__name}>Followers</span>
                    <span className={styles.stats__value}> {stats.followers}</span>
                </li>
                <li className={styles.list__item}>
                    <span className={styles.stats__name}>Views</span>
                    <span className={styles.stats__value}>{stats.views}</span>
                </li>
                <li className={styles.list__item}>
                    <span className={styles.stats__name}>Likes</span>
                    <span className={styles.stats__value}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
};


// ? PropTypes

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object
};
