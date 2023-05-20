import axios from "axios"

export const api = axios.create({
    baseURL: "https://repositorio-capitrano-api.vercel.app/"
})