import Navbar from "@/components/Navbar";
import SideBar from "@/components/Sidebar";

const MainLayout = ({children}:{children:React.ReactNode}) => {
    return (  
        <div>
            <Navbar />
          <div className="flex">
            <div className="hidden md:block bg-secondary w-[20%] ">
              <SideBar />
            </div>

            <div className="p-5 w-full md:max-[1140px]">
              {children}
            </div>
          </div>
        </div>
    );
}
 
export default MainLayout