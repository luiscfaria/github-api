import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { IUser, UserContextType } from "../../types/user/user";


import "./search.styles.css";

const SearchBar: React.FC = () => {
    
  const context = useContext(UserContext) as UserContextType; 
  const [userData, setUserData] = useState<IUser | {login: ''}>();
  const [searchValue, setSearchValue] = useState('')

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value);
  };

  const handleSaveUser = (e: React.FormEvent, formData: IUser | any) => {
    e.preventDefault();
    context.saveUser(formData);
  };

  useEffect(() => {
    const url = "https://api.github.com/users/";

    const fetchData = async () => {
      try {
        const response = await fetch(`${url}${searchValue}`);
        const json = await response.json();
        setUserData(json);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [searchValue]);  
  

  return (
      <div className="search-bar">
        <form>
          <label>Name</label>
          <input type="text" name="search-field" onChange={handleForm}/>
          <button>Search</button>
        </form>
      </div>
  );
};

export default SearchBar;
