import { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        {/* Profile + Name Side-by-Side */}
        <div className="header__top" data-aos="fade-in">
          <div className="header__profile">
            <img src={HeaderImage} alt="Header Portrait" />
          </div>
          <div className="header__intro">
            <h2 className="side_text">
              <span className="wave">👋</span> Hi! I'm Shevon
            </h2>
          </div>
        </div>

        <p data-aos="fade-up">
          As a dedicated full-stack developer, I specialize in building scalable, secure, and responsive web solutions.
          Whether it's a business website or a complex web application, I ensure high performance and clean architecture.
          Share your project requirements today and let's get started.
        </p>

        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">Let's Talk</a>
          <a href="#portfolio" className="btn light">My Work</a>
        </div>

        <div className="header__socials">
          {data.map(item => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
