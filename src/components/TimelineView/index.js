import './index.css'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="chrono-container">
      <h1 className="chrono-heading">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        itemWidth={150}
        scrollable
      >
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimelineCard eachCourse={each} />
          }
          return <ProjectTimelineCard eachProject={each} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
