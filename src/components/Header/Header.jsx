import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { Button } from "../../features/Button";
import { BiUser } from "react-icons/bi";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import useAdmin from "../../hooks/useAdmin";
import { Container } from "../features/container";
import { AiContext } from "../../Contexts/FormContext/FormContext";

const Header = () => {
  const { setAiConfig } = useContext(AiContext);
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const [admin] = useAdmin(localStorage.getItem("user_id"));
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-scroll", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);
    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Logout !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes Logout!`,
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        setAiConfig([]);
        Swal.fire("Logout!", "Your logout Complied.", "success");
        // clear the local storage
        localStorage.clear();
      }
    });
  };
  return (
    <header className="dark:disabled fixed top-0 left-0 z-20 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <a
          href="/"
          className="flex items-center text-lg  font-extrabold  text-white"
        >
          NeuroNex
        </a>
        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "delay-500 invisible"
          )}
        >
          <nav
            className={classNames(
              "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              hamburgerMenuIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
          >
            <ul
              className={classNames(
                "flex h-full  flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                "ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link to="/docs">Docs</Link>
              </li>
              <li>
                <Link to="/ai">Services</Link>
              </li>
              <li>
                <Link to="/team">About Us</Link>
              </li>
              <li>
                <Link to="/faq">Faq</Link>
              </li>
              <li>
                <Link to="/achievement">Achievement</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ml-auto flex h-full items-center">
          <div className="dropdown">
            <label
              tabIndex={1}
              className=" transition-colors md:hover:bg-gray-50  "
            >
              <div className={`flex items-center justify-center btn btn-ghost`}>
                <BiUser className="text-3xl" />
                {user?.uid ? (
                  <div className=" text-sm hidden md:block">
                    {user?.displayName}
                  </div>
                ) : (
                  <div className="text-sm ml-2">
                    <Link to="/login">Login</Link>
                  </div>
                )}
              </div>
            </label>
            {user?.uid && (
              <ul
                tabIndex={1}
                className="menu  dropdown-content w-[150px] -ml-10 md:ml-0 text-sm shadow bg-base-100 "
              >
                <li>
                  <Link to="/profile" className="">
                    Profile
                  </Link>
                </li>
                {admin && (
                  <>
                    <hr />
                    <li>
                      <Link to="/admin">Administration</Link>
                    </li>
                  </>
                )}

                <hr />
                <li>
                  <p onClick={handleLogOut}>Logout</p>
                </li>
              </ul>
            )}
          </div>
        </div>
        <button
          className="ml-6 md:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <AiOutlineMenu className="text-lg" />
        </button>
      </Container>
    </header>
  );
};

export default Header;
