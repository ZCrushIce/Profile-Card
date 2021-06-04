import React from 'react'
import pic from '../Images/profile img.jpg'

export default function Header() {
    return (
        <div>
            <header className='profile'>
                <div className='img-container'>
                    <img className='profile-img' src={pic} alt='profile'/>
                </div>
            </header>
        </div>
    )
}