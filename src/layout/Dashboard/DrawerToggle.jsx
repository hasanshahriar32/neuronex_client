import { useContext } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiContext } from "../../Contexts/FormContext/FormContext";
const DrawerToggle = () => {
  const { drawerOpen, setDrawerOpen } = useContext(AiContext);
  return (
    <button
      type="button"
      onClick={() => setDrawerOpen(!drawerOpen) || true}
      htmlFor="my-drawer-2"
      className="inline-flex btn btn-md tracking-wide  items-center justify-center rounded-lg border lg:hidden btn-success text-md transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
    >
      <AiOutlineMenuFold />
      <span>Menu</span>
    </button>
  );
};

export default DrawerToggle;
