import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { characterStatus } from '../constants/resident'

const ResidentCard = ({residentEndpint}) => {
    const [resident, setResident] = useState(null)
    

    useEffect(()=>{
        axios
            .get(residentEndpint)
            .then(({data})=> setResident(data))
            .catch((err)=> console.log(err))
    },[])

    return (
        <article className='rounded-[30px] bg-[#893446] p-2 mb-[140px] relative residentCard'>
            <div className='absolute w-[calc(100%-16px)]'>
                <header className='relative bg-[#856888]'>
                    <img src={resident?.image} alt="foto" className='w-[200px] h-[200px] rounded-full border-[6px] border-[#893446] absolute left-1/2 -translate-x-1/2 top-[-150px]' />
                    <div className='absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-1 rounded-md flex items-center gap-2'>
                    <div className={`h-3 w-3 rounded-full ${characterStatus[resident?.status]}`}></div>
                        <span>{resident?.status}</span>
                    </div>
                </header>
                <div className='h-[100px] rounded-3xl bg-[#EDE288] text-[#893446] flex justify-center items-end text-xl font-bold leading-normal pb-2'>
                    <h4 >{resident?.name}</h4>
                </div>
            </div>
          
            <div className='h-full w-full rounded-3xl bg-[#856888]'>
                <div className='h-full rounded-[24px_24px_180px_24px] bg-[#C9BEDC] font-[Nunito] mr-4'>
                    <ul className='text-[16px] font-medium leading-normal flex items-center flex-col px-2 pt-[110px] pb-7 relative'>
                        <li className='w-full grid grid-cols-2 gap-1'><span className='text-[#893446]'>SPECIES </span> <span className='text-lg font-semibold'>{resident?.species}</span> </li>
                        <li className='w-full grid grid-cols-2 gap-1'><span className='text-[#893446]'>ORIGIN </span> <span className='text-lg font-semibold'>{resident?.origin.name}</span></li>
                        <li className='w-full grid grid-cols-2 gap-1'><span className='text-[#893446]'>TIMES APPEAR </span> <span className='text-lg font-semibold'>{resident?.episode.length}</span></li>
                        <li className='w-full hidden grid-cols-2 gap-1'><span className='text-[#893446]'>GENDER </span> <span className='text-lg font-semibold'>{resident?.gender}</span></li>
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default ResidentCard
