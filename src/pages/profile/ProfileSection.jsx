import { useContext } from "react";
import { AuthContext } from "../../Contexts/UserContext/UserContext";

const ProfilePage = () => {
    const { user } = useContext(AuthContext);
    return (
        <main className="">
            <HeroSection />
            <ProfileSection user={user} modalId={"my-drawer-2"} />
        </main>
    );
};

// HeroSection component
const HeroSection = () => {
    return (
        <section className="relative block h-[325px]">
            <div className="absolute -top-14 w-full h-full bg-center bg-cover" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')"
            }
            }>
                <span id="blackOverlay" className="w-full absolute opacity-50 bg-black"></span>
            </div >
            <div className="top-18 bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden " style={{ transform: "translateZ(0px)" }}>
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </section >
    );
};

// ProfileSection component
const ProfileSection = ({ user, modalId }) => {
    return (
        <section className="relative -mt-[160px] bg-blueGray-200">
            <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-base-200 w-full mb-6 shadow-xl rounded-lg -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <img alt="..." src={user?.photoURL} className="shadow-xl rounded-full h-auto w-[200px] align-middle border-none absolute -m-[78px] -ml-20 lg:-ml-16 max-w-[150px] " />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <div className="py-6 px-3 mt-32 sm:mt-0">
                                    {/* <label htmlFor={modalId} className="cursor-pointer btn btn-sm lg:hidden">Open drawer </label> */}
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="lg:mr-4 p-3 text-center md:text-md">
                                        Id :{user?.uid}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                                {user?.displayName}
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400">
                                    {user?.email}
                                </i>

                            </div>
                            <div className="mb-2 text-blueGray-600 mt-10">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                            </div>
                            <div className="mb-2 text-blueGray-600">
                                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                            </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full  px-4">
                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        An artist of considerable range, Jenna the name taken by
                                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                                        performs and records all of his own music, giving it a
                                        warm, intimate feel with a solid groove structure. An
                                        artist of considerable range.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// FooterSection component
// const FooterSection = () => {
//     return (
//         <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
//             <div className="container mx-auto px-4">
//                 <div className="flex flex-wrap items-center md:justify-between justify-center">
//                     <div className="w-full md:w-6/12 px-4 mx-auto text-center">
//                         <div className="text-sm text-blueGray-500 font-semibold py-1">
//                             Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank" rel="noopener noreferrer"> Creative Tim</a>.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

export default ProfilePage;
