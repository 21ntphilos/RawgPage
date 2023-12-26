import {Text } from '@chakra-ui/react'
import useGames from '../hooks/USeGames'

const GameGrid = () => {
   const {games, error} = useGames()
  return (
    <>
        {error && <Text> {error} </Text> }
        <ul>{games.map(game => <li key={game.id}>{game.name}</li>)}</ul>
    </>
//    <Grid templateAreas={{
//         base: ` "body" "body", body`, //mobile view
//         md: `"nav" "side body"`,
//         lg: `"nav nav" "side body"`
    
//    }}>
//     <GridItem></GridItem>
//    </Grid>
  )
}

export default GameGrid