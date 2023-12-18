import {IndexLayout} from "../layouts/IndexLayout.jsx";
import {KHCard} from "../components/card/KHCard.jsx";
import {KHButton} from "../components/cta/KHButton.jsx";
import {Viewer, Worker} from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout";
import anatomy from "../assets/anatomy.pdf"
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col md:flex-row md:justify-between w-full md:items-center gap-6">
            <p className="text-lg font-light md:text-left">AMS KNOWLEDGE HUB</p>
            <div className="flex items-center gap-4 md:gap-8 justify-between">
                <KHButton type="success">DOWNLOAD</KHButton>
                <KHButton handler={()=>navigate(-1)} type="outline">BACK</KHButton>
            </div>
        </div>
    )
}

export const ResourceDetails = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <IndexLayout>
            <KHCard CardHeader={Header}>
                <div className="grid md:grid-cols-2 md:gap-24">
                    <div className="flex flex-col w-full">
                        <div className="grid grid-cols-3 border-2 divide-x text-xs col-start-1">
                            <div className="col-span-1 p-4">Document name:</div>
                            <div className="col-span-2 p-4 underline text-lightInfo">MOH ANTIMICROBIAL GUIDELINES V4
                            </div>
                        </div>
                        <div className="grid grid-cols-3 border-2 divide-x text-xs col-start-1">
                            <div className="col-span-1 p-4">Document permissions:</div>
                            <div className="col-span-2 p-4">Public document</div>
                        </div>
                        <div className="grid grid-cols-3 border-2 divide-x text-xs col-start-1">
                            <div className="col-span-1 p-4">Category:</div>
                            <div className="col-span-2 p-4">Training material</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 border-2 divide-x text-xs">
                        <div className="col-span-1 p-4">Description:</div>
                        <div className="col-span-2 p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci beatae blanditiis cupiditate et fugiat id incidunt, laboriosam odit quam repellat
                            repellendus reprehenderit soluta? Alias assumenda atque aut autem, beatae deserunt, ducimus
                            explicabo facere, harum id ipsam itaque laboriosam laborum molestias necessitatibus numquam
                            pariatur quia quod rem repellat sequi sit ut!
                        </div>
                    </div>

                    <div className="w-full col-span-full mt-20">
                        <Worker
                            workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js">
                            <Viewer
                                plugins={[defaultLayoutPluginInstance]}
                                // fileUrl={`data:application/pdf;base64,${base64String}`}
                                fileUrl={anatomy}
                            />
                        </Worker>
                    </div>

                </div>
            </KHCard>
        </IndexLayout>
    )
}