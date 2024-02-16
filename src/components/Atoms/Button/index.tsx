
import "./styles.scss";

interface ButtonProps extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>{
    text: string
}

const Button: React.FC<ButtonProps> = ({ text, ...rest }: ButtonProps) => {
    return <button {...rest} className="button">{text}</button>
};

export default Button;