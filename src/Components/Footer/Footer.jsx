import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="footer text-center">
                <div className='bg-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center p-24 text-white  '>
                    <div className='text-center  mt-3'>
                        <h1 className='text-2xl sm:text-3xl'>LOCATION</h1>
                        <p >2215 John Daniel Drive</p>
                        <p >Clark, MO 65243</p>
                    </div>
                    <div className='  mt-3'>
                        <h1 className='text-2xl text-center sm:text-3xl'>ABOUT THE WEB</h1>
                        <div className='mt-2'>

                            <i className='fa-brands fa-facebook border-2 rounded-full p-2 mx-1'></i>
                            <i className='fa-brands fa-twitter border-2 rounded-full p-2 mx-1'></i>
                            <i className='fa-brands fa-linkedin border-2 rounded-full p-2 mx-1'></i>
                            <i className='fa-solid fa-globe border-2 rounded-full p-2 mx-1'></i>
                        </div>

                    </div>
                    <div className='text-center mt-3 '>
                        <h1 className='text-2xl sm:text-3xl'>ABOUT FREELANCER</h1>
                        <p >Freelance is a free to use, licensed Bootstrap theme created by Route</p>

                    </div>


                </div>
                <div className='bg-slate-950 '>
                    <p className='text-center  bg-[#1a252f] p-5 text-white'>Copyright © Your Website 2024</p>
                </div>
            </div>

        </>
    )
}
