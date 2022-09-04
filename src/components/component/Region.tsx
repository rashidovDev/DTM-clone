import React from 'react'
import { address } from '../data'

const Region = () => {
  return (
    <div className='container region'>
        <div className='region-heading'>
            <p>Hududiy bo'limlar</p>
        </div>
        <div className='region-main'>
            <div className='region-left'>
              <img className='region-left-img' src={require("../../assets/uzmap.jpg")} alt="map" width={450} height={350}/>
            </div>
            {address.map((item,idx) => (
            <div key={idx} className='region-center'>
                 <p className='city'>{item.city}</p>
                 <img src={item.img} alt="content" style={{width: "100%",height:"200px"}}/>
                 <p>{item.address}</p>
                 <p>Tel: {item.phone}</p>
                 <p>Faks: {item.faks}</p>
                 <p>Email: {item.email}</p>
            </div>
            ))}
            <div className='region-right'>
                 <p className='city'>Hududlar kesimidagi statistik ma'lumotlar</p>
                 <img src={require("../../assets/state.png")} alt="content" style={{width: "100%"}}/>
                 <button className='content-btn'>Batafsil</button>
            </div>
        </div>
    </div>
  )
}

export default Region