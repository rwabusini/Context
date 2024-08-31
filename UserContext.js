import React from 'react'
import { createContext , useState} from 'react';
import { Text } from'react-native';
export const UserContext = createContext();

export const UserProvider = ({children})=>{

    console.log(children);

        const [user, setUser] = useState({
        name: 'Rawan Abuseini',
        age: 37,
        email: 'rwabusini@gmail.com',
      });

      return (
        <UserContext.Provider value={{user, setUser}}>
            <Text>Hi from context</Text>
          {children}
        </UserContext.Provider>
      )

};