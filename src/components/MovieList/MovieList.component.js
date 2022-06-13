import React from "react";
import { useState } from "react"
import Navigation from "../../common/Navigation/Navigation"
import Search from "../../common/Search/Search";
import Card from "../../common/Card/Card";
import Loader from "../../common/Loader/Loader";
const MovieList = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loaderStatus, setLoaderStatus] = useState(false);
    const getSearchResults = (results) => {
        setSearchResults(results)
    }
    const getLoaderStatus = (status) => {
        setLoaderStatus(status)
    }
    return <>
    <Navigation />
    <Search searchResult={getSearchResults} loaderStatus={getLoaderStatus}/>
    {loaderStatus ? <Loader /> : null}
    {(!loaderStatus && searchResults) ? <Card poster={searchResults} /> : null}
    </>
}
export default MovieList