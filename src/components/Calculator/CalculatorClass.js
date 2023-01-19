import React, { Component } from 'react';

import './calculator.css';
import Input from './components/Input';
import Select from './components/Select';
import Button from './components/Button';
import Result from './components/Result';

class CalculatorClass extends Component {
    state = {
        amount: 0,
        tip: 0,
        result: 0
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };


    handleSubmit = e => {
        e.preventDefault();

        if (this.state.amount !== 0 && this.state.tip !== 0) {
            let tipAmount = +this.state.amount * +this.state.tip;
            let resultWithoutTax = +this.state.amount + +tipAmount;
            let taxAmount = +resultWithoutTax * 0.23;
            let result = +resultWithoutTax + +taxAmount;

            this.setState({
                result: Math.round(result * 100) / 100
            });
        }
    };

    render() {
        return (
            <form className="calculator" onSubmit={this.handleSubmit}>
                <h2>Kalkulator rachunku <small>klasowy</small></h2>
                <Input value={this.state.amount} changeHandler={this.handleChange} />
                <Select value={this.state.tip} changeHandler={this.handleChange} />
                <Button />
                <Result value={this.state.result} />
            </form>
        )
    }
}

export default CalculatorClass;
