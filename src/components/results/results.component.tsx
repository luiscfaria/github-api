import React, {useContext} from 'react'
import { UserContext } from '../../context/UserContext'
import { IUser, UserContextType } from "../../types/user/user";

import './results.styles.css'

const Results = () => {
  const context = useContext(UserContext) as UserContextType; 
  return (
    <div className='results'>{context.user.login}</div>
  )
}

export default Results