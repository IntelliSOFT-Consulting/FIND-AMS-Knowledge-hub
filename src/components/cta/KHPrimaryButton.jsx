export const KHPrimaryButton = ({children, handler}) => {
    return (
        <button
            className="bg-info px-6 py-2 rounded-md text-white font-light tracking-wide">
            {children}
        </button>
    )
}