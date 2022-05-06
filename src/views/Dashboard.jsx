import React from "react";
import SideMenu from "../components/SideMenu";
import StatCards from "../components/StatCards";
import TotalSalesCard from "../components/TotalSalesCard";

const Dashboard = () => {
    const statsCardData = [
        { value: '98.1', percentIncrease: '6.9', type:'sales', color: 'text-vien-primary', level: 'w-6/12'  },
        { value: '13893', percentIncrease: '11.3', type:'revenue', color: 'text-vien-secondary', data: [20, 40, 100, 30, 60, 60, 30]  },
        { value: '1232', percentIncrease: '11.3', type:'clients', color: 'text-vien-primary', level: 'w-8/12'  }
    ]
    return (
        <div className="">
            <div className="md:grid md:grid-cols-1 lg:grid-cols-4 lg:gap-4 place-content-center">
                <div className="hidden lg:block">
            <SideMenu />
            </div>
                <div className="col-span-3 lg:p-6 bg-vien-white p-4 rounded-lg">

                    <div className="grid grid-rows-3 gap-6">
                    {/* stats card  */}
                    <div className="grid md:grid-cols-3 md:gap-6">
                        {statsCardData.length && statsCardData.map(item => 
                    
                    <div><StatCards {...item}></StatCards> </div>)  }
                    </div>    

                    {/* totals      */}
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <div className="h-12 ">
                            <TotalSalesCard />
                        </div>
                        <div className="bg-orange-400 h-12 lg:col-span-2">

                        </div>

                    </div>

                    {/* totals      */}
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <div className="bg-green-600 h-12">

                        </div>
                        <div className="bg-orange-400 h-12 lg:col-span-2">

                        </div>

                    </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard