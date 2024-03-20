import Layout from "../components/layout/index.jsx";
import {useCustomers} from "../context/customers.jsx";
import Loader from "../components/common/loader.jsx";
import CardItem from "../components/card.jsx";
import {SimpleGrid} from "@chakra-ui/react";
import DrawerForm from "../components/DrawerForm.jsx";

const Customers = () => {
    const {loading, customers} = useCustomers()


    return (
        <Layout>
            {loading ? <Loader/> : <>
                <DrawerForm/>
                <SimpleGrid columns={{base: 1, md: 3}} spacing={10}>
                    {customers.map((customer) => <CardItem key={customer?.id} customer={customer}/>)}
                </SimpleGrid>
            </>
            }
        </Layout>
    )
}

export default Customers