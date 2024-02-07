import {useAxios} from "./useAxios";
import {useEffect, useState} from "react";
import Swal from "sweetalert2"


const firstPageUrl = `/api/40/dataElements?filter=name:ne:default&fields=displayName%2CshortName%2Cid%2ClastUpdated%2Ccreated%2CdisplayDescription%2Ccode%2CpublicAccess%2Caccess%2Chref%2Clevel%2CdisplayName%2CdomainType%2CvalueType%2CcategoryCombo%5BdisplayName%5D%2ClastUpdated%2C&order=displayName%3AASC`

export const useDataElements = () => {

    const [dataElements, setDataElements] = useState([])

    const {makeRequest, loading, error, status, axiosInstance} = useAxios()


    const getAllDataElements = async (url) => {
        try {
            const response = await axiosInstance.get(url)
            setDataElements(prev => [...prev, ...response.data.dataElements])

            if (response.data.pager.nextPage)
                getAllDataElements(response.data.pager.nextPage)

        } catch (e) {
            Swal.fire({
                icon: "error",
                text: "Network error",
            })
        }
    }

    const getDataElementByName = (searchString) => {
        if (dataElements.length === 0)
            return null
        else
            return dataElements.find(dataElement => dataElement.displayName.toLowerCase().includes(searchString.toLowerCase()))
    }

    const getDataElementById = (id) => {
        if (dataElements.length === 0)
            return null
        else
            return dataElements.find(dataElement => dataElement.id === id)
    }


    useEffect(() => {
        getAllDataElements(firstPageUrl)

        return () => {
            setDataElements([])
        }
    }, []);

    return {dataElements, getDataElementByName, getDataElementById}
}