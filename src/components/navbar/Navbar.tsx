import React,{useState} from 'react'
import NavbarBottom from './NavbarBottom'
import NavbarMain from './NavbarMain'
import NavbarTop from './NavbarTop'
import "./navbar.scss"

const Navbar = () => {

  const [value, setValue] = useState<any>(null)

  return (
    <>
     <NavbarTop/>
     <NavbarMain/>
     <NavbarBottom value={value}/>
    </>
  )
}

export default Navbar