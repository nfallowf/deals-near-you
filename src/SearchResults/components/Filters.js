import React from 'react'
import Select from 'react-select'
function Filters(props) {

    // Constants defined to provide drop down filter items
    const categoryOptions = [
        {value: "retail", label: "Retail", type:"category"},
        {value: "things-to-do", label: "Things to Do", type:"category"},
        {value: "personal-services", label: "Personal Services", type:"category"},
        {value: "food-drink", label: "Food And Drink", type:"category"},
        {value: "automotive", label: "Automotive", type:"category"},
    ]

    const priceOptions = [
        {value: "<10", label: "< $10", type:"price"},
        {value: "<25", label: "< $25", type:"price"},
        {value: "<100", label: "< $100", type:"price"},
        {value: "<500", label: "< 500", type:"price"},
        {value: "<1000", label: "< $1000", type:"price"},
    ]

    const distanceOptions = [
        {value: "0-10", label: "0 - 10", type:"distance"},
        {value: "10-20", label: "10 - 20", type:"distance"},
        {value: "20-50", label: "20 - 50", type:"distance"},
        {value: "50-100", label: "50 - 100", type:"distance"},
        {value: "100+", label: "100+", type:"distance"},
    ]
    const ratingOptions = [
        {value: "1", label: "1 Star", type:"rating"},
        {value: "2", label: "2 Star", type:"rating"},
        {value: "3", label: "3 Star", type:"rating"},
        {value: "4", label: "4 Star", type:"rating"},
        {value: "5", label: "5 Star", type:"rating"},
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
                <Select onChange={props.onFilterChange} options={categoryOptions} placeholder="Category" name="Category"/>
            </div>
            <div style={filterStyle}>
                <Select onChange={props.onFilterChange} options={priceOptions} placeholder="Price" name="Price"/>
            </div>
            <div style={filterStyle}>
                <Select onChange={props.onFilterChange} options={distanceOptions} placeholder="Distance" name="Distance"/>
            </div>
            <div style={filterStyle}>
                <Select onChange={props.onFilterChange} options={ratingOptions} placeholder="Ratings" name="Ratings"/>
            </div>

        </div>
    )
}
export default Filters
