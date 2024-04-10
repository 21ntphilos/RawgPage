import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGenre, { Genre } from '../hooks/useGenre'
import getShorterImage from '../service/imageOptimiser'


interface Props {
  onSelectGenre: (selectedGen: Genre) => void;
  selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre()

  if (isLoading) return <Spinner />
  if (error) return null
  return (
<>
    <Heading fontSize={'2xl'} marginBottom={5} textAlign={'left'}>Genres</Heading>
    <List >
      {data.map(genre => <ListItem key={genre.id} paddingY='5px '>
        <HStack >
          <Image 
          borderRadius={8} 
          boxSize='32px' 
          objectFit='cover'
          src={getShorterImage(genre.image_background)} 
          />
          <Button whiteSpace='normal' textAlign='left' flexWrap="wrap" onClick={() => onSelectGenre(genre)} variant='links' fontSize='large' fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}>{genre.name}</Button>
        </HStack> </ListItem>)}
    </List>
</>
  )
}

export default GenreList