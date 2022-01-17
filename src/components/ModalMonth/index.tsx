import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    SimpleGrid,
    Heading,
    Stack,
  } from '@chakra-ui/react'
import { Input } from '../Forms/Input'


  export default function ModalMonth ({isOpen, onClose}){

    return(
        <ChakraModal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Cadastrar gasto mensal</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>

                        <Stack spacing='4'>
                            <SimpleGrid minChildWidth='100px' gap='4'>
                                <Input name='typeMonth' id='typeMonth' label='Tipo' placeholder='Agua, café...' />
                                <Input name='valueMonth' id='valueMonth' label='Valor' type='number' placeholder='00,00' />
                            </SimpleGrid>
                            <Input type='date' name='date' id='dateMonth' label='Data' />
                  
                            <Input name='categorie' id='categorie' label='Categoria' type='name' placeholder='Casa, lazer...' />
                        </Stack>


                    </ModalBody>

                    <ModalFooter>

                        <Button colorScheme='purple'>Adicionar</Button>
                    </ModalFooter>
                </ModalContent>
        </ChakraModal>
    )
  }