import React, { useState } from 'react'
import {IconSearch} from '@tabler/icons-react'
import axios from 'axios'
import { locationNames } from '../constants/locationName'

const Location = ({location, setLocation}) => {
    const [locationNameInput, setLocationNameInput] = useState("")
    const [locationNamesMatched, setLocationNamesMatched] = useState([])

    const handleClick = (event) =>{
        event.preventDefault()
        const idLocation = event.target.dataset.id
        axios
            .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
            .then(({data})=> setLocation(data))
            .catch((err)=> console.log(err))
        setLocationNamesMatched([])
        setLocationNameInput(event.target.innerHTML)
        
    }

    const onInputChange = (event) =>{
        const inputValue = event.target.value
        // if (inputValue.length ===0) return
        
        setLocationNameInput(inputValue)
        let newMached = []
        newMached = locationNames.filter(locationName => locationName.name.toUpperCase().includes(inputValue.toUpperCase()))
        setLocationNamesMatched(newMached)
    }

    

    return (
         
        <section>
            <form className='flex justify-center'>
                <div className='inline-block relative'>
                    <input type="text" value={locationNameInput} placeholder='Type a Location name...' className='border-2 border-[#893446] rounded-3xl bg-[#fff] p-2 placeholder:p-2 placeholder:text-center focus:outline-none text-center text-black w-[380px] h-[40px] sm:w-[480px]' onChange={onInputChange} onFocus={onInputChange}/>
                
                    <ul className={`list-none p-[unset] m-[unset] absolute w-full bg-[#856888] text-white overflow-y-scroll ${locationNamesMatched.length > 6 && 'h-[150px]'}`} >
                        {locationNamesMatched.map(locationName => (<li key={locationName.id} className='border-[1px] border-[#e9e9e9] [border-top:_unset] hover:bg-[#C1A4C4]'><button type='submit' className='[border:_unset] cursor-pointer [background:_unset] bloxk w-full text-left ' data-id={locationName.id} onClick={handleClick} >{locationName.name}</button> </li>))}
                    </ul>
                </div>
            </form>
            
            <section className='mt-4 mb-[140px] bg-[#EDE288] text-[#893446] border-[#893446] rounded-2xl border-4 p-4 flex flex-col items-center'>
                <h3 className='text-2xl font-medium leading-normal flex mb-2'>Welcome to {location?.name}</h3>
                <ul className='flex gap-5 text-slate-500 text-lg font-medium leading-normal sm:gap-10'>
                    <li><span className='text-[#893446]'>Type:</span> {location?.type}</li>
                    <li><span className='text-[#893446]'>Dimension:</span> {location?.dimension}</li>
                    <li><span className='text-[#893446]'>Population:</span> {location?.residents.length}</li>
                </ul>
            </section>
        </section>
    )
}

export default Location
