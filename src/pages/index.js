// src/pages/index.js

import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import Layout from "../components/layout"
import ParticlesBackground from "../components/particles/particles"
import TypewriterEffect from "../components/typewriter"
import GithubCarousel from "../components/carousel"
import './css/index.css'

const IndexPage = () => {
  return (
    <Layout>
      <ParticlesBackground />
      <div className="profile">
        <StaticImage
          src="../images/profile.jpeg"
          alt="Foto do Thiago"
          placeholder="blurred"
          layout="fixed"
          width={250}
          height={250}
          className="profile-image"
        />
        <h1 className="profile-name">THIAGO BAHIA</h1>
      </div>

      <TypewriterEffect />

      <div className="social-icons">
        <a href="https://www.facebook.com/tbahiasantos" target="_blank" rel="noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/tbahiasantos" target="_blank" rel="noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.linkedin.com/in/tbahiasantos" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/tbahiasantos" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
      </div>

      <div className="welcome-container">
        <div className="welcome-message">
          <div className="welcome-text1">
            <h1>Oi,</h1>
          </div>
          <div className="welcome-text2">
            <h1>Eu sou o Thiago.</h1>
          </div>
          <div className="welcome-text3">
            <p>
              Curso Engenharia de Computação.<br />
              Me interesso especialmente por <b>tecnologia</b>, <b>música</b> e <b>café.</b><br />
              Ouvir & Aprender & Compartilhar.<br /><br />
              Este site é um estudo sobre <b>Gatsby/React</b>.
            </p>
          </div>
        </div>
      </div>

      <div className="github-section">
        <h2>Github</h2>
        <h3>/tbahiasantos</h3>
      </div>

      <GithubCarousel />
    </Layout >
  )
}

export default IndexPage
