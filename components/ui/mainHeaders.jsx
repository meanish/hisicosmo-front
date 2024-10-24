import { ArrowRight } from "lucide-react";
import Link from "next/link";

const MainPageHeaders = ({ main, sub, explLink }) => {
  return (
    <div className="title_section flex gap-2 justify-between items-center my-3 ">
      <div className="flex flex-col gap-1">
        <span className="font-extrabold md:text-2xl text-xl">{main}</span>
        <span className="text-gray-400 text-sm">{sub}</span>
      </div>
      <Link href={`/explore`}>
        <div className="explore flex items-center md:gap-1 hover:underline text-primary_blue ">
          <p className="to_explore cursor-pointer font-bold max-md:hidden">
            Explore More
          </p>
          <p title="Explore More">
            <ArrowRight size={20} />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MainPageHeaders;
