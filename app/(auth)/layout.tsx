import { ModeToggle } from "@/components/toggler";

const AuthLayout = ({children}:{children:React.ReactNode}) => {
    return (  
        <div className="h-[100vh] flex items-center justify-center relative">
            <div className="absolute top-5 right-0 text-white">
             <ModeToggle />
            </div>
           {children}
        </div>
    );
}
 
export default AuthLayout