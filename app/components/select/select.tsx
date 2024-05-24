import { ISelectProps } from "@/app/models/ISelect"

const Select: React.FC<ISelectProps> = ({
    id,
    className,
    value,
    children,
    onChange
}) => {
    return (
        <select
            id={id}
            className={className}
            value={value}
        >
            {children}
        </select>
    )
}

export default Select