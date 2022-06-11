import { useState } from "react"
import Navigation from "../Navigation/Navigation"
import Search from "../Search/Search";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
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
    {!loaderStatus && searchResults && <Card poster={searchResults} />}
    </>
}
export default MovieList