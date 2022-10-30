import React, { useState, useEffect } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { firestore as db } from '../../firebase/config';
import { contentButton } from '../data';
import {IState as Props} from "../../typescript"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { modalAction } from '../store/slices/ModalSlice';

interface IState {
  content : Props["content"]
}

const Content : React.FC = () => {

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

  const dispatch = useDispatch()

  const openToggle = () => {
    dispatch(modalAction.toggle())
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
              <Link className='btnAll'to="/allnews">Barchasi</Link>
            </div>
          </div>

        </div>
        <div className='content'>
          {filter.length < 0 ? <h1>Loading</h1>  
          :
          filter.map((item,idx) => (
            <div key={idx} className='content-item'>
              <img src={item.image} className="content-img" alt="content" style={{ width: "100%", height: "250px" }} />
              <div className='content-information'>
                <p className='content-heading'>{item.heading}</p>
                <p className='content-more'>{item.title}</p>
                </div>
                <div className='content-bottom'>
                  <Link 
                  className='content-btn'
                  to={`/contentone/${item.id}`}
                  onClick={openToggle}
                  >Batafsil</Link>
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



