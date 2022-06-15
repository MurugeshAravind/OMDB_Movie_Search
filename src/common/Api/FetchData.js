import axios from "axios";
const FetchData = async (config) => {
    let response = axios({
        method: config.method ? config.method : {},
        url: config.url ? config.url : {}
    }).then(res => response = res).catch(err => response = err);
    return response
}
export default FetchData