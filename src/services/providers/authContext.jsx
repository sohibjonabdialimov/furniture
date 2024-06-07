import { createContext, useState } from "react";

export const authContext = createContext();

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("admin")) || null);

  return <authContext.Provider value={{auth, setAuth}}>
    {children}
  </authContext.Provider>
}