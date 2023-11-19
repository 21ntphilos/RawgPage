import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
 
const Navbar = () => {
  return (
    <HStack >
        <Image src={logo} boxSize={"3rem"}></Image>
        <Text> JUst Started the Nav</Text>
    </HStack>
  )
}

export default Navbar