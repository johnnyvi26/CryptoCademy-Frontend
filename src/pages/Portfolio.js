
import {Ul, Li, H3, Div, Img} from "../styles/Portfolio.styled"

const Portfolio = ( {coinData} ) => {

  // when cryptos are purchased name and amount will be updated

  const wallet = {
    usd : {symbol: 'usd', amount: 640.00},
    btc : {symbol:'btc', amount: .05},
    eth : {symbol:'eth', amount: .3}
  }
  
  let coinValues = [];
  
  const portfolioBalance = () => {
    // coinBalance + usdBalance
    const coinValues = coinData.map(coin => {
      let id = coin.symbol
      if (wallet.hasOwnProperty(id)) {
        return wallet[`${id}`].amount * coin.current_price
      } else {
        return 0;
      }
    })
    const sum = coinValues.reduce((a, b) => a + b, 0);
    console.log(coinValues)
    return sum + wallet.usd.amount;
  };


  const coinBalances = () => {
    // return coinAmount x coinPrice
    // return props.coinData.id;
  }

  // calculate prices of owned assets

  const loaded = () => {



  return (
      <div>
        <h1>Portfolio Balance</h1>
        <p>{portfolioBalance()}</p>
        <Div>
          <Ul>
            <Li> 
              <H3>USD</H3>
            </Li>
            <Li>
              <H3>{`$${wallet.usd.amount}`}</H3>
            </Li>
          </Ul>
        </Div>
        <div>
          {coinData.map(coin => {
            if (wallet.hasOwnProperty(coin.symbol)) {
              let id = coin.symbol
              return (
                <div>
                  <Ul>
                    <Li>
                      <Img src={coin.image} alt=""/>
                    </Li>
                    <Li>
                      <H3>{coin.symbol.toUpperCase()}</H3>
                    </Li>
                    <Li>
                    </Li>
                    <Li>
                      <H3>{`$${wallet[`${id}`].amount * coin.current_price}`}</H3>
                    </Li>
                  </Ul>
                </div>
              )
            }
          })}
          <p>{coinBalances}</p>
        </div>
      </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }
  
  return coinData ? loaded() : loading();
}

export default Portfolio;
