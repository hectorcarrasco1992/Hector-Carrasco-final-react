import React, { Component } from 'react'
import axios from 'axios'

import Header from './Header'
import Beer from './Beer'

class App extends Component{
    constructor(){
        super()
        this.state= {
            beer:[]
        }
    }

    getBeer = () => {
        const url = 'https://api.punkapi.com/v2/beers'
        axios.get(url).then((beers)=>{
            console.log(beers.data)
            return this.setState(this.state.beer = beers.data)
        })
    }

    componentDidMount = ()=>{
        this.getBeer()
    }

    render(){
        return(
            <div>
                <Header></Header>

                <hr/>

                <Beer
                beer = {this.state.beer}
                >

                </Beer>
            </div>
        )
    }
}

export default App