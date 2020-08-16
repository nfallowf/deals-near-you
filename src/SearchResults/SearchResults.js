import React from 'react'
import OfferSection from './components/OfferSection'
function SearchResults() {
    const sections = []
    sections.push(
        <OfferSection
            title={"Trending"}
            numItems={12}
            key={"trending"}
        />
    )
    sections.push(
        <OfferSection
            title={"Food"}
            numItems={8}
            key={"food"}
        />
    )
    return (

        <div>
            {sections}
        </div>
    );
}

export default SearchResults
