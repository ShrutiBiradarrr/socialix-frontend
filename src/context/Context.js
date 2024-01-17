import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

function Context({ children }) {
  const navigate = useNavigate();

  const [user, setuser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const data = JSON.parse(localStorage.getItem("user"));
      if (!data) {
        navigate("/login");
      }
      setuser(data);
    };

    getUser();
  }, [setuser]);

  return (
    <UserContext.Provider value={{ user, setuser }}>
      {children}
    </UserContext.Provider>
  );
}

export default Context;
