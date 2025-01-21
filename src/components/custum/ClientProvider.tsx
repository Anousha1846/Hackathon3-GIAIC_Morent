'use client'; //  this component can use client-side features

import { SessionProvider } from 'next-auth/react';

interface ClientProviderProps {
  children: React.ReactNode;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
