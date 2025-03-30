import axios from "axios";

const axiosClient = axios.create({
    baseURL: `http://145.89.192.202`,
});

export default axiosClient;