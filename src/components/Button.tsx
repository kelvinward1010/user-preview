interface ButtonProps {
    positionIcon?: "left" | "right";
    icon?: any;
    lable?: string;
    className?: string;
    onClick?: any;
    disabled?: boolean;
}

function Button({
    positionIcon,
    icon,
    lable,
    className,
    onClick,
    disabled,
}: ButtonProps) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${className} px-2 py-1 rounded w-fit border border-teal-500 flex justify-center gap-1`}
        >
            {icon && positionIcon === "left"}
            {lable}
            {icon && positionIcon === "right"}
        </button>
    );
}

export default Button;
