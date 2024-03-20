import {createContext, useContext, useEffect, useState} from "react";
import {getCustomers} from "../services/client.jsx";


const initialState = {
    customers: [],
    loading: false,
    setCustomers: () => {
    }
}
const CustomerContext = createContext(initialState)

// eslint-disable-next-line react/prop-types
const CustomerProvider = ({children}) => {

    const [customers, setCustomers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getCustomers().then(res => {

            setCustomers(res.data)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }, []);

    const value = {customers, loading, setCustomers}
    return <CustomerContext.Provider value={value}>
        {children}
    </CustomerContext.Provider>
}

export const useCustomers = () => {
    return useContext(CustomerContext)
}

export default CustomerProvider