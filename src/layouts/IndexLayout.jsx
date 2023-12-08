import {Sidebar} from "../components/navs/Sidebar.jsx";

export const IndexLayout = ({children}) => {
    return (
        <div className="flex flex-col md:flex-row w-screen bg-slate-50 min-h-screen overflow-x-clip">
            <Sidebar/>
            <div className="flex flex-col py-8 px-4">
                {children}
            </div>
        </div>
    )
}