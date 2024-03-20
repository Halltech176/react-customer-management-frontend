import {Button} from "@chakra-ui/react";
import Layout from "../components/layout/index.jsx";

const Userprofile = ({name, age, gender}) => {
    return (
        <Layout>
            <h1>{name}</h1>
            <p>{age}</p>
            <img alt="user profile image" src={`https://randomuser.me/api/portraits/${gender}/78.jpg`}/>
            <Button colorScheme="teal" variant={"outline"}>Click me</Button>
        </Layout>
    )
}

export default Userprofile