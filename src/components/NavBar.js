import React, { useEffect, useRef } from 'react'
import {
    Navbar,
    NavLink,
    Dropdown,
} from 'react-bootstrap';
import { select } from '../helperFunctions';
import { ChevronDown, MobileNavToggle } from './BootstrapIcons';
import './../assets/css/navbar.css'

const ListAnchor = React.forwardRef(({href, className, children, key,...rest}, ref) =>
  <li><a href={href} className={className} ref={ref} {...rest}>{children}</a></li>);

const NavListItem = React.forwardRef((props,ref) => {
  const {className = '', children, isAnchor, href, onClick, navbarRef, mobileNavToggleRef,...rest} = props;

  const compiledClassName = ['scrollto'].concat(className.split(' ')).join(' ');

  const handleClick = (e, navRef, navToggleRef) => {
    e.preventDefault()

    if(navRef.current.classList.contains('navbar-mobile')) {
      navRef.current.classList.remove('navbar-mobile');
      navToggleRef.current.classList.toggle('bi-list');
      navToggleRef.current.classList.toggle('bi-x');
    }
  }

  return (
    <NavLink
      as={isAnchor ? ListAnchor : 'li'}
      className={compiledClassName}
      href={href}
      ref={ref}
      onClick={e => handleClick(e, navbarRef, mobileNavToggleRef)}
      {...rest}
    >
      {children}
    </NavLink>
  );
});

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
// TODO: Figure out how to get hovering to work so you don't have to click!
const CustomToggle = React.forwardRef(({ children, onClick, href }, ref) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
  }

  return (<a
    className='nav-link scrollto'
    href={href}
    ref={ref}
    onClick={handleClick}
  >
    {children}<ChevronDown />
  </a>
)});

export const NavBar = () => {
  const navbarRef = useRef(null);
  const mobileNavToggleRef = useRef(null);
  const navLinkRefs = useRef([]);

  useEffect(() => {
    // an array of refs doesn't clean itself out when a ref is no longer viable
    navLinkRefs.current = navLinkRefs.current
      .filter(x => x)
      .filter(x => x.scrollHeight !== 0 && x.scrollWidth !== 0)
  }, [navLinkRefs])

  useEffect(() => {
    /**
      * Navbar links active state on scroll
      */

    // TODO: This can probably be handled with state
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navLinkRefs.current.forEach(navbarlink => {
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

  const onNavToggleClick = (navbarRef) => {
    navbarRef.current.classList.toggle('navbar-mobile');
  }

  // TODO: Clicking on my dropdown list, in mobile view, just closes the menu
  const onDropdownItemClick = (e, navbarRef) => {
    console.log(e);

    if(navbarRef.current.classList.contains('navbar-mobile'))
    {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }

  const NavItem = (props) =>
    <NavListItem
      navbarRef={navbarRef}
      mobileNavToggleRef={mobileNavToggleRef}
      ref={(el) => navLinkRefs.current.push(el)}
      {...props}
    >
      {props.children}
    </NavListItem>;

  const NavAnchor = (props) =>
    <NavItem
      isAnchor={true}
      {...props}
    >
      {props.children}
    </NavItem>;

  return (
    <Navbar ref={navbarRef} id="navbar" expand={false} variant={false}>
      <ul>
        <NavAnchor href='#hero'>Home</NavAnchor>
        <NavAnchor href='#about'>About</NavAnchor>
        <NavAnchor href='#services'>Services</NavAnchor>
        <NavAnchor href='#work'>Work</NavAnchor>
        <NavAnchor href='#blog'>Blog</NavAnchor>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={CustomToggle}>Dropdown</Dropdown.Toggle>
          <Dropdown.Menu as='ul'>
            <Dropdown.Item onClick={e => onDropdownItemClick(e, navbarRef)} href='#hello' ref={(el) => navLinkRefs.current.push(el)}>Hello there!</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <NavAnchor href='#contact'>Contact</NavAnchor>
      </ul>
      <MobileNavToggle onClick={() => onNavToggleClick(navbarRef)} ref={mobileNavToggleRef} />
    </Navbar>
  );
}
