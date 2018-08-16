import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
    constructor () {
        super();
        this.state = {claim: "", spisok: []};
    }
    f = (event) => {
        this.setState({[event.target.name]:event.target.value});
        window.localStorage.setItem([event.target.name],event.target.value)
    };
    kek = (text) => this.setState(this.spisok);
  render() {
    return (
        <div>
            <header>
                <div className = 'App'>
                    <img src='free_horizontal_on_white_by_logaster (1).png'/>
                </div>
            </header>
            <main>
                <div className = 'App'>
                    <textarea value = {this.claim} name = {"claim"} onChange={this.f} rows = '7'  cols = '60'>
                    </textarea><br/>
                    <button onClick = {() => this.kek(this.claim)}>Записать</button>
                </div>
                {
                    this.state.spisok.map((e) => <div>
                        <ul>{e}</ul>
                    </div>)
                }
            </main>
            <footer>
            </footer>
        </div>
    );
  }
}
export default App;
