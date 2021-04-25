  
import React, { Component } from 'react';

import './Conversor.css';

export default class Conversor extends Component {
     constructor(props){
        super(props);

        this.state = {
            moneyA_valor: "",
            moneyB_valor: 0,
        }

        this.converter = this.converter.bind(this);
     }

     converter(){
        let de_para = `${this.props.moneyA}_${this.props.moneyB}`;

        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=20741cb2f37fb4f4958d`;

        fetch(url)
            .then( res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de_para];
                let moneyB_valor = ( parseFloat(this.state.moneyA_valor) * cotacao).toFixed(2);
                this.setState({moneyB_valor})
            });
    }


    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moneyA} para {this.props.moneyB}</h2>
                <input className="input" onChange={(event) => { this.setState({moneyA_valor:event.target.value})}} type="number"></input>
                <input className="button" type="button" value="Converter" onClick={this.converter}></input>
                <h2>valor convertido: <span> {this.state.moneyB_valor} </span></h2>

            </div>
        )
    }
}