import React, { Component } from 'react';
import './search.css';
import search from '../../icons/search.svg';
import gauge from '../../icons/gauge.svg';
import list from '../../icons/list.svg';
import tree from '../../icons/flow-tree.svg';

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
                    <button type="button" class="btn btn-secondary active"><img src={gauge} alt="search" width="16px" height="16px"/></button>
                    <button type="button" class="btn btn-secondary"><img src={list} alt="search" width="16px" height="16px"/></button>
                    <button type="button" class="btn btn-secondary"><img src={tree} alt="search" width="16px" height="16px"/></button>
                </div>
            </nav>

        );
    }
}
export default Search;