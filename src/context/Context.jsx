import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null
  );
  const [token, setToken] = useState(
    localStorage.getItem("tokenData") ? localStorage.getItem("tokenData") : null
  );

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const AuthState = () => {
  return useContext(AuthContext);
};
