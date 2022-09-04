import React from 'react'
import News from '../components/component/News'
import "./Animation.css"
import "../components/component/component.scss"
import "../components/component/responsive.scss"
import Carousel from './Carousel'
import Content from "../components/component/Content"
import Region from '../components/component/Region'
import Invitation from '../components/component/Invitation'
import Cooperation from '../components/component/Cooperation'
import Social from '../components/component/Social'



const Animation = () => {
  return (
    <>
    <div>

    <div className="context">
        <Carousel/>
    </div>
<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div>
    </div>
    <div className='component'>
    <News type = "news" heading=''/>
    <Content />
    <News type = "books" heading='Namunaviy test topshiriqlari'/>
    <Region/>
    <Invitation/>
    <Cooperation sort="continent" heading=""/>
    <Cooperation sort="foreign" heading="XALQARO HAMKORLIKLAR"/>
    </div>
    <Social/>
    </>
  )
}

export default Animation