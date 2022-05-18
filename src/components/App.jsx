import React from "react";
import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friendList/FriendList"; 
import { TransactionHistory } from "./transaction/TransactionHistiory";

// todo Data Files
import user from "../dataFiles/user.json";
import friends from "../dataFiles/friends.json";
import data from "../dataFiles/data.json";
import transactions from "../dataFiles/transactions.json";

export const App = () => {
  return (
    <>
      <div>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
      />
      </div>
      
      <Statistics title="Upload stats" stats={data} />

      <div>
        <FriendList friends={friends} />
      </div>

      <TransactionHistory items={transactions}/>
    </>
  );
};

