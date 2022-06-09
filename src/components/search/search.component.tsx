import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { IUser, UserContextType } from "../../types/user/user";
import axios from "axios";

import "./search.styles.css";

const SearchBar: React.FC = () => {
  const context = useContext(UserContext) as UserContextType;
  const [userData, setUserData] = useState<IUser | { login: "" }>();
  const [searchValue, setSearchValue] = useState("");

  const fetchData = () => {
    axios({
      method: "get",
      url: `https://api.github.com/users/${searchValue}`,
    })
      .then((res) => {
        setUserData(res.data);
        context.saveUser({
          login: res.data.login,
          avatarUrl: res.data.avatar_url,
          name: res.data.name,
          bio: res.data.bio,
          repos: res.data.public_repos,
          followers: res.data.followers,
          following: res.data.following,
          github: res.data.html_url,
          twitter: res.data.twitter_username,
          location: res.data.location,
          company: res.data.company,
        });
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);

          context.handleError(true);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="search-bar">
      <form className="form">
        <i className="fa-solid fa-magnifying-glass"></i>
        <div className="input-group">
          <input
            className="input"
            id="name"
            required
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <label htmlFor="name" className="input-label">
            Enter username...
          </label>
        </div>
        <button className="button" onClick={(e) => handleSubmit(e)}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
