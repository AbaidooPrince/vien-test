
import React from "react";
import { numberWithCommas } from "../helpers/formats";
import RevenueGraph from "./RevenueGraph";
  
const StatCards = (props) => {
    const { percentIncrease, type, color, value, level, data  } = props
    return (
        <div className="border-2 h-[175px] rounded-lg border-gray-100 p-4">
            <div className="flex justify-between">
            <div className="text-[16px] font-medium">
                Sales
            </div>
            <div className="text-vien-gray text-sm">
                Monthly Goal
            </div>
            </div>

            <div className="flex my-3 align-middle justify-between">
            { type === 'sales' && <div className="font-normal md:text-2xl text-4xl lg:text-4xl">
                { value ? value : 0 }%
            </div> }
            { type === 'revenue' && <div className="font-normal mb-3 md:text-2xl text-4xl lg:text-4xl">
                ${ value ? numberWithCommas(value) : 0 }
            </div> }

            { type === 'clients' && <div className="font-normal md:text-2xl text-4xl lg:text-4xl">
                { value ? numberWithCommas(value) : 0 }
            </div> }
            <div className="my-auto">
                <label className={`font-light text-sm ${color}`}>
                    +{ percentIncrease ? percentIncrease : 0 }
                </label>
            </div>
            </div>
            <div className="grid h-3 grid-cols-1 content-between">
                <div className="h-10">
                    {type !== 'revenue' ? <div className="bg-gray-200 w-full rounded-lg h-1">
                        <div className={`bg-vien-primary rounded-lg ${level} h-1`}></div>
                    </div> : 
                <div className="w-full">
                    <RevenueGraph data={data} />
                </div>
                }
                </div>
                { type !== 'revenue' && <div className="text-xs text-vien-gray">
                Yearly Goal
                </div>}
            </div>
        </div>
    )
}

export default StatCards