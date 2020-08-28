import React from 'react'
import OfferBox from './OfferBox'
import './OfferGrid.css'
import Deals from '../TestData/DealsData'
class OfferGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const offerBoxes = Deals.map(item => {
            console.log(item.category + " " + this.props.filterCategory)
            if (item.category === this.props.filterCategory) {
                return (
                    <OfferBox
                        key= {item.id}
                        filterPrice={item.price}
                        filterDistance={item.distance}
                        filterRating={item.rating}
                        filterCategory={item.category}
                    />
                )
            }
        })
        console.log(offerBoxes)
        return (
            <div id="OfferGrid" className="grid-container">
                {offerBoxes}
            </div>
        )
    }
}

export default OfferGrid
