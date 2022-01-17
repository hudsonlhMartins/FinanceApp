import { Box, Flex, Heading, SimpleGrid, Input as ChakraInput, Text, Icon, useDisclosure, Button } from "@chakra-ui/react";
import { FiMinusCircle } from "react-icons/fi";
import { Input } from "../../../components/Forms/Input";
import Header from "../../../components/Header";
import ModalMonth from "../../../components/ModalMonth";
import SideBar from "../../../components/SideBar";



export default function Month (){


    const { isOpen, onOpen, onClose } = useDisclosure()


    return(
        <Box>
        <Flex px='8'>
            <SideBar/>
  
            <Box w='100%'>
              <Header/>
              <Flex bg='white' flexDirection='column' mt='8' px='4' py='6'>
                    
                    <Heading fontSize='3xl' alignSelf='center' color='gray.500'>Cadastrar Contas Mensal</Heading>


                    <SimpleGrid minChildWidth='340px' gap='6' mt='6'>

                        <Input name='salario' id='salario' label="Renda mensal" placeholder="00,00R$" />
                        <Input  
                            name='date' 
                            id='date' 
                            type="date" 
                            label="Data"  
                            min="1997-01-01" max="2030-12-31"
                        />
                    </SimpleGrid>

                    <Flex mt='8' flexDirection='column' gap='2'>
                        <Text color='gray.600'>Adicionar Saida</Text>
                        <Icon 
                            as={FiMinusCircle} 
                            fontSize='40' 
                            color='red.400' 
                            cursor='pointer' 
                            _hover={{color: 'red.600'}}
                            onClick={onOpen}
                        />
                    </Flex>

                    <Button colorScheme='cyan' color='white' alignSelf='flex-end' mt='4'>Salvar</Button>
              </Flex>   

              <ModalMonth isOpen={isOpen} onClose={onClose} />
            </Box>
        </Flex>
  
          
      </Box>
    )
}