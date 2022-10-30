import React, { useEffect, useState } from 'react';
import {IState as Props} from "../../typescript";
import { firestore as db } from '../../firebase/config';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';

interface IState {
    content : Props["content"]
}

const AllContent : React.FC = () => {

    const [data, setData] = useState<IState["content"]>([])

    useEffect(() => {
        db.collection("content").onSnapshot((snapshot: any) =>
          setData(snapshot.docs.map((doc: any) => doc.data()))
        );
      }, [])

  return (
    <div className='content allNews'>
         { data.map((item,idx) => (
            <div key={idx} className='content-item'>
              <img src={item.image} className="content-img" alt="content" style={{ width: "100%", height: "220px" }} />
              <div className='content-information'>
                <p className='content-heading'>{item.heading}</p>
                <p className='content-more'>{item.title}</p>
                </div>
                <div className='content-bottom'>
                <Link
                  className='content-btn'
                  to={`/contentone/${item.id}`}
                  >Batafsil</Link>
                  <p className='content-date'><span><CalendarMonthIcon /></span><span>{item.date}</span></p>
                </div>
              
            </div>
          ))}
        </div>
  )
}

export default AllContent