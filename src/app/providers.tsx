"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ClerkProvider } from "@clerk/nextjs";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </ClerkProvider>
  );
}
