import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Prop{
    children:ReactNode
}

const GameCardConatiner = ({children}:Prop) => {
  return (
      <Box  borderRadius={15} overflow={"hidden"} textAlign={"left"}>{children}</Box>
  )
}

export default GameCardConatiner