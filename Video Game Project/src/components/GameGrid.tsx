import {SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardConatiner from './GameCardConatiner'

import { GameQuery } from '../App'

interface Props{
  gameQuery:GameQuery
}
const GameGrid = ({ gameQuery }:Props) => {
   const {data, error, isLoading} = useGames(gameQuery)
    const skeleton = [1,2,3,4,5,6,7,8]



  return (
    <>
        {error && <Text> {error} </Text> }

          <SimpleGrid columns={{sm:1,  md:2, lg:3, xl: 4}} spacing={3 } >
        {isLoading && skeleton.map(sk => <GameCardConatiner key={sk}><GameCardSkeleton  /></GameCardConatiner>)}
        {data.map(game => <GameCardConatiner key={game.id} ><GameCard game={game} /></GameCardConatiner>)}
            </SimpleGrid>
    </>
  )
}

export default GameGrid 