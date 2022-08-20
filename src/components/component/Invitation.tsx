import React from 'react'
import { invitation } from '../data'


const Invitation = () => {
    return (
        <div className='container invitation'>
            <p className='heading'>MUROJAAT VA TAKLIFLAR</p>
            <div className='main'>
                <div className='main-top'>

                    {invitation.map((item, idx) => (
                        <div key={idx} className='top-item'>
                            <p className='number'>{item.number}</p>
                            <p className='sort'>{item.sort}</p>
                        </div>
                    ))}

                </div>
                <div className='main-bottom'>
                    <p><span className='date1'>15.07.2022</span> vaqt holatiga</p>  
                </div>
            </div>

        </div>
    )
}

export default Invitation