import React from 'react'
import OfferSection from './components/OfferSection'
import SectionsData from './SectionsData'
class SearchResults extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        const sectionState = SectionsData.map(section => <OfferSection
                                                        title={section.sectionTitle}
                                                        numItems={section.numItems}
                                                        key={section.id}
                                                    />)
        this.setState({sections: sectionState})
    }

    render() {
        return (

            <div>
                {this.state.sections}
            </div>
        );
    }
}

export default SearchResults
