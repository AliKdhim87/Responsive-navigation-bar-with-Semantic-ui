//@ts-check
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Sidebar, Menu, Container, Button, Segment } from "semantic-ui-react"

import Navbar from "./navbar"
import NavLinks from "./navLinks"

const Layout = ({ children }) => {
  const [visible, setVisible] = React.useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="push"
        color="blue"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Button.Group vertical style={{ marginTop: "3rem" }}>
          <NavLinks />
        </Button.Group>
      </Sidebar>
      <Sidebar.Pusher dimmed={visible}>
        <Navbar
          siteTitle={data.site.siteMetadata?.title}
          setVisible={setVisible}
          visible={visible}
        />
        <Container as="main">{children}</Container>
        <Segment attached color="blue" inverted textAlign="center" as="footer">
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
