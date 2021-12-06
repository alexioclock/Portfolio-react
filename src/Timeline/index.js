import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from "./timelineElements";
import './timeline.scss';

function Timeline() {
  return (
    <div className="timeline">
      <h1>Projets</h1>
      <VerticalTimeline>
        {timelineElements.map(element => {
            return(
              <VerticalTimelineElement key={element.id} icon={element.icon}>
                <h3>{element.title}</h3>
                <p>{element.describe}</p>
                <a href={element.link} target="_blank" rel="noreferrer">Voir le projet</a>
              </VerticalTimelineElement>
            )
        })
        }  
            
        
      </VerticalTimeline>
    </div>
  );
}
export default Timeline;
