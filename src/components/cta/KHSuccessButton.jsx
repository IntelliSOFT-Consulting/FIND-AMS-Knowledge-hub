export const KHSuccessButton = ({children, handler}) => {
    return (
        <button
            className="bg-success text-sm md:text-base py-1 px-6 md:py-2 rounded-md text-white font-light tracking-wide">
            {children}
        </button>
    )
}