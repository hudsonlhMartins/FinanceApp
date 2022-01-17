import {Flex, Stack, Link as ChakraLink, LinkProps as ChakraLinkProps, Icon, Text, } from '@chakra-ui/react'
import { ElementType } from 'react'
import { ActiveLink } from './ActiveLink'


interface NavLinksProps extends ChakraLinkProps {
    icon: ElementType; // assim e quando passa do jeito que esta no as__
                        // so com o nome não = um component
    children: string;
    href: string;
}

export default function NavLink({href, children, icon, ...rest}: NavLinksProps){

    return(
        
        <ActiveLink shouldMatchExactHref={false} href={href} passHref>
            <ChakraLink display='flex' align='center' {...rest}>
                <Icon as={icon} fontSize='20'/>
                <Text ml='4' fontWeight='medium'>{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}