import {SimpleGrid, Text } from '@chakra-ui/react'
import useGames, { Platform } from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardConatiner from './GameCardConatiner'
import { Genre } from '../hooks/useGenre'

interface Props{
 genre:Genre| null ;
  platform:Platform|null
}
const GameGrid = ({genre, platform}:Props) => {
   const {data, error, isLoading} = useGames(genre,platform)
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