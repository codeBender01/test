import { TbDotsCircleHorizontal } from "react-icons/tb";
import { IoArrowRedoOutline } from "react-icons/io5";
import { PiBellSimpleBold, PiHeartBold } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillPushpin } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";

import feed1 from "./assets/feed1.png";
import feed2 from "./assets/feed2.png";
import feed3 from "./assets/feed3.png";
import feed4 from "./assets/feed4.png";
import feed5 from "./assets/feed5.png";
import feed6 from "./assets/feed6.png";

import img from "./assets/img.png";

const arr = [feed1, feed2, feed3, feed4, feed5, feed6];

function App() {
  return (
    <main className="w-[100%] min-h-[100vh] bg-black flex justify-center">
      <div className="w-[400px]  h-[850px] max-h-[850px] overflow-hidden">
        <div className="h-[100%] bg-black/10 z-10 relative pt-[50px] backdrop-blur-lg">
          <div className="bg-mainBg w-[100%] h-[100%] rounded-md relative">
            <div className="flex justify-between px-4 pt-[11px]">
              <div className="text-accentBlue font-light text-normalPlus hover:opacity-80 duration-150 cursor-pointer">
                Cancel
              </div>
              <div className="flex flex-col items-center">
                <div className="text-textWhite font-semi ">Bot</div>
                <div className="text-white/60 text-smPlus font-main">bot</div>
              </div>
              <div className="text-accentBlue hover:opacity-80 duration-150 cursor-pointer">
                <TbDotsCircleHorizontal size={28} />
              </div>
            </div>
            <div className="mt-[10px] bg-grayLine h-[0.3px]"></div>
            <div className="w-[100%] flex flex-col items-center pt-4 relative">
              <div className="rounded-round h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="object-cover w-[100%] h-[100%] rounded-round"
                />
              </div>
              <div className="pt-[18.5px] text-white text-md font-semi">
                Dmitriy Mentor
              </div>
              <div className="text-paleGray font-main text-normalMinus">
                @mentor
              </div>
              <div className="text-paleGray absolute right-[22px] top-[27px] cursor-pointer hover:opacity-80 duration-150">
                <IoArrowRedoOutline size={24} />
              </div>
            </div>

            <div className="flex mt-[20px] px-[40px] gap-[24px] justify-center">
              <div className="flex flex-col items-center cursor-pointer">
                <div className="flex items-center text-white text-normal font-bold gap-[6px]">
                  <PiBellSimpleBold color="#9F9F9F" />9 794
                </div>
                <div className="text-paleGray text-[13px] font-main">
                  Subscriptions
                </div>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <div className="flex items-center text-white text-normal font-bold gap-[6px]">
                  <GoPeople color="#9F9F9F" />
                  721,8K
                </div>
                <div className="text-paleGray text-[13px] font-main">
                  Subscribers
                </div>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <div className="flex items-center text-white text-normal font-bold gap-[6px]">
                  <PiHeartBold color="#9F9F9F" />
                  14,4M
                </div>
                <div className="text-paleGray text-[13px] font-main">Likes</div>
              </div>
            </div>
            <div className="flex items-center px-8 mt-[20px] gap-[6px]">
              <button className="bg-lightBlue text-white text-normalMinus font-semi py-[11px] w-[280px] rounded-[8px] cursor-pointer hover:bg-white hover:text-lightBlue duration-150">
                Subscribe
              </button>
              <div className="w-[44px] h-[44px] bg-[#2E2E2E] rounded-[8px] text-white flex items-center justify-center cursor-pointer hover:opacity-80 duration-150">
                <IoIosArrowDown size={20} />
              </div>
            </div>
            <p className="text-paleGray text-[13px] text-center mt-[20px] font-main">
              Where to grow your business as a photographer: <br /> site
              or social media?
            </p>
            <div className="flex flex-wrap gap-[2px] mt-8">
              {arr.map((img, i) => {
                return (
                  <div className="w-[33%] h-[175px] relative">
                    <img
                      src={img}
                      alt=""
                      className={`w-[100%] h-[100%] object-cover ${
                        i === 3 || i === 5 ? "rounded-b-md" : null
                      }`}
                    />
                    <div className="absolute text-white top-2 left-[6px]">
                      <AiFillPushpin size={22} />
                    </div>
                    <div className="absolute text-white bottom-2 left-[6px] flex items-center text-[13px] font-semi gap-1">
                      <MdOutlineRemoveRedEye size={20} />
                      13,5M
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-mainBg w-[100%] h-[56px] absolute bottom-0 rounded-b-md flex justify-between items-center px-[35px]">
              <div className="text-paleGray cursor-pointer hover:opacity-80 duration-150">
                <GoHome size={24} />
              </div>
              <div className="text-paleGray cursor-pointer hover:opacity-80 duration-150">
                <GoSearch size={24} />
              </div>
              <div className="text-paleGray cursor-pointer hover:opacity-80 duration-150">
                <IoAddCircleOutline size={24} />
              </div>
              <div className="text-paleGray cursor-pointer hover:opacity-80 duration-150">
                <BiMessageAltDetail size={24} />
              </div>
              <div className="text-white cursor-pointer hover:opacity-80 duration-150">
                <BsPersonCircle size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
