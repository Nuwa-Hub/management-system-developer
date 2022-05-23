import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { routes } from "./routes";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import ProtectedRoute from "./common/protectedRoute";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/login"
          element={user ? <ProtectedRoute element={<Home />} /> : <Login />}
        />
        {routes.map(({ element, path, name }) => (
          <Route
            key={name}
            path={path}
            element={<ProtectedRoute element={element} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
