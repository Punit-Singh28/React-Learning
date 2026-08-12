import { createContext, React, useState } from "react";

export const ContentApi = createContext("");

export const ContextApiProvider = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <ContentApi.Provider value={{ name, setName}}>
      {children}
    </ContentApi.Provider>
  );
};
