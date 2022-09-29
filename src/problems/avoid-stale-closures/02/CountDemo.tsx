import { VStack } from '@chakra-ui/react'
import React from 'react'
import CountA from './CountA'
import CountB from './CountB'

const CountDemo = () => {
  return (
    <VStack spacing='20px' m="20px">
      <CountA />
      <CountB />
    </VStack>
  )
}

export default CountDemo