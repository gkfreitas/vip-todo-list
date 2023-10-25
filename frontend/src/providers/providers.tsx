'use client';

import React, { createContext, useContext } from 'react';
import { UserProvider } from '../context';

const ProvidersContext = createContext({});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>{children}</UserProvider>
  );
}

export const useUserContext = () => useContext(ProvidersContext);
