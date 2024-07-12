import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/GabrielLoboBlackColor.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
        <a className="box" href="https://www.linkedin.com/in/gabrieldlobo/" target="_blank"><FaLinkedin /></a>
        <a className="box" href="https://github.com/GabrielDLobo" target="_blank"><FaGithub /></a>
        <a className="box" href="https://api.whatsapp.com/message/LE2H4PMJDG5VH1?autoload=1&app_absent=0" target="_blank"><FaWhatsapp /></a>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
