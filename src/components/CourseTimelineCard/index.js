import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {eachCourse} = props
  return (
    <div className="course-container">
      <div className="course-heading-container">
        <h1 className="course-heading">{eachCourse.courseTitle}</h1>
        <div className="course-heading-right-container">
          <AiFillClockCircle className="clock-circle" />
          <p className="course-duration">{eachCourse.duration}</p>
        </div>
      </div>
      <p className="course-description">{eachCourse.description}</p>
      <div className="tags-list">
        {eachCourse.tagsList.map(each => (
          <p className="tags-list-item" key={each.id}>
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
