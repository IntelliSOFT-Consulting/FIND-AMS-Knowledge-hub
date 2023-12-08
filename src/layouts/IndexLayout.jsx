import {Sidebar} from "../components/navs/Sidebar.jsx";

export const IndexLayout = ({children}) => {
    return (
        <div>
            <Sidebar/>
            {children}
        </div>
    )
}