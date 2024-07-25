import { Skeleton, useToast } from "@chakra-ui/react";
import React from "react";

export const ErrorComponent = () => {
  const toast = useToast();

  toast({
    title: "エラーが発生しました",
    position: "top",
    status: "error",
    duration: 3000,
    isClosable: true,
  });
  return <Skeleton height="85vh" />;
};
