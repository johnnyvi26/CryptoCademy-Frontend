import React from "react"
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Portfolio from "./components/Account";
import LoginForm from "./LoginForm";
import CreateAccount from "../pages/CreateAccount";


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
      <Route path="/">
        <LoginForm users={usersState.users}/>
      </Route>
      <Route path="/CreateAccount">
        <CreateAccount createAccount={createAccount}/>
      </Route>
      </Routes>
    </main>
  )
}

export default Main;