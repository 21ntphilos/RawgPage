import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'


interface Prop{

  onPlatSelect: (Platform:Platform|null)=> void;
  selectedplatform:Platform|null;

}

const Platforms = ({ onPlatSelect, selectedplatform }:Prop) => {
  const {data, error} =usePlatform()

  if (error) return null
  return (
      <Menu justify-content="left">
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedplatform?.name || "Platforms"}</MenuButton>
        <MenuList>
            
        {data.map(p=><MenuItem onClick={()=>onPlatSelect(p)} key={p.id}>{p.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default Platforms