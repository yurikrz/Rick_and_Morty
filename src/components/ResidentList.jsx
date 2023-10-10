import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'
import { paginationLogic } from '../utils/pagination'

const ResidentList = ({residents}) => {
    const [currentPage, setCurrentPage] =useState(1)
    const {residentsInPage, pages} = paginationLogic(currentPage,residents)

    useEffect(()=>{
        setCurrentPage(1)
    },[residents])

    return (
        <section>
            <section className='grid grid-cols-[repeat(auto-fit,_320px)] justify-center gap-6 py-10'>
                {residentsInPage.map(resident => <ResidentCard key={resident} residentEndpint={resident}/>)}
            </section> 
             {/*Paginacion  */}
             {
                residents.length > 0 && 
                    (<ul className='text-lg flex gap-2 justify-center flex-wrap pb-10 max-w-[1000px] mx-auto'>
                        {
                            pages.map((page)=> (
                                <li key={page} >
                                    <button onClick={()=> setCurrentPage(page)} className={`text-[#893446] font-semibold p-2 ${page === currentPage ? 
                                    'bg-[rgb(21_128_61/1)] text-white' : 'bg-[#EDE288]'} rounded-full border-[#893446] border-[4px]  w-[60px] h-[60px] hover:bg-[#C9C49F]`}>
                                        {page}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>)
             }
        </section>
    )
}

export default ResidentList
