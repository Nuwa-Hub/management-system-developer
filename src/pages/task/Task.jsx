import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./task.css";
import Divider from "@mui/material/Divider";
import ChatInterface from "../../components/chatInterface/ChatInterface";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteNotification } from "../../redux/apiCalls";
import userdp from "../../images/user.png";

const Task = () => {
  const location = useLocation();
  const taskId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  //get current user
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const data = {
      taskId: taskId,
      userId: user._id,
    };

    deleteNotification(data, dispatch);
  }, []);

  //get task relevent to tha specific task id
  const task = useSelector((state) =>
    state.task.tasks.find((task) => task._id === taskId)
  );
  //get project relevent to tha specific task.projectId
  const project = useSelector((state) =>
    state.project.projects.find((project) => project._id === task.projectId)
  );

  //get manager relevent to tha specific project.managerId
  const manager = useSelector((state) =>
    state.developer.managers.find((manager) => manager._id === task.managerId)
  );

  //get task developer id
  const user2 = task.developerId;
  //get project manager id
  const user1 = useSelector((state) => state.user.currentUser._id);

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="task">
          <div className="task-wapper">
            <div className="taskInfo">
              <div className="taskShow">
                <div className="taskShowTop">
                  <div className="taskShowTopTitle">
                    <span className="taskShowtaskname">{task.Taskname}</span>
                    <span className="taskShowtaskTitle"></span>
                  </div>
                </div>
                <div className="taskShowBottom">
                  <span className="taskShowTitle">Task Details</span>
                  <div className="taskShowInfo">
                    <span className="taskShowInfoTitle">{task.Taskname}</span>
                  </div>
                  <div className="taskShowInfo">
                    <span className="taskShowInfoTitle">
                      {task.description}
                    </span>
                  </div>
                  <span className="taskShowTitle">Given date</span>
                  <div className="taskShowInfo">
                    <span className="taskShowInfoTitle">
                      {task.updatedAt.slice(0, 10)}
                    </span>
                  </div>
                  <span className="taskShowTitle">Due date</span>
                  <div className="taskShowInfo">
                    <span className="taskShowInfoTitle">
                      {task.duedate.slice(0, 10)}
                    </span>
                  </div>
                </div>
              </div>
              <Divider variant="middle" className="taskdivider" />
              <div className="taskShow">
                <div className="userShowTop">
                  <img
                    src={manager.img || userdp}
                    alt=""
                    className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">{manager.fullname}</span>
                    <span className="userShowUserTitle">task creator</span>
                  </div>
                </div>
                <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                    <span className="userShowInfoTitle">
                      {manager.fullname}
                    </span>
                  </div>
                  <div className="userShowInfo">
                    <span className="userShowInfoTitle">
                      {manager.birthday.slice(0, 10)}
                    </span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">
                    <span className="userShowInfoTitle">{manager.telNo}</span>
                  </div>
                  <div className="userShowInfo">
                    <span className="userShowInfoTitle">{manager.email}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="massages-container">
              <ChatInterface
                taskName={task.Taskname}
                taskManager={manager._id}
                projectName={project.projectname}
                taskId={taskId}
                user1={user1}
                user2={user2}
                manager={manager}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
