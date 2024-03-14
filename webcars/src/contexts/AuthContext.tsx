import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { auth } from "../services/firebaseConnection";

interface AuthProviderProps {
  children: ReactNode;
}

type AuthContextData = {
  signed: boolean;
  loadingAuth: boolean;
  handleUserInfo: ({ name, email, uid }: userProps) => void;
  user: userProps | null;
}; // informações que serão compartilhadas no contexto.

interface userProps {
  uid: string;
  name: string | null;
  email: string | null;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<userProps | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      // olheiro
      if (!!user) {
        // Tem user loggado
        setUser({
          uid: user?.uid,
          email: user?.email,
          name: user?.displayName,
        });
        setLoadingAuth(false);
      } else {
        // Não tem user loggado
        setUser(null);
        setLoadingAuth(false);
      }
    });

    return () => {
      unsub();
    };
  }, []);

  function handleUserInfo({ name, email, uid }: userProps) {
    setUser({ name, email, uid });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loadingAuth: loadingAuth,
        handleUserInfo,
        user: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
