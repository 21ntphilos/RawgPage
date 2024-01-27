import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Prop{
    onSelect: (order:string)=>void,
    selectedOrder:string
}

const SortSelector = ({ onSelect, selectedOrder }:Prop) => {
    const order=[
        {value:"name", label:"Name"},
        {value:"-released",label:"Release Date"},
        { value: "-added", label: "Date Added" },
        { value: "-updated", label: "Date Updated" },
        { value: "-rating", label: "Average Rating" },
        { value: "-metacritic", label: "Popularity" },
        { value: "", label: "Relevance" }
    ]

  return (
    <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: {order.find(({value})=>value === selectedOrder)?.label || "Relevance"}</MenuButton>
        <MenuList>
            {order.map(({value,label})=>(<MenuItem onClick={()=> onSelect(value)} key={value} value={value}>{label}</MenuItem>))}
        </MenuList>
    </Menu>
  )
}

export default SortSelector