import './App.css'
import Routes from "./routes/index.jsx";
import CustomerProvider from "./context/customers.jsx";


function App() {


    return (<>
        <CustomerProvider>
            <Routes/>
        </CustomerProvider>


    </>)
}

export default App
