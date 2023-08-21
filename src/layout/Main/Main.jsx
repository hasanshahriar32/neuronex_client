import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Chat from "../../components/Chat/Chat";

const Main = () => {
  return (
    <div>
      <Header />
      <Chat />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
