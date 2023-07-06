import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { Button } from "../../features/Button";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import { Container } from "../features/container";

const Header = () => {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
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

    return (
        <header className="dark:disabled fixed top-0 left-0 z-20 w-full border-b border-transparent-white backdrop-blur-[12px]">
            <Container className="flex h-navigation-height">
                <Link className="flex items-center text-md" to="/">
                    Neuro Nex
                </Link>
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
                                <a href="#HeroImage">Goal</a>
                            </li>
                            <li>
                                <a href="#price">Price</a>
                            </li>
                            <li>
                                <Link to='/profile'>Account</Link>
                            </li>
                            <li>
                                <Link to='/admin'>Dashboard</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="ml-auto flex h-full items-center">
                    {user?.uid ? (
                        <button className="mr-6 text-sm" onClick={() => logOut()}>
                            Log out
                        </button>
                    ) : (
                        <div>
                            <Link to="/login" className="mr-6 text-sm" href="#">
                                Log in
                            </Link>
                            <Link to="/register" className="text-sm" href="#">
                                Sign up
                            </Link>
                        </div>
                    )}
                </div>

                <button
                    className="ml-6 md:hidden"
                    onClick={() => setHamburgerMenuIsOpen((open) => !open)}
                >
                    <span className="sr-only">Toggle menu</span>
                    <AiOutlineMenu />
                </button>
            </Container>
        </header>
    );
};

export default Header;
