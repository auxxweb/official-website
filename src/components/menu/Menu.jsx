import React, { useState, useEffect, useRef } from 'react'
import './menu.css'
import { NavLink } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'



const menuLinks = [
    { path: '/', label: 'Home' },
    { path: '/', label: 'about' },
    { path: '/', label: 'career' },
    { path: '/', label: 'contact' },
]

const Menu = () => {

    const container = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)



    const tl = useRef()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    useGSAP(() => {
        gsap.set('.menu-link-item-holder', { y: 75 })
        tl.current = gsap.timeline({ paused: true })
            .to('.menu-overlay', {
                duration: 1.25,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: 'power4.inOut',
            })
            .to('.menu-link-item-holder', {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power4.inOut',
                delay: -0.75,
            })
    },
        { scope: container }
    )

    useEffect(() => {

        if(isMenuOpen){
            tl.current.play()
        }else{
            tl.current.reverse()
        }
    },[isMenuOpen])

    return (
        <div className='menu-container ' ref={container}>
            <div className='menu-bar '>
                <div className='menu-logo'>
                    <NavLink to='/' exact>Logo</NavLink>
                </div>
                <div className='menu-open' onClick={toggleMenu}>
                    <p>Menu</p>
                </div>
                <div className='menu-overlay'>
                    <div className='menu-ovrlay-bar'>
                        <div className="menu-logo">
                            <NavLink to='/' exact>Logo</NavLink>
                        </div>
                    </div>
                    <div className='menu-close-icon'>
                        <div className="menu-close" onClick={toggleMenu}>
                            <p>&#x2715;</p>
                        </div>
                    </div>
                    <div className='menu-copy'>
                        <div className="menu-links">
                            {menuLinks.map((link, index) => (
                                <div className='menu-link-item' key={index}>
                                    <div className='menu-link-item-holder' onClick={toggleMenu}>
                                        <NavLink to={link.path} exact className='menu-link'>
                                            {link.label}
                                        </NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="menu-info">
                            <div className='menu-info-cool'>
                                <a href="">X&#8599;</a>
                                <a href="">Instagram &#8599;</a>
                                <a href="">Facebook &#8599;</a>
                                <a href="">Whatsapp &#8599;</a>
                                <a href="">Linkedin &#8599;</a>

                            </div>
                            <div className='menu-info-cool'>
                                <p>Auxxweb@gmail.com</p>
                                <p>+91 7510115894</p>
                            </div>
                        </div>

                    </div>
                    <div className='menu-preview'>
                        <p>View Showreel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
