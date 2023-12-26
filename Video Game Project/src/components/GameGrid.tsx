import {Grid, GridItem, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import apiClient from '../service/apiClient'

interface Game {
    id: number,
    name: string,
    rating: number,
    background_image:string
}

interface Response{
    count: number,
    results: Game[]
}


const GameGrid = () => {
    const [games, setGames]= useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(()=>{
        apiClient.get<Response>("/games")
        .then(res=> setGames(res.data.results))
        .catch(error => setError(error.message))
    })
  return (
    <>
        {error && <Text> {error} </Text> }
        <ul>{games.map(game=> <li key={game.id}>{game.name}</li>)}</ul>
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