import React, { createContext } from "react";
import { IUser, UserContextType } from "../types/user/user";

export const UserContext = createContext<UserContextType | null>(null);

interface IProps {
  children: React.ReactChild;
}

const UserProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = React.useState<IUser>({ login: "", avatarUrl: "" });

  const saveUser = (user: IUser) => {
    const newUser: IUser = {
      login: user.login,
      avatarUrl: user.avatarUrl,
      name: user.name,
      bio: user.bio,
      repos: user.repos,
      followers: user.followers,
      following: user.following,
      github: user.github,
      twitter: user.twitter,
      location: user.location,
      company: user.company,
    };
    setUser(newUser);
  };

  const handleError = (error: boolean) => {
    setUser({ ...user, error: error });
  };

  return (
    <UserContext.Provider value={{ user, saveUser, handleError }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
