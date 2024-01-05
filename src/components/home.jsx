import React from 'react'
import { useState } from 'react';
import Grid from './grid';
import { useNavigate } from 'react-router-dom'

function Home() {
    const [activePage, setActivePage] = useState('/');
    const navigate = useNavigate();

    return (
        <>
            <div className="container mx-auto h-screen items-center text-6xl text-[#D8035E] justify-center text-center">
                SpaceVue
                <div className='grid grid-col-2 text-2xl text-black gap-4 mt-8 text-center'>
                    <div
                        className={`rounded-lg shadow border-white-100 col-start-1 p-8 bg-sky-400`}
                    >
                        AG-Grid table
                    </div>
                    <div
                        className={`rounded-lg shadow border-white-100 col-start-2 p-8 bg-gray-100 ${activePage === 'chart' ? 'bg-gray-200' : ''
                            }`}
                        onClick={() => {
                            setActivePage('chart');
                            navigate('/chart');
                        }}
                    >
                        Charts
                    </div>
                </div>
                <div className='h-full m-8'> <Grid /></div>
            </div>
        </>
    )
}

export default Home;