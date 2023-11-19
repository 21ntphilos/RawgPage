import Button from "./components/button"
import './App.css'
import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/navbar"

function App() {


  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "body"`,
        md: `"nav" "side body"`,
        lg: `"nav nav" "side body"`
      }}
      >
        <GridItem area={"nav"} bg={"gray"}>
          <Navbar/>
          </GridItem>
        <Show above="lg">
          <GridItem area={"side"} bg={"brown"}>Side</GridItem>
        </Show>
        <GridItem area={"body"} bg={"yellow"}>body</GridItem>

      </Grid>

      <Button />
    </>
  )
}

export default App
