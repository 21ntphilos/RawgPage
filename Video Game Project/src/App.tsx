import Button from "./components/button"
import './App.css'
import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/navbar"
import {theme} from "./theme"
import GameGrid from "./components/GameGrid"


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
          <GridItem area={"side"}>Side</GridItem>
        </Show>
        <GridItem area={"body"}>
          <GameGrid/>
        </GridItem>

      </Grid>
    </>
  )
}

export default App
