import React from 'react'
import { cooperation } from '../data'
import {ICooperation as Cooper} from "../../typescript"

interface ICooperation {
    title : Cooper["title"]
}

const Cooperation : React.FC<ICooperation["title"]> = ({sort,heading}) => {
  return (
    <div className='container '>
        <p className='heading'>{heading}</p>
        <div className='cooperation'>
        <div className='main'>
            {cooperation.map((item,idx) => (
                item.sort === sort && (
            <div className='main-item' key={idx}>
                 <img src={item.img} alt="" width={70} height={70} />
                 <p  style={{marginTop:"10px"}}>{item.title}</p>
            </div>
                )
            ))}
        </div>
        </div>
        </div>
  )
}

export default Cooperation