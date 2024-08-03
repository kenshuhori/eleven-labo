import { Skeleton, useToast } from "@chakra-ui/react";
import React from "react";

export const ErrorComponent = () => {
  const toast = useToast();
  return <Skeleton height="85vh" />;
};
