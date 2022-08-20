import React, { useState } from 'react'
import { navDrop } from '../data';
import { Link } from 'react-router-dom';
import "./dropdown.css";

interface IState {
  title: string
}

const Dropdown: React.FC<IState> = ({ title }) => {
  const [dropdown, setDropdown] = useState(false)
  console.log("Abchb", title)
  return (
    <>
      <ul className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}>
        {
          navDrop.map(item => (
            item.sort === title && (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={item.cName}
                  onClick={() => setDropdown(false)}>
                  {item.title}
                </Link>
              </li>
            )
          ))
        }
      </ul>
    </>
  )
}

export default Dropdown