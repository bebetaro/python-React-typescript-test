import React, { Component } from 'react';
import './App.css';
import { Interface } from 'readline';

interface State {
  name: string | number | string[] | undefined;
  password: string | number | string[] | undefined;
}

interface Props {}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="App">
        <span>Name: </span>
        <input
          type="text"
          value={this.state.name}
          onChange={(e: any) => {
            this.setState({ name: e.target.value });
          }}
        />
        <span>Password: </span>
        <input
          type="text"
          value={this.state.password}
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
        />
        <button onClick={() => console.log(this.state)}>Submit</button>
      </div>
    );
  }
}

export default App;
