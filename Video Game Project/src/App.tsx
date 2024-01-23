import './App.css'
import { Box, Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/navbar"
import GameGrid from "./components/GameGrid"
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenre'
import { useState } from 'react'
import Platforms from './components/Platforms'
import { Platform } from './hooks/useGames'


function App() {
const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)


  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "body"`, 
        lg: `"nav nav" "side body"`
      }}
      templateColumns={{
        base: `1fr`, // at base ie small screen, all the cards take 1fr
        lg: '200px 1fr' // at bigger screen side takes 200px and the game grid takes 1fr
      }}
      >
        <GridItem area={"nav"} >
          <Navbar/>
          </GridItem>
        <Show above="lg"> {/*show this area of the page when the size is above large*/} 
          <GridItem area={"side"} paddingX={5} > 
            <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
          </GridItem>
        </Show>
        <GridItem area={"body"}>
          <Platforms selectedplatform={selectedPlatform} onPlatSelect={(platform)=>setSelectedPlatform(platform)}/>
          <GameGrid genre={selectedGenre} platform={selectedPlatform}/>
        </GridItem>

      </Grid>
    </>
  )
}

export default App
