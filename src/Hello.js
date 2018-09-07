import React, {Component} from 'react'
import './Hello.css'

class Hello extends Component {

    constructor(props) {
        super(props)
        this.state = {terms: ''}
    }


    render() {
        return (
            <div className= "Hello">
                {/* <h1> Hello World !! </h1> */}
                <input placeholder='Search' onChange = {(event => this.setState({terms: event.target.value}))} />
                 State terms : {this.state.terms}
                
             </div>
        )
    }
}

export default Hello;