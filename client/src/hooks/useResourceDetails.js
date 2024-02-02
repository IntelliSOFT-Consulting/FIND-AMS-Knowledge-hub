import {useAxios} from "./useAxios";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const mainUrl = 'tracker/events/LcnFBk26yaP'

export const useResourceDetails = () => {

    const {eventUid} = useParams()


    const {makeRequest: getEventDetails, data, loading} = useAxios()

    const {makeRequest: getPDF, data: pdfData, loading: pdfLoading} = useAxios()

    const downloadPDF = async ({fileBlob, documentName}) => {
        const downloadUrl = window.URL.createObjectURL(fileBlob)
        const link = window.document.createElement("a")
        link.href = downloadUrl
        link.setAttribute('download', `${documentName}.pdf`)
        window.document.body.appendChild(link)
        link.click()
    }


    const handleDownloads = async () => {
        await downloadPDF({fileBlob: pdfData, documentName: eventUid})
    }


    useEffect(() => {
        if (data?.dataValues) {
            getPDF({
                url: `events/files?dataElementUid=R9RfiJPgvJq&eventUid=${eventUid}`,
            })
        }
    }, [data]);

    const findObject = (dataElement) => {
        if (data?.dataValues) {
            return (data.dataValues.find(dataValue => dataValue.dataElement === dataElement))?.value
        } else return null
    }

    useEffect(() => {
        getEventDetails({
            url: mainUrl,
            method: "GET"
        })
    }, []);

    return {data, loading, findObject, eventUid, handleDownloads}

}