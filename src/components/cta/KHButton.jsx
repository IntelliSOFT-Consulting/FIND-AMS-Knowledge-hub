export const KHButton = ({children, type, handler}) => {
    return (
        <button
            onClick={handler}
            className={`${type === 'outline' ? 'bg-smoke text-info' : type === 'primary' ? 'bg-info text-white' : type === 'success' ? 'bg-success text-white' : ''}
             px-6 py-1 md:py-2 rounded-lg text-sm font-normal tracking-wide`}
        >
            {children}
        </button>
    )
}