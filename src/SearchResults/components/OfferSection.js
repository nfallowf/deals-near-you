import React from 'react'
import OfferGrid from './OfferGrid'
function OfferSection(props) {
    const sectionStyle = {
        backgroundColour: "#f0f5f5",
        borderStyle: "ridge",
        width: "80%",
        margin: "auto",
        textAlign: "left"
    }
    return (
        <div style={sectionStyle}>
            <h3>{props.title}</h3>
            <OfferGrid numItems={props.numItems}/>
        </div>
    )
}

export default OfferSection
