import React from 'react'
import { Link } from 'react-router-dom'
import { social, socialMedia } from '../data'

const Social = () => {
  return (
    <div className='container'>
        <div className='social-main'>
            <div className='social-top'>
                <ul className='top-items'>
                    {social.map((item,idx) => (
                        <li key={idx} className='top-item'><Link className='link-item'  to={item.href}>{item.name}</Link></li>
                    ))} 
                </ul>
            </div>
            <div className='social-bottom'>
                <div className='social-left'>
                    <p>Ijtimoiy tarmoqlar</p>
                    {socialMedia.map((item,idx) => (
                       <img key={idx} src={item.img} alt="social" width={35} height={25} />
                    ))}
                </div>
                <div className='social-right'>
                <p>Yangiliklarga obuna bo'lish</p>
                <div className='email-btn'>
                       <input placeholder='Email' type="text" />
                       <button>Yuborish</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Social