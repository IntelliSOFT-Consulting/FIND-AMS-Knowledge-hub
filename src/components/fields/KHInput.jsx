export const KHInput = ({type = "text", placeholder}) => {
    return (
        <input
            className="px-2 py-2 rounded-md w-full border-[1px] focus:outline-0 text-info placeholder:text-sm placeholder:text-slate-600"
            type={type}
            placeholder={placeholder}
        />
    )
}