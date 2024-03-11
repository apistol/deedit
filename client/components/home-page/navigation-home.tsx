import type { NextPage } from 'next';

const NavigationHome: NextPage = () => {
  return (
    <nav className="m-0 w-[425.8px] rounded-61xl bg-gray shadow-[0px_12px_20px_rgba(0,_0,_0,_0.04)] flex flex-row flex-wrap items-start justify-start py-[5px] px-[1.3999999999996362px] box-border gap-[0px_16px] max-w-full whitespace-nowrap text-left text-xl text-black font-inter">
      <button className="cursor-pointer [border:none] py-[9px] px-4 bg-firebrick rounded-29xl flex flex-row items-start justify-start gap-[0px_4px] hover:bg-tomato">
        <img className="h-5 w-5 relative hidden" alt="" src="/number.svg" />
        <b className="relative text-xl tracking-[-0.01em] leading-[140%] font-inter text-white text-left mq450:text-base mq450:leading-[22px]">
          Sex
        </b>
      </button>
      <div className="rounded-29xl flex flex-row items-start justify-start py-[9px] px-4 gap-[0px_4px]">
        <img className="h-5 w-5 relative hidden" alt="" src="/number.svg" />
        <b className="relative tracking-[-0.01em] leading-[140%] mq450:text-base mq450:leading-[22px]">
          Alcool
        </b>
      </div>
      <div className="flex-1 rounded-29xl flex flex-row items-start justify-start py-[9px] px-4 box-border gap-[0px_4px] min-w-[68px]">
        <img className="h-5 w-5 relative hidden" alt="" src="/number.svg" />
        <b className="relative tracking-[-0.01em] leading-[140%] mq450:text-base mq450:leading-[22px]">
          Droguri
        </b>
      </div>
      <div className="flex-1 rounded-29xl flex flex-row items-start justify-start py-[9px] px-4 box-border gap-[0px_4px] min-w-[71px]">
        <img className="h-5 w-5 relative hidden" alt="" src="/number.svg" />
        <b className="relative tracking-[-0.01em] leading-[140%] mq450:text-base mq450:leading-[22px]">
          Misiune
        </b>
      </div>
    </nav>
  );
};

export default NavigationHome;
