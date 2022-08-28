import { VStack } from '@chakra-ui/react'
import React from 'react'
import WatchCountA from './WatchCountA'
import WatchCountB from './WathCountB'



function WatchCountDemo() {
  return (
    <VStack spacing='5px'>
      <WatchCountA />
      <WatchCountB />
    </VStack>
  )
}

export default WatchCountDemo