import PropTypes from 'prop-types';
import React from "react";

export const FriendListItem = ({avatar, name, isOnline }) => {
    return (
        <li className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    )
};


// ? PropTypes

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};