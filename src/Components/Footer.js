import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <footer className='footer'>
            <a className='social' target='_blank' href='https://github.com/ZCrushIce' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'github']} color='white' size='2x'/>
            </a>
            <a className='social' target='_blank' href='https://www.linkedin.com/in/zayed-qureshi-1a2b8b211/' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'linkedin']} color='white' size='2x'/>
            </a>
        </footer>
    )
}
