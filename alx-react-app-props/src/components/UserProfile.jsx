import React, { useContext } from "react";
import UserContext from "../UserContext";
function UserProfile() {
    const userData = useContext(UserContext);
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age:{props.age}</p>
      <p>{props.bio}</p>
    </div>
  );
}

export default UserProfile;