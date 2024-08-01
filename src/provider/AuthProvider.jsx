import { createContext, useContext, useState } from "react";

import { useNavigate, useLocation, redirect } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state.path || "profile";

  const [user, setUser] = useState({
    username: "",
    permissions: [],
  });

  const login =(user)=>{
    if(user==='admin'){
        setUser({username:user, permissions:[]})
    }
  }
  return <div>AuthProvider</div>;
};
