import {useEffect} from 'react'

function App() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const stonkUrl = `${proxyUrl}https://query1.finance.yahoo.com/v8/finance/chart/GME`
  const getStonk = async () => {
    const response = await fetch(stonkUrl)
    return response.json()
  }
  useEffect(() => {
    getStonk().then((data) => console.log(data))
  }, [])

  return <div>hello world</div>
}

export default App
