import React, { useState, useEffect } from 'react'
import "../app.css"

const BackToTopButton = () => {

    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {backToTopButton &&
                <img className='backToTop' onClick={scrollUp} src={require("../assets/scroll.png")} alt="scroll" />
            }
        </>

    )
}

export default BackToTopButton