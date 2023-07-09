import FormContext from "./Contexts/FormContext/FormContext";
import PaymentContext from "./Contexts/PaymentContext/PaymentContext";
import SessionContext from "./Contexts/SessionContext/SessionContext";
import UserContext from "./Contexts/UserContext/UserContext";
import Routes from "./routes/Routes";
import "./style.css";
function App() {
    return (
        <>
            <UserContext>
                <PaymentContext>
                    <FormContext>
                        <SessionContext>
                            <Routes />
                        </SessionContext>
                    </FormContext>
                </PaymentContext>
            </UserContext>
        </>
    );
}

export default App;
