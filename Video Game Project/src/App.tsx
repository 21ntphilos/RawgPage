import './App.css'
import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/navbar"

import GameGrid from "./components/GameGrid"
import GenreList from './components/GenreList'


function App() {


  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "body"`,
        md: `"nav" "side body"`,
        lg: `"nav nav" "side body"`
      }}
      >
        <GridItem area={"nav"} >
          <Navbar/>
          </GridItem>
        <Show above="lg">
          <GridItem area={"side"}> 
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem area={"body"}>
          <GameGrid/>
        </GridItem>

      </Grid>
    </>
  )
}

export default App
