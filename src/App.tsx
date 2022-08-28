import React from "react";
import WatchCountDemo from "./problems/stale-closures/01/WatchCountDemo";
import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Container>
        <WatchCountDemo />
      </Container>
    </ChakraProvider>
  );
}

export default App;
