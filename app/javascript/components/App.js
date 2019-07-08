import React, { Component } from 'react'
import PortofolioContainer from './PortofolioContainer';
import axios from 'axios'

const csrfToken = document.querySelector('[name="csrf-token"]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken


export default class App extends Component {
    render() {
        return (
            <div>
                <PortofolioContainer/>
            </div>
        )
    }
}
