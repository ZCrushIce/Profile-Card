import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Like({countHandler}) {
    return (
        <div>
            <button className='likes' onClick={countHandler}>
                <FontAwesomeIcon icon='heart' color='red'/>
            </button>
        </div>
    )
}
