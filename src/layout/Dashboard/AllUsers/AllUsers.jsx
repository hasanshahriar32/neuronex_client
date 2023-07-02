

const AllUsers = () => {
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <h2 className="mb-4 text-2xl font-semibold leadi">Control Users</h2>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                        <thead>
                            <tr className="dark:bg-gray-700">
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Role</th>
                                    <th className="p-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                            </tr>
                        </thead>
                        <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
                            <tr>
                                    <td className="px-3 py-2">
                                        <p>Dwight Adams</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <p>dwight@adams.com</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <p>user</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <button onClick={()=>window.actionModal.showModal()} type="button" title="Open details" className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                            </svg>
                                        </button>
                                    </td>
                            </tr>

                            <tr>
                                    <td className="px-3 py-2">
                                        <p>Richie Allen</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <p>richie@allen.com</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <p>user</p>
                                    </td>

                                    <td className="px-3 py-2">
                                        <button onClick={()=>window.actionModal.showModal()} type="button" title="Open details" className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                            </svg>
                                        </button>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                <dialog id="actionModal" className="modal">
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle text-md btn-ghost hover:bg-yellow hover:text-background absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-xl">Hello Admin!</h3>
                        <p className="py-4 text-md">Update or delete your user</p>

                        <div className="flex">
                        <button className="btn bg-red hover:bg-red mx-3 text-md">Delete</button>
                        <button className="btn btn-secondary text-md">Make Admin</button>
                        </div>
                    </form>
                </dialog>
        </div>
    );
};

export default AllUsers;