import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import workLogo from "../assets/work.svg"
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from "./timelineElements";
import './timeline.scss';
import { itemFromArray } from 'tsparticles';

function Timeline() {
  return (
    <div className="timeline">
      <h1>Projets</h1>
      <VerticalTimeline>
        {timelineElements.map(element => {
            return(
              <VerticalTimelineElement key={element.id} date={element.date} icon={element.icon}>
                <h3>{element.title}</h3>
                <p>{element.describe}</p>
                <img className="picture-project" src={workLogo} alt=""></img>
              </VerticalTimelineElement>
            )
        })
        }  
            
        
      </VerticalTimeline>
    </div>
  );
}
export default Timeline;
