import React, { Component } from 'react';
import './search.css';
import search from '../../search.svg';

class Search extends Component {
    render() {
        return(
            <nav class="search navbar sticky-top">
                <div class="searchbar">
                    <a class="navbar-brand">Enterprise Domain Name</a>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search in Domain" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><img src={search} alt="search" width="16px" height="16px"/></button>
                    </form>
                </div>
                <div class="btn-group justify-content-end" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary">Left</button>
                    <button type="button" class="btn btn-secondary">Middle</button>
                    <button type="button" class="btn btn-secondary">Right</button>
                </div>
            </nav>

        );
    }
}
export default Search;