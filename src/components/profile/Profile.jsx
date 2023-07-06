import { useContext } from "react";
import { AuthContext } from "../../Contexts/UserContext/UserContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="container mx-auto p-2">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full"
            src={user?.photoURL}
            alt="User Profile Picture"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{user?.displayName}</div>
            <p className="text-gray-700 text-base">User ID: {user?.uid}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
