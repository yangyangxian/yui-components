import React from 'react';
import YUI_Input from './Input';

export class Root extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>);
  }
}

export class Input extends React.Component {
  render() {
    return (
      <YUI_Input></YUI_Input>
    );
  }
}