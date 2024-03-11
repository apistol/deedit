import type { NextPage } from 'next';
import PostareTip from './postare-tip';

const SecretsTipFrame: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
      <PostareTip />
    </section>
  );
};

export default SecretsTipFrame;
