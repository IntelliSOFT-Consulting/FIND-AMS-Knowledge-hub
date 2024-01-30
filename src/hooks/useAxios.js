import {useState} from "react";
import axios from "axios";

export const useAxios = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [status, setStatus] = useState(null)


    const axiosInstance = axios.create({
        baseURL: `${window.location.origin}/api/40/`,
        headers: {
            Authorization: `ApiToken ${process.env.REACT_APP_API_TOKEN}`
        },
    })

    const makeRequest = async (config) => {
        try {
            setLoading(true)
            const response = await axiosInstance(config)
            setData(response?.data)
            setStatus(response.status)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }


    return {data, loading, error,status, makeRequest, axiosInstance}

}