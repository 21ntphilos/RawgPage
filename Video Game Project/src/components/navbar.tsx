import { HStack, Image,  } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import ColorModeSwitch from './colorModeSwitch'
 
const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="0rem 5rem">
        <Image src={logo} boxSize={"3rem"}/>
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar