import { createContext, useState } from "react";

export const myOrderContext = createContext();

export const MyOrderProvider = ({children}) => {
  const [myOrder, setMyOrder] = useState(JSON.parse(localStorage.getItem("order")) || []);
  console.log("myOrder", myOrder);
  return <myOrderContext.Provider value={{myOrder, setMyOrder}}>
    {children}
  </myOrderContext.Provider>
}