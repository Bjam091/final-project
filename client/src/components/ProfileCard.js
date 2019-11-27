import React from "react";

export default function ProfileCard(props) {
 
  const profile = props.profile.map(user => {
    return (
      <ProfileCard
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
