export const KHCheckbox = ({name, label}) => {
    return (
        <div className="flex gap-4 items-center">
            <input id={name} type="checkbox"/>
            <label
                className="text-info text-sm"
                htmlFor={name}>
                {label}
            </label>
        </div>
    )
}