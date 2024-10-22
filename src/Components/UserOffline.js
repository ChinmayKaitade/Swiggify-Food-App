import React from "react";
import offline from "../../public/Images/offline.svg";

const UserOffline = () => {
  return (
    <div className="user-offline-container">
      <h1 className="user-offline-heading">🔴 Offline!</h1>
      <img className="offline-image" src={offline} alt="Offline" />
      <p className="user-offline-message">
        Boo, You don't have an internet connection.
        <p>Please check your network connection and try again later.</p>
      </p>
    </div>
  );
};

export default UserOffline;
