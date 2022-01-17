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
  } from '@chakra-ui/react'
import { Input } from '../Forms/Input'
  

export default function Modal ({isOpen, onClose, type}){

    return(
        <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
          <ModalContent>
            <ModalHeader color='gray.900'>Cadastrar {type == 'entrada' ? 'Entrada' : 'Saida'}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <SimpleGrid minChildWidth='120px' gap='4'>
                    {type == 'entrada' ? (
                        <>
                            <Input name='entrada' id='entrada' label='Tipo' placeholder='Tipo'/>
                            <Input 
                                name='value' 
                                id='value' 
                                label='Valor' 
                                color='green.100'
                                bg='green.200'
                                placeholder='Entrada'    
                            />
                        </>
                    ) : (
                        <>
                            <Input name='saida' id='saida' label='Tipo' placeholder='Tipo'/>
                            <Input 
                                name='value' 
                                id='value' 
                                label='Valor' 
                                color='red.100' 
                                placeholder='Saida'
                                bg='red.200'
                            />
                        </>
                    )}
                </SimpleGrid>
              </ModalBody>

            <ModalFooter>
              <Button variant='unstyled' colorScheme='blue' mr={5} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='purple'>Salvar</Button>
            </ModalFooter>
          </ModalContent>
      </ChakraModal>
    )
}