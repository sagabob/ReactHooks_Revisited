import { VStack } from "@chakra-ui/react";
import React from "react";
import CounterNoCallback from "./CounterNoCallback";
import CounterWithCallback from "./CounterWithCallback";

const CallbackCounterDemo = () => {
  return (
    <VStack spacing="20px" m="20px">
      <CounterNoCallback />
      <CounterWithCallback />
    </VStack>
  );
};

export default CallbackCounterDemo;
