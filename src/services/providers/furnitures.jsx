import { createContext, useState } from "react";

export const furnituresContext = createContext();

export const FurnituresProvider = ({ children }) => {
  const [furnitures, setFurnitures] = useState([]);

  return (
    <furnituresContext.Provider value={{ furnitures, setFurnitures }}>
      {children}
    </furnituresContext.Provider>
  );
};
