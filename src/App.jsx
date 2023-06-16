import UserContext from "./components/Authentication/UserContext/UserContext";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <UserContext>
        <Routes />
      </UserContext>
    </>
  );
}

export default App;
