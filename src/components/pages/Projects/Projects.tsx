import {FC} from 'react';
import {PageHeader} from '../../elements/PageHeader';
import {PageContainer} from '../../elements/PageContainer';
import {PrimaryButton} from '../../elements/PrimaryButton';
import {TauroMarketsLogo} from '../../elements/TauroMarketsLogo';
import {DisciplineLogo} from '../../elements/DisciplineLogo';
import {SecondaryButton} from '../../elements/SecondaryButton';

export const Projects: FC = () => {
  return (
    <PageContainer>
      <PageHeader>Projects</PageHeader>
      <div className="w-full">

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
          <div>
            <div className="h-50 lg:h-50 bg-pink-200 w-full rounded-xl overflow-hidden relative">
              <div className='h-full bg-black/50 absolute top-0 left-0 w-full p-5 opacity-0 hover:opacity-100 transition-all duration-700'>
                  <div className='mb-10 text-center'>
                    A production grade stack packed with best in class tools for Typescript.
                    Backend, Frontend, Mobile App, CD/CI
                  </div>
                  <div className='flex gap-5 justify-center'>
                    <a href='https://github.com/Freddis/gym-tracker-web' target='_blank'>
                      <PrimaryButton>Code</PrimaryButton>
                    </a>
                    <a href='http://discipline.alex-sarychev.com' target='_blank'>
                      <SecondaryButton>Demo</SecondaryButton>
                    </a>
                  </div>
              </div>
              <div className='flex items-center justify-center bg-[#171717] h-full'>
                <div className='w-[80%] inline-block'>
                  <DisciplineLogo className='fill-red-500'/>
                </div>
              </div>
            </div>
            <div className="mt-3 font-semibold">Discipline</div>
          </div>
           <div>
            <div className="h-50 lg:h-50 bg-blue-200 w-full rounded-xl overflow-hidden relative">
              <div className='h-full bg-black/50 absolute top-0 left-0 w-full p-5 opacity-0 hover:opacity-100 transition-all duration-700'>
                <div className='mb-10 text-center'>
                  A production grade stack packed with best in class tools for Typescript.
                  Backend, Frontend, Mobile App, CD/CI
                </div>
                <div className='flex gap-5 justify-center'>
                  <a href='https://github.com/Freddis/gym-tracker-web' target='_blank'>
                    <PrimaryButton>Code</PrimaryButton>
                  </a>
                  <a href='http://discipline.alex-sarychev.com' target='_blank'>
                    <SecondaryButton>Demo</SecondaryButton>
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-center bg-green-950 h-full'>
                <div className='w-[80%] inline-block'>
                  <span className='text-2xl font-light'>Strap-On OpenAPI</span>
                </div>
              </div>

            </div>
            <div className="mt-3 font-semibold">Strap-On OpenAPI</div>
          </div>
           <div>
            <div className="h-50 lg:h-50 bg-orange-200 w-full rounded-xl overflow-hidden">
              <div className='flex items-center justify-center bg-white h-full'>
                <div className='w-[80%]'>
                  <TauroMarketsLogo/>
                </div>
              </div>
            </div>
            <div className="mt-3 font-semibold">Tauro Markets</div>
          </div>

        </div>
      </div>
      <div className="md:hidden w-full flex justify-center mt-20">
        <PrimaryButton onClick={() => window.scrollTo(0, 0)}>To the top</PrimaryButton>
      </div>
    </PageContainer>
  );
};

