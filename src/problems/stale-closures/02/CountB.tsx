import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";

export default function CountA() {
  const [count, setCount] = useState(0);

  const increaseWithCallback = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const increase = () => {
    setCount(count => count + 1)
  };
  const handleClick = () => {
    increase();
    increase();
    increase();
  };
  return (
    <>
      <VStack
        shadow="md"
        borderWidth="1px"
        padding="5px"
        w="500px"
        backgroundColor="yellow.200"
      >
        <Heading fontSize="md">Counter</Heading>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          py={5}
          px={5}
          gap={5}
        >
          <Button colorScheme="blackAlpha" onClick={handleClick}>
            +
          </Button>
          {count}
        </Box>
      </VStack>
    </>
  );
}
