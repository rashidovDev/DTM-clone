import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import AttachmentIcon from '@mui/icons-material/Attachment';
import BoltIcon from '@mui/icons-material/Bolt';
import { useSelector, useDispatch } from 'react-redux';
import { questionAction } from './store/slices/QuestionSlices';
import "./Question.scss"
import SendIcon from '@mui/icons-material/Send';
import { message } from './data';

interface IState {
  request : {
    question : string,
  }[]
}

const Questions = () => {

  const current = new Date();
  const monthNumber = current.getMonth()
  current.setMonth(monthNumber);
  const month = current.toLocaleString('en-US', {
    month: 'long',
  });
  const date = `${current.getDate()}-${month} ${current.getFullYear()}, ${current.getHours()}:${current.getMinutes()}`;
  
  const [request, setRequest] = useState<IState ["request"]>([])
  const [post, setPost] = useState({
    question : ""
  })

   
  const addPost = (e : any) => {
    e.preventDefault();
    setRequest([...request,{...post}])
    setPost({question:''})
  }

  const dispatch = useDispatch()

  const closeToggle = () => {
    dispatch(questionAction.toggle())
  }

  return (
    <div className="question">
        <div className='question-top'>
          <div className='top-left'>
            <div className='top-img'>
            <img src={require("../assets/helper.png")} alt="helper" width={45} height={45} />
          </div>
          <div className='top-text'>
            <p>DTM</p>
            <ul><li> Davlat Test markazi</li></ul> 
          </div>
          </div>
           <p onClick={closeToggle} className='exit'><CloseIcon/></p>
        </div>
        <div className='question-body'>
          {message.map((item,idx) => (
          <div key={idx} className='body-response'>
             <div className='main-top'>
              <h5>{item.name}</h5>
              <p>{date}</p>
             </div>
             <div className='main-bottom'>
              <p>
              {item.title}
              </p>
             </div>
          </div>
          ))}
            {request.length > 0 && request.map((item,idx) => (
          <div key={idx} className='body-request'>
             <div className='main-request-top'>
              <h5>Siz</h5>
              <p>{date}</p>
             </div>
             <div className='main-request-bottom'>
              <p>
               {item.question}
              </p>
             </div>
          </div>
          ))}
            
        </div>
        <div className='question-bottom'>
          <div className='bottom-item'>
            <div className='send'>
            <input
             type="text" 
             placeholder='Xabar yozing'
             value={post.question}
             onChange={((e)=>setPost({...post,question:e.target.value}))}
             />
             {!post.question.length ? "" : (
             <button
             onClick={addPost}
             >
              <SendIcon/>
              </button>
             )}
            </div>
            <div className='bottom-icon'>
              <p><AttachmentIcon style={{transform:"rotate(-45deg)"}}/></p>
              <p>Powered by Re:plain</p>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Questions