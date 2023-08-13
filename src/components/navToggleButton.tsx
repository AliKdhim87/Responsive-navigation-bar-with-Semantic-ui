import React from "react";
import { Button, Icon } from "semantic-ui-react";

interface NavToggleButtonProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  icon: "bars" | "close";
}

export const NavToggleButton: React.FC<NavToggleButtonProps> = ({
  visible,
  setVisible,
  icon,
}) => (
  <Button
    icon
    size="big"
    aria-haspopup="menu"
    aria-controls="menu"
    aria-expanded={visible}
    aria-label={icon === "bars" ? "Open menu" : "Close menu"}
    basic
    className="nav__toggle-button"
    inverted
    onClick={() => setVisible(!visible)}
  >
    <Icon name={icon} aria-hidden="true" />
  </Button>
);
