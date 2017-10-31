import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        var viewAll;
        if(this.props.viewAll === true) {
            viewAll = <a href="#" class="viewall align-middle">View All</a>;
        }
        return(
            <div class="header">
                <h1 class="display-6">{this.props.title}</h1>
                {viewAll}
            </div>
        );
    }
}
export default Header;