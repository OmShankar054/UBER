import React, { createContext } from 'react';
import { UserDataContext } from './UserDataContext';

export const UserDataContext = createContext()

const UserContext = ({children}) => {
    


    return (
        <div>
            <UserDataContext.Provider>
                {children}
            </UserDataContext.Provider>
         
        </div>
    )
}

export default UserContext