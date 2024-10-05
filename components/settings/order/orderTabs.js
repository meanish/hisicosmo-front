

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { TableStructure } from "./tableStructure"

export function OrderTabs({ orders }) {

    console.log("Orders", orders)

    const orderStatus = [
        {
            title: "all"
        },
        {
            title: "pending",
        },
        {
            title: "processing"
        },
        {
            title: "completed"
        },

        {
            title: "failed"
        },
    ]



    const filterPending = orders?.filter((currOrder) => currOrder.status === "pending")
    const filterProcessing = orders?.filter((currOrder) => currOrder.status === "processing")
    const filterCompleted = orders?.filter((currOrder) => currOrder.status === "completed")
    const filterFailed = orders?.filter((currOrder) => currOrder.status === "failed")


    return (
        <Tabs defaultValue="all" className="">
            <TabsList className="grid w-full grid-cols-5">{
                orderStatus.map((currStat, index) => {
                    return <TabsTrigger key={index} value={currStat.title}><span className="capitalize">{currStat.title}</span></TabsTrigger>
                })
            }
            </TabsList>
            <TabsContent value="all">
                <OrderAll orders={orders} />
            </TabsContent>
            <TabsContent value="pending">
                <OrderPending orders={filterPending} />
            </TabsContent>
            <TabsContent value="processing">
                <OrderProcessing orders={filterProcessing} />
            </TabsContent>
            <TabsContent value="completed">
                <OrderCompleted orders={filterCompleted} />
            </TabsContent>
            <TabsContent value="failed">
                <OrderFailed orders={filterFailed} />
            </TabsContent>
        </Tabs>
    )
}


const OrderAll = ({ orders }) => {
    return <TableStructure orders={orders} />
}

const OrderPending = ({ orders }) => {
    return <TableStructure orders={orders} />
}

const OrderProcessing = ({ orders }) => {
    return <TableStructure orders={orders} />
}

const OrderCompleted = ({ orders }) => {
    return <TableStructure orders={orders} />
}

const OrderFailed = ({ orders }) => {
    return <TableStructure orders={orders} />
}
