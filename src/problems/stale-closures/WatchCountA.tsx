import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function WatchCountA() {
  const [count, setCount] = useState(0);
  const outputText = React.useRef<HTMLDivElement>(null);

  useEffect(function () {
    setInterval(function log() {
      
      if (outputText.current !== null)
        outputText.current.innerText = `Watch Count (with current count: ${count})`;
    }, 2000);
  }, []);
  return (
    <VStack
      shadow="md"
      borderWidth="1px"
      padding="5"
      w="500px"
      backgroundColor="yellow.200"
    >
      <Heading fontSize="md" ref={outputText}>Watch Count (with current count)</Heading>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        py={5}
        px={5}
        gap={5}
      >
        <Button colorScheme="blackAlpha" onClick={() => setCount(count - 1)}>
          -
        </Button>
        {count}
        <Button colorScheme="blackAlpha" onClick={() => setCount(count + 1)}>
          +
        </Button>
      </Box>
      
    </VStack>
  );
}
