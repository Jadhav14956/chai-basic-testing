import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
          renderIntoDocument,
          findRenderedDOMComponentWithTag,
          Simulate
        } from 'react-addons-test-utils';
import { expect } from 'chai';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('app rendering', () => {
    it('should render contact form heading', ()=>{
      const component = renderIntoDocument(
        <App/>
      );
      const header = findRenderedDOMComponentWithTag(component,'h1');

      expect(header).to.be.ok;
      
      
    })
})