import React, { createContext } from 'react'
import { IUser, UserContextType } from '../types/user/user';

export const UserContext = createContext<UserContextType | null>(null);

interface IProps {
    children: React.ReactChild;
   }


const UserProvider: React.FC<IProps> = ({ children }) => {
    const [user, setUser] = React.useState<IUser>({login: '', avatarUrl: ''});

    const saveUser = (user: IUser) => {
        const newUser: IUser = {
            login: user.login,
            avatarUrl: user.avatarUrl
        }
        setUser(newUser)
    }
  


    return (
        <UserContext.Provider value={{ user, saveUser }}>
          {children}
        </UserContext.Provider>
      );
    };

export default UserProvider;
