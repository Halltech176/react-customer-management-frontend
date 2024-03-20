import {
    Button,
    Drawer, DrawerBody, DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from "@chakra-ui/react";
import CreateCustomerForm from "./CreateCustomerForm.jsx";


const AddIcon = () => "+";

const DrawerForm = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    return (
        <>
        <Button colorScheme={"teal"} onClick = {onOpen} leftIcon={<AddIcon/>}>
            Create Customer
        </Button>
            <Drawer size={"md"} isOpen={isOpen} onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Create your account</DrawerHeader>

                        <DrawerBody>
                            <CreateCustomerForm/>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button onClick={onClose} >
                                Close
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
            </Drawer>

        </>

    )
}

export default DrawerForm