import {FC} from 'react';
import {PrimaryButton} from './PrimaryButton';

export const ScrollToTopButton: FC = () => {

  return (
    <div className="md:hidden w-full flex justify-center mt-20">
      <PrimaryButton onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>To the top</PrimaryButton>
    </div>
  );
};
