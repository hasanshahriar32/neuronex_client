import emailjs from "@emailjs/browser";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef } from "react";
import { isSafari } from "react-device-detect";

const Contact = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 2], [0.2, 2]);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_uru6f1k",
                "template_eqjpx0s",
                form.current,
                "de6ZUuk-3rquIvxwC"
            )
            .then(
                // eslint-disable-next-line no-unused-vars
                (result) => {
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div>
            <div className="mb-[50px] mt-[130px] text-sm">
                <section className="mb-32">
                    <div className="relative h-[350px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://i.ibb.co/1ZRs8QR/Whats-App-Image-2023-07-06-at-00-12-27-1.jpg')] opacity-60"></div>
                    <div className="wrapper">
                        <motion.div
                            style={
                                !isSafari && { scale }
                            }
                            className={`${!isSafari ? "" : "relative"}`}
                        >
                            <div className="container px-6 md:px-12 mx-auto  ">
                                <div className="block rounded-lg bg-[#091329]/100  md:py-16  -mt-[100px] ">
                                    <div className="flex flex-wrap ">
                                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6 ">
                                            <form ref={form}
                                                className="m-6 md:m-0"
                                                onSubmit={sendEmail}>
                                                <div
                                                    className="relative mb-6"
                                                    data-te-input-wrapper-init
                                                >
                                                    <input
                                                        type="text"
                                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b border-neutral-500"
                                                        id="exampleInput90"
                                                        placeholder="Name"
                                                        name="user_name"
                                                        required
                                                    />
                                                    <label
                                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                        htmlFor="exampleInput90"
                                                    >
                                                        Name
                                                    </label>
                                                </div>
                                                <div
                                                    className="relative mb-6"
                                                    data-te-input-wrapper-init
                                                >
                                                    <input
                                                        type="email"
                                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b border-neutral-500"
                                                        id="exampleInput91"
                                                        placeholder="Email  address"
                                                        required
                                                        name="user_email"
                                                    />
                                                    <label
                                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                        htmlFor="exampleInput91"
                                                    >
                                                        Email address
                                                    </label>
                                                </div>
                                                <div
                                                    className="relative mb-6"
                                                    data-te-input-wrapper-init
                                                >
                                                    <textarea
                                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b border-neutral-500"
                                                        id="exampleFormControlTextarea1"
                                                        required
                                                        name="message"
                                                        rows="3"
                                                        placeholder="Your message"
                                                    ></textarea>
                                                    <label
                                                        htmlFor="exampleFormControlTextarea1"
                                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                    >
                                                        Message
                                                    </label>
                                                </div>
                                                <div className="cursor-pointer">
                                                    <button className="btn btn-success w-full text-md ">
                                                        {" "}
                                                        Send{" "}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                            <div className="flex flex-wrap">
                                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                                    <div className="flex items-start">
                                                        <div className="shrink-0">
                                                            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth="2"
                                                                    stroke="currentColor"
                                                                    className="h-6 w-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="ml-6 grow">
                                                            <p className="mb-2 font-bold text-neutral-500 dark:text-white">
                                                                Technical support
                                                            </p>
                                                            <a href="https://sjinnovation.com/" target="blank" className="text-neutral-500 dark:text-neutral-200">
                                                                www.sjinnovation.com
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                                    <div className="flex items-start">
                                                        <div className="shrink-0">
                                                            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth="2"
                                                                    stroke="currentColor"
                                                                    className="h-6 w-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="ml-6 grow">
                                                            <p className="mb-2 font-bold text-neutral-500 dark:text-white">
                                                                Featured Projects
                                                            </p>
                                                            <a
                                                                href="https://sjinnovation.com/portfolio"
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="text-neutral-500 dark:text-neutral-200"
                                                            >
                                                                www.sjinnovation.com/portfolio
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                                                    <div className="align-start flex">
                                                        <div className="shrink-0">
                                                            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth="2"
                                                                    stroke="currentColor"
                                                                    className="h-6 w-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="ml-6 grow">
                                                            <p className="mb-2 font-bold text-neutral-500 dark:text-white">
                                                                QA Automation
                                                            </p>
                                                            <a
                                                                href="https://www.sjinnovation.com/qa-automation"
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="text-neutral-500 dark:text-neutral-200"
                                                            >
                                                                www.sjinnovation.com/qa-automation
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                                                    <div className="align-start flex">
                                                        <div className="shrink-0">
                                                            <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth="2"
                                                                    stroke="currentColor"
                                                                    className="h-6 w-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="ml-6 grow">
                                                            <p className="mb-2 font-bold text-neutral-500 dark:text-white">
                                                                Community Outreach
                                                            </p>
                                                            <a
                                                                href="https://community.sjinnovation.com/"
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="text-neutral-500 dark:text-neutral-200"
                                                            >
                                                                www.community.sjinnovation.com/
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
