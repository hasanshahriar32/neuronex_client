import { createContext, useContext, useState } from "react";


const paymentContext = createContext();
const PaymentContext = ({ children }) => {
    const [packagE, setPackage] = useState();
    const [reload, setReload] = useState(false);

    const paymentInfo = {
        packagE, setPackage,
        reload, setReload
    }
    return (
        <paymentContext.Provider value={paymentInfo}>
            {children}
        </paymentContext.Provider>
    );
};

export default PaymentContext;

// eslint-disable-next-line react-refresh/only-export-components
export const usePayment = () => useContext(paymentContext);