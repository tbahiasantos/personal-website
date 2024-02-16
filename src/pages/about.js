// src/pages/about.js

import React from "react"
import Layout from "../components/layout"
import { FaEnvelope, FaPhone, FaHome, FaGlobe, FaLinkedin, FaGithub, FaBriefcase, FaGraduationCap, FaRocket, FaLanguage, FaTools, FaStar } from "react-icons/fa"
import profilePic from "../images/profile.jpeg"
import "./css/about.css"

const AboutPage = () => {
  return (
    <Layout>
      <div className="profile-card">
        <img src={profilePic} alt="Perfil" className="profile-pic" />
        <div className="profile-heading">
          <h1>THIAGO BAHIA</h1>
          <h3>Estudante, Administrador & Desenvolvedor</h3>
        </div>
        <div className="contact-info">
          <div><FaEnvelope /> contato@thiagobahia.com</div>
          <div><FaPhone /> (37) 9 9164 0920</div>
          <div><FaHome /> Belo Horizonte, MG</div>
          <div><FaGlobe /> www.thiagobahia.com</div>
          <div><FaLinkedin /> /in/tbahiasantos</div>
          <div><FaGithub /> /tbahiasantos</div>
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <FaBriefcase className="section-icon" />
          <h2>Sobre</h2>
        </div>
        <hr />
        <p className="section-text">
          Sou mineiro de Belo Horizonte, Minas Gerais, e minha paixão por café, queijo e uma boa música reflete um pouco do espírito acolhedor da nossa terra.
          Se você também for mineiro, imagino que concordará comigo, certo? 😊. Minha trajetória profissional abrange as áreas de Administração e Tecnologia da Informação.
          Me graduei em Administração pela Universidade Federal de Lavras (UFLA), período em que pude participar do Programa de Educação Tutorial (PET) e, posteriormente,
          trabalhar na empresa Verde Campo, desenvolvendo habilidades em gestão estratégica e marketing.
          <br /><br />
          Atualmente, curso Engenharia de Computação no Centro Federal de Educação Tecnológica de Minas Gerais (CEFET-MG). Nesses últimos anos tive experiências valiosas 
          nas empresas Primetals Technologies e RHI Magnesita, onde me envolvi no desenvolvimento e manutenção de sistemas de controle industrial e também na área de Segurança 
          da Informação. Essas vivências me proporcionaram uma melhor compreensão tanto das linguagens com as quais trabalhamos quanto com as ferramentas necessárias para o 
          desenvolvimento prático do trabalho.
          <br /><br />
          Além disso, vivi temporariamente em Vancouver, Canadá, onde aprimorei meu inglês na Pacific Languages Institute (PLI Vancouver), com certificação. 
          Essa experiência multicultural ampliou minha visão sobre como é importante viver e conviver com pessoas diferentes e com pontos de vistas diversos, e como isso 
          pode agregar substancialmente a qualquer trabalho se feito da forma correta, além (é claro), de ter melhorado minhas habilidades de comunicação em contextos diversos.
          <br /><br />
          Meus objetivos de vida permeiam construir uma família, trabalhar com aquilo que tenho afinidade e, consequentemente, poder contribuir efetivamente para o ambiente 
          em que estiver inserido, compartilhando minha experiência e habilidades, sempre, para alcançar os resultados desejados.
          <br /><br />
          - Saber ouvir é uma virtude.
          <br />
          - Aprender e compartilhar, também.
        </p>
      </div>
      <div className="section">
        <div className="section-header">
          <FaGraduationCap className="section-icon" />
          <h2>Educação</h2>
        </div>
        <hr />
        <div className="education-item">
          <div className="education-info">
            <h3>Graduação em Engenharia de Computação</h3>
            <h4>Centro Federal de Educação Tecnológica de Minas Gerais (CEFET-MG)</h4>
          </div>
          <div className="education-date">
            <p>2025</p>
            <span>Em andamento</span>
          </div>
        </div>
        <div className="education-item">
          <div className="education-info">
            <h3>Graduação em Administração</h3>
            <h4>Universidade Federal de Lavras (UFLA)</h4>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <FaRocket className="section-icon" />
          <h2>Experiência</h2>
        </div>
        <hr />
        <div className="experience-item">
          <div className="experience-info">
            <h3>Estágio em Segurança da Informação</h3>
            <h4>RHI Magnesita</h4>
            <p>
              Avaliação de riscos: identificação dos riscos de segurança relacionados a sistemas. Implementação de medidas de segurança: desenvolvimento
              de políticas, padrões e procedimentos de segurança da informação para garantir a proteção adequada. Monitoramento e detecção de ameaças: acompanhamento constantemente
              dos sistemas e redes em busca de atividades suspeitas ou comportamentos maliciosos. Resposta a incidentes: resposta a incidentes e coordenação de ações necessárias
              em caso de violações de segurança ou incidentes cibernéticos. Conscientização e treinamento em segurança: realização de treinamentos e conscientização para
              os funcionários da organização, visando promover uma cultura de segurança da informação. Gerenciamento de identidade e acesso: garantir que apenas usuários
              autorizados tenham acesso adequado aos recursos e informações da organização. Teste de segurança: Realização de testes de segurança regulares nos sistemas,
              aplicativos e redes da organização para identificar vulnerabilidades e garantir que todas as medidas de segurança estejam funcionando corretamente.
            </p>
            <p className="keywords">
              <span>Lansweeper</span>, <span>CrowdStrike</span>, <span>Azure</span>, <span>DevOps</span>
            </p>
          </div>
          <div className="experience-date">
            <p>2022-2023</p>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-info">
            <h3>Estágio em Desenvolvimento de Software</h3>
            <h4>Primetals Technologies</h4>
            <p>
              Desenvolvimento front-end, envolvendo o uso de linguagens de marcação como HTML, estilização com CSS e programação com JavaScript.
              Desenvolvimento back-end, manutenção de bancos de dados e da lógica de negócios do sistema em C#. Gerenciamento de banco de dados,
              criação de esquemas de escrita e de consultas SQL para recuperar e manipular dados. Integração de APIs e serviços, compor APIs
              (Interfaces de Programação de Aplicativos) e serviços de terceiros em seus aplicativos ou sites. Testes e depuração, realização de testes
              unitários e de integração para garantir que os aplicativos estejam funcionando corretamente.
            </p>
            <p className="keywords">
              <span>C#</span>, <span>SQL</span>, <span>JavaScript</span>, <span>HTML</span>, <span>CSS</span>
            </p>
          </div>
          <div className="experience-date">
            <p>2020-2021</p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <FaLanguage className="section-icon" />
          <h2>Idiomas</h2>
        </div>
        <hr />
        <div className="language-item">
          <h3>Português</h3>
          <p>Nativo</p>
        </div>
        <div className="language-item">
          <h3>Inglês</h3>
          <p>Avançado</p>
        </div>
        <div className="language-item">
          <h3>Espanhol</h3>
          <p>Básico</p>
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <FaTools className="section-icon" />
          <h2>Habilidades</h2>
        </div>
        <hr />
        <div className="skills-item">
          <h3>Soft Skills</h3>
          <p><span>Escuta Ativa</span>, <span>Empatia</span>, <span>Pensamento Crítico</span>, <span>Trabalho em Equipe</span>, <span>Comunicação</span></p>
        </div>
        <div className="skills-item">
          <h3>Linguagens</h3>
          <p><span>C</span>, <span>Java</span>, <span>Python</span>, <span>JavaScript</span>, <span>HTML</span>, <span>CSS</span>, <span>SQL</span></p>
        </div>
        <div className="skills-item">
          <h3>Ferramentas/Bibliotecas</h3>
          <p><span>VS Code</span>, <span>Git</span>, <span>Node</span>, <span>React</span>, <span>Pycharm</span>, <span>Photoshop</span></p>
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <FaStar className="section-icon" />
          <h2>Interesses</h2>
        </div>
        <hr />
        <div className="interests-item">
          <p><span>Tecnologia</span>, <span>Música</span>, <span>Café</span>, <span>Filmes</span>, <span>Séries</span>, <span>Jogos</span></p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
