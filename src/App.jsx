import SessionContext from "./Contexts/SessionContext/SessionContext";
import Routes from "./routes/Routes";
import UserContext from "./Contexts/UserContext/UserContext";
import FormContext from "./Contexts/FormContext/FormContext";

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
