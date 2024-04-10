import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props{
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery}:Props) => {

    const head = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name||""} Games`
       
  return (
    <Heading as="h1">{head}</Heading>
  )
}

export default GameHeading