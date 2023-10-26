import React, { createContext, useState } from 'react';

type UserInfos = {
  username: string,
  email: string,
  password: string,
  confirmPassword: string
};

type UserContextProps = {
  userData: UserInfos
  setUserData(value: UserInfos): void
  handleChange(name: string, value: string): void
  resetAllFields(): void
};

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (name: string, value: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const resetAllFields = () => {
    setUserData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <UserContext.Provider
      value={ {
        userData,
        setUserData,
        handleChange,
        resetAllFields,
      } }
    >
      {children}
    </UserContext.Provider>
  );
}
