export const Folders = ({folders, title}) => {
    return (
        <div className="flex flex-col bg-white p-4 gap-8 text-info w-full border-2 rounded-lg shadow-lg">
            <p className="underline text-xl">{title}.</p>
            {folders.map(folder => (
                <div onClick={folder.handler} className={`flex border-2 p-4 rounded-md   gap-2`} key={folder.title}>
                    <p className={`text-xs whitespace-nowrap order-2` }>{folder.title}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="#1d5288"
                         viewBox="0 0 512 512">
                        <path
                            d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/>
                    </svg>
                </div>
            ))}
        </div>
    )
}