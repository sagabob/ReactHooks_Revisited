import React, { useState } from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";

const funcCount = new Set();

export default function () {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter = () => {
    setCount(count - 1);
  };

  const incrementNumber = () => {
    setNumber(number + 1);
  };
  const decrementNumber = () => {
    setNumber(number - 1);
  };

  funcCount.add(incrementCounter);
  funcCount.add(decrementCounter);
  funcCount.add(incrementNumber);
  funcCount.add(decrementNumber);
  console.log(funcCount);

  return (
    <>
      <VStack shadow="md" borderWidth="1px" padding="5px" w="500px" backgroundColor="yellow.200">
        <Heading fontSize="md">Multple Counters</Heading>
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" py={5} px={5} gap={5}>
          <Button colorScheme="blackAlpha" onClick={incrementCounter}>
            +
          </Button>
          <Button colorScheme="blackAlpha" onClick={decrementCounter}>
            -
          </Button>
          Count: {count}
          <Button colorScheme="blackAlpha" onClick={incrementNumber}>
            +
          </Button>
          <Button colorScheme="blackAlpha" onClick={decrementNumber}>
            -
          </Button>
        </Box>
        <footer>Msg: Function Size = {funcCount.size}</footer>
      </VStack>
    </>
  );
}
