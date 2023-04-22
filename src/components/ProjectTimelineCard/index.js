import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {eachProject} = props
  console.log(eachProject.imageUrl)
  return (
    <div className="project-container">
      <img className="project-image" src={eachProject.imageUrl} alt="project" />
      <div className="project-heading-container">
        <h1 className="project-heading">{eachProject.projectTitle}</h1>
        <div className="project-heading-right-container">
          <AiFillCalendar className="project-calender" />
          <p className="course-duration">{eachProject.duration}</p>
        </div>
      </div>
      <p className="project-description">{eachProject.description}</p>
      <a href={eachProject.projectUrl} className="project-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
