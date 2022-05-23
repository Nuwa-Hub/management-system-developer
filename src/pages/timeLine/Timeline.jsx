import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import "./timeline.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../redux/apiCalls";


const Timeline = () => {
  const dispatch = useDispatch();
  var count =0;
  const tasks = useSelector((state) => state.task.tasks);

  const userId = useSelector((state) => state.user.currentUser._id);
  

  useEffect(() => {
    getTasks(dispatch,userId);
   
  }, [dispatch]);

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="timeline">
          <VerticalTimeline>
            {tasks.map((task) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={`${task.createdAt.slice(0,7)} - present`}
                iconStyle={
                  count++ % 2
                    ? { background: "rgb(33, 150, 243)", color: "#fff" }
                    : { background: "rgb(233, 30, 99)", color: "#fff" }
                }
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {task.Taskname}
                </h3>
                
                <p>
                {task.description}
                </p>
              </VerticalTimelineElement>
            ))}

            
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Timeline;
