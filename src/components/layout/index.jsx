import Sidebar from "./sidebar.jsx";
import {Box, useColorModeValue, useDisclosure} from "@chakra-ui/react";
import Navbar from "./navbar.jsx";


const Layout = ({children}) => {

    const {isOpen, onOpen, onClose} = useDisclosure()
    return <>

        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <Sidebar onClose={onClose} isOpen={isOpen} onOpen={onOpen}/>

            <Navbar onOpen={onOpen}/>

            <Box ml={{base: 0, md: 60}} p="4">
                {children}
            </Box>

        </Box>

    </>
}


export default Layout