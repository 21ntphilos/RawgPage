import { Badge,} from "@chakra-ui/react"
interface prop{
    score: number
}

const CriticScore = ({score}:prop) => {
    let color = score > 75 ? 'green' :score > 60 ? "yellow" : ""
  return (
    <>
        <Badge colorScheme={color}>{score}</Badge>
    </>
  )
}

export default CriticScore