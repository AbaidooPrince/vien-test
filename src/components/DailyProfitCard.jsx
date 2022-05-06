
import React from "react";
import CustomLineChart from "./CustomLineChart";

const DailyProfitCard = (props) => {
    const { title, data, color } = props
    return (
        <div className="border-2 h-[275px] rounded-lg border-gray-100">
            <div className="p-4">
                <div className="flex align-middle justify-between">
                        <div className="">
                            <div className="font-medium">
                                { title ? title : 'Title'}
                            </div>
                        </div>
                    <div className="">
                    <div>
                    <box-icon color="gray" name='dots-horizontal-rounded' ></box-icon>
                    </div> 
                    </div>

                </div>
            </div>
            <hr />
            <div className="p-4">
                <div>
                    <CustomLineChart color={color} data={data} className="w-full"/>
                </div>                
            </div>

        </div>
    )
}

export default DailyProfitCard