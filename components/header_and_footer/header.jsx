import React from "react";
import { getNavCategory } from "@/app/api/nav_category/route";
import { Nav_Content } from "./navbar";
import { Logo_Account_Section } from "./logo_account_section";
import { auth } from "@/auth";

const Header = async () => {
  const data = await getNavCategory();
  const session = await auth();

  return (
    <div>
      <Header_CTA />
      <Logo_Account_Section token={session?.user?.token} />
      <Nav_Content nav_category={data?.data} />
    </div>
  );
};

export default Header;

export const Header_CTA = () => {
  return (
    <div className="cta w-full max-md:py-2 md:h-12 bg-gradient-to-r from-gradient_first via-gradient_middle to-gradient_last">
      <div className="container h-full text-white text-sm flex max-md:flex-col  items-center gap-1 md:gap-6 justify-between">
        <p className="font-medium w-full max-md:text-center md:w-1/2 ">
          WELCOME TO HISI COSMO STUDIO
        </p>
        <div className=" w-full md:w-1/2 flex   gap-4 lg:w-1/3 justify-between">
          <span>800-877-4758</span>
          <span>info@gisicosmocom</span>
        </div>
      </div>
    </div>
  );
};
