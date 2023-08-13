// src/components/layout.tsx
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Sidebar,
  Menu,
  Container,
  Grid,
  Segment,
  Header,
} from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { NavToggleButton } from "./navToggleButton";

export const Layout: React.FC<{ children?: React.ReactNode }> = () => {
  const [visible, setVisible] = React.useState(false);
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    /*
    Dynamic Screen Size:
    Maintain responsiveness using isMobile state based on screen width.
    */
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    /*
    Keyboard Event Handling:
    Handle keyboard events to close the sidebar when the Esc key is pressed.
    */
    const keyHandler = (event: { which: number }) => {
      if ([27].indexOf(event.which) >= 0 && visible) {
        setVisible(false);
      }
    };
    if (visible) {
      window?.addEventListener("keyup", keyHandler);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keyup", keyHandler);
    };
  }, [visible]);

  return (
    <>
      <Segment inverted color="blue" size="large" attached>
        <Container>
          <Grid>
            <Grid.Row stretched>
              <Grid.Column verticalAlign="middle" width={2} as="header">
                {/* Logo:
                  Display the logo using Semantic UI's Header component.
              */}
                <Header as={Link} to="/" inverted>
                  Logo
                </Header>
              </Grid.Column>
              <Grid.Column width={14} only="mobile" textAlign="right">
                {/* NavToggleButton
                  Show the mobile navigation bar, providing access to various sections.
               */}
                <NavToggleButton
                  icon={visible && isMobile ? "close" : "bars"}
                  visible={visible}
                  setVisible={setVisible}
                />
              </Grid.Column>
              {/* 
            Desktop Navbar:
            Show the desktop navigation bar, providing access to various sections.
            Conditionally render the desktop navbar if the screen size isn't mobile.
              */}
              {!isMobile && (
                <Grid.Column
                  widescreen="14"
                  only="computer tablet"
                  textAlign="right"
                >
                  <Navbar
                    setVisible={setVisible}
                    visible={visible}
                    currentPage={pathname}
                  />
                </Grid.Column>
              )}
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      {/* 
        Mobile Sidebar:
        Display a sidebar menu for mobile users using Semantic UI's Sidebar component.
        Slide the sidebar into view when the toggle button is clicked.
      */}
      <Sidebar.Pushable className="pushable">
        <Sidebar
          as={Menu}
          animation="push"
          color="blue"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible && isMobile}
          width="wide"
        >
          {isMobile && (
            <Navbar
              setVisible={setVisible}
              visible={visible}
              currentPage={pathname}
            />
          )}
        </Sidebar>
        <Sidebar.Pusher dimmed={visible} className="main-wrapper">
          <Container as="main" className="main">
            {/* Here is where the react-router-dom going to render the pages.*/}
            <Outlet />
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default Layout;
