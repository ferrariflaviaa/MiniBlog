import {useContext, createContext} from 'react';


const AuthContext = createContext();

export const AuthProvider = ({value, children}) => {
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export const useAuthValue = () => {
  return useContext(AuthContext)
}

