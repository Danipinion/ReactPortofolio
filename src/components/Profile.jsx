import React from 'react'
import Description from './profile/Description'
import Picture from './profile/Picture'
import Sosmed from './profile/Sosmed'

function Profile() {
  return (
    <div className='border-2 p-11 border-cyan-500 w-60 ml-8 mt-5 rounded-lg flex items-center flex-col'>
        <Picture/>
        <div>
        <Description/>
        </div>
        <Sosmed/>
    </div>
  )
}

export default Profile