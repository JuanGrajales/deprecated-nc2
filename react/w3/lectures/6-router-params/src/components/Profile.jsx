import React from "react";

const Profile = (props) => {
  return (
    <div>
      <div>
        <h1>{props.match.params.username}</h1>
        <img src="https://placekitten.com/200/300" alt="juan" />
      </div>
    </div>
  );
};

export default Profile;
