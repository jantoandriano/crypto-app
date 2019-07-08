import React, { Component } from 'react'
import Search from '../components/Search'
import Calculate from '../components/Calculate'
import axios from 'axios'

export default class PortofolioContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            portofolio: [],
            search_results: [],
            active_currency: null,
            amount: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        

        axios.post('http://localhost:3000/search', {
            search: e.target.value
        })
        .then((data)=>{
            this.setState({
                search_results: [...data.data.currencies]
            })
        })
        .catch((data)=>{
            debugger
        })

        console.log(this.state.search_results);
        
    }

    render() {
        return (
            <div>
                <Search searchResults={this.state.search_results} handleChange={this.handleChange}/>
                <Calculate/>
            </div>
        )
    }
}
