import React from 'react'
import "./component.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container footer-item'>
        <p>Copyright © 2019-2021 DTM. www.dtm.uz</p>
        <img src={require("../../assets/licence.png")} alt="licence"  />
      </div>
    </div>
  )
}
export default Footer
