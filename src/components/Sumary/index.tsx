import {SimpleGrid, Box, Flex, Text, Stack, Heading, useDisclosure} from '@chakra-ui/react'

export default function Sumary (){

    const { isOpen, onToggle } = useDisclosure()


    return(
        <Box px='4' py='6' mt='12'>
            <SimpleGrid flex='1' gap='6' minChildWidth='340px' align='flex-start' column={2}>
                <Flex
                    p='8'
                    bg='blue.400'
                    borderRadius={8}
                    align='center'
                    _hover={{bg: 'teal.500'}}
                >   
                    <Stack spacing='4'>
                        <Text fontWeight='semibold' color='gray.50'>Total da renda</Text>
                        <Heading color='gray.50'>12.000,00 R$</Heading>
                        <Text fontWeight='normal' fontSize='12px' color='gray.50'>Saved 25%</Text>
                    </Stack>

                </Flex>

                <Flex
                    p='8'
                    bg='cyan.400'
                    borderRadius={8}
                    align='center'
                    _hover={{bg: 'teal.500'}}

                >   
                    <Stack spacing='4'>
                        <Text fontWeight='semibold' color='gray.50'>Total da despeza</Text>
                        <Heading color='gray.50'>5.200,00 R$</Heading>
                        <Text fontWeight='normal' fontSize='12px' color='gray.50'>Saved 25%</Text>
                    </Stack>

                </Flex>




                <Flex
                    p='8'
                    bg='green.400'
                    borderRadius={8}
                    align='center'
                    _hover={{bg: 'teal.500'}}

                >   
                    <Stack spacing='4'>
                        <Text fontWeight='semibold' color='gray.50'>Dinheiro em mão</Text>
                        <Heading color='gray.50'>2.000,00 R$</Heading>
                        <Text fontWeight='normal' fontSize='12px' color='gray.50'>Saved 5%</Text>
                    </Stack>

                </Flex>

                <Flex
                    p='8'
                    bg='purple.400'
                    borderRadius={8}
                    align='center'
                    _hover={{bg: 'teal.500'}}

                >   
                    <Stack spacing='4'>
                        <Text fontWeight='semibold' color='gray.50'>Margem de lucro</Text>
                        <Heading color='gray.50'>5.200,00 R$</Heading>
                        <Text fontWeight='normal' fontSize='12px' color='gray.50'>Saved 25%</Text>
                    </Stack>

                </Flex>
            </SimpleGrid>
        </Box>
    )
}