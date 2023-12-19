import {IndexLayout} from "../layouts/IndexLayout.jsx";
import {KHCard} from "../components/card/KHCard.jsx";
import {KHButton} from "../components/cta/KHButton.jsx";
import {Viewer, Worker} from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout";
import {useNavigate} from "react-router-dom";
import {useResourceDetails} from "../hooks/useResourceDetails";
import {Spinner} from "../components/spinner/Spinner";



export const ResourceDetails = () => {

    const {loading, findObject, eventUid, handleDownloads} = useResourceDetails()


    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const Header = () => {

        const navigate = useNavigate()

        return (
            <div className="flex flex-col md:flex-row md:justify-between w-full md:items-center gap-6">
                <p className="text-lg font-light md:text-left">AMS KNOWLEDGE HUB</p>
                <div className="flex items-center gap-4 md:gap-8 justify-between">
                    <KHButton handler={handleDownloads}  type="success">DOWNLOAD</KHButton>
                    <KHButton handler={()=>navigate(-1)} type="outline">BACK</KHButton>
                </div>
            </div>
        )
    }

    return (
        <IndexLayout>
            <KHCard CardHeader={Header}>
                <Spinner loading={loading} />
                <div className="flex flex-col w-full md:gap-24">
                    <div className="grid md:grid-cols-2 md:gap-24">
                        <div className="flex flex-col w-full">
                            <div className="grid grid-cols-3 border-2 divide-x text-xs col-start-1">
                                <div className="col-span-1 p-4">Document name:</div>
                                <div className="col-span-2 p-4 underline text-lightInfo">{findObject("Y5L81ZWwCrW")}
                                </div>
                            </div>
                            <div className="grid grid-cols-3 border-2 divide-x text-xs col-start-1">
                                <div className="col-span-1 p-4">Document permissions:</div>
                                <div className="col-span-2 p-4">{findObject("EmI6djhZ3mT")}</div>
                            </div>
                            <div className="grid grid-cols-3 border-2 divide-x text-xs col-start-1">
                                <div className="col-span-1 p-4">Category:</div>
                                <div className="col-span-2 p-4">{findObject("Dt0Np7HNrph")}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 border-2 divide-x text-xs">
                            <div className="col-span-1 p-4">Description:</div>
                            <div className="col-span-2 p-4">{findObject("TwGSelLiLaM")}
                            </div>
                        </div>
                    </div>


                    <div className="w-full col-span-full mt-20">
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <Viewer
                                id="viewer"
                                withCredentials={true}
                                httpHeaders={{
                                    Authorization: `Basic ` + btoa(process.env.REACT_APP_USERNAME+":"+process.env.REACT_APP_PASSWORD)
                                }}
                                plugins={[defaultLayoutPluginInstance]}
                            fileUrl={`${process.env.REACT_APP_BASE_URL}events/files?dataElementUid=R9RfiJPgvJq&eventUid=${eventUid}`}

                            />
                        </Worker>
                    </div>

                </div>
            </KHCard>
        </IndexLayout>
    )
}