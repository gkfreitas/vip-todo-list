import React, { createContext, useState } from 'react';

type AuthType = {
  email: string,
  password: string,
};

type UserContextProps = {
  authData: AuthType
  setAuthData(value: AuthType): void
  handleChange(name: string, value: string): void
};

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name: string, value: string) => {
    setAuthData((prevAuthData) => ({
      ...prevAuthData,
      [name]: value,
    }));
  };

  return (
    <UserContext.Provider value={ { authData, setAuthData, handleChange } }>
      {children}
    </UserContext.Provider>
  );
}
