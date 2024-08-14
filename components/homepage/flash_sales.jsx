import React from "react";
import product_image from "@/public/images/flash-sales.png";
import express_delivery from "@/public/images/express-delivery.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const Flash_Sales = () => {
  return (
    <div className="h-fit my-20">
      <div className="w-full container flex-col justify-start items-start gap-[4.99px] inline-flex relative">
        <div className=" top-section self-stretch w-full justify-center items-center inline-flex">
          <div className="flex justify-between w-1/2 items-center">
            <h3 className="text-bg_footer text-xl font-bold">Flash Sale</h3>

            <div className="timer-container h-[46.99px] px-1.5 py-px bg-primary_blue rounded-[5px] justify-between items-center inline-flex">
              <div className="justify-between items-center flex">
                <div className="p-2 flex-col justify-start items-start inline-flex">
                  <div className="justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch px-[9px] pt-[4.28px] pb-[5.72px] rounded-[5px] border border-white flex-col justify-start items-start inline-flex">
                      <div className="text-white text-[15px] font-normal font-['Inter'] leading-[18.45px] tracking-tight">
                        0
                      </div>
                    </div>
                    <div className="self-stretch px-[9px] pt-[4.28px] pb-[5.72px] rounded-[5px] border border-white flex-col justify-start items-start inline-flex">
                      <div className="text-white text-[15px] font-normal font-['Inter'] leading-[18.45px] tracking-tight">
                        0
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-white text-[13px] font-normal font-['Inter'] leading-none tracking-tight">
                    Day
                  </div>
                </div>
              </div>
              <div className="justify-between items-center flex">
                <div className="p-2 flex-col justify-start items-start inline-flex">
                  <div className="justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch px-[9px] pt-[4.28px] pb-[5.72px] rounded-[5px] border border-white flex-col justify-start items-start inline-flex">
                      <div className="text-white text-[15px] font-normal font-['Inter'] leading-[18.45px] tracking-tight">
                        0
                      </div>
                    </div>
                    <div className="self-stretch px-[9px] pt-[4.28px] pb-[5.72px] rounded-[5px] border border-white flex-col justify-start items-start inline-flex">
                      <div className="text-white text-[15px] font-normal font-['Inter'] leading-[18.45px] tracking-tight">
                        2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-white text-xs font-normal font-['Inter'] leading-none tracking-tight">
                    Hour
                  </div>
                </div>
              </div>
              <div className="justify-between items-center flex">
                <div className="p-2 flex-col justify-start items-start inline-flex">
                  <div className="justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch px-[9px] pt-[4.28px] pb-[5.72px] rounded-[5px] border border-white flex-col justify-start items-start inline-flex">
                      <div className="text-white text-[15px] font-normal font-['Inter'] leading-[18.45px] tracking-tight">
                        0
                      </div>
                    </div>
                    <div className="self-stretch px-[9px] pt-[4.28px] pb-[5.72px] rounded-[5px] border border-white flex-col justify-start items-start inline-flex">
                      <div className="text-white text-[15px] font-normal font-['Inter'] leading-[18.45px] tracking-tight">
                        1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-white text-xs font-normal font-['Inter'] leading-none tracking-tight">
                    Minute
                  </div>
                </div>
              </div>
              <div className="justify-between items-center flex">
                <div className="p-2 flex-col justify-start items-start inline-flex">
                  <div className="justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch px-[9px] pt-[4.28px] pb-[5.72px] rounded-[5px] border border-white flex-col justify-start items-start inline-flex">
                      <div className="text-white text-[15px] font-normal font-['Inter'] leading-[18.45px] tracking-tight">
                        3
                      </div>
                    </div>
                    <div className="self-stretch px-[9px] pt-[4.28px] pb-[5.72px] rounded-[5px] border border-white flex-col justify-start items-start inline-flex">
                      <div className="text-white text-[15px] font-normal font-['Inter'] leading-[18.45px] tracking-tight">
                        1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-white text-xs font-normal font-['Inter'] leading-none tracking-tight">
                    Second
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href={"#"}
            className="flex w-1/2 gap-2 justify-end items-center"
          >
            <span className="text-bg_footer font-normal">Explore all</span>
            <FaArrowRightLong className="text-bg_footer" />
          </Link>
        </div>

        <div className="cards-container w-full overflow-hidden h-fit justify-start items-start gap-[19px] inline-flex">
          {Array(6)
            .fill(null)
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className="card-container w-[187px] self-stretch pr-[19px] flex-col justify-center items-start inline-flex"
                >
                  <div className="w-[187px] h-[505.89px] relative">
                    <div className="description-container h-[134.10px] pt-[5px] left-0 top-[302px] absolute flex-col justify-start items-start inline-flex">
                      <div className="self-stretch h-[129.10px] flex-col justify-start items-start flex">
                        <div className="self-stretch h-[25.99px] pt-[12.27px] flex-col justify-start items-start flex">
                          <div className="self-stretch h-[13.72px] pb-[0.71px] flex-col justify-start items-start flex">
                            <div className="self-stretch text-[#10087e] text-sm font-normal font-['Inter'] leading-3 tracking-tight">
                              15% off
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-[31px] pt-[7px] flex-col justify-start items-start flex">
                          <div className="self-stretch pt-[0.19px] pb-[0.81px] justify-start items-start gap-1.5 inline-flex">
                            <div className="text-black text-[14.91px] font-normal font-['Inter'] leading-snug">
                              Rs. 1,445
                            </div>
                            <div className="text-black text-[15px] font-normal font-['Inter'] line-through leading-tight">
                              Rs. 2,158
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-[27.13px] pt-2 flex-col justify-start items-start flex">
                          <div className="self-stretch justify-start items-center inline-flex">
                            <div className="w-[26px] pr-1.5 flex-col justify-start items-start inline-flex">
                              <div className="w-5 h-[19.13px] justify-center items-center inline-flex">
                                <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                                  <div className="w-5 h-[19.13px] relative flex-col justify-start items-start flex" />
                                </div>
                              </div>
                            </div>
                            <div className="pb-[0.84px] flex-col justify-start items-start inline-flex">
                              <div className="text-[#10087e] text-[13px] font-normal font-['Inter'] leading-3">
                                More Offer Inside
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-[44.98px] pt-[5.38px] flex-col justify-start items-start flex">
                          <div className="self-stretch h-[39.60px] pr-2.5 pb-[0.61px] flex-col justify-start items-start flex">
                            <div className="self-stretch text-black text-[13px] font-normal font-['Inter'] leading-tight tracking-tight">
                              4 ALZIBA CAFFIEN & KERATIN SHAMPOO 500ML
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" image-container h-[302px] p-[5px] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                      <div className=" image-section self-stretch h-[292px] px-px pt-[46px] pb-4 bg-white rounded-lg border border-[#cccccc] flex-col justify-start items-start flex">
                        <div className="express-logo-image h-[39px] pb-1 flex-col justify-end items-start flex">
                          <Image
                            className="w-[37.22px] h-[35px] relative"
                            src={express_delivery}
                            width={37}
                            height={35}
                            alt="express-delivery-logo-image"
                          />
                        </div>
                        <div className="product-image pr-1 pt-2.5 pb-[14.98px] flex-col justify-start items-center flex">
                          <Image
                            className="w-[175px] h-[175px]"
                            src={product_image}
                            width={175}
                            height={175}
                            alt="product-image"
                          />
                        </div>
                      </div>

                      <div className="ratings absolute bottom-3 left-5 text-sm text-text_gray flex items-center">
                        <span className="flex items-center">
                          5{" "}
                          <FaStar className="text-primary_blue inline-block" />
                        </span>
                        <span>/5</span>
                        <span>(1)</span>
                      </div>
                    </div>

                    <div className="add-to-cart-btn  w-[187px] h-[52px] pt-1.5 left-0 top-[453.90px] absolute flex-col justify-end items-start inline-flex">
                      <div className="self-stretch h-[46px] flex-col justify-start items-start flex">
                        <div className="self-stretch pt-4 justify-between items-center inline-flex">
                          <div className="w-[152px] pl-[38.94px] pr-[38.95px] py-[7px] bg-[#10087e] rounded flex-col justify-start items-center inline-flex">
                            <button className="text-center text-white text-[13px] font-normal font-['Inter']">
                              Add To Cart
                            </button>
                          </div>
                          <div className="w-6 flex-col justify-start items-start inline-flex">
                            <div className="w-[25px] h-[25px] justify-center items-center inline-flex">
                              <div className="grow shrink basis-0 self-stretch py-[0.52px] justify-center items-center inline-flex">
                                <div className="w-[25px] h-6 relative flex-col justify-start items-start flex" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="next-arrow absolute right-20 top-[50%] -translate-y-[50%]  grid place-items-center cursor-pointer h-12 w-12 rounded-full bg-white border shadow">
          <MdArrowForwardIos />
        </div>

        <div className="prev-arrow absolute left-4 top-[50%] -translate-y-[50%]  grid place-items-center cursor-pointer h-12 w-12 rounded-full bg-white border shadow">
          <MdArrowBackIos />
        </div>
      </div>
    </div>
  );
};

export default Flash_Sales;
