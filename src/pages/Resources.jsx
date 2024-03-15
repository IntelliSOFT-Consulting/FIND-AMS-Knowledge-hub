import {IndexLayout} from "../layouts/IndexLayout.jsx";
import {Folders} from "../components/navs/Folders.jsx";
import DataTable from 'react-data-table-component';
import {KHInput} from "../components/fields/KHInput.jsx";
import {customStyles} from "../styles/table.js";
import {NavLink} from "react-router-dom";
import {KHButton} from "../components/cta/KHButton.jsx";
import {useResources} from "../hooks/useResources";
import {Spinner} from "../components/spinner/Spinner";


export const Resources = () => {


    const columns = [
        {
            name: 'DOCUMENT NAME',
            selector: row => row['DOCUMENT NAME'],
        },
        {
            name: 'ADDED BY',
            selector: row => row['ADDED BY'],
        },
        {
            name: 'DATE ADDED',
            selector: row => new Date(row['DATE ADDED']).toLocaleDateString(),
        },
        {
            name: 'ACTIONS',
            selector: row => (
                <div className="flex gap-2  text-xs items-center">
                    <NavLink to={`/${row.id}`} className="underline text-blue-500 italic"
                             href="">View</NavLink>
                    <div
                        onClick={() => handleDownloads(row.id)}
                        className="underline text-blue-500 italic">
                        Download
                    </div>
                </div>
            ),
        },
    ];

    const {
        resourcesLoading,
        tableRecords,
        filterByName,
        folders,
        setSearchString,
        searchString,
        handleDownloads
    } = useResources()


    return (
        <IndexLayout>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
                <div className="flex col-span-1">
                    <Folders folders={folders} title="Categories"/>
                </div>
                <div className="col-span-1 lg:col-span-3 w-full flex flex-col gap-6 bg-white p-4">
                    <p className="underline text-2xl text-info">Resources</p>
                    <div className="flex gap-4">
                        <KHInput
                            value={searchString}
                            changeHandler={(evt) => setSearchString(evt.target.value)}
                            placeholder="Search using document name"
                        />
                        <KHButton
                            handler={() => filterByName(searchString)}
                            type="outline">SEARCH</KHButton>
                    </div>
                    <Spinner loading={resourcesLoading}/>
                    <DataTable
                        columns={columns}
                        data={tableRecords}
                        pointerOnHover
                        subHeaderWrap
                        subHeader
                        striped
                        responsive
                        pagination
                        loading={resourcesLoading}
                        customStyles={customStyles}
                    />
                </div>
            </div>
        </IndexLayout>
    )
}