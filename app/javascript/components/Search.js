import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const searchResults = this.props.searchResults.map( result =>
            <li className='currency-list-item' key={result.id}>
                <a href='#'>
                    <span>
                        {result.name}
                    </span>
                    <span>
                        {result.currency_symbol}
                    </span>
                </a> 
            </li>
        )
        return (
            <div>
                <h2>Cryptocurrency Calculator</h2>
                <form>
                    <div className='form-group'>
                        <label>Search currency here:</label><br/>
                        <input className='field' autoComplete='off' type='text' name='' 
                        value={this.props.name} placeholder='Ex : Bitcoin, Litecoin, etc...'
                        onChange={this.props.handleChange}
                        />
                    </div>

                    <div className='currency-list'>
                        {searchResults}
                    </div>
                </form>
            </div>
        )
    }
}
