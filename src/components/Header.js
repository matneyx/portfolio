import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Col,
    Container,
    Dropdown,
    Row
} from 'react-bootstrap'

export const Header = () => <header id="header" className="fixed-top">
    <Container>
      <Row>
        <Col md={12}>
        <Navbar.Brand className="logo" href="index.html">Dave Matney</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="ul" className="navbar">
            <li>
              <Nav.Link className='scrollto active' href='#hero'>Home</Nav.Link>
            </li>
            <li>
              <Nav.Link className='scrollto' href='#about'>About</Nav.Link>
            </li>
            <li>
              <Nav.Link className='scrollto' href='#services'>Services</Nav.Link>
            </li>
            <li>
              <Nav.Link className='scrollto' href='#work'>Work</Nav.Link>
            </li>
            <li>
              <Nav.Link className='scrollto' href='#blog'>Blog</Nav.Link>
            </li>
            <li>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>Drop Down....<i className='bi bi-chevron-down'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Hello there!</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </Nav>
        </Navbar.Collapse>
        </Col>
      </Row>
    </Container>
</header>;
