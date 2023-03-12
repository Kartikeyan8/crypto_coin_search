import React from 'react'
import './coin.css'
const Coin =({key,name,image,symbol, price,volume ,pricechange,marketcap}) => {
  return (
            <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol"></p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Rs.{price} </p>
                    {pricechange<0 ?(
                        <p className="coin-percentred">{pricechange.toFixed(2)}%</p>
                    ):(
                        <p className="coin-percentgreen">{pricechange.toFixed(2)}%</p>
                    )}
                    
                    <p className='coin-marketcap'>Mkt Cap: Rs  
                      {marketcap}</p>    

                </div>
            </div>
            
        </div>
  )
}

export default Coin