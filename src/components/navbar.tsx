import React from "react";
import { Grid, Container, Segment, Button, Icon } from "semantic-ui-react";
import { NavLinks } from "./navLinks";

export const Navbar: React.FC<{
  logo: string;
  setVisible: any;
  visible: boolean;
  currentPage: string;
}> = ({ logo, setVisible, visible, currentPage }) => {
  return (
    <>
      <Segment
        inverted
        color="blue"
        size="large"
        as="nav"
        attached
        aria-label="Build a responsive navbar"
      >
        <Container>
          <Grid>
            <Grid.Row stretched>
              <Grid.Column verticalAlign="middle" width={2}>
                <a style={{ color: "white" }} href="/">
                  {logo}
                </a>
              </Grid.Column>
              <Grid.Column width={14} only="mobile" textAlign="right">
                <Button
                  icon
                  size="big"
                  aria-haspopup="true"
                  aria-controls="menu"
                  aria-expanded={visible}
                  aria-label="Show navigation menu"
                  basic
                  className="nav__button-close"
                  inverted
                  onClick={() => setVisible(!visible)}
                >
                  <Icon name="bars" />
                </Button>
              </Grid.Column>
              <Grid.Column
                widescreen="14"
                only="computer tablet"
                textAlign="right"
              >
                <NavLinks mobile={visible} currentPage={currentPage} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  );
};
