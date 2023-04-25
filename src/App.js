import {useEffect, useState} from 'react'

function App() {
  const [price, setPrice] = useState(-1)
  const [priceTime, setPriceTime] = useState(null)
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const stonkUrl = `${proxyUrl}https://query1.finance.yahoo.com/v8/finance/chart/GME`

  const getStonk = async () => {
    const response = await fetch(stonkUrl)
    return response.json()
  }
  useEffect(() => {
    let timeId
    const getLatestPrice = async () => {
      const data = await getStonk()
      console.log(data)
      const gme = data.chart.result[0]
      console.log(gme)
      setPrice(gme.meta.regularMarketPrice.toFixed(2))
      setPriceTime(new Date(gme.meta.regularMarketTime * 1000))
      timeId = setTimeout(getLatestPrice, 5000)
    }

    timeId = setTimeout(getLatestPrice, 5000)
    //getLatestPrice()

    return () => {
      clearTimeout(timeId)
    }
  }, [])

  return (
    <div className='price'>
      {price}
      <br />
      {priceTime?.toLocaleTimeString()}
    </div>
  )
}

export default App
