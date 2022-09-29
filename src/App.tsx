import React from "react";
import WatchCountDemo from "./problems/avoid-stale-closures/01/WatchCountDemo";
import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import CountDemo from "./problems/avoid-stale-closures/02/CountDemo";
import CallbackCounterDemo from "./problems/useCallback/01/CallbackCounterDemo";

function App() {
  return (
    <ChakraProvider>
      <Container>
        <CallbackCounterDemo />
      </Container>
    </ChakraProvider>
  );
}

export default App;
