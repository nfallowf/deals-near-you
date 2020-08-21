import React from 'react'
import OfferBox from './OfferBox'
import './OfferGrid.css'

class OfferGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const offerBoxes = []
        for (let i = 1; i <= this.props.numItems ; i ++) {
            offerBoxes.push(
                <OfferBox
                    key = {i}
                    description={"Item #" + i}
                    image={"./default_image.jpeg"}
                />
            )
        }
        return (
            <div id="OfferGrid" className="grid-container">
                {offerBoxes}
            </div>
        )
    }
}

export default OfferGrid
