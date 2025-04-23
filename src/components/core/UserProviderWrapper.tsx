'use client'; // Mark this as a Client Component

import React from 'react';
import { UserProvider } from '@/contexts/user-context';

export const UserProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};