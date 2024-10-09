import { ArrowRight } from "lucide-react"
import Link from "next/link"

const MainPageHeaders = ({ main, sub, explLink }) => {
    return <div className="title_section flex justify-between items-center my-3 " >

        <div className="flex flex-col gap-1">
            <span className="font-extrabold text-2xl">{main}</span>
            <span className="text-gray-400">{sub}</span>
        </div>
        <Link href={`/explore}`}><div className="explore flex items-center hover:underline text-primary_blue ">
            <div className="to_explore cursor-pointer font-bold ">Explore More</div>
            <ArrowRight size={20} />
        </div></Link>
    </div>
}

export default MainPageHeaders 