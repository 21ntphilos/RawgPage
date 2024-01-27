import './App.css'
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import Navbar from "./components/navbar"
import GameGrid from "./components/GameGrid"
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenre'
import { useState } from 'react'
import Platforms from './components/Platforms'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'



export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortorder: string;
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)


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
          <Navbar searchSubmit={(searchText)=> setGameQuery({...gameQuery, searchText})} />
        </GridItem>
        <Show above="lg"> {/*show this area of the page when the size is above large*/}
          <GridItem area={"side"} paddingX={0} margin={2} >
            <GenreList selectedGenre={gameQuery?.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
          </GridItem>
        </Show>
        <GridItem area={"body"}>
          <HStack spacing={3} marginTop={5} marginBottom={5}>
            <Platforms selectedplatform={gameQuery.platform} onPlatSelect={(platform) => setGameQuery({ ...gameQuery, platform })} />
            <SortSelector selectedOrder={gameQuery.sortorder} onSelect={(sortorder) => setGameQuery({ ...gameQuery, sortorder })} />
          </HStack>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>

      </Grid>
    </>
  )
}

export default App
