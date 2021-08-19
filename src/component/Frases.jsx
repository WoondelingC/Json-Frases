import React, { Component } from 'react';
import data from '../data';
import Boton from './Boton';


class Frases extends Component {
    constructor(props){
        super(props);
        this.state = {
            quotes:[],
            selectQuoteindex : null,
        }
    }

    componentDidMount() {
        fetch({data})
        .then(data => data.json())
        .then(block => this.setState({block}));
    }
    


    handlerClickNextFrase() {
        console.log("hola");
    }

    render() {
        console.log(this.state.block);
        return (
            <div className="" id="quote-box">
                <Boton botonDisplayName = "Siguiente Frase" onClick={this.handlerClickNextFrase} />
            </div>
        )
    }
}

export default Frases