// src/components/Footer.js

import React from "react"
import "./css/footer.css"
import { AiFillFacebook, AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail, MdLocationOn } from 'react-icons/md'

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-col">
        <h4>CONTATO</h4>
        <ul className="footer-info">
          <li><MdEmail size={20} /> contato@thiagobahia.com</li>
          <li><MdLocationOn size={20} /> Belo Horizonte, MG</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>REDES SOCIAIS</h4>
        <ul className="footer-social">
          <li><a href="https://www.facebook.com/tbahiasantos" target="_blank" rel="noreferrer"><AiFillFacebook size={20} /> Facebook</a></li>
          <li><a href="https://www.instagram.com/tbahiasantos" target="_blank" rel="noreferrer"><AiOutlineInstagram size={20} /> Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/tbahiasantos" target="_blank" rel="noreferrer"><AiFillLinkedin size={20} /> LinkedIn</a></li>
          <li><a href="https://www.github.com/tbahiasantos" target="_blank" rel="noreferrer"><AiFillGithub size={20} /> GitHub</a></li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Thiago Bahia. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer;
