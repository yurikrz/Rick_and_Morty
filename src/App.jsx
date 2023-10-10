import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import {getRandomNumber} from './utils/random.js'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {
  const [location, setLocation] = useState(null)
  const [animation, setanimation] = useState(false)

  useEffect(()=>{
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
      .then(({data})=> setLocation(data))
      .catch((err)=> console.log(err))
  },[])
  
  useEffect(()=>{
    setanimation(true)
    setTimeout(()=> setanimation(false),1000)
  },[location])
  

  //[background:_linear-gradient(180deg,#000_0%,rgba(0,0,0,0.00)_100%),_url("/bg2.webp"),_lightgray_0px_-770.693px_/_100%_166.7%_no-repeat]
  //[background:_linear-gradient(180deg,rgba(0,0,0,0.00)_13.02%,_#000_100%),_url("/bg2.webp"),_lightgray_0%_0%_/_50px_50px_repeat]
  //className='px-4 min-h-screen text-white'
  return (
    <main className='min-h-screen text-white relative max-w-[1020px] mx-auto px-2'>
      <div className='fixed top-0 left-0 w-full h-full bg-[url("/bg-5.png")] bg-[cover] [background-repeat:_no-repeat] bg-[50%] z-[-1] after:fixed after:top-0 after:left-0 after:w-full after:h-full '>
      </div>
      <div className='relative z-20 h-28 sm:h-36 w-full p-5 '>
        <img src="/title_logo.svg" alt="Logo" className={`block max-h-full m-auto ${animation && 'animate-spin'}`} />
      </div> 
      <Location location={location} setLocation={setLocation}/>
      <ResidentList residents={location?.residents ?? []}/>
    </main>
  )
}

export default App
