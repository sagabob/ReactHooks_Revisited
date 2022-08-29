import React from "react";
import WatchCountDemo from "./problems/stale-closures/01/WatchCountDemo";
import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import CountDemo from "./problems/stale-closures/02/CountDemo";
function App() {
  return (
    <ChakraProvider>
      <Container>
        <WatchCountDemo />
        <CountDemo />
      </Container>
    </ChakraProvider>
  );
}

export default App;
