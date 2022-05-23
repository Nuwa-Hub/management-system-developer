import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./projectList.css";
import Progressbar from "../../components/circular-progressbar/Progressbar";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BookIcon from "@mui/icons-material/Book";
import PendingIcon from "@mui/icons-material/Pending";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Button from "@mui/material/Button";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {  getTasks } from "../../redux/apiCalls";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import userdp from "../../images/user.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

const ProjectList = () => {
  const dispatch = useDispatch();
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
        <div className="project">
          <div className="projectpagetop">
            <h3 className="projectpagetitle">Tasks</h3>
            <button className="createprojectbn">create</button>
          </div>
          <Box className="box" sx={{ width: "100%", height: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {tasks.map((task) => (
                <Grid item xs={4} key={task._id}>
                  <Item>
                    <div className="projectShow">
                      <div className="projectShowTop">
                        <div className="projectShowTopTitle">
                          <span className="projectShowprojectname">
                            {task.Taskname}
                          </span>
                          <span className="projectShowprojectTitle">
                            
                          </span>
                        </div>
                        <Link  className="link" to={"/task/"+task._id}>
                        <Button
                          className="viewbutton"
                          variant="outlined"
                        >
                          <RemoveRedEyeIcon className="viewbuttonicon" />
                          <h1 className="viewbuttontext">display</h1>
                        </Button>
                        </Link>
                      </div>
                      <div className="projectShowBottom">
                        <div className="projectShowdetail">
                          <span className="projectShowTitle">
                            Task Detail
                          </span>
                          <div className="projectShowInfo">
                            <Grid3x3Icon className="projectShowIcon" />
                            <span className="userShowInfoTitle">
                              {task.Taskname}
                            </span>
                          </div>
                          <div className="projectShowInfo">
                            <BookIcon className="projectShowIcon" />
                            <span className="userShowInfoTitle">{task.description}</span>
                          </div>
                          <div className="projectShowInfo">
                            {task.status === "processing" ? (
                              <PendingIcon className="projectShowIcon pending" 
                               />
                            ) : (
                              <DoneOutlineIcon className="projectShowIcon done" />
                            )}
                            <span className="userShowInfoTitle">
                              {task.status}
                            </span>
                          </div>
                          <span className="projectShowTitle">Contributors</span>
                          <div className="userShowInfo">
                            <img
                              className="contributorImg"
                              src={userdp}
                            />
                          </div>
                        </div>
                        <div className="projectShowcontributors">
                          <span className="projectShowTitle">
                            Project Analytics
                          </span>
                          <div className="projectShowInfo">
                            <Progressbar progress={task.progress} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
