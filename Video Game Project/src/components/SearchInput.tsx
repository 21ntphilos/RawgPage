import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch} from 'react-icons/bs'

interface Props{
    onSubmit: (data: string) => void;
}
const SearchInput = ({onSubmit}:Props) => {
    const toSearch = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        if(toSearch.current)
        onSubmit(toSearch.current.value)}}
        >
        <InputGroup>
        <InputLeftElement children={<BsSearch/>}/>
        <Input ref={toSearch}borderRadius={40} placeholder='Search games...' variant="filled"/>
        </InputGroup>
    </form>
      )
}

export default SearchInput