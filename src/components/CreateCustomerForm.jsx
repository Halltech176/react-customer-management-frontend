import {Formik, Form, useField} from 'formik';
import * as Yup from 'yup';
import {Alert, AlertIcon, Box, Button, FormLabel, Input, Select, Stack} from "@chakra-ui/react";
import {saveCustomer} from "../services/client.jsx";
import {useCustomers} from "../context/customers.jsx";
import {errorNotification, successNotification} from "../services/notification.jsx";

const MyTextInput = ({label, ...props}) => {

    const [field, meta] = useField(props);
    return (<Box>
        <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
        <Input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (<Alert className="error">
            <AlertIcon status={"error"} mt={2}/>
            {meta.error}
        </Alert>) : null}
    </Box>);
};

const MySelect = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (<Box>
        <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
        <Select {...field} {...props} />
        {meta.touched && meta.error ? (<Alert className="error">
            <AlertIcon status={"error"} mt={2}/>
            {meta.error}
        </Alert>) : null}
    </Box>);
};

// And now we can use these
const CreateCustomerForm = () => {
    const {customers, setCustomers} = useCustomers()
    return (<>
        <Formik
            initialValues={{
                name, email: '', age: 0, gender: ""
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'), email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'), age: Yup.number()
                    .min(16, "You must be atleast 16 years of age")
                    .required("Required"), gender: Yup.string()
                    .oneOf(['MALE', 'FEMALE', 'product', 'other'], 'Invalid Gender')
                    .required('Required'),
            })}
            onSubmit={async (values, {setSubmitting}) => {
                try {
                    const response = await saveCustomer(values);
                    setCustomers([...customers, {...values, id: customers.length + 1}]);
                    successNotification("Customer Saved", "Customer was succesfully added")
                    console.log(response)
                } catch (e) {
                    errorNotification(e.code, e.response.data.message)
                    console.log(e)
                } finally {
                    setSubmitting(true)
                }


            }}
        >
            <Form>
                <Stack spacing={"24px"}>
                    <MyTextInput
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="Jane"
                    />

                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@formik.com"
                    />


                    <MyTextInput
                        label="Age"
                        name="age"
                        type="number"
                        placeholder="0"
                    />


                    <MySelect label="Gender" name="gender">
                        <option value="">Select your gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </MySelect>


                    <Button type="submit">Submit</Button>
                </Stack>
            </Form>
        </Formik>
    </>);
};

export default CreateCustomerForm