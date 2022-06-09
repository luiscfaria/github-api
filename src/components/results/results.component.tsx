import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { IUser, UserContextType } from "../../types/user/user";

import "./results.styles.css";

const Results = () => {
  const context = useContext(UserContext) as UserContextType;
  return (
    <div className="results">
      {context.user.error ? (
        "Enter a valid user"
      ) : !context.user.login ? (
        "Please Search a username"
      ) : (
        <div className="container">
          <div className="avatar">
            <img
              className="user-avatar"
              src={context.user.avatarUrl}
              alt="user avatar"
            />
            <div className="personnal">
              <div className="name">
                {context.user.name}
                <br />
                @{context.user.login}
              </div>
            </div>
          </div>
          <div className="info">

          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
