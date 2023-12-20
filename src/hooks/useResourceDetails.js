import {useAxios} from "./useAxios";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {saveAs} from "file-saver"
import {useDataElements} from "./useDataElements";


export const useResourceDetails = () => {

    const {eventUid} = useParams()


    const {makeRequest: getEventDetails, data, loading} = useAxios()

    const {getDataElementByName} = useDataElements()

    const {axiosInstance} = useAxios()


    const handleDownloads = async () => {
        try {
            const response = await axiosInstance.get(`events/files?dataElementUid=${getDataElementByName("file").id}&eventUid=${eventUid}`, {responseType: 'blob'})
            saveAs(response.data, `${eventUid}.pdf`)
        } catch (e) {
            alert("Failed to download")
        }
    }



    const findObject = (dataElement) => {
        if (data?.dataValues) {
            return (data.dataValues.find(dataValue => dataValue.dataElement === dataElement))?.value
        } else return null
    }

    useEffect(() => {
        getEventDetails({
            url: `tracker/events/${eventUid}`,
            method: "GET"
        })
    }, []);

    return {data, loading, findObject, eventUid, handleDownloads}

}