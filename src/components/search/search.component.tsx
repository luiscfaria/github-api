import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { IUser, UserContextType } from "../../types/user/user";
import axios from "axios";


import "./search.styles.css";

const SearchBar: React.FC = () => {
    
  const context = useContext(UserContext) as UserContextType; 
  const [userData, setUserData] = useState<IUser | {login: ''}>();
  const [searchValue, setSearchValue] = useState('')

  const fetchData = () => {    
    axios({
      method: "get",
      url: `https://api.github.com/users/${searchValue}`
    }).then(res => {
      setUserData(res.data)
      context.saveUser({
        login: res.data.login, 
        avatarUrl: res.data.avatar_url,
        name: res.data.name
      })
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);

        context.handleError(true);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }  
    })
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  return (
      <div className="search-bar">
        <form>
          <input placeholder="user" type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <button onClick={(e) => handleSubmit(e)}>Search</button>
        </form>
      </div>
  );
};

export default SearchBar;
