import axios from "axios";

export const getCustomers = async  () => {
    try {
        return  await axios.get(import.meta.env.VITE_API_BASE_URL+"customers")

    }catch (e){
        console.log(e)
        throw e
    }
}

export const saveCustomer = async (customer) => {
    try {
        return await axios.post(import.meta.env.VITE_API_BASE_URL+"customers", customer)
    } catch (e){
        console.log(e)
    }
}