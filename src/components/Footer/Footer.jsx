import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import MeetTeam from "../Team/Components/MeetTeam";
import { Container } from "../features/container";

const footerLinks = [
    {
        title: "Product",
        links: [
            { title: "Features", href: "#" },
            { title: "Integrations", href: "#" },
            { title: "Pricing", href: "#" },
            { title: "Changelog", href: "#" },
            { title: "Docs", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { title: "About us", href: "#" },
            { title: "Blog", href: "#" },
            { title: "Careers", href: "#" },
            { title: "Customers", href: "#" },
            { title: "Brand", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { title: "Community", href: "#" },
            { title: "Contact", href: "#" },

            { title: "Terms of service", href: "#" },
        ],
    },
    {
        title: "Developers",
        links: [
            { title: "API", href: "#" },
            { title: "Status", href: "#" },
            { title: "GitHub", href: "#" },
        ],
    },
];

const Footer = () => (
    <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
        <Container className="flex flex-col justify-between lg:flex-row">
            <div>
                <div className="flex items-start w-full h-full flex-row justify-between lg:flex-col">
                    <div className="flex items-center text-grey">
                        NeuroNex - Assistance for Your Questions
                    </div>
                    <div className="lg:flex hidden relative right-5">
                        <MeetTeam />
                    </div>
                    <div className="mt-auto flex space-x-4 text-grey">
                        <AiFillGithub className="w-6 h-6" />
                        <AiFillLinkedin className="w-6 h-6" />
                        <AiFillTwitterCircle className="w-6 h-6" />
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <MeetTeam />
                </div>
            </div>
            <div className="flex flex-wrap">
                {footerLinks.map((column) => (
                    <div
                        key={column.title}
                        className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
                    >
                        <h3 className="mb-3 font-medium">{column.title}</h3>
                        <ul>
                            {column.links.map((link) => (
                                <li key={link.title} className="[&_a]:last:mb-0">
                                    <Link
                                        className="mb-3 block text-grey transition-colors hover:text-off-white"
                                        href={link.href}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Container>
    </footer>
);
export default Footer;
