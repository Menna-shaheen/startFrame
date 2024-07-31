import React from 'react'

export default function Contact() {
  return (
    <>

      <h1 className='text-center sm:text-4xl mt-4 text-xl text-slate-700 font-bold my-auto'>
        CONTACT SECTION
      </h1>
      <div className='flex p-3 justify-center'>
        <div className='w-24 h-1 mt-1 me-4 text-slate-700 bg-slate-700'></div>
        <i class="fa-solid fa-star text-slate-700 "></i>
        <div className='w-24 h-1 mt-1 ms-4 text-slate-700 bg-slate-700'></div>
      </div>


      <div className="input-container w-1/2 grid mt-10 mx-auto">
        <input placeholder="UserName :" className="input-field" type="text" />
        <label for="input-field" class="input-label">UserName :</label>
        <span class="input-highlight"></span>
      </div>
      <div className="input-container w-1/2 grid mt-10 mx-auto">
        <input placeholder="UserAge : " className="input-field" type="number" />
        <label for="input-field" class="input-label">UserAge : </label>
        <span class="input-highlight"></span>
      </div>
      <div className="input-container w-1/2 grid mt-10 mx-auto">
        <input placeholder="userEmail :" className="input-field" type="email" />
        <label for="input-field" class="input-label">userEmail :</label>
        <span class="input-highlight"></span>
      </div>
      <div className="input-container w-1/2 grid mt-10 mb-4 mx-auto">
        <input placeholder="userPassword :" className="input-field" type="password" />
        <label for="input-field" class="input-label">userPassword :</label>
        <span class="input-highlight"></span>
      </div>

      <div className="input-container w-1/2 grid mx-auto">
      <button className='bg-teal-600 rounded-lg px-5 py-2 text-white grid my-3 w-[20%]'>Submit</button>

      </div>
     
    </>
  )
}
