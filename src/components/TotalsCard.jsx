import React from "react";
import { numberWithCommas } from "../helpers/formats";
import CustomDougnut from "./CustomDonut"

const TotalSalesCard = () => {
    const data = {
        invoiced: 2595,
        invoices: 23,
        totalSales: 9032.0,
        chart: {
            labels: ['Invoiced, Invoices'],
            color: '#016450',
            data: [30, 9]
        }

    }
    return (
        <div className="border-2 h-[275px] rounded-lg border-gray-100">
            <div className="p-4">
                <div className="flex align-middle justify-between">
                    <div className="flex ">
                        <div className="bg-vien-primary rounded-md h-10 w-10">
                            <div className="mt-2 mx-2">
                                <box-icon name='credit-card' type='solid' color='#ffffff' ></box-icon>
                            </div>
                        </div>
                        <div className="pl-4">
                            <div className="font-medium">
                                Total Sales
                            </div>
                            <div className="text-[12px] text-green-600 font-light">
                                +${numberWithCommas(data.totalSales)}
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
                        <CustomDougnut {...data.chart} />
                    </div>
                    <div className="lg:basis-1/2 text-right place-self-center">
                        <div>
                            <div className="text-2xl">${numberWithCommas(data.invoiced)}</div>
                            <small className="text-vien-gray font-light">Invoiced</small>
                        </div>
                        <hr className="my-3" />
                        <div className="text-2xl">{numberWithCommas(data.invoices)}</div>
                        <small className="text-vien-gray font-light">Invoices</small>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TotalSalesCard