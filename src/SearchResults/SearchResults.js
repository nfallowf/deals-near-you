import React from 'react'
import OfferSection from './components/OfferSection'
function SearchResults() {
    const sections = []
    sections.push(
        <OfferSection
            title={"Trending"}
            numItems={12}
        />
    )
    sections.push(
        <OfferSection
            title={"Food"}
            numItems={8}
        />
    )
    return (

        <div>
            {sections}
        </div>
    );
}

export default SearchResults
