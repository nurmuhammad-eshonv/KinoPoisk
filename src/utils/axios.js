import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.kinopoisk.dev"
})

instance.interceptors.request.use(
    config => {
        config.headers["X-API-KEY"] = "PKR471Z-QK84AAD-N3HS1VZ-VE7G4BS"
        return config
    },
    error => {
     return Promise.reject()
    }
)
export default instance