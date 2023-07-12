
const ProfileNav = () => {
    return (
        <div className="lg:hidden ">
            <div className="navbar">
                <div className="navbar-start">
                </div>
                <div className="navbar-end ">
                    <label
                        htmlFor="my-drawer-2"
                        className="cursor-pointer btn btn-md lg:hidden btn-primary text-sm"
                    >
                        Open drawer{" "}
                    </label>

                </div>
            </div>
        </div>
    );
};

export default ProfileNav;