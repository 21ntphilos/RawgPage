import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGenre, { Genre } from '../hooks/useGenre'
import getShorterImage from '../service/imageOptimiser'

interface Props{
  onSelectGenre:(selectedGen:Genre)=>void
}

const GenreList = ({onSelectGenre }:Props) => {
    const { data, isLoading, error } = useGenre()

  if (isLoading) return <Spinner/>
  if (error) return null
    return (
    
      <List >
          {data.map(genre => <ListItem key={genre.id} paddingY='5px '>
            <HStack >
                <Image src={getShorterImage(genre.image_background)} borderRadius={50} boxSize='32px' />
              <Button onClick={() => onSelectGenre(genre)} variant='links' fontSize='lg'>{genre.name}</Button>
            </HStack> </ListItem> )}
    </List>
  )
}

export default GenreList