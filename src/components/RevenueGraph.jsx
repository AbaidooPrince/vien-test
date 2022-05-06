import React, { useState } from "react";

const RevenueGraph = (props) => {
    const { data } = props
    const returnHeight = (val) => {
        
        return parseInt(val/10)
    }

    return (
        <div>
            { data && 
            <div className="flex items-stretch gap-3 align-bottom h-10">
                { data.map((data, i) => <div key={i} className={`bg-vien-secondary self-end w-[21px] rounded-t-sm rounded-b-sm h-${returnHeight(data)}`}>

                </div>)}
            </div>
            }

        </div>
    )

}

export default RevenueGraph