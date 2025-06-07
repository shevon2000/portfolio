import AboutImage from '../../assets/about.jpeg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './About.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="Portrait of portfolio" />
                </div>
                <br /><br />
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                    <p>
                        I’m a final-year Computer Science undergraduate at Eastern University of Sri Lanka. Building projects that deliver real value and solve problems is my passion. With over 2 years of experience, I have completed 15+ projects using diverse technologies. I’m always eager to learn and improve my skills to create better solutions.
                    </p>
                    <p>
                        I am specialized in full-stack development with a focus on scalable APIs using the .NET Framework.  
                        I build full-stack apps, C# desktop software, and frontends with Angular and React.  
                        <br />
                        Alongside .NET, I'm also experienced in developing scalable applications using Python. I’m continuously expanding my backend expertise by learning systems-level languages like Rust and Go to improve performance and concurrency in my applications.
                        <br />
                        I also bring a solid background in building reliable Java applications, adding versatility to my software development toolkit.
                        <br />
                        Currently, I’m exploring Docker and Kubernetes to containerize and manage my APIs efficiently.  
                        Driven by curiosity and clean code, I’m ready to take on new challenges. Let’s connect!
                    </p>
                </div>

        </div>
    </section>
  )
}

export default About