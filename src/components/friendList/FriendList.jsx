import React from "react";
import { FriendListItem } from "components/friendListItem/FriendListItem";
import friends from "../../dataFiles/friends.json";
import styles from "./FriendList.module.css";

export const FriendList = () => {
    return (
        <ul className={styles.container}>
            {friends.map(elem =>
                <FriendListItem key={elem.id}
                    avatar={elem.avatar}
                    name={elem.name}
                    isOnline={elem.isOnline} />
            )}
        </ul>
    )
};

// ? key обязательно добавлять после map