import {useAxios} from "./useAxios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {saveAs} from "file-saver"
import {useDataElements} from "./useDataElements";


export const useResourceDetails = () => {

    const {eventUid} = useParams()

    const [fileDataElementId, setFileDataElementId] = useState("")

    const {makeRequest: getEventDetails, data, loading} = useAxios()

    const {getDataElementByName} = useDataElements()

    const {axiosInstance} = useAxios()


    const handleDownloads = async () => {
        try {
            const response = await axiosInstance.get(`/api/40/events/files?dataElementUid=${getDataElementByName("file").id}&eventUid=${eventUid}`, {responseType: 'blob'})
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
            url: `/api/40/tracker/events/${eventUid}`,
            method: "GET"
        })
    }, []);

    useEffect(() => {
        setFileDataElementId(getDataElementByName("file")?.id)
    }, [eventUid]);

    return {data, loading, findObject, eventUid, handleDownloads, fileDataElementId}

}