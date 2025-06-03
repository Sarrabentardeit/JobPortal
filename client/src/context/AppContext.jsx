import { createContext } from "react";

export const AppContexte = createContext();

export const AppContexteProvider = (props) => {
  const value = {
    // Ici tu peux mettre les données à partager
  };

  return (
    <AppContexte.Provider value={value}>
      {props.children}
    </AppContexte.Provider>
  );
};
