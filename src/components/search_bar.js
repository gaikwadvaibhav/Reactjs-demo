import React, { Component } from 'react'
import './search_bar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { terms: '' }
    }
    render() {
        return (
            <div className="search row">
                <div className="search_bar col-md-8">
                    <input placeholder='Search'
                        onChange={(event => this.onInputChange(event.target.value))} />
                </div>
                <div className="col-md-4" > </div>
            </div>
        )
    }

    onInputChange(term) {
        console.log(' onInputChange term', term)
        this.setState({ term });
        this.props.onSearchTermChange({ term })
    }
}

export default SearchBar;
