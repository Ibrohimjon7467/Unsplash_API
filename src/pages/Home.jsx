import Galery from "../components/Galery"
import Search from "../components/Search"
import { useFetch } from '../hooks/useFetch'
import { useState } from "react"

const API = 'https://api.unsplash.com/search/photos?client_id=JkPLaOgpQ_DiaTxoK-QqbcLXu-dTnARQJTC3EeKSBeI&page=1&query='

function Home() {
  
  const [url, setUrl] = useState(API + 'features')
  const {data, error, isPending} = useFetch(url)

  const setNewUrl = (url) => {
    setUrl(API +  url)
  }

  return (
    <>
      <h1 className="search">Search Any Images:</h1>
      <Search setNewUrl={setNewUrl}/>
      {data && <Galery data={data}/>}
      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
    </>
  )
}

export default Home