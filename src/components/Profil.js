import React from "react";

const Profil = ({ user }) => {
  return (
    <div className="profil">
      <img className="avatar"
        src="https://thumbs.dreamstime.com/b/cute-smiling-girl-avatar-logo-flat-vector-illustration-logo-character-design-cute-smiling-girl-avatar-logo-flat-vector-122640507.jpg"
        alt=""
      />
      <div className="profil-info">
        <h1>{user.name}</h1>
        <ul>
          <li className="item">50 Post</li>
          <li className="item">5 M Followers</li>
          <li className="item">6 Following</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla qui
          repellendus nisi ab tempora architecto eligendi excepturi earum? Et
          debitis eius, blanditiis doloribus adipisci expedita minus accusamus
          nisi cupiditate dignissimos.
        </p>
      </div>
    </div>
  );
};

export default Profil;
