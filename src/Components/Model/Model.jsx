import React from 'react'
export default function Modal({ isopen, selectedimage }) {
  const closeModel = (e) => {
    if (e.target.classList.contains("modal-container")) {
      isopen(false);
    }
  }
  return (
    <>
     { 
      <div className="modal-container fixed top-0 w-[110%] h-full ms-[-5%] grid " onClick={closeModel}>
        <img src={selectedimage} alt="selectedimg" className='modal-image w-1/2 grid place-self-center rounded-3' />
      </div>
       }
 </>
  )

}