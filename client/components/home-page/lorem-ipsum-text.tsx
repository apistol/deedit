import type { NextPage } from 'next';
import PostareTip from './postare-tip';

const LoremIpsumText: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[22px] pr-5 pl-7 box-border max-w-full text-left text-46xl text-antiquewhite-100 font-inter">
      <div className="w-[1208px] flex flex-col items-start justify-start gap-[47px_0px] max-w-full mq700:gap-[23px_0px]">
        <div className="flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
          <PostareTip />
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/image-7-1@2x.png"
        />
      </div>
    </section>
  );
};

export default LoremIpsumText;
