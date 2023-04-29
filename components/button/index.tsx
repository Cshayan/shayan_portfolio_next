import { StyledButton } from "./styles";

interface IButton {
  buttonText: string;
  onClick: () => void;
}

const Button = ({ buttonText, onClick }: IButton): JSX.Element => {
  return <StyledButton onClick={onClick}>{buttonText}</StyledButton>;
};

export default Button;
