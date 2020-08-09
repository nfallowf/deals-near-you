import React from 'react'
import OfferDescription from './OfferDescription'
import OfferImage from './OfferImage'
import './OfferBox.css'

function OfferBox(props) {
    return (
        <div className = "OfferBox grid-item">
            <OfferImage image={props.image}/>
            <OfferDescription description={props.description}/>
        </div>
    )
}

export default OfferBox
