import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getShorterImage from "../service/imageOptimiser"
import Emoji from "./Emoji"


interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <>
      <Card >
          <Image src={getShorterImage(game.background_image)}/>

          <CardBody>
              <HStack justifyContent={"space-between"} marginBottom={3}>
              <PlatformIconList platforms={game.parent_platforms.map(p=> p.platform)}/>
              <CriticScore score={game.metacritic}/>
              </HStack>
              <Heading fontSize="2xl">{game.name} <Emoji rating={game.rating_top}/></Heading>
            
          </CardBody>
    </Card>
    </>
  )
}

export default GameCard