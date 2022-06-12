import axios from "axios";
const FetchData = async (url) => {
    const response = axios.get(url);
    return response
}
export default FetchData