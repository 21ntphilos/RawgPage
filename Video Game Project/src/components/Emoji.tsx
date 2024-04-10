import thumbs_up from "../assets/thumbs-up.webp"
import meh from '../assets/meh.webp'
import bullEye from '../assets/bulls-eye.webp'
import { Image, ImageProps } from "@chakra-ui/react"


interface prop  {
    rating: number
}
const Emoji = ({ rating }: prop) => {
    if (rating < 3 ) return null;

    const emojies: {[keys: number]: ImageProps} = {
        3: {src: meh, alt: "meh", boxSize: "25px"},
        4: { src: thumbs_up, alt: "Recommended", boxSize: "25px" },
        5: { src: bullEye, alt: "exceptional", boxSize: "30px" }
    }
  return (
    <Image  {...emojies[rating]} marginTop={1}/>
  )
}

export default Emoji