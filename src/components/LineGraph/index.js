import React, { Component } from 'react';
import './linegraph.css';
import Header from '../Header';
import data from '../../data/scoring.json';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer} from 'recharts';


class LineGraph extends Component {
    render() {
        return(
            <div class="linegraph">
                <Header title="Configurator Assessement Scoring (30 Day History)" viewAll={false}/>
                <ResponsiveContainer width="100%" height={373}>
                    <LineChart data={data}>
                        <XAxis dataKey="day" angle={-45}/>
                        <YAxis domain={[0,10]} tickCount={6}/>
                        <CartesianGrid/>
                        <Legend align="center"  iconSize={20} iconType="square"/>
                        <Line type="monotone" dataKey="DB Best Practices" stroke="#99cb50" strokeWidth={2} activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey="SecureCo Best Practices" stroke="#2099d4" strokeWidth={2} />
                        <Line type="monotone" dataKey="Best Practices" stroke="#ffd67f" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        );
    }
}
export default LineGraph;