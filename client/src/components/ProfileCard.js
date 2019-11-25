import React from "react";
import classnames from "classnames";

export default function ProfileCard(props) {
 
  const profile = props.profile.map(user => {
    return (
      <Profile
        key={user.id}
        id={user.id}
        username={user.name}
        profilepic={user.profilepic}
      />

    );
  })
 
  return (
<div id ="profile">{profile}</div>
  );
};
