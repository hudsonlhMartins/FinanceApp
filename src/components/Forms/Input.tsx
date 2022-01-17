import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"
import { forwardRef } from "react"

interface InpuntBaseProps extends ChakraInputProps{
    name: string;
    label?: string;
    placeholder?: string;
    color?: string;
    bg?: string;
    type?: string;

}

const InputBase = ({name, label, placeholder, color='gray.50', bg='gray.100', type='name',  ...rest}:InpuntBaseProps, ref)=>{

    return(
        <FormControl>
            { !!label && <FormLabel color='gray.600' htmlFor={name}>{label}</FormLabel>}

            <ChakraInput
                name={name}
                id={name}
                focusBorderColor="cyan.400"
                bgColor={color}
                variant='filled'
                _hover={{bgColor: bg}}
                size='lg'
                ref={ref}
                placeholder={placeholder}
                type={type}
                {...rest}
            >

            </ChakraInput>
        </FormControl>
    )
} 

export const Input = forwardRef(InputBase)