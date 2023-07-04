import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (id) => {
  const [admin, setAdmin] = useState(false);
  const [loadingAdmin, setLoadingAdmin] = useState(true);
  useEffect(() => {
    async function getAdmin() {
      if (id) {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          };
          const { data: dataGet } = await axios.get(
            `https://neuronex-server-test.vercel.app/admin/${id}`,
            config
          );

          console.log(dataGet);
          setAdmin(dataGet.isAdmin);
          setLoadingAdmin(false);
        } catch (error) {
          console.log(error);
        }
      }
    }
    getAdmin();
  }, [id]);
  return [admin, loadingAdmin];
};

export default useAdmin;
