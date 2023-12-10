import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Link } from 'react-scroll'

const NavBar = () => {
  const [navbarStyle, setNavbarStyle] = useState({})
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
        setNavbarStyle({
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      })

    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav
        style={navbarStyle}
        className={`navbar ${ scroll ? 'scrolled' : ''}`}
      >
        <div className="tophead">
          <h1>
            <Link
              className="name-logo"
              //spy
              smooth
              offset={50}
              duration={500}
              to="home"
            >
              Mohana Banik Propa
            </Link>
          
          </h1>
          <div
            className={`menu-btn ${open ? 'opened-btn' : ''}`}
            onClick={toggleMenu}
          />
        </div>
        <ul className={`menu ${open ? 'open' : ''}`}>
          <li>
            <Link
              spy
              smooth
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              spy
              smooth
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              spy
              smooth
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              spy
              smooth
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="achievements"
            >
              Achievement
            </Link>
          </li>
        
          <li>
            <li>
              <Link
                spy
                smooth
                offset={50}
                duration={500}
                onClick={toggleMenu}
                to="contact"
              >
                Contact
              </Link>
            </li>
          </li>
        </ul>
      </nav>
      <div className={`scroll-to-top ${scroll ? 'scroll-true' : ''}`}>
        <Link spy smooth offset={50} duration={1000} to="home">
          <i className="fa-solid fa-arrow-up" />
        </Link>
      </div>
    </>
  )
}

export default NavBar