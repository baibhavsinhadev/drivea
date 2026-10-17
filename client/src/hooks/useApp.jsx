import { useContext } from "react";
import AppContext from "../context/AppContext";

const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be provided within AppProvider");
  }

  return context;
};

export default useApp;
