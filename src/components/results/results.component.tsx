import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { UserContextType } from "../../types/user/user";

import "./results.styles.css";

const Results = () => {
  const context = useContext(UserContext) as UserContextType;
  return (
    <div className="results">
      {context.user.error ? (
        "User not found. Please enter a valid user"
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
          </div>
          <div className="info">
            <div className="personnal">
              <div className="name">
                <div className="user-name">
                  {context.user.name}
                  {context.user.login == "luiscfaria" ? <span>You should interview this guy</span> : ""}
                  </div>
                <div className="user-login">@{context.user.login}</div>
              </div>
              <div className="bio">
                {context.user.bio ? context.user.bio : "This user has no bio"}
              </div>
            </div>
            <div className="stats">
              <div className="stats-box">
                <div className="stats-title">Repos</div>
                <div>{context.user.repos}</div>
              </div>
              <div className="stats-box">
                <div className="stats-title">Followers</div>
                <div>{context.user.followers}</div>
              </div>
              <div className="stats-box">
                <div className="stats-title">Following</div>
                <div>{context.user.following}</div>
              </div>
            </div>
            <div className="social">
              <div className="social-box">
                <div className="social-item">
                  <i className="fa-brands fa-github-square"></i>
                  <a
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    href={context.user.github}
                  >
                    Open Github Profile
                  </a>
                </div>
                <div className="social-item">
                  <i className="fa-brands fa-twitter-square"></i>{" "}
                  {context.user.twitter ? (
                    <a
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      href={`http://twitter.com/${context.user.twitter}`}
                    >
                      Open Twitter Profile
                    </a>
                  ) : (
                    "Not Available"
                  )}
                </div>
              </div>
              <div className="social-box">
                <div className="social-item">
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  {context.user.location}
                </div>
                <div className="social-item">
                  <i className="fa-solid fa-building"></i>{" "}
                  {context.user.company
                    ? context.user.company
                    : "Not Available"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
