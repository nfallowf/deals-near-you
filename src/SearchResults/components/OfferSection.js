import React from 'react'
import OfferGrid from './OfferGrid'

class OfferSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sectionTitle: this.props.title
        }
    }
    render() {
        const sectionStyle = {
            backgroundColor: "#f0f5f5",
            borderStyle: "ridge",
            width: "80%",
            margin: "auto",
            textAlign: "left",
            padding: "10px"
        }
        return (
            <div style={sectionStyle}>
                <h3>{this.state.sectionTitle}</h3>
                {/*}filter section to be used for api call etc {*/}
                <OfferGrid filterSection={this.state.sectionTitle} numItems={this.props.numItems}/>
            </div>
        )
    }
}

export default OfferSection
