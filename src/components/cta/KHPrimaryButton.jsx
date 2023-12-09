export const KHPrimaryButton = ({children, handler}) => {
    return (
        <button
            className="bg-info text-sm md:text-base py-1 px-6 md:py-2 rounded-md text-white font-light tracking-wide">
            {children}
        </button>
    )
}