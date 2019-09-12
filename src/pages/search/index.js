import React,{ Component } from 'react';
import SearchBar from '../../components/searchBar';
import './index.scss';

class Search extends Component {
    render(){
        return(
            <div className="searchPage">
                <SearchBar />
                <ul className="searchList">
                    <li className="searchItem">123</li>
                    <li className="searchItem">456</li>
                    <li className="searchItem">789</li>
                    <li className="searchItem">123</li>
                    <li className="searchItem">456</li>
                    <li className="searchItem">789</li>
                    <li className="searchItem">123</li>
                    <li className="searchItem">456</li>
                    <li className="searchItem">789</li>
                    <li className="searchItem">123</li>
                    <li className="searchItem">456</li>
                    <li className="searchItem">789</li>
                    <li className="searchItem">123</li>
                    <li className="searchItem">456</li>
                    <li className="searchItem">789</li>
                </ul>
            </div>
        )
    }
}

export default Search;