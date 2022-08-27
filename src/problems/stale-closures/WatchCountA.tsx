import { Box, Button, Heading,ButtonGroup  } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function WatchCountA() {
  const [count, setCount] = useState(0);
  useEffect(function () {
    setInterval(function log() {
      console.log(`Count is: ${count}`);
    }, 2000);
  }, []);
  return (
    <Box shadow="md" borderWidth="1px" padding="6" w='400px' h='40px' bg='yellow.200'>
      <Heading fontSize="md">Watch Count with issues</Heading>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        py={12}
      >
        <Button colorScheme="blackAlpha" onClick={() => setCount(count - 1)}>-</Button>
          {count}
          <Button colorScheme="blackAlpha" onClick={() => setCount(count + 1)}>+</Button>     
      </Box>
    </Box>
  );
}
