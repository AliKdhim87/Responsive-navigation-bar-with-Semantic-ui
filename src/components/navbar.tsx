import React from "react";
import { NavLinks } from "./navLinks";
interface NavbarProps {
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  visible,
  setVisible,
  currentPage,
}) => (
  <nav aria-label="Build a responsive navbar">
    <NavLinks
      mobile={visible}
      currentPage={currentPage}
      setVisible={setVisible}
    />
  </nav>
);
