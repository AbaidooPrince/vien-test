import React from "react";
import { numberWithCommas } from "../helpers/formats";
import SalesDougnut from "./CustomDonut"

const OnboardCard = () => {
    const data = {
        usesGoal: 8000,
        onboarded: 2452,
        chart: {
            labels: ['Onboard, Pending'],
            color: '#FACF55',
            data: [2452, 5548]
        }
    }
    return (
        <div className="border-2 h-[275px] rounded-lg border-gray-100">
            <div className="p-4">
                <div className="flex align-middle justify-between">
                    <div className="flex ">
                        <div className="bg-[#FACF55] rounded-md h-10 w-10">
                            <div className="mt-2 mx-2">
                                <box-icon name='user' type='solid' color='#ffffff' ></box-icon>
                            </div>
                        </div>
                        <div className="pl-4">
                            <div className="font-medium">
                                Onboarding Users
                            </div>
                            <div className="text-[12px] text-vien-gray font-light">
                                Q3 Goal: {numberWithCommas(data.usesGoal)} Users
                            </div>
                        </div>
                    </div>
                    <div className="">
                        
                   <div><box-icon color="gray" name='dots-horizontal-rounded' ></box-icon></div> 
                    </div>

                </div>
            </div>
            <hr />
            <div className="p-4">
                <div className="flex align-middle justify-center">
  <div className="lg:basis-1/2 doughnut">
      <SalesDougnut {...data.chart}/>
  </div>
  <div className="lg:basis-1/2 text-right place-self-center">
      <div>
        <div className="text-2xl">{ numberWithCommas(data.onboarded)}</div>
        <small className="text-vien-gray font-light">ONBOARDED</small>
      </div>
      <hr className="my-3" />
  </div>
</div>                
            </div>

        </div>
    )
}

export default OnboardCard