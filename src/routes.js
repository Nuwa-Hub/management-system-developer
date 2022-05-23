import ManagerList from "./pages/manangerList/ManagerList";
import Home from "./pages/home/Home";
import ProjectList from "./pages/taskList/ProjectList";
import Task from "./pages/task/Task";
import Timeline from "./pages/timeLine/Timeline";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";
import ProjectsList from "./pages/projectList/ProjectsList";
import ChangePassword from "./pages/changePassword/ChangePassword";
import EditProfile from "./pages/editProfile/EditProfile"

export const routes = [
  {
    name: "home",
    element: <Home />,
    path: "/",
  },
  {
    name: "projects",
    element: <ProjectList />,
    path: "/tasks",
  },
  {
    name: "users",
    element: <UserList />,
    path: "/users",
  },

  {
    name: "user",
    element: <User />,
    path: "/user",
  },
  {
    name: "task",
    element: <Task />,
    path: "/task/:id",
  },
  {
    name: "timeline",
    element: <Timeline />,
    path: "/timeline",
  },
  {
    name: 'managers',
    element: <ManagerList />,
    path: '/managers',
  },
  {
    name: 'projects',
    element: <ProjectsList />,
    path: '/projects',
  },
  {
    name: 'changepassword',
    element: <ChangePassword />,
    path: '/changepassword',
  },
  {
    name: 'editprofile',
    element: <EditProfile />,
    path: '/editprofile',
  },
];
