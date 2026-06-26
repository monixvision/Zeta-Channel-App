import { Link } from "react-router-dom";

const Btn = ({
    text,
    to,
    variant = "solidgreen",
    font = "sans",
    size = "lg",
    ...props
}) => {
    const baseStyles = 'flex item-center justify-center rounded-full cursor-pointer transition-colors uppercase px-4 py-1';
    /* estilo base de todas las variantes */

    const fontStyle = {
        sans: 'font-sans',
        pixel: 'font-pixel'
    }

    const sizeStyle = {
        lg: 'text-2xl ',
        xs: 'text-base',
    }


    const variantStyles = {
        solidgreen: "bg-green text-black hover:bg-green-hover",
        outlinegreen: ` border-2 border-green text-black hover:border-green-hover`,

        solidwhite: "bg-white text-black hover:bg-pix-light",
        outlinewhite: "border-2 border-white text-black hover:border-pix-light",

        solidblack: "bg-black text-white hover:bg-pix-dark",
        outlineblack: "border-2 border-black text-white hover:border-pix-dark",

        solidgrey: "bg-neutral-400 text-neutral-700",

        solidblue: "bg-blue text-dark hover:bg-hover-blue",
        outlineblue: "border-2 border-neutral-400 text-neutral-700 hover:border-grey",

        solidpink: "bg-pink text-black hover:bg-pink-hover",
        outlinepink: "border-2 border-pink text-black hover:border-pink-hover",
    };

    const btnClass = `${baseStyles} ${fontStyle[font]} ${sizeStyle[size]} ${variantStyles[variant]}`;

    if (to) {
        return (
            <Link to={to} className={btnClass} {...props}>
                {text}
            </Link>
        );
    }

    return (
        <button className={btnClass} {...props}>
            {text}
        </button>
    )

}
export default Btn;