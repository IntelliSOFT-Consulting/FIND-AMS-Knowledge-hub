import {Sidebar} from "../components/navs/Sidebar.jsx";

export const IndexLayout = ({children}) => {
    return (
        <div className="flex flex-col md:flex-row w-screen bg-slate-50 min-h-screen ">
            <Sidebar/>
            <div className="flex flex-col py-8 px-4 w-full">
                {children}
            </div>
        </div>
    )
}