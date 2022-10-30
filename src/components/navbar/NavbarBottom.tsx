import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navDrop, navNavigation } from '../data'
import Dropdown from './Dropdown'

interface IProps {
  value : any
}


const NavbarBottom : React.FC<IProps>= ({value}) => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 200){
      setScrolled(true)
    }else{
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })
  const [dropdown, setDropdown] = useState(false)

  let x = ["navbar"];
  if(scrolled) {
    x.push("fixed")
  }

  return (
    <div className={x.join(" ")}>
    <nav className='container'>
      <ul className='nav-item1'>
        {navNavigation.map((item) => {
          if(item.title === "Markaz haqida" ){
            return(
              <li key={item.id}
              className={item.cName}>
              <Link 
              to={item.path}
              className="navNavigation"
              >
              {item.title}
              </Link>
               {dropdown 
               && 
               <Dropdown
               title={item.title}
               />}
              </li>
            )
          }
          return (
            <li key={item.id} className={item.cName}>
            <Link className='navNavigation' to="/">{item.title} </Link>
            </li>
          )        
       })}
      </ul>
    </nav>
    </div>
  )
}

export default NavbarBottom

// https://codeat21.com/react-navbar-dropdown-menu-responsive-codeat21-com/