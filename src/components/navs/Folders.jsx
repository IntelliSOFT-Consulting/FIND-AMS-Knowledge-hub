export const Folders = ({folders, title}) => {
    return (
        <div className="flex flex-col bg-white p-4 gap-8 text-info w-full border-2 rounded-lg shadow-lg">
            <p className="underline text-xl">{title}.</p>
            {folders.map(folder => (
                <div className={`flex border-2 p-4 rounded-md  ${folder.reverseOrder ? 'justify-between': 'gap-2'}`} key={folder.title}>
                    <p className={`text-xs whitespace-nowrap ${folder.reverseOrder? 'order-1': 'order-2'}` }>{folder.title}</p>
                    <div className={`${folder.reverseOrder? 'order-1': ''}`}>{folder.icon}</div>
                </div>
            ))}
        </div>
    )
}