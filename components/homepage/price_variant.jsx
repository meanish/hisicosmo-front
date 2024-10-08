import Link from "next/link";
import React from "react";

const Price_varaint = () => {


  const productsPriceRange = [
    {
      name: "skincare",
      bg: "#B1AFCF",
      ranges: [
        {
          id: 1,
          price: 600,
        },
        {
          id: 2,
          price: 500,
        },
        {
          id: 3,
          price: 400,
        },
      ],
    },
    {
      name: "haircare",
      bg: "#E8f9f9",
      ranges: [
        {
          id: 1,
          price: 300,
        },
        {
          id: 2,
          price: 200,
        },
        {
          id: 3,
          price: 100,
        },
      ],
    },
    {
      name: "makeup",
      bg: "#e7b453",
      ranges: [
        {
          id: 1,
          price: 100,
        },
        {
          id: 2,
          price: 600,
        },
        {
          id: 3,
          price: 300,
        },
      ],
    },
  ];

  return (
    // <div className="container w-full my-20 h-[172.87px] justify-center items-start gap-[15px] flex">
    //   <div className="w-[398.33px] self-stretch flex-col justify-start items-start inline-flex">
    //     <div className="self-stretch h-[52.88px] py-[14.94px] flex-col justify-start items-start flex">
    //       <div className="self-stretch h-[23px] px-[86.53px] flex-col justify-start items-center flex">
    //         <div className="self-stretch text-center text-black text-lg font-normal font-['Inter'] leading-snug">
    //           Get your Skincare Products
    //         </div>
    //       </div>
    //     </div>
    //     <div className="self-stretch justify-start items-start gap-[15.10px] inline-flex">
    //       <div className="w-[120px] h-[120px] pl-[25.23px] pr-[25.24px] py-[26.74px] bg-primary_blue/40 rounded-[60px] shadow flex-col justify-center items-center inline-flex">
    //         <div className="flex-col justify-start items-start flex">
    //           <div className="self-stretch h-[66px] flex-col justify-start items-start gap-[6.24px] flex">
    //             <div className="text-center text-black text-base font-normal font-['Inter']">
    //               Under Rs
    //             </div>
    //             <div className="self-stretch h-[40.76px] px-[1.68px] pb-[0.76px] flex-col justify-start items-center flex">
    //               <div className="self-stretch text-center text-[#171515] text-4xl font-normal font-['Inter'] leading-10">
    //                 600
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[120px] h-[120px] pl-[25.23px] pr-[25.24px] py-[26.74px] bg-primary_blue/40 rounded-[60px] shadow flex-col justify-center items-center inline-flex">
    //         <div className="flex-col justify-start items-start flex">
    //           <div className="self-stretch h-[66px] flex-col justify-start items-start gap-[6.24px] flex">
    //             <div className="text-center text-black text-base font-normal font-['Inter']">
    //               Under Rs
    //             </div>
    //             <div className="self-stretch h-[40.76px] pl-[2.07px] pr-0.5 pb-[0.76px] flex-col justify-start items-center flex">
    //               <div className="self-stretch text-center text-[#171515] text-4xl font-normal font-['Inter'] leading-10">
    //                 500
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[120px] h-[120px] pl-[25.23px] pr-[25.24px] py-[26.74px] bg-primary_blue/40 rounded-[60px] shadow flex-col justify-center items-center inline-flex">
    //         <div className="flex-col justify-start items-start flex">
    //           <div className="self-stretch h-[66px] flex-col justify-start items-start gap-[6.24px] flex">
    //             <div className="text-center text-black text-base font-normal font-['Inter']">
    //               Under Rs
    //             </div>
    //             <div className="self-stretch h-[40.76px] pl-[1.30px] pr-[1.31px] pb-[0.76px] flex-col justify-start items-center flex">
    //               <div className="self-stretch text-center text-[#171515] text-4xl font-normal font-['Inter'] leading-10">
    //                 400
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-[398.33px] self-stretch flex-col justify-start items-start inline-flex">
    //     <div className="self-stretch h-[52.88px] py-[14.94px] flex-col justify-start items-start flex">
    //       <div className="self-stretch h-[23px] px-[86.97px] flex-col justify-start items-center flex">
    //         <div className="self-stretch text-center text-black text-lg font-normal font-['Inter'] leading-snug">
    //           Get your Haircare Products
    //         </div>
    //       </div>
    //     </div>
    //     <div className="self-stretch justify-start items-start gap-[15.10px] inline-flex">
    //       <div className="w-[120px] h-[120px] pl-[25.23px] pr-[25.24px] py-[26.74px] bg-cyan-100 rounded-[60px] shadow flex-col justify-center items-center inline-flex">
    //         <div className="flex-col justify-start items-start flex">
    //           <div className="self-stretch h-[66px] flex-col justify-start items-start gap-[6.24px] flex">
    //             <div className="text-center text-black text-base font-normal font-['Inter']">
    //               Under Rs
    //             </div>
    //             <div className="self-stretch h-[40.76px] pl-[1.88px] pr-[1.87px] pb-[0.76px] flex-col justify-start items-center flex">
    //               <div className="self-stretch text-center text-[#171515] text-4xl font-normal font-['Inter'] leading-10">
    //                 300
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[120px] h-[120px] pl-[25.23px] pr-[25.24px] py-[26.74px] bg-cyan-100 rounded-[60px] shadow flex-col justify-center items-center inline-flex">
    //         <div className="flex-col justify-start items-start flex">
    //           <div className="self-stretch h-[66px] flex-col justify-start items-start gap-[6.24px] flex">
    //             <div className="text-center text-black text-base font-normal font-['Inter']">
    //               Under Rs
    //             </div>
    //             <div className="self-stretch h-[40.76px] px-[2.38px] pb-[0.76px] flex-col justify-start items-center flex">
    //               <div className="self-stretch text-center text-[#171515] text-4xl font-normal font-['Inter'] leading-10">
    //                 200
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[120px] h-[120px] pl-[25.23px] pr-[25.24px] py-[26.74px] bg-cyan-100 rounded-[60px] shadow flex-col justify-center items-center inline-flex">
    //         <div className="flex-col justify-start items-start flex">
    //           <div className="self-stretch h-[66px] flex-col justify-start items-start gap-[6.24px] flex">
    //             <div className="text-center text-black text-base font-normal font-['Inter']">
    //               Under Rs
    //             </div>
    //             <div className="self-stretch h-[40.76px] pl-[4.66px] pr-[4.67px] pb-[0.76px] flex-col justify-start items-center flex">
    //               <div className="self-stretch text-center text-[#171515] text-4xl font-normal font-['Inter'] leading-10">
    //                 100
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-[398.34px] self-stretch flex-col justify-start items-start inline-flex">
    //     <div className="self-stretch h-[52.88px] py-[14.94px] flex-col justify-start items-start flex">
    //       <div className="self-stretch h-[23px] px-[88.92px] flex-col justify-start items-center flex">
    //         <div className="self-stretch text-center text-black text-lg font-normal font-['Inter'] leading-snug">
    //           Get your Makeup Products
    //         </div>
    //       </div>
    //     </div>
    //     <div className="self-stretch justify-start items-start gap-[15.10px] inline-flex">
    //       <div className="w-[120px] h-[120px] pl-[18.42px] pr-[18.44px] py-[26.74px] bg-primary_gold rounded-[60px] shadow flex-col justify-center items-center inline-flex">
    //         <div className="flex-col justify-start items-start flex">
    //           <div className="self-stretch h-[66px] flex-col justify-start items-start gap-[6.24px] flex">
    //             <div className="text-center text-black text-base font-normal font-['Inter']">
    //               Under Rs
    //             </div>
    //             <div className="self-stretch h-[40.76px] pb-[0.76px] flex-col justify-start items-center flex">
    //               <div className="self-stretch text-center text-[#171515] text-[36.81px] font-normal font-['Inter'] leading-10">
    //                 100
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[120px] h-[120px] pl-[25.23px] pr-[25.24px] py-[26.74px] bg-primary_gold rounded-[60px] shadow flex-col justify-center items-center inline-flex">
    //         <div className="flex-col justify-start items-start flex">
    //           <div className="self-stretch h-[66px] flex-col justify-start items-start gap-[6.24px] flex">
    //             <div className="text-center text-black text-base font-normal font-['Inter']">
    //               Under Rs
    //             </div>
    //             <div className="self-stretch h-[40.76px] pl-[1.67px] pr-[1.69px] pb-[0.76px] flex-col justify-start items-center flex">
    //               <div className="self-stretch text-center text-[#171515] text-4xl font-normal font-['Inter'] leading-10">
    //                 600
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[120px] h-[120px] pl-[25.23px] pr-[25.24px] py-[26.74px] bg-primary_gold rounded-[60px] shadow flex-col justify-center items-center inline-flex">
    //         <div className="flex-col justify-start items-start flex">
    //           <div className="self-stretch h-[66px] flex-col justify-start items-start gap-[6.24px] flex">
    //             <div className="text-center text-black text-base font-normal font-['Inter']">
    //               Under Rs
    //             </div>
    //             <div className="self-stretch h-[40.76px] pl-[1.87px] pr-[1.88px] pb-[0.76px] flex-col justify-start items-center flex">
    //               <div className="self-stretch text-center text-[#171515] text-4xl font-normal font-['Inter'] leading-10">
    //                 300
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-gray-50 py-4">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {
            productsPriceRange.map((currCat) => {
              const { name, ranges, bg } = currCat
              return (
                <>
                  <div className="skincare_price  flex flex-col gap-5">
                    <div className="head capitalize text-center">Get your {name} Products</div>
                    <div className="price_range flex justify-around items-center">
                      {
                        ranges.map((currRange, index) => {
                          return <Link href="#">
                            <div className={`rounded-full w-24 h-24 flex justify-center items-center hover:bg-opacity-50 transition-all`}
                              style={{ backgroundColor: bg || 'gray' }}>
                              <div className="text-center">
                                <p className="text-xs">Under Rs</p>
                                <p className="text-2xl font-bold">{currRange.price}</p>
                              </div>
                            </div>
                          </Link>
                        })
                      }

                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Price_varaint;
