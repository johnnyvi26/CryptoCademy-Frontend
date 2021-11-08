
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
// import Dashboard from "./components/Dashboard";
// import Portfolio from "./components/Account";
import Dashboard from "../pages/Dashboard"
import Portfolio from "../pages/Portfolio"
import Login from "../pages/Login"
import NewUser from "../pages/NewUser";


const Main = (props) => {
  //this holds the current user info
  const [user, setUser] = useState(null);

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Login setUser={setUser}/>}/>
        <Route path="createaccount" element={<NewUser setUser={setUser}/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
      </Routes>
    </main>
  )
}

export default Main;