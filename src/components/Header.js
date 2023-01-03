import React, { useEffect } from 'react'
import {
    Navbar,
    NavLink,
    Container,
    Dropdown,
} from 'react-bootstrap'
import { select } from '../helperFunctions';
import { ChevronDown, MobileNavToggle } from './BootstrapIcons';

const ListAnchor = props => <li><a href={props.href} className={props.className}>{props.children}</a></li>;

const NavListItem = props => {
  const {className = '', children, isAnchor, href} = props;

  const compiledClassName = ['scrollto'].concat(className.split(' ')).join(' ');

  return (
    <NavLink as={isAnchor ? ListAnchor : 'li'} className={compiledClassName} href={href}>{children}</NavLink>
  );
}

const NavListAnchor = props => <NavListItem isAnchor={true} {...props} />;

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
// TODO: Figure out how to get hovering to work so you don't have to click!
const CustomToggle = React.forwardRef(({ children, onClick, href }, ref) =>(
  <a
    className='nav-link scrollto'
    href={href}
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}<ChevronDown />
  </a>
));

export const Header = () => {
  useEffect(() => {
    /**
      * Navbar links active state on scroll
      */
    let navbarlinks = select('#navbar .scrollto', true);

    // TODO: This can probably be handled with state
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }

    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);

    return(() => {
      window.removeEventListener('load', navbarlinksActive);
      document.removeEventListener('scroll', navbarlinksActive);
    });
  });

  useEffect(()=> {
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
     let selectHeader = select('#header')
     if (selectHeader) {
       const headerScrolled = () => {
         if (window.scrollY > 100) {
           selectHeader.classList.add('header-scrolled')
         } else {
           selectHeader.classList.remove('header-scrolled')
         }
       }
       window.addEventListener('load', headerScrolled)
       document.addEventListener('scroll', headerScrolled);

       return(()=>{
         window.removeEventListener('load', headerScrolled)
         document.removeEventListener('scroll', headerScrolled);
       })
     }
  });

  return (<header id="header" className="fixed-top">
    <Container className='d-flex align-items-center justify-content-between'>
      <h1 className="logo"><a href='index.html'>Dave Matney</a></h1>
      <Navbar id="navbar" expand={false} variant={false}>
        <ul>
          <NavListAnchor href='#hero'>Home</NavListAnchor>
          <NavListAnchor href='#about'>About</NavListAnchor>
          <NavListAnchor href='#services'>Services</NavListAnchor>
          <NavListAnchor href='#work'>Work</NavListAnchor>
          <NavListAnchor href='#blog'>Blog</NavListAnchor>
          <Dropdown as={NavListItem}>
            <Dropdown.Toggle as={CustomToggle}>Dropdown</Dropdown.Toggle>
            <Dropdown.Menu as='ul'>
              <Dropdown.Item as={NavListAnchor}>Hello there!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <NavListAnchor href='#contact'>Contact</NavListAnchor>
        </ul>
        <MobileNavToggle />
      </Navbar>
    </Container>
  </header>);
}
