import { VStack } from '@chakra-ui/react'
import React from 'react'
import WatchCountA from './WatchCountA'
import WatchCountB from './WathCountB'



function WatchCountDemo() {
  return (
    <VStack spacing='20px' m="20px">
      <WatchCountA />
      <WatchCountB />
    </VStack>
  )
}

export default WatchCountDemo