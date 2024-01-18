import {SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardConatiner from './GameCardConatiner'

const GameGrid = () => {
   const {data, error, isLoading} = useGames()
    const skeleton = [1,2,3,4,5,6,7,8]
  return (
    <>
        {error && <Text> {error} </Text> }

          <SimpleGrid columns={{sm:1, md:2, lg:3, xl: 4}} spacing={10} >
        {isLoading && skeleton.map(sk => <GameCardConatiner><GameCardSkeleton key={sk} /></GameCardConatiner>)}
        {data.map(game => <GameCardConatiner><GameCard key={game.id} game={game} /></GameCardConatiner>)}
            </SimpleGrid>
    </>
  )
}

export default GameGrid 