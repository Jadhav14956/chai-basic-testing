import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm';

import {
            renderIntoDocument,
            findRenderedDOMComponentWithTag,
            Simulate
        } from 'react-addons-test-utils';

import {expect} from 'chai';

describe('testing contact form', () => {
    it('check addition' , () => {
        const component = renderIntoDocument(
			<ContactForm />
        );

        const operand1 = component.refs.operand1;
        const operand2 = component.refs.operand2;
        
        const btnCalculate = component.refs.btnCalculate;

        operand1.value = 1;
        Simulate.change(operand1);
        operand2.value = 2;      
        Simulate.change(operand2);
        
        Simulate.click(btnCalculate);
        const result = component.refs.result;
        console.log(result.value);
        expect(Number(result.value)).to.equal(3);
    })
})