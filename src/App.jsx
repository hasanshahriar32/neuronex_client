import FormContext from "./Contexts/FormContext/FormContext";
import SessionContext from "./Contexts/SessionContext/SessionContext";
import UserContext from "./Contexts/UserContext/UserContext";
import Routes from "./routes/Routes";
import "./style.css";
function App() {
    return (
        <>
            <UserContext>
                <FormContext>
                    <SessionContext>
                        <Routes />
                    </SessionContext>
                </FormContext>
            </UserContext>
        </>
    );
}

export default App;
