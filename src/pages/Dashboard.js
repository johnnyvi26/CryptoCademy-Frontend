import { Link } from "react-router-dom"

const Dashboard = ({ coinData, user }) => {

  const loaded = () => {

    const coins = coinData.map(coin => {
      return (
        <div>
          <h1>{coin.symbol}</h1>
          <p>{coin.current_price}</p>
        </div>
      )
    })
    
    return (
     <div>
      <div>
        <Link to="/portfolio">
          <p>Portfolio Balance</p>
        </Link>
        
        <h1>Coin Listings</h1>
        
        <p>{coins}</p>

      </div>
    </div> 
    )
  };

  const loading = () => {
    return (
      <h1>Loading...</h1>
    );
  };

  return coinData ? loaded() : loading();
}
export default Dashboard;