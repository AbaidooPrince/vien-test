import React from "react";

const TotalSalesCard = () => {
    return (
        <div className="border-2 h-[175px] rounded-lg border-gray-100">
            <div className="p-4">
                <div className="flex justify-between align-middle">
                    <div className="flex">
                        <div className="bg-vien-primary rounded-sm h-9 w-9">
                            <div className="my-auto mx-auto">
                            <box-icon name="user"></box-icon>
                            </div>
                        </div>
                        <div>
                            <div>
                                Total Sales
                            </div>
                            <div className="text-sm">
                                Slaes
                            </div>
                        </div>
                    </div>
                    <div className="">
                        
                   <div><box-icon name="user"></box-icon></div> 
                    </div>

                </div>
            </div>
            <hr />
            <div>
                
            </div>

        </div>
    )
}

export default TotalSalesCard