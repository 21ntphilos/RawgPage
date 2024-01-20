import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'
import getShorterImage from '../service/imageOptimiser'

const GenreList = () => {
    const { data, isLoading, error } = useGenre()

  if (isLoading) return <Spinner/>
  if (error) return null
    return (
    
      <List >
          {data.map(genre => <ListItem key={genre.id} paddingY='5px '>
            <HStack >
                <Image src={getShorterImage(genre.image_background)} borderRadius={50} boxSize='32px' />
                <Text fontSize='lg'>{genre.name}</Text>
            </HStack> </ListItem> )}
    </List>
  )
}

export default GenreList