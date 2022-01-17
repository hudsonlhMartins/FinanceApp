import { Box, Button, Flex, Heading, Icon, SimpleGrid, Text, useDisclosure, Link as ChakraLink } from "@chakra-ui/react";
//import { Input } from "../../components/Forms/Input";
import Header from "../../components/Header"
import SideBar from "../../components/SideBar"
import {FiMinusCircle, FiPlusCircle} from 'react-icons/fi'
import Modal from "../../components/Modal";
import { useState } from "react";
import Link from "next/link";

export default function Forms (){

    const [typeTransaction , setTypeTransaction] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleEntrada = ()=>{
        setTypeTransaction('entrada')
        onOpen()
    }

    const handleSaida = ()=>{
        setTypeTransaction('saida')
        onOpen()
    }
    

    return(
        <Box>
        <Flex px='8'>
            <SideBar/>
  
            <Box w='100%' >
              <Header/>
              <Flex bg='white' mt='20' px='4' py='6' flexDirection='column'>
                <Heading fontSize='3xl' color='gray.500' alignSelf='center'>Formulario</Heading>

                    <Link href='/forms/month' passHref>
                        <ChakraLink 
                            alignSelf='flex-end' 
                            bg='cyan.400'
                            color='white'
                            _hover={{bg:'cyan.600'}}
                            px='2'
                            py='3'
                            fontWeight='600'
                            borderRadius={8}
                        >
                                Valores Decorrente
                        </ChakraLink>
                    </Link>


                    <Flex mt='6' gap='12' justify='space-around'>
                        <Flex align='center' flexDirection='column' gap='2'>   
                            <Text color='gray.600'>Adicionar Entrada</Text>
                            <Icon 
                                as={FiPlusCircle} 
                                fontSize='40' 
                                color='green.400' 
                                cursor='pointer' 
                                _hover={{color: 'green.600'}}
                                onClick={handleEntrada}
                            />
                        </Flex>

                        <Flex align='center' flexDirection='column' gap='2'>
                            <Text color='gray.600'>Adicionar Saida</Text>
                            <Icon 
                                as={FiMinusCircle} 
                                fontSize='40' 
                                color='red.400' 
                                cursor='pointer' 
                                _hover={{color: 'red.600'}}
                                onClick={handleSaida}
                            />
                        </Flex>
                    </Flex>

              </Flex>   
            </Box>

            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                type={typeTransaction}    
            />
        </Flex>
  
          
      </Box>
    )
}