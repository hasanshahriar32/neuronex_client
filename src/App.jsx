import SessionContext from "../Contexts/SessionContext/SessionContext";
import UserContext from "../Contexts/UserContext/UserContext";

import FormContext from "../Contexts/FormContext/FormContext";
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
