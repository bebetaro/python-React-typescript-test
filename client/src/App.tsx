import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Interface } from 'readline';

interface State {
  name: string | number | string[] | undefined;
  password: string | number | string[] | undefined;
  respond: Respond[];
}

interface Respond {
  name: String;
  password: String;
}

interface Props {}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      respond: []
    };
  }

  renderRespond = () => {
    let counter: number = 0;
    return this.state.respond.map((res, counter) => {
      counter++;
      return (
        <p key={counter}>{`USER NAME: ${res.name} / PASSWORD: ${
          res.password
        }`}</p>
      );
    });
  };

  handleSubmit = async () => {
    const res = await axios.post('http://localhost:8080/api/login', this.state);
    this.setState({ respond: [...this.state.respond, res.data] });
    console.log(this.state.respond);
  };

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
        <button onClick={this.handleSubmit}>Submit</button>
        <p />
        <div>{this.renderRespond()}</div>
      </div>
    );
  }
}

export default App;
