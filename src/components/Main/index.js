import React, { Component } from 'react';
import './main.css';
import Header from '../Header';
import TextTable from '../TextTable';
import ColorTable from '../ColorTable';

class Main extends Component {
    render() {
        return(
            <div class="main">
                <div class="device-tables">
                    <ColorTable title="Devices Needing Attention"/>
                    <TextTable title="Recently Changed Devices"/>
                    <TextTable title="Devices by Rule Count"/>
                </div>
            </div>
        );
    }
}
export default Main;