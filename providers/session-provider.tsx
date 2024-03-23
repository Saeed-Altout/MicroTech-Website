"use client";

import { auth } from "@/actions/auth";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";
interface SessionContextProps {
  isLoading: boolean;
  isLoggedIn: boolean;
  token: string | undefined;
  username: string | undefined;
  email: string | undefined;
}
const SessionContext = createContext<SessionContextProps>({
  isLoading: false,
  isLoggedIn: false,
  token: "",
  username: "",
  email: "",
});

export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState<string | undefined>("");
  const [username, setUsernmae] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, startTransition] = useTransition();

  const getUser = async () => {
    startTransition(() => {
      auth().then((data) => {
        setToken(data?.token?.value);
        setUsernmae(data?.username?.value);
        setEmail(data?.email?.value);
        setIsLoggedIn(data?.isLoggedIn);
      });
    });
  };

  useEffect(() => {
    getUser();
  }, [token]);

  return (
    <SessionContext.Provider
      value={{ token, isLoggedIn, isLoading, username, email }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => useContext(SessionContext);
