// src/context/SessionProvider.jsx
import { useState, useContext, createContext, useEffect } from "react";

const SessionContext = createContext({
  user: undefined,
});

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:4000/auth/me", {
      credentials: "include",
    })
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("no se pudo iniciar sesión");
        }
        respuesta.json().then((data) => {
          setUser(data.user);
        });
      })
      .catch((e) => {
        console.log(e);
        setUser(null);
      });
  }, []);

  const logout = async () => {
    const resp = await fetch("http://localhost:4000/auth/sign-out", {
      method: "GET",
      credentials: "include",
    });

    if (resp.ok) {
      setUser(null);
    }
  };

  return (
    <SessionContext.Provider value={{ user, setUser, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
