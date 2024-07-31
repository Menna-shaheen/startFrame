import React from 'react'
import frame from '../../assets/avataaars.svg'
export default function Home() {
    return (
        <>
            <div className="bg-teal-500 grid">
                <img src={frame} alt="" className='w-1/5  place-self-center p-7' />
                <div className='text-center'>
                    <h1 className='text-center sm:text-5xl text-xl text-white font-bold my-auto'>
                        START FRAMEWORK
                    </h1>
                    <div className='flex mt-8 justify-center mb-3'>
                        <div className='w-24 h-1 mt-1 me-4 text-white bg-white'></div>
                        <i class="fa-solid fa-star text-white "></i>
                        <div className='w-24 h-1 mt-1 ms-4 text-white bg-white '></div>
                    </div>
                    <p className='text-white pb-7'>Graphic Artist - Web Designer - Illustrator</p>
                </div>

            </div>
        </>
    )
}
