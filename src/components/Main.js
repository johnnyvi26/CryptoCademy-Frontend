
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';


import Dashboard from "../pages/Dashboard"
import Portfolio from "../pages/Portfolio"
import Login from "../pages/Login"
import NewUser from "../pages/NewUser";
import Trade from "../pages/Trade";


const Main = () => {
  //this holds the current user info
  const [user, setUser] = useState(null);

  const [coinData, setCoinData] = useState(null);

  const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ccardano&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"


  // make call
  const getCoinData = async() => {
    const response = await fetch(URL)
    const data = await response.json()
    setCoinData(data)
  };
  
  useEffect(() => getCoinData(), [])

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Login setUser={setUser}/>}/>
        <Route path="createaccount" element={<NewUser setUser={setUser}/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="portfolio" element={<Portfolio user={user} coinData={coinData}/>}/>
      </Routes>
    </main>
  )
}

export default Main;