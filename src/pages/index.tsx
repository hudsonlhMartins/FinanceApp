import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Sumary from "../components/Sumary";


export default function Home() {
  return (
    <Box>
      <Flex px='8'>
          <SideBar/>

          <Box w='100%'>
            <Header/>
            <Box bg='white'>
              <Sumary/>  
            </Box>   
          </Box>
      </Flex>

        
    </Box>
  )
}
