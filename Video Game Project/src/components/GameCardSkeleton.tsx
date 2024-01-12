import { Skeleton, SkeletonText,Card, CardBody,HStack } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
      <Card width='20vw' borderRadius={15} overflow={"hidden"} textAlign={"left"}>
          <Skeleton height='25vh' />

          <CardBody>
              <SkeletonText/>
              <HStack justifyContent={"space-between"}>
                  <SkeletonText />
                  <SkeletonText />
              </HStack>

          </CardBody>
      </Card>
  )
}

export default GameCardSkeleton