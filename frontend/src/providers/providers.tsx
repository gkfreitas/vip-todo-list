'use client';

import React, { createContext, useContext } from 'react';
import { UserProvider } from '../context';
import { TaskProvider } from '../context/tasks';

const ProvidersContext = createContext({});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TaskProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </TaskProvider>
  );
}

export const useUserContext = () => useContext(ProvidersContext);
