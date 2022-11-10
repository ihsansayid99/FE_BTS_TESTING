import React, {createContext, useEffect, useState} from 'react'
import authToken from '../utils/authToken'
import jwt_decode from 'jwt-decode'

const AuthContext = createContext({})

const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [isExpired, setIsExpired] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token-bts')
        if(token){
            const payload = jwt_decode(token)
            if(payload?.roles){
                const users = {
                    user: 'TEST'
                }
                setUser(users)
            }
            authToken(token)
        }
        if(isExpired){
            localStorage.removeItem('token-bts')
            setUser(null)
        }
    }, [isExpired])

    const authContextValue = {
        user,
        setUser,
        setIsExpired
      };

    return <AuthContext.Provider value={authContextValue} {...props}/>
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }