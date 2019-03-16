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
      <div className="container">
        <div className="row col s12">
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                Logo
              </a>
            </div>
          </nav>
          <div className="col s8 offset-s2">
            <div className="input_field">
              <label htmlFor="username">USERNAME</label>
              <input
                id="username"
                type="text"
                value={this.state.name}
                onChange={(e: any) => {
                  this.setState({ name: e.target.value });
                }}
              />
            </div>

            <div className="input_field">
              <label htmlFor="password">PASSWORD</label>
              <input
                id="password"
                type="text"
                value={this.state.password}
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
              />
            </div>
            <div
              className="push-s2 waves-effect waves-light btn"
              onClick={this.handleSubmit}
            >
              Submit
            </div>
          </div>
        </div>

        <div>{this.renderRespond()}</div>
        <footer className="page-footer col s12">
          <div>Simple demo app</div>
        </footer>
      </div>
    );
  }
}

export default App;
