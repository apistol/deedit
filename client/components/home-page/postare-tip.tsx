import type { NextPage } from 'next';

const PostareTip: NextPage = () => {
  return (
    <div className="w-[1159px] flex flex-col items-end justify-start pt-0 pb-2.5 pr-4 pl-0 box-border relative max-w-full text-left text-46xl text-antiquewhite-100 font-inter">
      <div className="mr-[-24.300000000000185px] w-[1167.3px] flex flex-col items-start justify-start gap-[40px_0px] max-w-[102%] shrink-0 mq700:gap-[20px_0px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0px_9px] max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[701px] max-w-full mq950:text-33xl mq950:min-w-full mq450:text-20xl">
            Am baut la liceu si am vomitat in cancelarie
          </h1>
          <div className="w-[80.3px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-center text-11xl">
            <div className="self-stretch flex flex-col items-start justify-start gap-[22.75px_0px]">
              <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-[22.199999999999815px]">
                <img
                  className="h-[27.8px] w-[34.6px] relative"
                  loading="lazy"
                  alt=""
                  src="/polygon-1.svg"
                />
              </div>
              <div className="self-stretch h-[45.5px] relative font-extrabold flex items-center justify-center shrink-0 mq950:text-5xl mq450:text-lg">
                23
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-[22.199999999999815px]">
                <img
                  className="h-[27.8px] w-[34.6px] relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/polygon-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1087px] h-[228px] relative text-xl font-medium inline-block shrink-0 max-w-full mq450:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum...
        </div>
      </div>
      <img
        className="w-[36.8px] h-[36.8px] absolute !m-[0] right-[305.2px] bottom-[21.2px] object-contain"
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <div className="flex flex-row items-start justify-start gap-[0px_14px] mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <img
            className="w-[41px] h-[41px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/bookmark.svg"
          />
        </div>
        <img
          className="h-14 w-14 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <button className="cursor-pointer [border:none] py-[9px] px-4 bg-antiquewhite-100 rounded-29xl flex flex-row items-start justify-start gap-[0px_4px] whitespace-nowrap hover:bg-antiquewhite-200">
          <img className="h-5 w-5 relative hidden" alt="" src="/number.svg" />
          <b className="relative text-xl tracking-[-0.01em] leading-[140%] font-inter text-firebrick text-left">
            zi si tu ceva
          </b>
        </button>
      </div>
    </div>
  );
};

export default PostareTip;
