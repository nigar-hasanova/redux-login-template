import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Pages/login/Login";
import AuthLayout from "./layout/AuthLayout";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./components/Pages/Home";
import Register from "./components/Pages/register/Register"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
        </Route>
      </Routes>
    </Router>
  )
}
