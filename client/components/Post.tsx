import type { NextPage } from 'next';
import UpArrow from './icons/UpArrow';
import DownArrow from './icons/DownArrow';
import ShareIcon from './icons/ShareIcon';
import Bookmark from './icons/Bookmark';
import Coments from './icons/Coments';
import Link from 'next/link';

const Post: NextPage = () => {
  return (
    <Link href="/post" className="no-underline">
      <div className="max-w-[1159px] flex flex-col lg:text-46xl text-20xl text-antiquewhite-100 font-inter mx-6 mb-6">
        <div className="max-w-[1167.3px] flex flex-col items-start justify-start gap-[10px_0px] shrink-0 mb-6">
          <div className="flex flex-row justify-center flex-wrap items-center gap-[0px_9px] max-w-full">
            <h1 className="flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full">
              Am baut la liceu si am vomitat in cancelarie
            </h1>
            <div className="w-[80.3px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-center text-11xl">
              <div className="self-stretch flex flex-col items-start justify-start gap-[22.75px_0px]">
                <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-[22.199999999999815px]">
                  <UpArrow />
                </div>
                <div className="self-stretch h-[45.5px] relative font-extrabold flex items-center justify-center shrink-0 mq950:text-5xl mq450:text-lg">
                  23
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-[22.199999999999815px]">
                  <DownArrow />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1087px] relative text-xl font-medium inline-block shrink-0 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum...
          </div>
        </div>
        <div className="flex flex-row items-end justify-end gap-[0px_14px]">
          <div className="flex items-center justify-center gap-6">
            <ShareIcon />
            <Bookmark />
            <Coments />
            <button className="cursor-pointer [border:none] py-[9px] px-4 bg-antiquewhite-100 rounded-29xl flex flex-row items-start justify-start gap-[0px_4px] whitespace-nowrap hover:bg-antiquewhite-200">
              <img
                className="h-5 w-5 relative hidden"
                alt=""
                src="/number.svg"
              />
              <b className="relative text-xl tracking-[-0.01em] leading-[140%] font-inter text-firebrick text-left">
                zi si tu ceva
              </b>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
