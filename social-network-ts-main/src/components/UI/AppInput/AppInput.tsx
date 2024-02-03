import { StyledInput } from "./AppInput.style"

interface IAppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string
}

export const AppInput = ({type, placeholder, errorText, ...props}: IAppInputProps) => {
  return (
    <>
      <StyledInput type={type} placeholder={placeholder} {...props} />
      {errorText && <p>{errorText}</p>}
    </>
  )
}