import React, { Component } from 'react';
import './bargraph.css';
import Header from '../Header';
import data from '../../controlfailures.json';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer} from 'recharts';


class BarGraph extends Component {
    render() {
        return(
            <div class="bargraph">
                <Header title="Control Failures by Device" viewAll={false}/>
                <ResponsiveContainer width="100%" height={373}>
                    <BarChart data={data} maxBarSize={40} layout="vertical"
                    margin={{ top: 0, right: 0, left: 130, bottom: 0 }}>
                    <XAxis type="number" domain={[0,12]} tickCount={13} padding={{left: 0, right: 10}}/>
                    <YAxis dataKey="deviceName" type="category"/>
                    <CartesianGrid horizontal={false}/>
                    <Legend align="center"  iconSize={20} iconType="square"/>
                    <Bar dataKey="low" stackId="a" fill="#99cb50" layout="vertical"/>
                    <Bar dataKey="medium" stackId="a" fill="#2099d4" layout="vertical"/>
                    <Bar dataKey="high" stackId="a" fill="#ffd67f" layout="vertical"/>
                    <Bar dataKey="critical" stackId="a" fill="#f1612b" layout="vertical"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
export default BarGraph;