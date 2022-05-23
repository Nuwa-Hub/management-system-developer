import {
  changePasswordFailure,
  changePasswordStart,
  changePasswordSuccess,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProjectFailure,
  getProjectStart,
  getProjectSuccess,
} from "./projectRedux";
import {
  getDeveloperFailure,
  getDeveloperStart,
  getDeveloperSuccess,
  getManagerFailure,
  getManagerStart,
  getManagerSuccess,
} from "./developerRedux";
import { getTaskFailure, getTaskStart, getTaskSuccess } from "./taskRedux";
import {
  getChoreFailure,
  getChoreStart,
  getChoreSuccess,
  updateChoreFailure,
  updateChoreStart,
  updateChoreSuccess,
} from "./choreRedux";
import {
  addNotificationFailure,
  addNotificationStart,
  addNotificationSuccess,
  deleteNotificationFailure,
  deleteNotificationStart,
  deleteNotificationSuccess,
  getNotificationFailure,
  getNotificationStart,
  getNotificationSuccess,
} from "./notificationRedux";

//auth
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    sessionStorage.setItem("accessToken",res.data.accessToken)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

//update developer
export const updateCurrentUser = async (dispatch, user, id) => {
  dispatch(updateUserStart());
  try {
    const res = await userRequest.put(`/users/${id}`, user);
    console.log(res.data);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

//change password
export const changePassword = async (dispatch, data) => {
  dispatch(changePasswordStart());
  try {
    const res = await userRequest.post("/auth/changepassword", data);
    dispatch(changePasswordSuccess(res.data));
  } catch (err) {
    dispatch(changePasswordFailure());
  }
};

export const logOut = async (dispatch) => {
  dispatch(logout());
};

//projects
//get project
export const getProjects = async (dispatch) => {
  dispatch(getProjectStart());
  try {
    const res = await userRequest.get("/projects");
    dispatch(getProjectSuccess(res.data));
  } catch (err) {
    dispatch(getProjectFailure());
  }
};

// Developers

//GET ALL DEVELOPERS
export const getdevelopers = async (dispatch) => {
  dispatch(getDeveloperStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getDeveloperSuccess(res.data));
  } catch (err) {
    dispatch(getDeveloperFailure());
  }
};

//Manangers

//GET ALL Manangers
export const getmanagers = async (dispatch) => {
  dispatch(getManagerStart());
  try {
    const res = await userRequest.get("/users/manager");
    console.log(res.data);
    dispatch(getManagerSuccess(res.data));
  } catch (err) {
    dispatch(getManagerFailure());
  }
};
//TASKS

//GET TASK BY developer ID
export const getTasks = async (dispatch, id) => {
  dispatch(getTaskStart());
  try {
    const res = await userRequest.get(`/tasks/find/${id}`);
    dispatch(getTaskSuccess(res.data));
  } catch (err) {
    dispatch(getTaskFailure());
  }
};

//Chore

//get chores by task id
export const getChores = async (dispatch, id) => {
  dispatch(getChoreStart());
  try {
    const res = await userRequest.get(`/chores/${id}`);
    dispatch(getChoreSuccess(res.data));
  } catch (err) {
    dispatch(getChoreFailure());
  }
};

export const updateChore = async (id, Chore, dispatch) => {
  dispatch(updateChoreStart());
  try {
    // update
    const res = await userRequest.put(`/chores/${id}`, Chore);

    dispatch(updateChoreSuccess(res.data));
  } catch (err) {
    dispatch(updateChoreFailure());
  }
};

//NOTIFICATION

//get notification by user id
export const getNotifications = async (dispatch, id) => {
  dispatch(getNotificationStart());
  try {
    const res = await userRequest.get(`/notifications/${id}`);
    dispatch(getNotificationSuccess(res.data));
  } catch (err) {
    dispatch(getNotificationFailure());
  }
};

//add notification
export const addNotification = async (Notification, dispatch) => {
  dispatch(addNotificationStart());
  try {
    const res = await userRequest.post(`/notifications`, Notification);
    dispatch(addNotificationSuccess(res.data));
  } catch (err) {
    dispatch(addNotificationFailure());
  }
};

//delete notification by  id
export const deleteNotification = async (data, dispatch) => {
  console.log(data.taskId);
  dispatch(deleteNotificationStart());
  try {
    await userRequest.delete(`/notifications/${data.taskId}/${data.userId}`);
    dispatch(deleteNotificationSuccess(data.taskId));
  } catch (err) {
    dispatch(deleteNotificationFailure());
  }
};
