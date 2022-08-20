import React from 'react'
import { useDispatch } from 'react-redux'
import "../app.css"
import { questionAction } from './store/slices/QuestionSlices'


const Message = () => {

  const dispatch = useDispatch()

  const openToggle = () => {
    dispatch(questionAction.toggle())
  }

  return (
    <div onClick={openToggle} className='app'>
        <img className='message' src={require("../assets/message1.png")} alt="message" />
    </div>
  )
}

export default Message