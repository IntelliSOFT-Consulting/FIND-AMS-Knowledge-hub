import {IndexLayout} from "../layouts/IndexLayout.jsx";
import {Folders} from "../components/navs/Folders.jsx";
import DataTable from 'react-data-table-component';
import {KHInput} from "../components/fields/KHInput.jsx";
import {KHOutlineButton} from "../components/cta/KHOutlineButton.jsx";
import {tableData} from "../data/index.js";
import {customStyles} from "../styles/table.js";
import {NavLink} from "react-router-dom";

export const Resources = () => {

    const folders = [
        {
            title: "Add New",
            handler: "",
            reverseOrder: true,
            icon: (<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="#1d5288"
                        viewBox="0 0 512 512">
                <path
                    d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/>
            </svg>),
        },
        {
            title: "Guidelines",
            handler: "",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="#1d5288"
                        viewBox="0 0 512 512">
                <path
                    d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/>
            </svg>),
        },
        {
            title: "Training Material",
            handler: "",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="#1d5288"
                        viewBox="0 0 512 512">
                <path
                    d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/>
            </svg>),
        },
        {
            title: "All Files",
            handler: "",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="#1d5288"
                        viewBox="0 0 512 512">
                <path
                    d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/>
            </svg>),
        },
    ]

    const columns = [
        {
            name: 'DOCUMENT NAME',
            selector: row => row.title,
        },
        {
            name: 'ADDED BY',
            selector: row => row.addedBy,
        },
        {
            name: 'DATE ADDED',
            selector: row => row.createdAt,
        },
        {
            name: 'ACTIONS',
            allowOverflow: true,
            center: true,
            selector: row => (
                <div className="flex gap-2  text-xs items-center">
                    <NavLink to={`/resources/${row.id}`} className="underline text-blue-500 italic"
                             href="">View</NavLink>
                    <a className="underline text-blue-500 italic" href="">Actions</a>
                    <a className="underline text-blue-500 italic" href="">Download</a>
                    <a className="underline text-red-500 italic" href="">Delete</a>
                </div>
            ),
        },
    ];


    return (
        <IndexLayout>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
                <div className="flex col-span-1">
                    <Folders folders={folders} title="Categories"/>
                </div>
                <div className="col-span-1 lg:col-span-3 w-full flex flex-col gap-6 bg-white p-4">
                    <p className="underline text-2xl text-info">Resources</p>
                    <div className="flex gap-4">
                        <KHInput placeholder="Search using document name"/>
                        <KHOutlineButton>SEARCH</KHOutlineButton>
                    </div>
                    <DataTable
                        columns={columns}
                        data={tableData}
                        pointerOnHover
                        subHeaderWrap
                        subHeader
                        striped
                        responsive
                        pagination
                        customStyles={customStyles}
                    />
                </div>
            </div>
        </IndexLayout>
    )
}