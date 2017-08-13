import React, {Component} from 'react';

export default class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            val1 : 0,
            val2 : 0,
            result : 0
        };
    }

    calculate(){
        //alert('Hello Sunil');
        this.setState({
            result : this.state.val1 + this.state.val2,
            val1 : 0,
            val2 : 0
        });
        
    }

    valueChanged(e){
        if(e.target.id === 'operand1')
            this.setState({ val1 :Number(e.target.value)});
        if(e.target.id === 'operand2')
            this.setState({ val2 : Number(e.target.value) });
        if(e.target.id === 'result')
            this.setState({ result : Number(e.target.value) });
        
    }

    render(){
        return(
            <div>
                <label>Value 1 : </label>
                <input type="text" 
                    onChange={this.valueChanged.bind(this)}
                    ref="operand1" value={this.state.val1}
                    id="operand1" /><br/>
                
                <label>Value 2 : </label>
                <input type="text" 
                    onChange={this.valueChanged.bind(this)}
                    ref="operand2" value={this.state.val2}
                    id="operand2" /><br/>
                <label>Result : </label>
                <input type="text" 
                    onChange={this.valueChanged.bind(this)}
                    ref="result" value={this.state.result}
                    id="result" /><br/>
                <button ref="btnCalculate"
                    onClick={this.calculate.bind(this)}>
                    Calculate</button>
            </div>
        );
    }
}

