import React from "react";
import AddFriend from "./AddFriend";
import Friends from "./Friends";

export default function Display() {
  return (
    <div className = "friends-container">
      <AddFriend />
      <Friends />
    </div>
  );
}
