import Navbar from './navbar/Navbar'
import Animation from '../carousel/Animation'
import {Routes,Route, useParams} from "react-router-dom";
import Footer from './component/Footer';
import Message from './Message';
import BackToTopButton from './BacktoTopButton';
import { RootState } from './store';
import { useSelector } from 'react-redux';
import Questions from './Questions';
import AllContent from './component/AllContent';
import Modal from './Modal/Modal';
import { useState } from 'react';
import ContentOne from './component/ContentOne';

const Menu = () => {

  let { contentId } = useParams();

  const question = useSelector((state : RootState)  => state.question.questionIsVisible)
  return (
    <>
    {question && <Questions/>} 
    <Navbar/>
    <BackToTopButton/>
    <Message/>
    <Routes>
    <Route path="/" element={<Animation/>} />
    <Route path="/allnews" element={<AllContent/>} />
    <Route path='/contentone/:id' element={<ContentOne/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default Menu