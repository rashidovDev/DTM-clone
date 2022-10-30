import { useEffect, useState } from 'react';
import {IState as Props} from "../../typescript"
import { firestore as db } from '../../firebase/config';
import { useParams } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface IState {
    content : Props["content"]
}

const ContentOne = () => {

    let {id} = useParams()

    const [content, setContent] = useState<IState["content"]>([])

    useEffect(() => {
        db.collection("content").onSnapshot((snapshot: any) =>
          setContent(snapshot.docs.map((doc: any) => doc.data())) 
        )
        console.log(content)
      }, [])
    
  return (
    <>
      {content.map((item,idx) => (
        id === item.id && (
            <div key={idx} className="contentOne">
                 <div className='left-content'>
                    <h2>{item.heading}</h2>
                    <p>{item.title}</p>
                    <div className='content-bottom'>
                  <p className='cont'><span><CalendarMonthIcon /></span><span>{item.date}</span></p>
                </div>
                 </div>
                  <div className='right-content'>
                    <img src={item.image} alt='imag' style={{borderRadius :"8px"}} className="content-imag"/>
                  </div>
            </div> 
        )
      ))}
    </>
  )
}

export default ContentOne;