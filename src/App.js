import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
    constructor () {
        super();
        this.sas = [];
        window.localStorage.length !== 0 ? this.sas = [...window.localStorage.myKey.split(','),window.localStorage.claim] : null;
        this.state = {claim: "", spisok: this.sas};

    }
    f = (event) => {
        this.setState({[event.target.name]:event.target.value});
        window.localStorage.setItem([event.target.name],event.target.value)
    };
    kek = (text) => {
        this.setState({spisok: [...this.state.spisok,text]});//todo
        window.localStorage.setItem("myKey", this.state.spisok);
    };
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
                    <textarea value = {this.state.claim} name = {"claim"} onChange={this.f} rows = '7'  cols = '60'>
                    </textarea><br/>
                    <button onClick = {() => this.kek(localStorage.claim)}>Записать</button>
                </div>
                <ol>
                {
                    this.state.spisok.map((e) =>
                            <li className = 'zap'>{e}</li>
                        )
                }
                </ol>
            </main>
            <footer>
            </footer>
        </div>
    );
  }
}
export default App;
