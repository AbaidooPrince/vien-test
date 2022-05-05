import React from "react";
import SideMenu from "../components/SideMenu";

const Dashboard = () => {
    return (
        <div className="mx-auto">
            <div className="grid md:grid-cols-4 gap-4 place-content-center">
                <div className="hidden lg:block">
            <SideMenu />
            </div>
                <div className="lg:col-span-3">dcx</div>
            </div>
        </div>
    )
}

export default Dashboard