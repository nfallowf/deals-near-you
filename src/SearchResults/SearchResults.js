/*
 * The main Search Results componnent
 * Returns a div containing a grid of boxes displaying offers related to a custom search or filters
 * Props: None
 *
 */
import React from 'react'
import OfferSection from './components/OfferSection'
import SectionsData from './TestData/SectionsData'
import Filters from './components/Filters'
import './SearchResults.css'

class SearchResults extends React.Component {
    constructor() {
        super()
        //State maintains a list of active filters and sections currently displayed
        this.state = {
            filters: {
                category: "",
                price: "",
                distance: "",
                rating: "",
                title: ""
            },
            filtersActive: false,
            sections: null
        }
        this.onFilterChange = this.onFilterChange.bind(this)
    }

    componentDidMount() {
        //This will be some kind of api call to retrieve what sections should be displayed
        const sectionState = SectionsData.map(section => <OfferSection
                                                        title={section.sectionTitle}
                                                        numItems={section.numItems}
                                                        key={section.id}
                                                    />)
        this.setState({sections: sectionState})
    }

    //Filter change handles changes of all filter types
    onFilterChange(event) {
        const {value, label, type} = event        // value contains the select box value, label is the text to display

        // Update whichever filter was selected in state
        this.setState(prevState => {
            return {
                filters: {
                    ...prevState.filters,
                    [type]:value,
                }
            }
        })
        if (type === "category") {
            this.setState(prevState => {
                return {
                    filters: {
                        ...prevState.filters,
                        title:label,
                    }
                }
            }, this.updateSections)
        }
        // Display new sections based on the active filters
        // TODO: Title should always be the active category filter rather than the filter that was just changed
        // TODO: OfferSecion.js should be modified to handle props for the other filters
        // Numitems is arbitrary for now for dev purposes
        // TODO filterActive should be switched to false when filters are all cleared

    }

    updateSections() {
        this.setState({filtersActive: true})
        let filterSection = <OfferSection
                                title={this.state.filters.title}
                                category={this.state.filters.category}
                                price={this.state.filters.price}
                                distance={this.state.filters.distance}
                                rating={this.state.filters.rating}
                            />
        this.setState({sections: filterSection}) // Update list of sections currently for display
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
