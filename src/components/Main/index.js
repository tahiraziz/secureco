import React, { Component } from 'react';
import './main.css';
import Header from '../Header';
import TextTable from '../TextTable';
import ColorTable from '../ColorTable';
import BarGraph from '../BarGraph';
import LineGraph from '../LineGraph';
import devices from '../../data/devices.json';

class Main extends Component {
    makeCircle = (color) => {
        if(color === 'orange') {
            return <div class="circle orange"></div>            
        } else if(color === 'yellow') {
            return <div class="circle yellow"></div>            
        } else if(color === 'green') {
            return <div class="circle green"></div>            
        } else {
            return <div class="circle"></div>            
        }
    }
    render() {
        return(
            <div class="main">
                <div class="graphs">
                    <BarGraph/>
                    <LineGraph/>
                </div>
                <div class="device-tables">
                    {/* <ColorTable title="Devices Needing Attention" data={this.state.deviceInfo.slice(0,4)}/>
                    <TextTable title="Recently Changed Devices"/>
                    <TextTable title="Devices by Rule Count"/> */}
                    <div class="text-table color-table">
                        <Header title="Devices Needing Attention" viewAll={true}/>
                        <table class="table table-responsive">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Device</th>
                                <th scope="col">Change</th>
                                <th scope="col">Retrieval</th>
                                <th scope="col">Log</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">{devices[0].deviceName}</th>
                                <td>{this.makeCircle(devices[0].change)}</td>
                                <td>{this.makeCircle(devices[0].retreival)}</td>
                                <td>{this.makeCircle(devices[0].log)}</td>
                            </tr>
                            <tr>
                                <th scope="row">{devices[1].deviceName}</th>
                                <td>{this.makeCircle(devices[1].change)}</td>
                                <td>{this.makeCircle(devices[1].retreival)}</td>
                                <td>{this.makeCircle(devices[1].log)}</td>
                            </tr>
                            <tr>
                                <th scope="row">{devices[2].deviceName}</th>
                                <td>{this.makeCircle(devices[2].change)}</td>
                                <td>{this.makeCircle(devices[2].retreival)}</td>
                                <td>{this.makeCircle(devices[2].log)}</td>
                            </tr>
                            <tr>
                                <th scope="row">{devices[3].deviceName}</th>
                                <td>{this.makeCircle(devices[3].change)}</td>
                                <td>{this.makeCircle(devices[3].retreival)}</td>
                                <td>{this.makeCircle(devices[3].log)}</td>
                            </tr>
                            <tr>
                                <th scope="row">{devices[4].deviceName}</th>
                                <td>{this.makeCircle(devices[4].change)}</td>
                                <td>{this.makeCircle(devices[4].retreival)}</td>
                                <td>{this.makeCircle(devices[4].log)}</td>
                            </tr>
                            <tr>
                                <th scope="row">{devices[5].deviceName}</th>
                                <td>{this.makeCircle(devices[5].change)}</td>
                                <td>{this.makeCircle(devices[5].retreival)}</td>
                                <td>{this.makeCircle(devices[5].log)}</td>
                            </tr>
                            <tr>
                            <th scope="row">{devices[6].deviceName}</th>
                                <td>{this.makeCircle(devices[6].change)}</td>
                                <td>{this.makeCircle(devices[6].retreival)}</td>
                                <td>{this.makeCircle(devices[6].log)}</td>
                            </tr>
                            <tr>
                            <th scope="row">{devices[7].deviceName}</th>
                                <td>{this.makeCircle(devices[7].change)}</td>
                                <td>{this.makeCircle(devices[7].retreival)}</td>
                                <td>{this.makeCircle(devices[7].log)}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="text-table">
                        <Header title="Recently Changed Devices" viewAll={true}/>
                        <table class="table table-responsive">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">Device</th>
                            <th scope="col">Date of Change</th>
                            <th scope="col">Type of Change(s)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">{devices[0].deviceName}</th>
                            <td>{devices[0].dateOfChange}</td>
                            <td>{devices[0].typeOfChange}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[1].deviceName}</th>
                            <td>{devices[1].dateOfChange}</td>
                            <td>{devices[1].typeOfChange}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[2].deviceName}</th>
                            <td>{devices[2].dateOfChange}</td>
                            <td>{devices[2].typeOfChange}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[3].deviceName}</th>
                            <td>{devices[3].dateOfChange}</td>
                            <td>{devices[3].typeOfChange}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[4].deviceName}</th>
                            <td>{devices[4].dateOfChange}</td>
                            <td>{devices[4].typeOfChange}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[5].deviceName}</th>
                            <td>{devices[5].dateOfChange}</td>
                            <td>{devices[5].typeOfChange}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[6].deviceName}</th>
                            <td>{devices[6].dateOfChange}</td>
                            <td>{devices[6].typeOfChange}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[7].deviceName}</th>
                            <td>{devices[7].dateOfChange}</td>
                            <td>{devices[7].typeOfChange}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    
                    <div class="text-table">
                        <Header title="Devices by Rule Count" viewAll={true}/>
                        <table class="table table-responsive">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">Device</th>
                            <th scope="col">Rule Count</th>
                            <th scope="col">Removable Rule Count</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">{devices[0].deviceName}</th>
                            <td>{devices[0].ruleCount}</td>
                            <td>{devices[0].removableRuleCount}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[1].deviceName}</th>
                            <td>{devices[1].ruleCount}</td>
                            <td>{devices[1].removableRuleCount}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[2].deviceName}</th>
                            <td>{devices[2].ruleCount}</td>
                            <td>{devices[2].removableRuleCount}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[3].deviceName}</th>
                            <td>{devices[3].ruleCount}</td>
                            <td>{devices[3].removableRuleCount}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[4].deviceName}</th>
                            <td>{devices[4].ruleCount}</td>
                            <td>{devices[4].removableRuleCount}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[5].deviceName}</th>
                            <td>{devices[5].ruleCount}</td>
                            <td>{devices[5].removableRuleCount}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[6].deviceName}</th>
                            <td>{devices[6].ruleCount}</td>
                            <td>{devices[6].removableRuleCount}</td>
                        </tr>
                        <tr>
                            <th scope="row">{devices[7].deviceName}</th>
                            <td>{devices[7].ruleCount}</td>
                            <td>{devices[7].removableRuleCount}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;