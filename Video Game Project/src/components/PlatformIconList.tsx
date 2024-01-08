import { Text, HStack, Icon } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import { FaWindows, FaPlaystation, FaXbox, FaAndroid, FaLinux, FaApple } from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md"
import {SiNintendo} from "react-icons/si"
import {BsGlobe} from 'react-icons/bs'
import { IconType } from 'react-icons'


interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {

    const platformIcons: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        android: FaAndroid,
        linux: FaLinux,
        mac: FaApple,
        nintendo: SiNintendo,
        web: BsGlobe,
        ios: MdPhoneIphone,
        }
    return (
        <>
            <HStack marginY={0.75}>
                {platforms.map((platform) => <Icon as={platformIcons[platform.slug]} color='gray.400'/>)}
            </HStack>
        </>
    )
}

export default PlatformIconList