import type { NextPage } from 'next';

const NavigationHome: NextPage = () => {
  return (
    <div className="flex justify-center items-center pt-20">
      <nav className="w-[450px] rounded-61xl bg-gray shadow-[0px_12px_20px_rgba(0,_0,_0,_0.04)] flex justify-between py-[5px] px-1 max-w-[95%] lg:max-w-full text-xl text-black font-inter">
        <button className="cursor-pointer py-[9px] px-4 bg-firebrick rounded-29xl hover:bg-tomato">
          <b className="relative text-xl font-inter text-white">Sex</b>
        </button>
        <div className="py-[9px] px-4 rounded-61xl">
          <b className="">Alcool</b>
        </div>
        <div className="py-[9px] px-4 rounded-61xl">
          <b className="">Droguri</b>
        </div>
        <div className="py-[9px] px-4 rounded-61xl">
          <b className="">Misiune</b>
        </div>
      </nav>
    </div>
  );
};

export default NavigationHome;
