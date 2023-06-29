import SessionContext from "../Contexts/SessionContext/SessionContext";
import UserContext from "./components/Authentication/UserContext/UserContext";
import FormContext from "./components/FormComposed/FormContext/FormContext";
import Routes from "./routes/Routes";

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
