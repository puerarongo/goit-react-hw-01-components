import React from "react";
import { FriendListItem } from "components/friendListItem/FriendListItem";
import friends from "../../dataFiles/friends.json";

export const FriendList = () => {
    return (
        <ul className="friend-list">
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