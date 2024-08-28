"use client";

import React, { useEffect, useState } from "react";
import { createWagmiConfig } from "@/config/wagmi.config";
import { AuthProvider } from "@/context/auth.context";
import { DexaProvider } from "@/context/dexa.context";
import { store } from "@/store";
import { QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { type State, WagmiProvider, deserialize, serialize } from "wagmi";
import {
  PersistQueryClientProvider,
  Persister,
} from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ConverterProvider } from "@/context/currency.context";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { baseSepolia } from "viem/chains";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

export const wagmiConfig = createWagmiConfig();

export default function RootProviders({
  children,
  initialState,
}: Readonly<{
  children: React.ReactNode;
  initialState?: State;
}>) {
  const [persister, setPersister] = useState<Persister>(
    createSyncStoragePersister({
      serialize,
      storage: typeof window !== "undefined" ? window.localStorage : null,
      deserialize,
    })
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const syncPersister = createSyncStoragePersister({
        serialize,
        storage: window.localStorage,
        deserialize,
      });
      setPersister(syncPersister);
    }
  }, []);

  return (
    <Provider store={store}>
      <WagmiProvider config={wagmiConfig}>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister }}
        >
          <OnchainKitProvider chain={baseSepolia}>
            <AuthProvider>
              <DexaProvider>
                <ConverterProvider>{children}</ConverterProvider>
              </DexaProvider>
            </AuthProvider>
          </OnchainKitProvider>
        </PersistQueryClientProvider>
      </WagmiProvider>
    </Provider>
  );
}
