import React from 'react'
import OfferBox from './OfferBox'
import './OfferGrid.css'
function OfferGrid(props) {
    const offerBoxes = []
        for (let i = 1; i <= props.numItems ; i ++) {
            offerBoxes.push(
                <OfferBox
                    key = {i}
                    description={"Item #" + i}
                />
            )
        }
        return (
            <div id="OfferGrid" className="grid-container">
                {offerBoxes}
            </div>
        )
}

export default OfferGrid
