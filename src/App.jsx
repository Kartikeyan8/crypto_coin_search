import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Coin from './Coin'
import axios from 'axios'
  
import { useEffect } from 'react'
function App() {
  const [coin,setcoin]=useState([])
  const [search,setsearch]=useState("")
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res=>{
      setcoin(res.data)
      // console.log(res.data)
    })
  },[])

  const handlechange=(e)=>{
    setsearch(e.target.value)
  }
   console.log(coin)
  const filterlist=coin.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))
  console.log(filterlist)
  return (
    <div>
      <div className="app">
        <div className="search">
          <form action="">
            <input type="text" className='coin-input' placeholder='Give coin name' onChange={handlechange} />
          </form>
        </div>
        {filterlist.map((coin)=>{
          return(
            <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} price={coin.current_price} volume={coin.total_volume} pricechange={coin.price_change_percentage_24h} marketcap={coin.market_cap} />
          )
        })}
      </div>
    </div>
    
  )
}

export default App
