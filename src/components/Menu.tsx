import React from 'react'
import Carousel from '../carousel/Carousel'
import Navbar from './navbar/Navbar'
import Animation from '../carousel/Animation'
import {Routes,Route} from "react-router-dom";
import Footer from './component/Footer';
import Message from './Message';
import BackToTopButton from './BacktoTopButton';
import { RootState } from './store';
import { useSelector } from 'react-redux';
import Questions from './Questions';

const Menu = () => {

  const question = useSelector((state : RootState)  => state.question.questionIsVisible)
  return (
    <>
    {question && <Questions/>} 
    <Navbar/>
    <BackToTopButton/>
    <Message/>
    <Routes>
    <Route path="/" element={<Animation/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default Menu