
import React from "react"
import NavBar from "../components/NavBar"
import TextBox from "../components/TextBox"
function HomePage() {
    return (
        <>
            <div className="h-screen w-screen bg-gray-100 flex flex-col">
                <NavBar />
                <div className="flex-1 flex items-center justify-center">
                    {/* text box? */}
                    <TextBox />
                </div>
            </div>
        </>
    )
}

export default HomePage;