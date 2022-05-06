import React from "react";
import DailyProfitCard from "../components/DailyProfitCard";
import OnboardCard from "../components/OnboardCard";
import SideMenu from "../components/SideMenu";
import StatCards from "../components/StatCards";
import TotalSalesCard from "../components/TotalsCard";

const Dashboard = () => {
    const statsCardData = [
        { value: '98.1', percentIncrease: '6.9', type:'sales', color: 'text-vien-primary', level: 'w-6/12'  },
        { value: '13893', percentIncrease: '11.3', type:'revenue', color: 'text-vien-secondary', data: [30, 10, 100, 50, 90, 50, 30]  },
        { value: '1232', percentIncrease: '11.3', type:'clients', color: 'text-vien-primary', level: 'w-8/12'  }
    ]

    const profitData = {
        title: 'Daily Profit',
        data: [7000, 5000, 6000, 8000, 6500, 4000, 5000],
        color: '#FF8433'
    }
    const clientData = {
        title: 'Daily active clients',
        data: [7000, 5000, 6000, 8000, 6500, 4000, 5000],
        color: '#016450'
    }
    return (
        <div className="">
            <div className="md:grid md:grid-cols-1 lg:grid-cols-4 lg:gap-4 place-content-center">
                <div className="hidden lg:block drop-shadow-md shadow-slate-300">
            <SideMenu />
            </div>
                <div className="col-span-3 lg:p-6 bg-vien-white p-4 rounded-lg drop-shadow-md shadow-slate-300 ">

                    <div className="grid grid-col-3 gap-6">
                    {/* stats card  */}
                    <div className="grid md:grid-cols-3 md:gap-6 gap-6">
                        {statsCardData.length && statsCardData.map(item => 
                    
                    <div><StatCards {...item}></StatCards> </div>)  }
                    </div>    

                    {/* totals      */}
                    <div className="grid md:grid-cols-3 md:gap-6 gap-6">
                        <div className="">
                            <TotalSalesCard />
                        </div>
                        <div className="md:col-span-2">
                            <DailyProfitCard {...profitData} />
                        </div>

                    </div>

                    {/* totals */}
                    <div className="grid md:grid-cols-3 md:gap-6 gap-6">
                        <div className="md:col-span-2">
                        <DailyProfitCard {...clientData} />
                        </div>
                        <div className="">
                            <OnboardCard />
                        </div>

                    </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard