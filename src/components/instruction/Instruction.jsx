import React, { useEffect, useState } from "react";
import "./instruction.css";
import ListIcon from "@mui/icons-material/List";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useDispatch, useSelector } from "react-redux";
import {  getChores, updateChore } from "../../redux/apiCalls";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Moment from "react-moment";

function TodoInstruction({ chore,dispatch }) {
 
  const checkChore = (e) => {
    e.preventDefault();
    const updatechore = {
      title:chore.title,
      taskId: chore.taskId,
      completed: chore.completed ? false :true,
    };
    updateChore(chore._id,updatechore,dispatch)
    
  };

  return (
    <>
    {chore && (
    <div
      className="todo-task"
      style={{
        textDecoration: chore.completed ? "line-through" : "",
        color: "rgb(255, 0, 0)",
      }}
    >
      <div className="ttexwrap">
        <div className="ticonwrap">
        <div className="todo-deleteiconwrap" onClick={checkChore}>
            <DoneAllIcon className="todo-deleteicon" />
          </div>
          {chore.completed ? (
            <TaskAltIcon style={{ color: "green" }} />
          ) : (
            <ListIcon style={{ color: "rgb(255, 0, 0)" }} />
          )}
        </div>

        <div className="ttextwraper">
          <h3 className="ttext">{chore.title}</h3>
          <small className="ttexttimeago">
            <Moment fromNow>{chore.createdAt}</Moment>
          </small>
        </div>
      </div>
    </div>
    )}
    </>
  );
}

const Instruction = ({ taskId }) => {
 
  //get chore by taskID
  const dispatch = useDispatch();
  const chores = useSelector((state) => state.chore.chores);

  //get chores theat relevent to task
  useEffect(() => {
    getChores(dispatch, taskId);
  }, [dispatch, taskId]);



  return (
    <div className="todo-container">
      <div className="todo-header">Instructions</div>
      <div className="create-todo">
      </div>
      <div className="todo-tasksholder">
        <div className="todo-tasks">
          {chores.map((chore, index) => (
            <TodoInstruction chore={chore} dispatch={dispatch} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instruction;
