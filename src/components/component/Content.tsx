import React, { useState, useEffect } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { firestore as db } from '../../firebase/config';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { contentButton } from '../data';
import {IState as Props} from "../../typescript"

interface IState {
  content : Props["content"]
}


const Content = () => {

  const [content, setContent] = useState<IState["content"]>([])
  const [filter, setFilter] = useState<IState["content"]>([])

  useEffect(() => {
    db.collection("content").onSnapshot((snapshot: any) =>
      setContent(snapshot.docs.map((doc: any) => doc.data()))
    );
  }, [])

  useEffect(() => {
    db.collection("content").onSnapshot((snapshot: any) =>
      setFilter(snapshot.docs.map((doc: any) => doc.data()))
    );
  }, [])

  const filterProduct = (cat: string) => {
    const updateList = content.filter((x) => x.category === cat);
    setFilter(updateList);
  }

  return (
    <>
      <div className='container'>
        <div className='content-button'>
          <div className='btn-items'>
            <div className='btn-right'>
            {
              contentButton.map((item, idx) => (
                <div key={idx} className='btn-item'>
                  <p className={item.cName}>{item.icon}</p>
                  <button
                    className='content-btn'
                    onClick={() => filterProduct(item.category)}
                  >{item.name}
                  </button>
                </div>
              ))
            } 
            </div>
            <div className='btn-left'>
              <button className='btnAll'>Barchasi</button>
            </div>
          </div>

        </div>
        <div className='content'>
          {filter.length < 0 ? <h1>Loading</h1>  
          :
          filter.map((item,idx) => (
            <div key={idx} className='content-item'>
              <img src={item.image} alt="content" style={{ width: "100%", height: "250px" }} />
              <div className='content-information'>
                <p className='content-heading'>{item.heading}</p>
                <p className='content-more'>{item.title}</p>
                </div>
                <div className='content-bottom'>
                  <button className='content-btn'>Batafsil</button>
                  <p className='content-date'><span><CalendarMonthIcon /></span><span>{item.date}</span></p>
                </div>
              
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Content



