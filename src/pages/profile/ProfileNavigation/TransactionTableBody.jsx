import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";

const TransactionTableBody = ({ setCurrentAmount }) => {
  const { user } = useContext(AuthContext);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    fetch(
      `https://neuronex-server-test.vercel.app/transaction/all/${localStorage.getItem(
        "user_id"
      )}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ uid: user?.uid }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setCurrentAmount(result);
        setTransaction(result?.transactions);
      });
  }, []);

  return (
    <div className="mt-10">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                Date
              </th>
              <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                payment ID
              </th>
              <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                plan
              </th>
              <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                Amount
              </th>
              <th className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {transaction?.map((data, idx) => (
              <tr key={idx}>
                <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                  {data?.updatedAt?.slice(0, 10)}
                </td>
                <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                  {data?.paymentID}
                </td>
                <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                  {data?.plan}
                </td>
                <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                  ${data?.price}
                </td>
                <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                  {data?.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTableBody;
