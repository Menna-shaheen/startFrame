import React, { useState } from 'react'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
import img4 from '../../assets/poert1.png'
import img5 from '../../assets/port2.png'
import img6 from '../../assets/port3.png'
import Portcards from '../Portfoliocards.jsx/Portcards'
import Modal from '../Model/Model'

export default function Portfolio() {
  const imgList = [
    {
      id: 1,
      src: img1,
      alt: img1

    },
    {
      id: 2,
      src: img2,
      alt: img2

    },
    {
      id: 3,
      src: img3,
      alt: img3

    },
    {
      id: 4,
      src: img4,
      alt: img4

    },
    {
      id: 5,
      src: img5,
      alt: img5

    },
    {
      id: 6,
      src: img6,
      alt: img6

    }
  ]
  const [isopenModel, setOpen] = useState(false)
  const [selectImage, setImage] = useState('')
  function mySelectImage (src)  {
    setOpen(true)
    setImage(src)
  }
  return (
    <>

      <h1 className='text-center sm:text-4xl mt-4 text-xl text-slate-700 font-bold my-auto'>
        PORTFOLIO COMPONENT
      </h1>
      <div className='flex p-3 justify-center'>
        <div className='w-24 h-1 mt-1 me-4 text-slate-700 bg-slate-700'></div>
        <i class="fa-solid fa-star text-slate-700 "></i>
        <div className='w-24 h-1 mt-1 ms-4 text-slate-700 bg-slate-700'></div>
      </div>
      <div className="text-center container mx-auto my-5">
        <div className='grid grid-cols-1 gap-x-16 gap-y-6 sm:grid-cols-3 place-content-center '>
          {imgList.map((img) => (
            <Portcards key={img.id} img={img} mySelectImage={mySelectImage} />
          ))}
        </div>
        {isopenModel && <Modal isopen={setOpen} selectedimage={selectImage}/>}
      </div>
    </>
  )
}
