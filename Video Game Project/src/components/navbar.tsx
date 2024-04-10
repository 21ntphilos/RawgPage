import { HStack, Image,  } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import ColorModeSwitch from './colorModeSwitch'
import SearchInput from './SearchInput'

interface Props{
  searchSubmit:(data:string) => void
}

const Navbar = ({ searchSubmit }:Props) => {
  return (
    <HStack justifyContent={"space-between"} >
      <Image src={logo} boxSize={"3rem"}/>
      <SearchInput onSubmit={searchSubmit}/>
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar