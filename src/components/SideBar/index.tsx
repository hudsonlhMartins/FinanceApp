import {Flex, Stack, Link as ChakraLink, Heading} from '@chakra-ui/react'
import { RiBarChartGroupedLine, RiDashboardLine, RiInputMethodLine, RiMailCheckLine } from 'react-icons/ri'
import NavLink from './NavLink'


export default function SideBar(){

    return(
        <Flex as='aside' w='64' mr='8' py='4' mt='4' flexDirection='column'>

            <Heading mb='16'>Logo</Heading>

            <Stack spacing='8' align='flex-start'>
                <NavLink icon={RiDashboardLine} href='/dashboard'>
                    Dashboard
                </NavLink>

                <NavLink icon={RiBarChartGroupedLine} href='/grafico'>
                    Grafico
                </NavLink>

                <NavLink icon={RiMailCheckLine} href='/mensagem'>
                    Menssagem
                </NavLink>

                <NavLink icon={RiInputMethodLine} href='/forms'>
                    Formularios
                </NavLink>

            </Stack>
        </Flex>
    )
}