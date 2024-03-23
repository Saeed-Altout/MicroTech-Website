"use client";

import { AxiosRequestConfig } from "axios";
import { createContext, useContext } from "react";

import { useSession } from "@/providers/session-provider";

interface ApiContextProps {
  config: AxiosRequestConfig;
  baseUrl: string;
}

const ApiContext = createContext<ApiContextProps>({
  config: {},
  baseUrl: "",
});

export default function ApiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token } = useSession();
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <ApiContext.Provider value={{ config, baseUrl }}>
      {children}
    </ApiContext.Provider>
  );
}

export const useApi = () => useContext(ApiContext);
