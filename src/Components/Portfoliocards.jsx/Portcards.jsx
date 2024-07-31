import React from 'react'


export default function Portcards({ img, mySelectImage }) {
    return (
        <div >
            <div className="inner overflow-hidden relative rounded-3">
                <img src={img.src} className='w-full rounded-lg' />
                <div className="layer bg-teal-700/80 w-full absolute top-0 h-full grid place-content-center rounded-lg" onClick={() => { mySelectImage(img.src) }}>
                    <i className="text-white fa-solid fa-plus fa-5x "></i>
                </div>
            </div>
        </div>

    )
}
