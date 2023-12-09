export const KHCard = ({children, CardHeader}) => {
    return (
        <div className="flex flex-col p-4">
            <div className="bg-info text-white p-3">
                <CardHeader/>
            </div>
            <div className="flex p-2 md:p-8 bg-white border-2">
                {children}
            </div>
        </div>
    )
}