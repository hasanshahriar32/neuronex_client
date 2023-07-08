import { createContext, useContext } from "react";


const paymentContext = createContext();
const PaymentContext = ({ children }) => {
    const paymentInfo = {

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