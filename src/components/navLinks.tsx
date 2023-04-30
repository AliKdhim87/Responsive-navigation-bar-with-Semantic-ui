import { Button, List } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import React from "react";

function isActive(path: string, currentPage: string) {
  return currentPage === path;
}

export const NavLinks = ({
  mobile = true,
  currentPage,
}: {
  mobile: boolean;
  currentPage: string;
}) => {
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
            aria-current={isActive("/", currentPage) ? "page" : undefined}
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
            as={NavLink}
            to="/about"
            color="blue"
            aria-current={isActive("/about", currentPage) ? "page" : undefined}
          >
            About
          </Button>
        </List.Content>
      </List.Item>
      <List.Item role="none" as="li">
        <List.Content>
          <Button
            role="menuitem"
            fluid
            as={NavLink}
            to="/dashboard"
            color="blue"
            aria-current={
              isActive("/dashboard", currentPage) ? "page" : undefined
            }
          >
            Dashboard
          </Button>
        </List.Content>
      </List.Item>
    </List>
  );
};
