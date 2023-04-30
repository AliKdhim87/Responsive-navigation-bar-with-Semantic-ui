import * as React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Menu, Container } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./navbar";
import { NavLinks } from "./navLinks";

export const Layout: React.FC<{ children?: React.ReactNode }> = () => {
  const [visible, setVisible] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    const keyHandler = (event: { which: number }) => {
      if ([27].indexOf(event.which) >= 0 && visible) {
        setVisible(false);
      }
    };
    if (visible) {
      window?.addEventListener("keyup", keyHandler);
    }
    return () => {
      window.removeEventListener("keyup", keyHandler);
    };
  }, [visible]);

  return (
    <Sidebar.Pushable className="pushable">
      <Sidebar
        as={Menu}
        animation="push"
        color="blue"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="wide"
      >
        <NavLinks mobile currentPage={pathname} />
      </Sidebar>

      <Sidebar.Pusher dimmed={visible} className="main-wrapper">
        <Navbar
          currentPage={pathname}
          logo="Logo"
          setVisible={setVisible}
          visible={visible}
        />
        <Container as="main" className="main">
          <Outlet />
        </Container>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Layout;
