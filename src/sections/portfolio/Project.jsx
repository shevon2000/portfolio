import Card from '../../components/Card'


const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt="Portrait of Project" />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>

         {/* Spacer to push buttons down */}
        <div className="card-spacer" /> 
        
        <div className="portfolio__project-cta">
            <a href={project.demo} className="btn sm" target="_blank" rel="noopner noreferrer">Demo</a>
            <a href={project.github} className="btn sm primary" target="_blank" rel="noopner noreferrer">Gitbub</a>
        </div>
    </Card>
  )
}

export default Project