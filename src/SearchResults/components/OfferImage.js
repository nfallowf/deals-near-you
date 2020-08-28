import React from 'react'
import './OfferImage.css'
import defaultimage from "./default_image.jpeg"
function OfferImage(props) {
    return (
        <div id="ImagePlaceholder">
            <img alt="Missing" src={defaultimage} height="100%" width="100%"/>
        </div>
    )
}

export default OfferImage
