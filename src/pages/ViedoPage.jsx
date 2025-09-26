import NavBar from "../components/NavBar";
import SildeBar from "../components/SideBar";
import MainContent from "../components/mainContent";


export default function ViedoPage() {
    return (
        <>
            <div className="h-screen w-screen bg-gray-100 flex flex-col">
                <NavBar />
                <div className="flex-1 flex">
                    <SildeBar />
                    <MainContent />

                </div>
            </div>

        </>

    )
}