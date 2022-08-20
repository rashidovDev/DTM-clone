import React from 'react'
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {callItem, buttonItem } from '../data';

const NavbarMain = () => {
  return (
    <>
      <div className='nav-main'>
        <div className='container nav-main-items'>
          <div className='nav-main-left'>
            <img src={require("../../assets/navbar/logo.png")}
             style={{width:"450px"}} />
          </div>
          <div className='nav-main-right'>
            <div>
            {callItem.map((item,idx) => (
              <div key={idx} className='nav-items'>
              <p className={`${item.type === "green" 
              ? "green" : item.type === "red" ? "red" : ''
                }`}
              >{item.icon}</p>
              <span>{item.name}</span></div>
            ))}
            </div>
            <div>
              {buttonItem.map((item,idx) => (
                    <button key={idx}
                     className={`nav-btn
                      ${item.type === "corruption" 
                      ? 'corruption'
                      :  'account'}
                      `} >
                      <p>{item.icon}</p> <p>{item.name}</p>
                    </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarMain