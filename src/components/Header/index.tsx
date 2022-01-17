import {Flex, Stack, Input, Icon, HStack, Avatar} from '@chakra-ui/react'
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from 'react-icons/ri'


export default function Header (){

    return(
        <Flex
            w='100%'
            as='header'
            h='100px'
            bg='White'
            mt='4'
            px='6'
            align='center'
            justifyContent='space-between'
        >

            <Flex
                as='label'
                flex='1'
                py='4'
                px='8'
                ml='6'
                maxWidth={400}
                alignSelf='center'
                color='gray.800'
                position='absolute'
                bg='gray.50'
                borderRadius='full'
            >

                <Icon as={RiSearchLine} fontSize='20' color='gray.500'/>

                <Input
                    color='gray.800'
                    variant='unstyled'
                    placeholder='Buscar no site'
                    _placeholder={{color: 'gray.500'}}
                    px='4'
                    mr='4'
                >
                
                </Input>

            </Flex>


            <Flex
                ml='auto'
                align='center'
            >
                <HStack spacing='5'>
                    <Icon as={RiUserAddLine} fontSize='25' />
                    <Icon as={RiNotificationLine} fontSize='25'/>
                </HStack>

                <Flex align='center' ml='8'>

                    <Avatar size='lg' name='Hudson Martins' src='https://github.com/hudsonlhMartins.png' />

                </Flex>

            </Flex>
            
        </Flex>
    )
}