import type { NextPage } from 'next';
import Image from 'next/image';
import Img7 from '../../../client/public/assets/images/image-7.png';

const FrameComponent: NextPage = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center max-w-full text-208xl text-blanchedalmond font-inter overflow-hidden">
      <div className="max-w-[1126px] max-h-[557px] flex items-center justify-center relative">
        <Image
          className="lg:h-[463px] lg:w-[822px] sm:h-[200px] sm:w-[400px] h-[100px] w-[200px] absolute lg:right-[-300.3px]  sm:right-[-124.3px] sm:bottom-[-86.6px] lg:bottom-[-250.6px] object-cover right-[-64.3px] bottom-[-40.6px]"
          loading="lazy"
          alt="sign-woman-man"
          src={Img7}
        />
        <h1 className="m-0 w-full relative lg:text-inherit tracking-[-0.02em] leading-[90%] font-bold sm:text-[150px] text-[75px]">
          <p className="m-0">povesti&</p>
          <p className="m-0 text-lightcoral">secrete</p>
        </h1>
      </div>
    </section>
  );
};

export default FrameComponent;
