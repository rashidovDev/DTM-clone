import React from 'react'
import { navItem } from '../data';

const NavbarTop = () => {
  return (
    <div className='nav-top'>
         <div className='container navigation'>
          <div className='nav-left'>
            {navItem.map((item,idx) => (
              item.sort === "navigation" && <span 
              key={idx} 
              style={{paddingLeft:"5px"}}
              className={`${item.type === "home"
            ? "home" : item.type === "email" ? "email" : ''
            }`}>{item.icon}</span> 
            ))}
          </div>
          <div className='nav-right'>
            <div>
               {navItem.map((item,idx)=> (
                item.sort === "social" && <span key={idx}
                 style={{paddingLeft:"5px"}}>{item.icon}</span> 
               ))}
            </div>
            <div>
            {navItem.map((item,idx) => (
                item.sort === "language" &&  
                <span key={idx} style={{paddingLeft:"5px", borderRight:"1px solid #999"}}> 
                <a style={{paddingRight:"5px",cursor:"pointer",fontWeight:"bold"}}>{item.name}</a></span> 
            ))}
            </div>
          </div>
         </div>
    </div>
  )
}

export default NavbarTop;