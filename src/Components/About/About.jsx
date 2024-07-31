import React from 'react'

export default function About() {
    return (
        <>
            <div className='bg-[#1ABC9C] p-20 grid'>
                <div className='text-center'>
                    <h1 className='text-center sm:text-5xl text-xl text-white font-bold my-auto'>
                        ABOUT COMPONENT
                    </h1>
                    <div className='flex mt-8 justify-center'>
                        <div className='w-24 h-1 mt-1 me-4 text-white bg-white'></div>
                        <i class="fa-solid fa-star text-white "></i>
                        <div className='w-24 h-1 mt-1 ms-4 text-white bg-white'></div>
                    </div>
                </div>

                <div className="flex sm:flex-row flex-col gap-3 text-white p-12">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </>
    )
}
