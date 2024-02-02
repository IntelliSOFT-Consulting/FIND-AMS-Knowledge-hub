import {useAxios} from "./useAxios";
import {useEffect, useState} from "react";

const mainURl = '/tracker/events?page=1&pageSize=15&fields=dataValues%2CoccurredAt%2Cevent%2Cstatus%2CorgUnit%2Cprogram%2CprogramType%2CupdatedAt%2CcreatedAt%2CassignedUser%2C&program=rr6gVtIvBCH&orgUnit=p3FIxnPMytB&programStage=OV7fV2ObT2G&ouMode=SELECTED&order=occurredAt%3Adesc&filter=EmI6djhZ3mT%3Ain%3Apublic'

const foldersUrl = '/optionSets/jEWWVttiexg?fields=%3Aall%2CattributeValues%5B%3Aall%2Cattribute%5Bid%2Cname%2CdisplayName%5D%5D%2Coptions%5Bid%2Cname%2CdisplayName%2Ccode%2Cstyle%5D'

export const useResources = () => {

    const [tableRecords, setTableRecords] = useState([])
    const [folders, setFolders] = useState([])
    const [searchString, setSearchString] = useState("")


    const {makeRequest: getResources, loading: resourcesLoading, data: events, error} = useAxios()


    const {makeRequest: getFolders, loading: foldersLoading, data: folderData} = useAxios()


    const filterByFolder = (category) => {
        if (category === "all")
            fetchAllPublicResources()
        else
            getResources({
                url: `${mainURl}&filter=Dt0Np7HNrph%3Ain%3A${category}`
            })
    }


    const fetchAllPublicResources = async () => {
        await getResources({
            url: mainURl,
            method: "GET",
        })
    }

    const filterByName = async (searchString) => {
        if (searchString === "")
            fetchAllPublicResources()
        else
            getResources({
                url: `${mainURl}&filter=Y5L81ZWwCrW%3Alike%3A${searchString}`,
                method: "GET",
            })
    }

    useEffect(() => {
        if (searchString === "")
            fetchAllPublicResources()
    }, [searchString]);

    useEffect(() => {
        fetchAllPublicResources()
        getFolders({
            url: foldersUrl,
            method: "GET"
        })
    }, []);

    useEffect(() => {
        if (folderData?.options) {
            setFolders(folderData.options.map(option => {
                const folder = {
                    title: option.displayName,
                    id: option.id,
                    code: option.code,
                    handler: () => filterByFolder(option.code)
                }
                return folder
            }))

            setFolders(prev => [...prev, {
                title: "All",
                id: "",
                code: "all",
                handler: () => filterByFolder("all")
            }])

        }
    }, [folderData]);


    useEffect(() => {
        if (events) {
            const processedRecords = events.instances.map(instance => {
                let object = {
                    id: instance.event,
                    "DATE ADDED": instance.createdAt
                }

                const formatDataValue = (dataElementID) => {
                    switch (dataElementID) {
                        case "iix7UqoYssN":
                            return "ADDED BY"
                        case "Y5L81ZWwCrW":
                            return "DOCUMENT NAME"
                        case "TwGSelLiLaM":
                            return "DESCRIPTION"
                        case "EmI6djhZ3mT":
                            return "ACCESS"
                        case "Dt0Np7HNrph":
                            return "FOLDER"
                        default:
                            return dataElementID
                    }
                }

                instance.dataValues.map(dataValue => {
                    object[formatDataValue(dataValue.dataElement)] = dataValue.value
                })

                return object
            })
            setTableRecords(processedRecords)
        }
    }, [events]);


    return {resourcesLoading, error, tableRecords, getResources, filterByName, folders, setSearchString, searchString}

}