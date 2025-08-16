import {FC} from 'react';
import {Heading1} from '../../elements/Heading1';
import {GiFlyingFlag} from 'react-icons/gi';
import {IoCloudOutline, IoLaptopOutline, IoPhonePortraitOutline} from 'react-icons/io5';
import {PrimaryButton} from '../../elements/PrimaryButton';
import {ScrollToTopButton} from '../../elements/ScrollToTopButton';
import {BlockHeader} from '../../elements/BlockHeader';
import {TagOverviewBlock} from './components/TagOverviewBlock';
import {FaCode, FaUsers} from 'react-icons/fa6';
import {HiOutlineClock} from 'react-icons/hi';
import {model} from '../../../model/model';
import {pdf} from '@react-pdf/renderer';
import {CvPdf} from '../../elements/CvPdf';
import {Tag} from '../../../types/Tag';
import {SecondaryButton} from '../../elements/SecondaryButton';


export const Home: FC = () => {

  const print = async (suffix: string, tags?: Tag[]) => {
    const blob = await pdf(<CvPdf model={model} allowedTags={tags} />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `alex_sarychev_cv_${suffix}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
<div className="flex flex-col w-full justify-start items-start bg-main text-on-main p-5 md:p-20">
  <div className="grid grid-cols-1 lg:grid-cols-12 items-start justify-center gap-10 lg:mt-15 mb-20">
    <div className="lg:col-span-5 h-full flex flex-col justify-center items-center w-full">
      <div className="relative">
        <div
        className={`rounded-full relative z-1 overflow-hidden 
        border-[18px] border-surface border-solid max-w-120 shadow-neutral-900 shadow-lg
        `}>
          <img className="filter-[grayscale(0.3)] bg-size-[100%] scale-120 relative translate-y-[8%]" src="/images/photo-real.jpg"/>
        </div>
        <div
        className={`absolute left-[-7%] bg-size-[18px_18px] w-[45%]
        h-3/6 top-[-4%] z-0 opacity-5 bg-radial from-white from-20%  to-transparent to-20% 
        `}>
        </div>
      </div>
    </div>
    <div className="lg:col-span-7">
      <h2 className="text-on-main-3 text-[16px]">Full-Stack Web Developer</h2>
      <Heading1 className="text-on-main  text-4xl md:text-[48px] font-[600] mb-2">Alex Sarychev</Heading1>
      <p className="text-on-main-2 text-base/relaxed mb-5">
        With over 14 years of experience in web and mobile development, I have consistently
        worked on complex, high-impact projects throughout my career. Passionate about technology,
        I stay up-to-date with industry-leading solutions and best practices in modern software development.
      </p>
      <p className="text-on-main-2  text-base/relaxed mb-5">
        I have strong expertise in multiple programming languages
        and proficient in developing production-grade applications across these technologies.
        My technical knowledge, problem-solving skills, and commitment to high-quality code make me a reliable choice
        for challenging development tasks.
      </p>
      <div className="flex items-center flex-col md:flex-row gap-5">
        <SecondaryButton onClick={() => print('compact', [])}>Compact CV</SecondaryButton>
        <PrimaryButton onClick={() => print('full')}>Full CV</PrimaryButton>
      </div>
    </div>
  </div>

  <div className="mb-10">
    <BlockHeader>What <span className="text-accent">I Do</span></BlockHeader>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 tracking-wide  text-base/relaxed">
      <div>
        <IoCloudOutline className="text-5xl text-accent mb-2" />
        <h4 className="text-lg font-semibold mb-2">Backend</h4>
        {model.profile.skills.backend.map((text) => (
          <p key={text} className="text-on-main-2 mb-2">
            {text}
          </p>
        ))}
      </div>
      <div>
        <IoLaptopOutline className="text-5xl text-accent mb-2" />
        <h4 className="text-lg font-semibold mb-2">Frontend</h4>
        {model.profile.skills.frontend.map((text) => (
          <p key={text} className="text-on-main-2 mb-2">
            {text}
          </p>
        ))}
      </div>
      <div>
        <IoPhonePortraitOutline className="text-5xl text-accent mb-2" />
        <h4 className="text-lg font-semibold mb-2">Mobile</h4>
         {model.profile.skills.mobile.map((text) => (
          <p key={text} className="text-on-main-2 mb-2">
            {text}
          </p>
        ))}
      </div>
      <div>
        <GiFlyingFlag className="text-5xl text-accent mb-2" />
        <h4 className="text-lg font-semibold mb-2">Management</h4>
        {model.profile.skills.management.map((text) => (
          <p key={text} className="text-on-main-2 mb-2">
            {text}
          </p>
        ))}
      </div>
    </div>
  </div>

  <div className="mb-10">
    <BlockHeader>Skills <span className="text-accent">And Tools</span></BlockHeader>
    <TagOverviewBlock onCustomCvClick={(tags) => print('custom', tags)}/>
  </div>

  <div className="w-full mb-10">
    <BlockHeader>Fun <span className="text-accent">Facts</span></BlockHeader>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-center">
      <div className="bg-surface-2 p-10 max-full flex  flex-col items-center border-around-surface-2 border-solid border-2 rounded-xl">
        <HiOutlineClock className="text-4xl text-accent" />
        <h3 className="font-semibold text-base mt-5 mb-5">Total Experience</h3>
        <h4 className="text-on-main-3 text-4xl"> 14 Years</h4>
      </div>
      <div className="bg-surface-2 p-10 max-full flex  flex-col items-center border-around-surface-2 border-solid border-2 rounded-xl">
        <FaCode className="text-4xl text-accent" />
        <h3 className="font-semibold text-base mt-5 mb-5">Languages</h3>
        <h4 className="text-on-main-3 text-4xl">5</h4>
      </div>
      <div className="bg-surface-2 p-10 max-full flex  flex-col items-center border-around-surface-2 border-solid border-2 rounded-xl">
        <FaUsers className="text-4xl text-accent" />
        <h3 className="font-semibold text-base mt-5 mb-5">Biggest Team</h3>
        <h4 className="text-on-main-3 text-4xl">10 Devs</h4>
      </div>
    </div>
  </div>
  <div className="mb-10 w-full">
    <ScrollToTopButton/>
  </div>
</div>
  );
};
