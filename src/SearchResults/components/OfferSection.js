import React from 'react'
import OfferGrid from './OfferGrid'

class OfferSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const sectionStyle = {
            backgroundColor: "#f0f5f5",
            borderStyle: "ridge",
            width: "100%",
            margin: "auto",
            textAlign: "left",
            padding: "10px"
        }
        return (
            <div style={sectionStyle}>
                <h3>{this.props.title}</h3>
                <OfferGrid
                    filterCategory={this.props.category}
                    filterPrice={this.props.price}
                    filterDistance={this.props.distance}
                    filterRating={this.props.rating}
                />
            </div>
        )
    }
}

export default OfferSection
