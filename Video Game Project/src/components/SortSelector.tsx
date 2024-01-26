import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: Relevance</MenuButton>
        <MenuList>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Average Rating</MenuItem>
        <MenuItem>Relevance</MenuItem>
        </MenuList>
    </Menu>
  )
}

export default SortSelector