import React from 'react'
import OfferSection from './components/OfferSection'
import SectionsData from './SectionsData'
import Filters from './components/Filters'
import './SearchResults.css'

class SearchResults extends React.Component {
    constructor() {
        super()
        this.state = {
            filters: "", /*should be able to take multiple filterss in the future, for now just one string*/
            filtersActive: false
        }
        this.onFilterChange = this.onFilterChange.bind(this)
    }

    componentDidMount() {
        const sectionState = SectionsData.map(section => <OfferSection
                                                        title={section.sectionTitle}
                                                        numItems={section.numItems}
                                                        key={section.id}
                                                    />)
        this.setState({sections: sectionState})
    }

    onFilterChange(filterValue) {
        console.log(filterValue)
        this.setState({filters: filterValue})
        this.setState({filtersActive: true})
        let filterSection = <OfferSection
                                title={filterValue['label']}
                                numItems={12}
                            />
        this.setState({sections: filterSection})
    }

    render() {
        return (
            <div>
                <section id="filters">
                    <Filters onFilterChange={this.onFilterChange}/>
                </section>
                {this.state.sections}
            </div>
        );
    }
}

export default SearchResults
