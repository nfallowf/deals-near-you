import React from 'react'
import Select from 'react-select'
function Filters(props) {
    const categoryOptions = [
        {value: "retail", label: "Retail"},
        {value: "things-to-do", label: "Things to Do"},
        {value: "personal-services", label: "Personal Services"},
        {value: "food-drink", label: "Food And Drink"},
        {value: "automotive", label: "Automotive"},
    ]

    const priceOptions = [
        {value: "<10", label: "< $10"},
        {value: "<25", label: "< $25"},
        {value: "<100", label: "< $100"},
        {value: "<500", label: "< 500"},
        {value: "<1000", label: "< $1000"},
    ]

    const distanceOptions = [
        {value: "0-10", label: "0 - 10"},
        {value: "10-20", label: "10 - 20"},
        {value: "20-50", label: "20 - 50"},
        {value: "50-100", label: "50 - 100"},
        {value: "100+", label: "100+"},
    ]
    const ratingOptions = [
        {value: "1", label: "1 Star"},
        {value: "2", label: "2 Star"},
        {value: "3", label: "3 Star"},
        {value: "4", label: "4 Star"},
        {value: "5", label: "5 Star"},
    ]
    const filterStyle = {
        display: "inline-block",
        width: "12%",
        marginRight: "5px",
        marginBottom: "5px"
    }
    return(
        <div className="filters">
            <h3>Filters</h3>
            <div style={filterStyle}>
                <Select onChange={props.onFilterChange} options={categoryOptions} placeholder="Category"/>
            </div>
            <div style={filterStyle}>
                <Select onChange={props.onFilterChange} options={priceOptions} placeholder="Price"/>
            </div>
            <div style={filterStyle}>
                <Select onChange={props.onFilterChange} options={distanceOptions} placeholder="Distance"/>
            </div>
            <div style={filterStyle}>
                <Select onChange={props.onFilterChange} options={ratingOptions} placeholder="Ratings"/>
            </div>

        </div>
    )
}
export default Filters
