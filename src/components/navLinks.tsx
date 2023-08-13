import { Button, ButtonProps, List } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

export const isActive = (path: string) => window.location.pathname === path;

export const NavLinks = ({
  mobile,
  currentPage,
  setVisible,
}: {
  mobile: boolean;
  currentPage: string;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentLink, setCurrentLink] = useState<boolean>(false);
  const onNavLinkClickHandler = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: ButtonProps
  ) => {
    isActive(data.to);
    setCurrentLink(true);
    setVisible(false);
  };

  return (
    <List
      role="menubar"
      id="menu"
      as="ul"
      horizontal={mobile}
      aria-label="Build a responsive navbar"
      className={!mobile ? "nav__list--desktop" : "nav__list--mobile"}
    >
      <List.Item role="none" as="li">
        <List.Content>
          <Button
            role="menuitem"
            as={NavLink}
            onClick={onNavLinkClickHandler}
            aria-current={currentLink ? "page" : undefined}
            to="/"
            color="blue"
            fluid
          >
            Home
          </Button>
        </List.Content>
      </List.Item>
      <List.Item role="none" as="li">
        <List.Content>
          <Button
            role="menuitem"
            fluid
            onClick={onNavLinkClickHandler}
            as={NavLink}
            to="/contact"
            color="blue"
            aria-current={currentLink ? "page" : undefined}
          >
            Contact
          </Button>
        </List.Content>
      </List.Item>
      <List.Item role="none" as="li">
        <List.Content>
          <Button
            role="menuitem"
            fluid
            as={NavLink}
            to="/about"
            color="blue"
            onClick={onNavLinkClickHandler}
            aria-current={currentLink ? "page" : undefined}
          >
            About
          </Button>
        </List.Content>
      </List.Item>
    </List>
  );
};
