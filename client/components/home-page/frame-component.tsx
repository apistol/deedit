import type { NextPage } from 'next';

const FrameComponent: NextPage = () => {
  return (
    <section className="w-[1408px] flex flex-row items-start justify-center pt-0 px-5 pb-[277px] box-border max-w-full text-left text-208xl text-blanchedalmond font-inter mq950:pb-[180px] mq950:box-border mq450:pb-[117px] mq450:box-border">
      <div className="w-[1126px] flex flex-col items-start justify-start min-h-[557px] max-w-full">
        <div className="w-[933.5px] h-[380.9px] flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[463px] w-[822px] absolute !m-[0] right-[-304.3px] bottom-[-256.6px] object-cover"
            loading="lazy"
            alt=""
            src="/image-7@2x.png"
          />
          <h1 className="m-0 h-[557px] w-[1126px] relative lg:text-inherit tracking-[-0.02em] leading-[90%] font-bold font-inherit inline-block shrink-0 max-w-[121%] z-[1] mq950:text-72xl mq950:leading-[123px] text-38xl mq450:leading-[82px]">
            <p className="m-0">{`povesti&`}</p>
            <p className="m-0 text-lightcoral">secrete</p>
          </h1>
        </div>
        <div className="w-[351px] h-11 flex flex-col items-start justify-start gap-[8px_0px] max-w-full mt-[-93px] text-5xl text-white">
          <b className="w-[234px] relative tracking-[-0.01em] leading-[140%] inline-block mq450:text-lgi mq450:leading-[27px]">
            contribuie anonim
          </b>
          <div className="self-stretch h-[81px] relative shrink-0 flex items-center justify-center">
            <img
              className="self-stretch h-full max-w-full overflow-hidden shrink-0 object-contain absolute left-[3px] top-[0px] w-full [transform:scale(1.016)]"
              alt=""
              src="/contribuie.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
