import {FC} from 'react';
import {Heading1} from '../../elements/Heading1';
import {FaClock, FaCode, FaFlag, FaHeartCircleCheck, FaStar} from 'react-icons/fa6';
import {GiFlyingFlag} from 'react-icons/gi';
import {IoCloudOutline, IoCloudSharp, IoCodeSlashOutline, IoLaptopOutline, IoPhonePortraitOutline, IoStorefrontSharp} from 'react-icons/io5';
import {GoPencil} from 'react-icons/go';
import {LiaLaptopSolid} from 'react-icons/lia';


export const Home: FC = () => {
  return (
<div className="flex flex-col w-full justify-start items-start bg-main text-on-main p-5 md:p20">
  <div className="grid grid-cols-1 md:grid-cols-12 items-start justify-center gap-10 md:mt-15 mb-20">
    <div className='md:col-span-5 h-full flex flex-col justify-center items-center relative w-full'>
        <div className='rounded-full relative z-1 overflow-hidden border-[18px] border-surface border-solid max-w-120 shadow-neutral-900 shadow-lg'>
          <img className='filter-[grayscale(0.3)] bg-size-[100%] scale-120 relative translate-y-[8%]' src='/images/photo-real.jpg'/>
        </div>
        <div className='absolute left-[-7%] bg-size-[18px_18px] w-[45%] h-3/6 top-[-4%] z-0 opacity-5  bg-radial from-white from-20%  to-transparent to-20% '>
      </div>
    </div>
    <div className='md:col-span-7'>
      <h2 className='text-on-main-3 text-[16px]'>Full-Stack Web Developer</h2>
      <Heading1 className='text-on-main  text-4xl md:text-[48px] font-[600] mb-2'>Alex Sarychev</Heading1>
      <p className='text-on-main-2 text-[15px]/7 mb-5'>
   With over 14 years of experience in web and mobile development, I have consistently worked on complex, high-impact projects throughout my career. Passionate about technology, I stay up-to-date with industry-leading solutions and best practices in modern software development.
      </p>
            <p className='text-on-main-2 text-[15px]/7 mb-5'>
I have strong expertise in multiple programming languages, including PHP, JavaScript, Typescript, Java, C#, and Swift, and am proficient in developing production-grade applications across these technologies. My technical knowledge, problem-solving skills, and commitment to high-quality code make me a reliable choice for challenging development tasks.
      </p>
      <div className='flex flex-col md:flex-row gap-2'>
        <button className='border-accent border-solid border-2 rounded-full px-6 py-2'>
          Download CV
        </button>
        <button className='border-white border-solid border-2 rounded-full px-6 py-2'>
          Contact
        </button>
      </div>
    </div>
  </div>

  <div className='mb-20'>  
    <div className='z-1 relative overflow-visible mb-10'>
      <div className='absolute top-[-2px] left-[-7px] z-0 w-5 h-5 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50'>
      </div>
      <h3 className='text-xl font-semibold'>What <span className='text-accent'>I Do</span></h3>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 tracking-wide'>
      <div>
        <IoCloudOutline className='text-5xl text-accent mb-2' />
        <h4 className='text-lg font-semibold mb-2'>Backend</h4>
        <p className='text-on-main-2'>
          I design and build robust backend systems that power scalable and high-performance applications. From architecting APIs to optimizing database structures, I ensure reliability, security, and maintainability. My approach focuses on clean, modular code that supports future growth.
        </p>
      </div>
       <div>
        <IoLaptopOutline className='text-5xl text-accent mb-2' />
        <h4 className='text-lg font-semibold mb-2'>Frontend</h4>
        <p className='text-on-main-2'>
          I create engaging, responsive user interfaces that blend performance with usability. By leveraging modern frameworks and best practices, I deliver pixel-perfect designs that work seamlessly across devices. My goal is to provide intuitive, accessible, and fast experiences for all users.
        </p>
      </div>
       <div>
        <IoPhonePortraitOutline  className='text-5xl text-accent mb-2' />
        <h4 className='text-lg font-semibold mb-2'>Mobile</h4>
        <p className='text-on-main-2'>
          I develop high-quality native and cross-platform mobile applications that combine functionality with smooth performance. My work emphasizes efficient architecture, platform-specific optimizations, and a strong user experience, ensuring apps are both stable and delightful to use.
        </p>
      </div>
       <div>
        <GiFlyingFlag className='text-5xl text-accent mb-2' />
        <h4 className='text-lg font-semibold mb-2'>Management</h4>
        <p className='text-on-main-2'>
          I lead teams with a focus on collaboration, efficiency, and delivering results. From project planning to code reviews, I ensure high standards are met while fostering a productive environment. My management style balances technical oversight with empowering team members.
        </p>
      </div>
    </div>
  </div>
  
  <div className='w-full'>
    <div className='z-1 relative overflow-visible mb-10'>
      <div className='absolute top-[-2px] left-[-7px] z-0 w-5 h-5 bg-radial from-accent from-20%  to-transparent to-20% bg-size-[7px_7px] opacity-50'>
      </div>
      <h3 className='text-xl font-semibold'>Fun <span className='text-accent'>Facts</span></h3>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'> 
      <div className='bg-surface-2 p-10 max-full flex  flex-col items-center border-around-surface-2 border-solid border-2 rounded-xl'>
        <FaHeartCircleCheck className='text-4xl text-accent' />
        <h3 className='font-semibold text-base mt-5 mb-5'>Happy Clients</h3>
        <h4 className='text-on-main-3 text-4xl'>532</h4>
      </div>
      <div className='bg-surface-2 p-10 max-full flex  flex-col items-center border-around-surface-2 border-solid border-2 rounded-xl'>
        <FaClock className='text-4xl text-accent' />
        <h3 className='font-semibold text-base mt-5 mb-5'>Working Hours</h3>
        <h4 className='text-on-main-3 text-4xl'>10,234</h4>
      </div>
      <div className='bg-surface-2 p-10 max-full flex  flex-col items-center border-around-surface-2 border-solid border-2 rounded-xl'>
        <FaStar className='text-4xl text-accent' />
        <h3 className='font-semibold text-base mt-5 mb-5'>Awards Won</h3>
        <h4 className='text-on-main-3 text-4xl'>5</h4>
      </div>
    </div>
  </div>

</div>
  );
};
