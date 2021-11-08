
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
// import Dashboard from "./components/Dashboard";
// import Portfolio from "./components/Account";
import LoginForm from "./LoginForm";
import CreateAccount from "../pages/CreateAccount";
import Dashboard from "../pages/Dashboard"
import Portfolio from "../pages/Portfolio"


const Main = (props) => {
  const [usersState, setUsersState] = useState({ users: [] });

  const URL = "https://hidden-journey-86205.herokuapp.com/"

  const getUsers = async () => {
    const response = await fetch(URL)
    const users = await response.json()
    setUsersState(users);
  }

  const createAccount = async (user) => {
    const data = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(user),
    })
    const response = await data.json()
    console.log(response)
    getUsers();
  }

  const createLogin = async (user) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(user),
    })
    getUsers();
  }

  useEffect(() => getUsers(), [])

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<LoginForm/>}/>
        <Route path="createaccount" element={<CreateAccount/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
      </Routes>
    </main>
  )
}

export default Main;