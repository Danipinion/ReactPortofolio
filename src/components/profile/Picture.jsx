import React from 'react'

function Picture() {
  return (
    <div className='flex items-center flex-col'>
        <img src={require('../../assets/img/images.png')} alt='profile' className='rounded-lg w-24'/>
        <h3 className='font-bold text-white my-1 text-xl'>Dani</h3>
        <p className=' badge text-white px-3 py-0.5 text-xs mb-7 w-full text-center bg-cyan-600 rounded-md'>Fullstack Engineer</p>
    </div>
  )
}

export default Picture