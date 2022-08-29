import { VStack } from '@chakra-ui/react'
import React from 'react'
import CountA from './CountA'

const CountDemo = () => {
  return (
    <VStack spacing='20px' m="20px">
      <CountA />
    </VStack>
  )
}

export default CountDemo