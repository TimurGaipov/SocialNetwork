import React from "react" 
import { RegestrationPageWrapper } from "./RegistrationPage.style" 
 
interface ILoginPageWrapperProps { 
    children: React.ReactNode 
} 
export const LoginPageWrapper = ({children}: ILoginPageWrapperProps) => { 
    return ( 
        <RegestrationPageWrapper> 
            {children} 
        </RegestrationPageWrapper> 
    ) 
} 
 
export { RegestrationPageWrapper }