
import SildeBar from "../components/SideBar";
import MainContent from "../components/mainContent";
import LeftSideBar from "../components/LeftSideBar";

import NavBar from "../components/NavBar";


export default function ViedoPage() {
    return (
        <>
            <div className="h-screen w-screen bg-gray-100 flex flex-col overflow-hidden">
                <NavBar />  
                <div className="flex-1 overflow-hidden grid grid-cols-4">
                    <SildeBar />
                    <div className="col-span-2">
                        <MainContent />
                    </div>
                    <LeftSideBar />
                </div>
            </div>
        </>
    )
}