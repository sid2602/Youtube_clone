import React, { useState, useContext, createContext } from "react";

export type NavContextTypes = {
  searchMobile: boolean;
  setSearchMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavContext = createContext<NavContextTypes>({
  searchMobile: false,
  setSearchMobile: () => {},
});

export const useNav = () => {
  return useContext(NavContext);
};

type NavProviderType = {
  children: React.ReactNode;
};

export default function NavProvider({ children }: NavProviderType) {
  const [searchMobile, setSearchMobile] = useState(false);

  const value = {
    searchMobile,
    setSearchMobile,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}
